import React, { useState, useEffect } from 'react';
import Post from '../components/post';

function News() {
  const [news, setNews] = useState({'id': '', 'title': '', 'desc': '', 'pictures': ''});

  useEffect( () => {
    fetch("http://127.0.0.1:5000/news")
    .then( resp => resp.json() )
    .then( (data) => setNews(data) )
  }, [] );
  
    return (
      <>
        <Post news={news}/>
        <Post news={news}/>
        <Post news={news}/>
        <Post news={news}/>
        <Post news={news}/>
        <Post news={news}/>
        <Post news={news}/>
        <Post news={news}/>
        <Post news={news}/>
        <Post news={news}/>
        <Post news={news}/>
      </>
    );
  }
  
  export default News;
  