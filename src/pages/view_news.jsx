import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ViewPost from '../components/view_article';

let ViewNews = () => {
  const { id } = useParams();
  const [post, setPost] = useState({'id':'','title':'', 'desc':'', 'full':'', 'pictures':[], 'pubdate':'', 'views':''});

  useEffect(() => {

    let GetData = async () => {
      await fetch("http://127.0.0.1:5000/news/" + id, {method:"GET"})
      .then(resp => { 
        if ( resp.ok ) return resp.json()
        throw new Error('Something went wrong');
      })
      .then((data) => setPost(data))
    }

    GetData();
    
  }, []);

  document.title = post.title;

  return (
    <>
      <ViewPost news={post} key={id}/>
    </>
  );
}

export default ViewNews;
