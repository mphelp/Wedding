import { React } from "./deps.ts"
import VerticalTimelineElement from "./deep.ts";
import VerticalTimeline from "./deep.ts";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            //button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<React.HTMLButtonElement>, React.HTMLButtonElement>;
            //div: any;
            //h1: any;
            //p: any;
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        }
    }
}
const App = () => {
    return <div>bi</div>
}
export default App;