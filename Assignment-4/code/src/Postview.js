import React from 'react';
import './Postview.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Post from './Post';
const Postview=()=> {
  const [posts , setPosts] = useState([]);

  const setPostsAsync = async() =>{
    const response = await fetch("http://localhost:3004/user"),
    data = await response.json();
    setPosts(data);
  };
   
  useEffect(()=>{
    setPostsAsync();
  },[]);

  return (

    <div className="Postview">
      <Header />
      {posts.map((post,index)=>(
        <Post key={index} config={post}/>
        // <Post/>
        //key = used for even listener things , we have to pass something to avoid error 
      ))}   

    </div>
  );
}

export default Postview;