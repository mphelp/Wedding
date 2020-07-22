import { React } from "./deps.ts";
import { Vert } from "./deps.ts";
import VerticalTimeline = Vert.VerticalTimeline;
import VerticalTimelineElement = Vert.VerticalTimelineElement

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
const App = () => {
    return <div>
        <h3>Some header 🦕</h3>
        <VerticalTimeline>
            Inside timeline 😲
            <VerticalTimelineElement>
                Inside element 😎
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
}
export default App;