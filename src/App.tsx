import { useState, useEffect } from "react";

import { TimeProvider } from "./components/ContextStore/TimeProvider";
import { WrapperImage } from "./components/WrapperImage/WrapperImage";
import { Quotes } from "./components/UI/Quotes";
import { Greeting } from "./components/UI/Greeting";
import { ExpandedDetails } from "./components/UI/ExpandedDetails";
import { ToggleBtn } from "./components/UI/ToggleBtn";

export interface isMobile {
  innerWidth: number;
  isMobile: boolean;
}

function App() {
  const [innerWidth, setInnerWidth] = useState<number>(0);

  const isMobile = innerWidth <= 767;
  const changeWidth = (): void => setInnerWidth(window.innerWidth);

  useEffect(() => {
    changeWidth();

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [isMobile]);
  return (
    <div>
      <TimeProvider>
        <WrapperImage>
          <Quotes />
          <Greeting innerWidth={innerWidth} isMobile={isMobile} />
          <ToggleBtn />
          <ExpandedDetails />
        </WrapperImage>
      </TimeProvider>
    </div>
  );
}

export default App;
