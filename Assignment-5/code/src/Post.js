import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";
// import Header from "./Header";
// layout
const Post = ({ config }) =>{
    return (
    <div className="PostContainer">
        {/* <Header config={config}/> */}
        <PostHeader config={config}/>
        <PostImage config={config}/>
        <PostFooter config={config}/>
    </div>
    );
};
export default Post;