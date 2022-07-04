import { useContext } from "react";
import { TimeContext } from "../ContextStore/TimeProvider";

export const RefreshSVG = () => {
  const timeCtx = useContext(TimeContext);

  const fetchQuoteHandler = () => {
    timeCtx.fetchNewQuote?.();
  };
  return (
    <svg
      onClick={fetchQuoteHandler}
      className="absolute bg-white rounded-lg cursor-pointer right-5 lg:right-10"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 50 50"
    >
      <path d="M 20 4 C 15.054545 4 11 8.0545455 11 13 L 11 35.585938 L 5.7070312 30.292969 L 4.2929688 31.707031 L 12 39.414062 L 19.707031 31.707031 L 18.292969 30.292969 L 13 35.585938 L 13 13 C 13 12.759091 13.01313 12.521884 13.037109 12.287109 C 13.396795 8.7654918 16.386364 6 20 6 L 30 6 L 30.5 6 L 30.5 4 L 30 4 L 20 4 z M 38 10.585938 L 30.292969 18.292969 L 31.707031 19.707031 L 37 14.414062 L 37 37 C 37 40.613636 34.234508 43.603205 30.712891 43.962891 C 30.478116 43.98687 30.240909 44 30 44 L 20 44 L 19.5 44 L 19.5 46 L 20 46 L 30 46 C 30.309091 46 30.614657 45.984029 30.916016 45.953125 C 35.436391 45.489569 39 41.636364 39 37 L 39 14.414062 L 44.292969 19.707031 L 45.707031 18.292969 L 38 10.585938 z"></path>
    </svg>
  );
};
