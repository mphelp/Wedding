// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
// VERTICAL TIMELINE
import { default as Vert } from "https://dev.jspm.io/react-vertical-timeline-component@2.6.2";
//@ts-ignore
import VerticalTimelineElement = Vert.VerticalTimelineElement;
//@ts-ignore
import VerticalTimeline = Vert.VerticalTimeline;


// GOOGLE PHOTO GALLERY
//@ts-ignore
import Gallery from "https://dev.jspm.io/react-photo-gallery@8.0.0";
//@ts-ignore
import { default as GPhoto } from 'https://dev.jspm.io/react-google-photo@1.2.0';
//@ts-ignore
import GooglePhoto = GPhoto.GooglePhoto;
//@ts-ignore
import Photo = Gallery.Photo

// Story Content
import { years } from '../story.ts'
// Icon Content
import icons from '../public/svg_react/icons.tsx'
// Image Content
import images from '../images.ts'

let newImages = [
    {
        src: "https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dw5zcgxhc2guy29tozs7ozs%3d",
        width: 500,
        height: 100
    },
    {
        src: "https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dw5zcgxhc2guy29tozs7ozs%3d",
        width: 500,
        height: 100
    }
]

export const Timeline = () => {
    // Could do stuff here
    return (
        <div>
        <Photo photos={newImages} photo={newImages[0]} index={0}/>
        <VerticalTimeline> 
            { years.map((year, year_i) => (
                <VerticalTimelineElement
                    key={year_i}
                    date={year}
                    icon={icons[year_i]()}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff', width: '60' }}
                >
                    Hi
                    <img src="img/OurTimeline/2012/1.jpg" width="100" height="100" />
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
        </div>
    );
}