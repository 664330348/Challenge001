import axios from "axios";
import { useState, useEffect } from "react";
import Display from "./Display";

import likeInitImg from "./images/likeinit.png";
import unlikeInitImg from "./images/unlikeinit.png";
import likeimg from "./images/like.png";
import unlikeimg from "./images/unlike.png";
const images = [likeInitImg, unlikeInitImg, likeimg, unlikeimg]

function Challenge() {
    const [data, setdata] = useState(null);
    const APIkey = "https://api.nasa.gov/planetary/apod?api_key=oYMhzdbYsnahxrCIkE3Ozzhl9pzB0pErsnGSwBCY";
    
    useEffect(()=>{
        async function fetchData(){
            try{
                const result = await axios.get(APIkey);
                let data_ = {
                    title: result.data.title,
                    date: result.data.date,
                    description: result.data.explanation,
                    imgUrl: result.data.url,
                }
                setdata(data_);
                console.log("111",result);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[])
    

    return (
      <div >
        <h1>Shopify Technical Challenge</h1>

        {data? 
            <div style={{display: "flex", justifyContent:"center"}}>
                <Display 
                    title={data.title}
                    date={data.date}
                    description={data.description}
                    imgUrl={data.imgUrl}
                    images={images}
                />
            </div>   
        :<>Loading</>
        }

      </div>
    );
}
  
export default Challenge;