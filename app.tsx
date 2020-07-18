import { React } from "./deps.ts"
declare global {
    namespace JSX {
        interface IntrinsicElements {
            button: any;
            div: any;
            h1: any;
            p: any;
        }
    }
}
const App = () => {
    return <div>bi</div>
}
export default App;