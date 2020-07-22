import { React } from "./deps.ts";
import { Vert } from "./deps.ts";
import VerticalTimeline = Vert.VerticalTimeline;
import VerticalTimelineElement = Vert.VerticalTimelineElement

declare global {
    namespace JSX {
        interface IntrinsicElements {
            //button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<React.HTMLButtonElement>, React.HTMLButtonElement>;
            //div: any;
            //h1: any;
            //p: any;
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            //VerticalTimeline: any;
        }
    }
}
const App = () => {
    return <div>
            <div>bi</div>
        </div>
}
export default App;