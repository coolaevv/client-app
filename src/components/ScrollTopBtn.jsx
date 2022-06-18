import React from 'react';

function ScrollTop() {
    window.onload = () => {
        let div = document.querySelector('.main-wrapper');
        div.addEventListener('scroll', () => {
            if (div.scrollTop > 300 || div.scrollTop > 300) {
                document.querySelector('.btn-scroll-up').style = 'opacity: 1';
            } else {
                document.querySelector('.btn-scroll-up').style = 'opacity: 0';
            }
        })
    }
    

    const handlerScrollUp = () => {
        let div = document.querySelector('.main-wrapper');
        div.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            <div className={'btn-scroll-up'} onClick={handlerScrollUp}>
                <div className="up-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default ScrollTop;
