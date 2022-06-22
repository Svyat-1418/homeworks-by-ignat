import React from 'react'
import {Navigation, Pagination, Parallax} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Title} from "../../../p1-main/m1-ui/u1-app/Title";
import {Subtitle} from "../../../p1-main/m1-ui/u1-app/Subtitle";

import HW7 from '../../h7/HW7';
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";

export function Junior() {
    return (
        <div>
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
                    <Title title={"HW7"}/>
                    <Subtitle subtitle={"SuperSelect & SuperRadio Components"}/>
                    <HW7/>
                </SwiperSlide>

                <SwiperSlide>
                    <Title title={"HW8"}/>
                    <Subtitle subtitle={"SuperSelect & SuperRadio Components"}/>
                    <HW8/>
                </SwiperSlide>

                <SwiperSlide>
                    <Title title={"HW9"}/>
                    <Subtitle subtitle={"Clock"}/>
                    <HW9/>
                </SwiperSlide>

                <SwiperSlide>
                    <Title title={"HW10"}/>
                    <Subtitle subtitle={"Loading"}/>
                    <HW10 />
                </SwiperSlide>

                <SwiperSlide>
                    <Title title={"HW11"}/>
                    <Subtitle subtitle={"SuperRange"}/>
                    <HW11 />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз