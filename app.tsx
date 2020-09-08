import { React } from "./deps.ts";
import { Vert } from "./deps.ts";
//import { Icons } from "./deps.ts";
import VerticalTimeline = Vert.VerticalTimeline;
import VerticalTimelineElement = Vert.VerticalTimelineElement;
//import HomeWork = Icons.HomeWork;
//import { HomeWork } from "./deps.ts";
//const HomeWork = Icons.HomeWork
//import "./style.css";
//import { CSS } from "./deps.ts";
//import styles from './style.css';
//console.log(`Styles: ${styles}`)
//declare global {
//    namespace JSX {
//        interface IntrinsicElements {
//          //button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<React.HTMLButtonElement>, React.HTMLButtonElement>;
//          //div: any;
//          //h1: any;
//          //p: any;
//            div:                     React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
//            VerticalTimeline:        any; //React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//            VerticalTimelineElement: any; //React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//            h3:                      any;
//        }
//    }
//}
//console.log(`HomeWork Icon: ${Object.getOwnPropertyNames(HomeWork.default)}`)
//import Sitting1 from './Sitting1.jpg';
//console.log(Sitting1);

const App = () => {
    return <div>
        <h3>Some header 🦕</h3>
        <VerticalTimeline>
            Inside timeline 😲
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - present"
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p> Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2013 - present"
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <img src="/img/EngPic1.jpg" alt="EngagementPic1" width="500px"/>
                <p> Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="6000 - present"
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <img src="/img/EngPic2.jpg" alt="EngagementPic1" width="500px"/>
                <p> Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="6000 - present"
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <img src="/img/EngPic1.jpg" alt="EngagementPic1" width="500px"/>
                <p> Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
}
export default App;