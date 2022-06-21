import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BackBTN from '../components/backBtn';

let Article = ({ news }) => {
    
    let categories = {
        'city': 'Город',
        'incidents': 'Проишествия',
        'politics': 'Политика',
        'business': 'Бизнес',
        'style-and-beauty': 'Стиль и красота',
        'health': 'Здоровье',
        'culture': 'Культура',
        'science': 'Наука',
    }
    return (
        <>
            { news.type === 'error' &&
                <div className='print-error'>
                    <h5>Возникла ошибка</h5>
                    <p>{news.TextError}</p>
                </div>
            }

            { news.type === 'advertising' &&
                <div className='post-advertising'>
                    <p className='advertising-name'>Рекламная запись</p>
                    <a href={news.id} target='_blank' rel='noreferrer' className='advertising-link'>Перейти на сайт</a>
                    <div className="attachments-ad">
                        <Carousel interval={null} fade={true}>
                            { news.pictures.map((href, i) =>
                                <Carousel.Item key={i}>
                                    <img className="d-block w-100" src={href} alt={news.title} title={news.title} />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </div>
                    <p className='ad-desc'>{news.desc}</p>
                </div>
                
            }

            { (news.type === 'post' || news.type === 'view_post') &&
                <div className='carousel-post' key={news.id}>
                    {news.type === 'view_post' && <BackBTN href={'/news'} />}
                    { news.type === 'post' && <Link to={'/news/' + news.id} className='news-link'>{news.title}</Link> }
                    { news.type === 'view_post' && <h5>{news.title}</h5> }
                    { news.type === 'post' &&
                        <div className="PreviewAlbum">
                            <img src={news.pictures[0]} alt="" />
                        </div>
                    }
                    { news.type === 'view_post' &&
                        <Carousel interval={null} fade={true}>
                            { news.pictures.map((href, i) =>
                                <Carousel.Item key={i}>
                                    <img className="d-block w-100" src={href} alt={news.title} title={news.title} />
                                </Carousel.Item>
                            )}
                        </Carousel>
                    }
                    { news.type === 'post' && <p className='desc'>{news.desc}</p> }
                    { news.type === 'view_post' && <p className='desc'>{news.full}</p> }
                    <div className="post-options">
                        <div className='wrapper-options'>
                            <div className="pubdate opt">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                                <span>{news.pubdate}</span>
                            </div>
                            <Popup trigger={
                                <div className="share-btn">
                                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M0 0h24v24H0z"></path>
                                            <path d="M12 3.73c-1.12.07-2 1-2 2.14v2.12h-.02a9.9 9.9 0 0 0-7.83 10.72.9.9 0 0 0 1.61.46l.19-.24a9.08 9.08 0 0 1 5.84-3.26l.2-.03.01 2.5a2.15 2.15 0 0 0 3.48 1.69l7.82-6.14a2.15 2.15 0 0 0 0-3.38l-7.82-6.13c-.38-.3-.85-.46-1.33-.46zm.15 1.79c.08 0 .15.03.22.07l7.82 6.14a.35.35 0 0 1 0 .55l-7.82 6.13a.35.35 0 0 1-.57-.28V14.7a.9.9 0 0 0-.92-.9h-.23l-.34.02c-2.28.14-4.4.98-6.12 2.36l-.17.15.02-.14a8.1 8.1 0 0 1 6.97-6.53.9.9 0 0 0 .79-.9V5.87c0-.2.16-.35.35-.35z" fill="currentColor" fillRule="nonzero">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            } position="right center">
                                <div>
                                    VK Twitter Telegram
                                </div>
                            </Popup>
                            <span><Link to={'/news/category/' + news.category}>#{categories[news.category]}</Link></span>
                        </div>
                        <div className="views opt">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                            <span>{news.views}</span>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Article;