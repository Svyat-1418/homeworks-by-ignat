import React from "react";

export const Title = (props: { title: string }) => {
    return (
        <div className="title" data-swiper-parallax="-300">
            {props.title}
        </div>
    )
}