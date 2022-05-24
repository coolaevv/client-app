import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeftBtn from '../icons/left.svg';
import RightBtn from '../icons/right.svg';

function ViewPost(props){
  const [news, setNews] = useState([]);
  const [size, setSize] = useState(0);

  let navigate = useNavigate();
  const goBack = () => navigate(-1)

  useEffect(() => {
    fetch("http://127.0.0.1:5000/news/" + props.id, {method:"GET"})
      .then(resp => resp.json())
      .then((data) => setNews(data))
  }, []);

  let pictures = [];
  let index = 0;

  if ( news.pictures !== undefined && news.pictures !== '' ) {
    for ( let i = 0; i < news.pictures.length; i++ ) {
      pictures.push(news.pictures[i]);
      index = index + 1;
    }
  }

  
    
  let offset = 0;

  let NextSlider = (e) => {
      let sliderLine = e.target.previousElementSibling;
      let width_slider = sliderLine.offsetWidth;
      offset = offset + size;
      if ( offset >= width_slider ) offset = 0;
      sliderLine.style.width = size * index;
      sliderLine.style.marginLeft = -offset + "px" ;
  }

  let BackSlider = (e) => {
      let sliderLine = e.target.nextElementSibling;
      let width_slider = sliderLine.offsetWidth;
      offset = offset - size;
      if ( offset < 0 ) offset = width_slider - size;
      sliderLine.style.width = size * index;
      sliderLine.style.marginLeft = -offset + "px" ;
  }

    useEffect( () => window.addEventListener("resize", () => setSize(document.querySelector('.slider').clientWidth) ), [])

    useEffect ( () => setSize(document.querySelector('.slider').offsetWidth), []);

    return(
        <>
            <div className="post">
                <div onClick={goBack} className="back-link-page">Назад</div>
                <div className='title'>{news.title}</div>
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

export default ViewPost;