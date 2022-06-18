import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Article from '../components/article';
import NavCategory from '../components/nav_categories';

let CategoryNews = () => {
  let params = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false)
  const [PositionScrollNewsCatPage, setPositionScrollNewsCatPage] = useState(0);

  useEffect(() => {
    let GetData = async () => {
      let url = "http://127.0.0.1:5000/news/category/" + params.cat;
      try {
        setLoading(true);
        await fetch(url, { method: "GET" })
          .then(resp => {
            if (resp.ok) return resp.json()
            throw new Error('Something went wrong');
          })
          .then((data) => setNews(data))
          .catch(error => console.log(error))
      } catch {
        console.log("Loading error...");
      } finally {
        setLoading(false);
        setPositionScrollNewsCatPage(localStorage.posNewsCatPage);
        localStorage.posNewsPage = 0;
        localStorage.posVideoPage = 0;
      }
    }
    GetData();
    if ( PositionScrollNewsCatPage !== 0 ) {
      let div = document.querySelector('.main-wrapper');
      div.scrollTop = PositionScrollNewsCatPage;
    }
  }, [params, PositionScrollNewsCatPage]);

  let titlePage = 'Все новости';

  switch (params.cat){
    case 'city':
      titlePage = 'Город';
      break;
    case 'incidents':
      titlePage = 'Проишествия';
      break;
    case 'politics':
      titlePage = 'Политика';
      break;
    case 'style-and-beauty':
      titlePage = 'Стиль и красота';
      break;
    case 'health':
      titlePage = 'Здоровье';
      break;
    case 'culture':
      titlePage = 'Культура';
      break;
    case 'science':
      titlePage = 'Наука';
      break;
    default:
      titlePage = 'Все новости';
  }

  document.title = 'Новости | ' + titlePage;

  return (
    <>
      {loading 
        &&
        <div className='loader'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
            <path fill="#0d6efd" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
              <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.5s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>}
      { news && <NavCategory /> }
      { news && news.map((posts, i) => <Article news={posts} key={i}/>) }
    </>
  );
}

export default CategoryNews;
