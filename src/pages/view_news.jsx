import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Article from '../components/article';

let ViewNews = () => {
    const params = useParams();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        let GetData = async () => {
            try {
                setLoading(true);
                await fetch("http://127.0.0.1:5000/news/" + params.id, { method: "GET" })
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
            }

        }

        GetData();

    }, []);

    document.title = 'Новости';

    return (
        <>
            {loading && <div className='loader'>Загрузка...</div>}
            {news && news.map((posts, i) => <Article news={posts} key={i} />)}
        </>
    );
}

export default ViewNews;
