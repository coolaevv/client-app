import { Routes, Route, Link } from 'react-router-dom'

import News from '../pages/news';
import Videos from '../pages/videos';
import City from '../pages/city';
import Poster from '../pages/poster';

function Container() {
    return (
        <>
            <main>
            <div className="content">
                <Routes>
                    <Route path="/" element={ <News/> } />
                    <Route path="/news" element={ <News/> } />
                    <Route path="/videos" element={ <Videos/> } />
                    <Route path="/city" element={ <City/> } />
                    <Route path="/poster" element={ <Poster/> } />
                </Routes>
            </div>
            <div className="not-important-nav">

            </div>
        </main>
        
        </>
    );
  }
  
  export default Container;
  