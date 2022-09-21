import React, { useState, useEffect} from "react";
import "./reviews.css";

function Reviews (props){
    const [reviews, setReviews] = useState([]);
    function addComment(){
      const comment = document.getElementById("comment-box")
      console.log(comment.value)
      setReviews(reviews => [...reviews,{comment:comment.value}])
      console.log(reviews)
    }
    useEffect(() => {
    },[reviews]);
    // const {name, price, image} = this.props;

    return (
      <div className="reviews">
    <form>
    <input id="comment-box" placeholder="add your comment here" required></input>
      <input type="button" onClick={addComment} value="Submit"></input>
      </form>
      <p><h1>Reviews</h1>
      <div className="review-comments">
      {reviews && reviews.map((review,i) => {
        return(
          <p>{review.comment}</p>
        )
      
      })}
      </div>
      </p>
      </div>
    );
}

export default Reviews;
