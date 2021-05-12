import React from 'react';
import { Link } from 'react-router-dom';

const Prescriptions = () => {
    return (
        <div>
            <h2 style={{color: 'rebeccapurple'}}>We working on Prescriptions section.......</h2>
            <Link to="/"> <button className="btn btn-danger">Go Home</button> </Link>
        </div>
    );
};

export default Prescriptions;