// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
import { default as Vert } from "https://dev.jspm.io/react-vertical-timeline-component@2.6.2";
//@ts-ignore
import VerticalTimelineElement = Vert.VerticalTimelineElement;
//@ts-ignore
import VerticalTimeline = Vert.VerticalTimeline;

// Story Content
import { y2011 } from '../story.ts'

export const Timeline = () => {
    // Could do stuff here
    return (
        <VerticalTimeline> 
            {/* 2011 */}
            <VerticalTimelineElement
                date={y2011}
                icon={
                    <img src="https://img.icons8.com/material-sharp/24/000000/2010.png"/> 
                }
            >
                Pictures here
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}