import { useContext } from "react";
import { TimeContext } from "../ContextStore/TimeProvider";

export const useTimeCtx = () => {
  const timeCtx = useContext(TimeContext);

  return timeCtx;
};
