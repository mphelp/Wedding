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
//import Gallery from "https://dev.jspm.io/react-photo-gallery@5.6.0";
//@ts-ignore
//import { default as GPhoto } from 'https://dev.jspm.io/react-google-photo@1.2.0';
//@ts-ignore
//import GooglePhoto = GPhoto.GooglePhoto;
//@ts-ignore
//console.log(Gallery)
//@ts-ignore
//import ImageGallery from "https://dev.jspm.io/react-image-gallery@1.0.9"
//console.log(ImageGallery);

// Story Content
import { years } from '../story.ts'
// Icon Content
import icons from '../public/svg_react/icons.tsx'
// Image Content
import images from '../images.ts'


export const Timeline = () => {
    // Could do stuff here
    return (
        <>
            <VerticalTimelineElement
                key={0}
                date={0}
            >
                    <img src={images[0][0]} className="custom_img"/>
            </VerticalTimelineElement>
        </>
    );
}