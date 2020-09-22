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

declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: any;
            p: any;
            br: any;
            a: any;
            h1: any;
            h2: any;
            h3: any;
            h4: any;
            img: any;
        }
    }
}
// GET STORY TEXT
const bytes = await Deno.readFile('./story/2021.txt')
const utf8Decoder = new TextDecoder('utf-8');
const string2021 = utf8Decoder.decode(bytes);

// App Code
const App = () => {
    // Story Paragraphs
    /*
    useEffect(() => {

    })*/
    return <div>
        <h3>Some header 🦕</h3>
        <VerticalTimeline>
            Inside timeline 😲
            {/* SKIPPING COMPONENTS <TimelineElement story={data} title='' subtitle='' caption=''/>*/}
            {/*<VerticalTimelineElement
                date={story2021}
            >
                Story 2021
            </VerticalTimelineElement>
                    */
             }



            {/*
            <VerticalTimelineElement
                date="2011 - present
                line2..."
                iconStyle={{ background: 'rgb(10, 150, 243)', color: '#fff' }}
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 60, 80)' }}
                position='left'
                dateClassName='fun'
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p> Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="2013 - present"
                iconStyle={{ background: 'rgb(80, 150, 243)', color: '#fff' }}
                position='left'
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <img src="/img/EngPic1.jpg" alt="EngagementPic1" width="500px"/>
                <p> Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="6000 - present"
                iconStyle={{ background: 'rgb(120, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <img src="/img/EngPic2.jpg" alt="EngagementPic1" width="500px"/>
                <p> Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="6000 - present"
                iconStyle={{ background: 'rgb(200, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <img src="/img/EngPic1.jpg" alt="EngagementPic1" width="500px"/>
                <p> Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            */}
        </VerticalTimeline>
    </div>
}
export default App;
