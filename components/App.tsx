// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
import { Title } from "./Title.tsx";
import { Timeline } from "./Timeline.tsx";

export const App = ({ isServer = false }) => {
  if (isServer) {
    return (<></>);
  }

  return (<>
    <React.Suspense fallback={<p className="app_loading">Loading Timeline...</p>}>
        <Title />
        <p>Main body of app</p>
        <Timeline />
    </React.Suspense>
  </>);
};