import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import './app2.css'

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setItems(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='App-main'>
                <body a link='white' vlink="yellow"></body>
                <h2>  Fetching from TheCatApi </h2>
                <ul>
                    {items.map(item => (
                    <li>
                        <Link to={'item/'+item.id}>{item.name}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Home;