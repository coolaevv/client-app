import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import News from '../pages/news';
import VievNews from '../pages/SeparateView/view_news';
import CategoryNews from '../pages/category';
import Videos from '../pages/videos';
import ViewVideo from '../pages/SeparateView/view_video';
import City from '../pages/city';
import Poster from '../pages/poster';
import ERRORS from '../pages/404_error';

import FAModule from '../components/fa_module';
import Footer from '../components/footer';
import ScrollTop from '../components/ScrollTopBtn';

let Container = () => {

    useEffect(() => {

        let categories = ['city', 'incidents', 'politics', 'style-and-beauty', 'health', 'culture', 'science'];
        let catsOpt = (name) => {
            for (let i = 0; i < categories.length; i++) {
                if (name === categories[i]) return true;
                else return false;
            }
        }

        let div = document.querySelector('.main-wrapper');
        div.addEventListener("scroll", () => {
            let path_name = document.location.pathname;
            path_name = path_name.split('/');
            
            if ( path_name[1] === 'news' && path_name[2] === undefined ) {
                if (div.scrollTop !== 0) localStorage.posNewsPage = div.scrollTop;
            } 
            if ( path_name[1] === 'video' && path_name[2] === undefined ) {
                if (div.scrollTop !== 0) localStorage.posVideoPage = div.scrollTop;
            }
            if ( catsOpt(path_name[3]) ) {
                if (div.scrollTop !== 0) localStorage.posNewsCatPage = div.scrollTop;
            }
        });
    }, [])

    return (
        <>  
            <ScrollTop/>
            <div className="main-wrapper">
                 <main>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Navigate to="/news" replace />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/news/:id" element={<VievNews />} />
                            <Route path="/news/category/:cat" element={<CategoryNews />} />
                            <Route path="/video" element={<Videos />} />
                            <Route path="/video/:id" element={<ViewVideo />} />
                            <Route path="/city" element={<City />} />
                            <Route path="/poster" element={<Poster />} />
                            <Route path="*" element={<ERRORS />} />
                        </Routes>
                    </div>
                    <div className="not-important-nav">
                        <nav></nav>
                        <FAModule />
                    </div>
                </main>
                <Footer/>
            </div>
            
        </>
    );
}
export default Container;
