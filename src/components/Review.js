import { useState } from "react";

export default function Review(){
   const [reviews, setReviews]= useState(1281);
   const addOne =() =>{
   setReviews(reviews +1);
   };
      const minusOne =() =>{
      setReviews(reviews -1);
   };
   return(
     <div className = "reviews">
      <h3>Reviews</h3>
       <button className ="Button" onClick ={addOne}>
         <h5>Add</h5>
         </button>
         <button className ="Button" onClick ={minusOne}>
         <h5>Delt</h5>
         </button>
     </div>
   );
   }