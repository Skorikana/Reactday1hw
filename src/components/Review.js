import { useState } from "react";

const Review=() =>{
   const [reviews, setReviews] = useState(1281);
   const addOne =() =>{
   setReviews(reviews +1);
   };
      const minusOne = () =>{
      setReviews(reviews - 1);
   };
   return(
     <div className = "reviews">
       <h3>Reviews</h3> 
       <p>{reviews}</p>
       <button className ="Button" onClick ={addOne}>
         <h4>Positive</h4>
         </button>
         <button className ="Button" onClick ={minusOne}>
         <h4>Negative</h4>
         </button>
     </div>
   );
   }
   export default Review;