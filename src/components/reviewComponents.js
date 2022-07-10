import React from 'react';
import ReviewForm from './reviewForm.js'
import StarRating from './starRating.js'
import UserReviews from './userReviews.js'

export default class Navbar extends React.Component {
    render() {
        return( 
        <div className='card'>
            <ReviewForm/>
            <StarRating/>
            <br></br>
            <br></br>
            <br></br>
            <span>
            <UserReviews/>
            </span>
        </div>
        );
    }
}