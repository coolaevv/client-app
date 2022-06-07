import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import News from '../pages/news';
import ViewNews from '../pages/view_news';
import Videos from '../pages/videos';
import City from '../pages/city';
import Poster from '../pages/poster';
import ERRORS from '../pages/404_error';

import FA_Module from '../components/fa_module';
import Footer from '../components/footer';
import ScrollTop from '../components/ScrollTopBtn';
import { useState } from 'react';

let Container = () => {
    return (
        <>  
            <ScrollTop/>
            <main>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<News />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/news/:id" element={<ViewNews />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/city" element={<City />} />
                        <Route path="/poster" element={<Poster />} />
                        <Route path="*" element={<ERRORS />} />
                    </Routes>
                </div>
                <div className="not-important-nav">
                    <nav></nav>
                    <FA_Module />
                </div>
            </main>
            <Footer/>
        </>
    );
}
export default Container;
