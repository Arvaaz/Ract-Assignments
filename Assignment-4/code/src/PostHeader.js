const PostHeader = ({ config }) =>{
    console.log(config)
    return (
    <div className="PostHeader">
        <div className="PostTitleWrapper">
            <div className="PostTitle">{config.name || ""}</div>
            {/* <span className="PostAction">{"..."}</span> */}
            <div className="PostDescription">{config.location || ""}</div>
        </div>
        {/* <div> */}
        <div className="PostAction">{"..."}</div>
        {/* </div> */}
        
    </div>
    );
}
export default PostHeader;
// checks it is undefine or something if it is undefined then shows empty string 