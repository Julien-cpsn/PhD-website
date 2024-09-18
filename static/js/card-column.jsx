import React from 'react';
import '../../src/css/card-column.css'

export default function CardColumn(props) {
    return (
        <div className="card-column">
            <h2>{ props.title }</h2>
            <div className="card-column-container">
                { props.children }
            </div>
        </div>
    );
}