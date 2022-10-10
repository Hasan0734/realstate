import React from 'react';

const RatingStar = ({rating}) => {
  var rows = [];
    for (var i = 1; i <= 6; i++) {
        if (i !== rating && i < rating && i + 1 > rating) {

            rows.push(<i key={i} className="star-rating-icon fi-star-half active" />);
        }else{
            if (i  <= rating) {
                console.log(i)
                rows.push(<i key={i} className="star-rating-icon fi-star-filled active" />);
            }
        }
       
        
    }
    return <>{rows}</>;
};

export default RatingStar;