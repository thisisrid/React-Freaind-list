import React from 'react';
import './Friends.css';


const Friends = (props) => {
    // const friends = props.fr;
    const {name, email, gender, income, phone, image}= props.fr;
    const salary = income*1.5;
    return (
        <div className="friend">
            <h3>Name: {name}</h3>
            <img src={image} alt="IMG"/>
            <h4>Gender: {gender}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Monthly Salary: ${salary}</h4>
            <button onClick={()=>props.addToCart(salary)}>Add Friend</button>
        </div>
    );
};

export default Friends;