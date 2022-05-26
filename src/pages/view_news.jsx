import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/article';

function ViewNews() {
  const { id } = useParams();
  const [post, setPost] = useState({'id':'','title':'', 'desc':'', 'full':'', 'pictures':[], 'pubdate':'', 'views':''});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/news/" + id, {method:"GET"})
      .then(resp => resp.json())
      .then((data) => setPost(data))
  }, []);

  document.title = post.title;

  return (
    <>
      <Post news={post} />
    </>
  );
}

export default ViewNews;
