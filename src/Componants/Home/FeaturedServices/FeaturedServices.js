import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedServices = () => {
    return (
        <section style={{height:'700px'}} className="mt-5 pt-5">
            <div className="row d-flex ml-4">
                <div className="col-md-5 mb-4">
                    <img style={{width:'fit-content', height:'500px'}} className="img-fluid" src={featured} alt=""/>
                </div>
                <div className="col-md-6 mt-4 pt-5">
                    <h2>Exceptional Dental <br/>Care, on Your Terms</h2>
                    <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, id sunt consectetur iusto quod nam quos animi, recusandae doloribus eius officia. Fuga molestiae consectetur cumque non itaque quis ipsam obcaecati esse deserunt, optio rerum animi voluptate a sint, modi numquam minus, unde sed? Modi tenetur cum voluptatum optio ex at?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis iure quia distinctio laudantium ad facere, officiis reprehenderit tenetur obcaecati a ipsam, quis deleniti minus iusto. Saepe, delectus nesciunt deserunt blanditiis eaque, dolorem, nobis odio veniam soluta quod harum ullam?
                    </p>
                    <button className="btn btn-primary mt-3">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;