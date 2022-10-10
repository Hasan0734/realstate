import React from 'react';
import WorkCard from './WorkCard';

const cardData = [
    {
        id: 1,
        title: "Owners: Add your property details or make an enquiry",
        description: "Our relationship manager will contact you to verify your details and visit your property if you are interested to avail our services."
    },
    {
        id: 2,
        title: "Tenants: Make an enquiry by submiting your details",
        description: "Our relationship manager will contact you to know your requirements and will start showing you properties if you are interested to avail our services."
    },
    {
        id: 3,
        title: "Payment option: No Advance Payment",
        description: "We do not charge anything in advance to our customers, once you are happy with your search and decide to rent out any property showed by us you will make a payment before we make a rent agreement and hand over keys to you."
    },

]


const PlansWork = () => {
    return (
        <>
            {cardData.map(data => <WorkCard key={data.id} data={data}/>)}
        </>
    );
};

export default PlansWork;