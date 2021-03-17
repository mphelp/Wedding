// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
// VERTICAL TIMELINE
import { default as Vert } from "https://dev.jspm.io/react-vertical-timeline-component@2.1.5";
//@ts-ignore
import VerticalTimelineElement = Vert.VerticalTimelineElement;
//@ts-ignore
import VerticalTimeline = Vert.VerticalTimeline;

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
            <VerticalTimeline
                className="vertical-timeline--two-columns"
            >
                { years.map((year, year_i) => (
                    <VerticalTimelineElement
                        key={year_i}
                        date={year}
                        icon={icons[year_i]()}
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff', width: '60' }}
                        layout={'2-columns'}
                    >
                        <img src={images[year_i][0]} className="custom_img"/>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </>
    );
}