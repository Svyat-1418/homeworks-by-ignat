import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'

import {Navigation, Pagination, Parallax} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Title} from "../../../p1-main/m1-ui/u1-app/Title";
import {Subtitle} from "../../../p1-main/m1-ui/u1-app/Subtitle";
import HW6 from "../../h6/HW6";

export function PreJunior() {
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

                <SwiperSlide>
                    <Title title={"HW6"}/>
                    <Subtitle subtitle={"Super EditableSpan"}/>
                    <HW6/>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз