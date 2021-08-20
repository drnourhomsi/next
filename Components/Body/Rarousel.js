import React, { Component } from 'react';
import Image from 'next/image'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import programPic1 from '../../public/img/programms/framework-1.png'
import programPic2 from '../../public/img/programms/framework-2.png'
import programPic3 from '../../public/img/programms/framework-3.png'
import programPic4 from '../../public/img/programms/framework-4.png'
import programPic5 from '../../public/img/programms/framework-5.png'
import programPic6 from '../../public/img/programms/framework-6.png'


export default function DemoCarousel() {
        return (
            <Carousel>
                <Image src={programPic1} alt="Nour Homsi" width={160} height={57} />
                <Image src={programPic2} alt="Nour Homsi" width={160} height={57} />
                <Image src={programPic3} alt="Nour Homsi" width={160} height={82} />
                <Image src={programPic4} alt="Nour Homsi" width={160} height={82} />
                <Image src={programPic5} alt="Nour Homsi" width={160} height={82} />
                <Image src={programPic6} alt="Nour Homsi" width={160} height={82} />
            </Carousel>
        )
}