import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Video from '../../components/video';

let ViewVideo = () => {
    const params = useParams();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let GetData = async () => {
            let url = "http://127.0.0.1:5000/video/" + params.id;
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
            }

        }
        GetData();
    }, [params]);
    
    if ( news ) news.map((item) => document.title = item.title )

    return (
        <>
            {loading
                &&
                <div className='loader'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <path fill="#0d6efd" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
                            <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.5s" repeatCount="indefinite" />
                        </path>
                    </svg>
                </div>}
            {news && news.map((posts, i) => <Video video={posts} key={i} />)}
        </>
    )
}

export default ViewVideo;