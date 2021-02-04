import { React } from '../deps.ts';
import { Vert } from "../deps.ts";
import VerticalTimelineElement = Vert.VerticalTimelineElement;

const TimelineElement = (args: { story:string, title:string, subtitle:string, caption:string }) => {
    return <VerticalTimelineElement
            date={args.story}
            //iconStyle={{ background: 'rgb(10, 150, 243)', color: '#fff' }}
            //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            //contentArrowStyle={{ borderRight: '7px solid  rgb(0, 60, 80)' }}
        >
            {/*
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
                <p>{caption}</p>
            */}
        </VerticalTimelineElement>
}
export default TimelineElement