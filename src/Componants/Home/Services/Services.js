import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import teath from '../../../images/teath.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        img:fluoride
    },
    {
        name: 'Cavity Filling',
        img:cavity
    },
    {
        name: 'Teath Whitening',
        img:teath
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2 className="">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;