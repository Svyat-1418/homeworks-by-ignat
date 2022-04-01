import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2'
import HW3 from '../../../p2-homeworks/h3/HW3'

import {Swiper, SwiperSlide} from "swiper/react";

import intro from './intro.mp4'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import {Navigation, Pagination, Parallax} from "swiper";
import HW4 from "../../../p2-homeworks/h4/HW4";
import {Header} from "./Header";
import {Subtitle} from "./Subtitle";
import {Title} from "./Title";

function App() {
    return (
        <div className={s.App}>
            <Header title={"react homeworks"}/>
            <div className={s.intro}>
                <div className={s.introMedia}>
                    <video className={s.introMediaVideo} loop autoPlay muted>
                        <source src={intro} type="video/mp4"/>
                    </video>
                    <div className={s.introContent}>
                        <Swiper
                            speed={600}
                            parallax={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Parallax, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <div
                                slot="container-start"
                                className="parallax-bg"
                                data-swiper-parallax="-23%"
                            >
                            </div>
                            <SwiperSlide>
                                <Title title={"HW1"}/>
                                <Subtitle subtitle={"Chat message"}/>
                                <HW1/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Title title={"HW2"}/>
                                <Subtitle subtitle={"Affairs List"}/>
                                <HW2/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Title title={"HW3"}/>
                                <Subtitle subtitle={"Greeting"}/>
                                <HW3/>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Title title={"HW4"}/>
                                <Subtitle subtitle={"Super Components"}/>
                                <HW4/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/*<HW5/>*/}
        </div>
    )
}

export default App

