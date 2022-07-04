import { useState, useEffect } from "react";
import { useTimeCtx } from "../utils/useTimeCtx";
import classNames from "classnames";

type WrapperImageProps = {
  children: React.ReactNode;
};

export const WrapperImage = (props: WrapperImageProps): JSX.Element => {
  const timeCtx = useTimeCtx();
  const time = timeCtx.timeNow;
  const [wrapper, setWrapper] = useState<boolean>();
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const isMobile = innerWidth <= 767;

  const changeWidth = (): void => setInnerWidth(window.innerWidth);

  useEffect(() => {
    if (time >= 19 || time <= 5) {
      setWrapper(false);
    } else {
      setWrapper(true);
    }
  }, [time]);

  useEffect(() => {
    changeWidth();

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [isMobile]);

  const backgroundImg = classNames(
    "h-screen w-full bg-no-repeat bg-cover bg-bottom overflow-hidden"
  );

  if (innerWidth === 0) {
    return <></>;
  } else if (isMobile) {
    return (
      <main
        className={classNames(backgroundImg, {
          "bg-day-time-mobile": wrapper,
          "bg-night-time-mobile": !wrapper,
        })}
      >
        <div className="flex flex-col justify-between h-screen bg-overLay">
          {props.children}
        </div>
      </main>
    );
  } else if (innerWidth >= 768 && innerWidth < 1023) {
    return (
      <main
        className={classNames(backgroundImg, {
          "bg-day-time-tablet": wrapper,
          "bg-night-time-tablet": !wrapper,
        })}
      >
        <div className="flex flex-col justify-between h-full bg-overLay">
          {props.children}
        </div>
      </main>
    );
  } else {
    return (
      <main
        className={classNames(backgroundImg, {
          "bg-day-time-desktop": wrapper,
          "bg-night-time-desktop": !wrapper,
        })}
      >
        <div className="flex flex-col justify-between h-full bg-overLay">
          {props.children}
        </div>
      </main>
    );
  }
};
