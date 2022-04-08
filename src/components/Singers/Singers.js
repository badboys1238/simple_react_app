import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Singers.css';

const Singers = () => {
    const [singers, setSinger] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect( ()=> {
        fetch('./person.JSON')
        .then(res => res.json())
        .then(data => setSinger(data));
    }, [])

    const handleAddToCart = (singer => {
        const newCart = [...cart, singer];
        setCart(newCart);
    })

    return (
        <div className="container">
            <div className="singer-container">
               {
                   singers.map(singer => <Person 
                    key={singer.name}
                    singer={singer}
                    handleAddToCart={handleAddToCart}
                    ></Person>)
               }
            </div>
            <div className="budget-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Singers;