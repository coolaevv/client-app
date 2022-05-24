import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeftBtn from '../icons/left.svg';
import RightBtn from '../icons/right.svg';

function Post(props){
    const {news} = props
    const [size, setSize] = useState(898);

    let pictures = [];
    let index = 0;
    for ( let i = 0; i < news.pictures.length; i++ ) {
        pictures.push(news.pictures[i]);
        index = index + 1;
    }

    let offset = 0;

    let NextSlider = (e) => {
        let sliderLine = e.target.previousElementSibling;
        let width_slider = sliderLine.offsetWidth;
        offset = offset + size;
        if ( offset >= width_slider ) offset = 0;
        sliderLine.style.width = size * index;
        sliderLine.style.marginLeft = -offset + "px" ;

        console.log(offset)
    }

    let BackSlider = (e) => {
        let sliderLine = e.target.nextElementSibling;
        let width_slider = sliderLine.offsetWidth;
        offset = offset - size;
        if ( offset < 0 ) offset = width_slider - size;
        sliderLine.style.width = size * index;
        sliderLine.style.marginLeft = -offset + "px" ;
    }

    useEffect( () => {
        window.addEventListener("resize", () => {
            setSize(document.querySelector('.slider').clientWidth);
        });
    }, [])

    return(
        <>
            <div className="post" key={news.id}>
                <Link to={ '/news/' + news.id } className='title'>{news.title}</Link>
                <div className='slider'>

                    <div className="back-btn" onClick={BackSlider}><img src={LeftBtn} alt="" /></div>
                    <div className="slider-line" style={{width: size * index}}>
                    { pictures.map( (img, i) => 
                        <div className="attachment-picture" style={{width: size}}><img src={img} alt='' key={i} /></div>
                    ) }
                    </div>
                    <div className="next-btn" onClick={NextSlider}><img src={RightBtn} alt="" /></div>

                </div>
                
                <p>{news.desc}</p>
            </div>
        </>
    )
}

export default Post;