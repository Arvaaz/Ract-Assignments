const Header = ({config}) =>{
    return (
        <div className="Header">

            {/* <div className="outer">
                <div className="inner">
                    <div className="in-inner">.</div>
                </div>
            </div> */}
            
            <span className="InstaClone">{"Instaclone"}</span>

            <span className="cameraIcon">
                <img src="./cameraIcon.png"/>
            </span>
            
        </div>
    );
}
export default Header