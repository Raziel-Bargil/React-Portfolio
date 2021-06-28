import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="/images/img-10.jpg"
                        text="Explore Industrial Design projects"
                        label='Industrial Design'
                        path='/services'
                        />
                            <CardItem 
                        src="/images/img-11.jpg"
                        text="Explore Graphic Design projects"
                        label='Graphic Design'
                        path='/services'
                        />
                                 <CardItem 
                        src="/images/img-12.jpg"
                        text="Explore Websites projects"
                        label='Web'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
