import React from 'react';
import '../../src/css/card.css'

export default function Card(props) {
    return (
        <div className="card">
            <a href={props.href} target="_blank">
                <img src={props.image} alt="Card image" className="card-img" />
                <div className="card-container">
                    <h4><b>{ props.title }</b></h4>
                    <p>{ props.description }</p>
                </div>
            </a>
        </div>
    );
}