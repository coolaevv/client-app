import React, { useState, useEffect } from 'react';
import Video from '../components/video';

function Videos() {
  let [videos, setVideos] = useState([]);
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    let GetVideo = async () => {
      try {
        setLoading(true);
        await fetch("http://127.0.0.1:5000/video", { method: "GET" })
          .then(resp => {
            if (resp.ok) return resp.json()
            throw new Error('Something went wrong');
          })
          .then((data) => setVideos(data))
          .catch(error => console.log(error))
      } catch {
        console.log("Loading error...");
      } finally {
        setLoading(false);
      }
    }
    GetVideo();
  }, []);

  document.title = 'Видео';
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
      { videos && videos.map( (video, i) => <Video video={video} key={i}/>)}
    </>
  );
}

export default Videos;
