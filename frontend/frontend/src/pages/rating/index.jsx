import React from 'react';
import './style.css'
import "../../styles/global.css";
import NavBar from '../../components/navbar';
import Button from '../../components/button';
import StarRating from 'react-rating';
import emptyStar from '../../assets/emptystar.png';
import goldenStar from '../../assets/goldenstar.png';

import './style.css';

const Rating = () => {
  
  return (
    <>
    <NavBar/>
    <div className="congratulation-container">
      
      <div className="congratulation-message">
        <h1>Congratulations!</h1>
        <p>You have reached your destination.</p>
      </div>
      <div className="congratulation-rate">
        <p>We value your feedback! Your opinions matter, and we strive to enhance your experience with each journey. If you've enjoyed a seamless ride or appreciated the service provided by our dedicated drivers, please take a moment to rate your experience.</p>
        <StarRating 
          className="star-rating"
          initialRating={1} 
          emptySymbol={<img src={emptyStar} alt="empty star" />}
          fullSymbol={<img src={goldenStar} alt="golden star" />}
          onChange={(rating) => console.log(rating)}
        />
        <Button text="Rate your experience" />
      </div>
    </div>
    </>
  );
};

export default Rating;
