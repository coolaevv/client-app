import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import BackBTN from '../components/backBtn';

function Video({ video }) {
    let [playVideo, setPlayVideo] = useState(false);

    let Play = () => {
        setPlayVideo( !playVideo ? true : false )
    }

    return (
        <>  { video.type === 'view_video' &&
                <BackBTN href='/video'/>
            }
            <div className="video" id={video.id} key={video.id}>
                {video.type === 'video' && <Link to={"/video/" + video.id} className="title-link">{video.title}</Link>}
                {video.type === 'view_video' && <h5>{video.title}</h5>}
                <div className="video-preview">
                    {video.type === 'video' &&
                        <Link to={"/video/" + video.id}>
                            <img src={video.preview} alt="" />
                            <div className="play-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg>
                            </div>
                        </Link>
                    }

                { video.type === 'view_video' &&
                    <div className="videPlayer">
                        <ReactPlayer 
                            url={video.src} 
                            playing={playVideo}
                            controls={false}
                            width="100%"
                            height="auto"
                        />
                        <div className="play-pause-btn" onClick={Play}>
                            { !playVideo 
                            ?   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
                                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                                </svg>
                             :  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pause" viewBox="0 0 16 16">
                                    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                                </svg> 
                           }
                        </div>
                    </div>
                }

                </div>
                <div className="post-options" style={{ marginTop: '10px' }}>
                    <div className="views opt">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        <span>{video.pubdate}</span>
                    </div>
                    <div className="views opt">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                        <span>{video.views}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Video;
