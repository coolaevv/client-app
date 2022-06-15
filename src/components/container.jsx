import React from 'react';
import { Routes, Route } from 'react-router-dom'

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
    return (
        <>  
            <ScrollTop/>
            <main>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<News />} />
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
        </>
    );
}
export default Container;
