import { useState} from "react";
import "./Display.css";

function Display({title,date,description,imgUrl,images}) {
    const [likeState, setLikeState] = useState(null);
    const [unlikeState, setunLikeState] = useState(null);

    const Click = (input)=>{
        if (input === "like" && (likeState===false || likeState===null)){
            if(unlikeState === true) setunLikeState(false);
            setLikeState(true);
        }else if (input === "unlike" && (unlikeState===false || unlikeState===null)){
            if(likeState === true) setLikeState(false);
            setunLikeState(true);
        }
    }
    return (
        <div className="DisplayBox">
            <div className="DisplayTop">
                <div className="DisplayTitle">
                    <h2>{title}</h2>
                </div>
                
                <div className="DisplayDate">
                    <div>{date}</div>
                </div>
            </div>
            
            <div className="DisplayDescript">
                <p>{description}</p>
            </div>
            
            <img alt="" src={imgUrl} ></img>
            
            <div className="DisplayBot">
                {unlikeState === null || likeState===true? (
                    <>
                    <div className="imgbox" onClick={() => {Click("unlike")}}> 
                        <img className="image" alt={title} src={images[1]}/>
                    </div>
                    </>
                ):(
                    <>
                    <div className="imgbox" onClick={() => {Click("unlike")}}> 
                        <img className="image" alt={title} src={images[3]}/>
                    </div>
                    </>
                )} 

                {likeState === null || unlikeState===true? (
                    <>
                    <div className="imgbox" onClick={() => {Click("like")}}> 
                        <img className="image" alt={title} src={images[0]}/>
                    </div>
                    </>
                ):(
                    <>
                    <div className="imgbox" onClick={() => {Click("like")}}> 
                        <img className="image" alt={title} src={images[2]}/>
                    </div>
                    </>
                )}
            </div>
    
        </div>
    );
}
  
export default Display;