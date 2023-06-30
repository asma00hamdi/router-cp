import React from "react";
import { useParams} from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';


function Trailer ({movies}) {
const params = useParams();
console.log(params);
const ele= movies.filter((el)=> el.name===params.name)[0]
    console.log(ele)


return(
   
   <div>
     <img src={ele.poster} alt="error"/>
     <h1>{ele.name}</h1>
     <p>{ele.description}</p>
     <StarRatingComponent className="star"
       name={"rate"} 
       value={ele.rate} 
       starCount={5}   
    />
    </div>
    );
}

export default Trailer ;