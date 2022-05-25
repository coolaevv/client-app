import React, { useState, useEffect } from 'react';
import Article from '../components/article';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/news", {method:"GET"})
      .then(resp => resp.json())
      .then((data) => setNews(data))
  }, []);
  
  document.title = 'Новости';

  return (
    <>
      { news.map( (posts, i) => <Article news={posts} key={i} /> ) }
    </>
  );
}

export default News;
