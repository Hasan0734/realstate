import React from 'react';

const SliderItem = ({image}) => {
    return (
        <div style={{height: '370px'}}>
            <img className='img-fluid' style={{height: '100%', width: '100%'}} src={image} alt='images'/>
        </div>
    );
};

export default SliderItem;