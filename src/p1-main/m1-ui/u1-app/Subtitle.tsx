import React from "react";

export const Subtitle = (props: { subtitle: string }) => {
    return (
        <div className="subtitle" data-swiper-parallax="-300">
            {props.subtitle}
        </div>
    )
}