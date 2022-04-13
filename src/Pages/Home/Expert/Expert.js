import React from 'react';

const Expert = (props) => {
    const { name, img } = props.expert;
    return (
        <div className='col-sm-12 g-5 col-md-6 col-lg-4'>
            <div className="card" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Expert;