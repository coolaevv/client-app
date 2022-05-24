import React, { useState, useEffect } from 'react';
import Post from '../components/post';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/news", {method:"GET"})
      .then(resp => resp.json())
      .then((data) => setNews(data))
  }, []);

  return (
    <>
      { news.map( (posts, i) => <Post news={posts} id={i} key={i} /> ) }
    </>
  );
}

export default News;
