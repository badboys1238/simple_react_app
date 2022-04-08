import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Person.css';

const Person = (props) => {
    const {img, name, country, age, gender, salary} = props.singer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="person">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="person-name">Name: {name}</h4>
                <p>Country: {country}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Salary: {salary}</p>
                <button onClick={() => props.handleAddToCart(props.singer)} className="btn-regular">{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Person;