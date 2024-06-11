import React, { useEffect, useState } from 'react';
import ImgStyle from '../../styles/img.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import donggeul from '../../image/donggeul.jpg';
import ppaekkom from '../../image/ppaekkom.jpg';
import snowdog from '../../image/snowdog.jpg';
import sleepingdog from '../../image/sleepingdog.jpg';
import jang2 from '../../image/jang2.jpg';
import nyung1 from '../../image/nyung1.jpg';
import nyung2 from '../../image/nyung2.jpg';
import nyung3 from '../../image/nyung3.jpg';
import nyung4 from '../../image/nyung4.jpg';
import goguma from '../../image/goguma.jpg';

//필요한 이미지
const images = [
    nyung1,
    nyung2,
    nyung3,
    nyung4,
    goguma,
    donggeul,
    ppaekkom,
    snowdog,
    sleepingdog,
    jang2
];

const NextArrow = ({ onClick }) => {
    return (
        <div
            className="slick-next"
            onClick={onClick}
        >
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="slick-prev"
            onClick={onClick}
        >
        </div>
    );
};

const settings = {
    dots: true,          // 캐러셀 밑에 ... 을 표시할지
    infinite: true,      // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 500,         // 속도
    autoplay: true,      // 자동 재생
    autoplaySpeed: 3000, // 자동 재생 속도
    slidesToShow: 1,     // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1,   // 한 번에 넘어가는 슬라이드 개수
    nextArrow: <NextArrow />, // 화살표 버튼을 커스텀해서 사용
    prevArrow: <PrevArrow />,
}

const AutoSlideImgComp = () => {

    return (
        <>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className={ImgStyle.imageTool}>
                        <img className={ImgStyle.image} src={image} alt={`slide-${index}`} />
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default AutoSlideImgComp;