import React from 'react'
import {Navigation, Pagination, Parallax} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Title} from "../../../p1-main/m1-ui/u1-app/Title";
import {Subtitle} from "../../../p1-main/m1-ui/u1-app/Subtitle";

import {HW13} from "../../h12/h13/HW13";



export function JuniorPlus() {
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
                    <Title title={"HW13"}/>
                    <Subtitle subtitle={"Request"}/>
                    <HW13/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

