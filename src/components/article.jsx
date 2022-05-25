import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

function Article(props) {

    const { news } = props;

    console.log(news.pictures)

    return (
        <div className='carousel-post'>
            <Link to={'/news/' + news.id} className='news-link'>{news.title}</Link>
            <Carousel interval={null} fade={true}>
                {news.pictures.map( (href, i) =>  
                    <Carousel.Item>
                        <img className="d-block w-100" src={href} alt={news.title} title={news.title} />
                    </Carousel.Item>
                )}
            </Carousel>
            <p>{news.desc}</p>
        </div>
        
    )
}

export default Article;