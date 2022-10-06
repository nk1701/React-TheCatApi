import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import './app2.css'

const Item = () => {
    const {id} = useParams();       
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);
    
    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setItem(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    if (item) {
        return (
            <div className="App-redirect-page">
                    <h2>More info about Cats</h2>
                    <p><b>Name</b>: {item.name}</p>
                    <p><b>Temperament</b>: {item.temperament}</p>
                    <p><b>Life span</b>: {item.life_span}</p>
                    <p><b>Origin</b>: {item.origin}</p>
                    <p><b>Adaptability</b> <small>(min. 1, max. 5)</small>: {item.adaptability}</p>
                    <p><b>Affection level</b> <small>(min. 1, max. 5)</small>: {item.affection_level}</p>
                    <p><b>Grooming</b> <small>(min. 1, max. 5)</small>: {item.grooming}</p>
                    <p><b>Health issues</b> <small>(min. 1, max. 5)</small>: {item.health_issues}</p>
                    <p><b>Intelligence</b> <small>(min. 1, max. 5)</small>: {item.intelligence}</p>
                    <p><b>Rare</b> <small>(min. 0, max. 1)</small>: {item.rare}</p>
                    <p><b>Stranger friendly</b> <small>(min. 1, max. 5)</small>: {item.stranger_friendly}</p>  
                    <p><b>Child friendly</b> <small>(min. 1, max. 5)</small>: {item.child_friendly}</p>                  
            </div>
        );
    }
}

export default Item;
