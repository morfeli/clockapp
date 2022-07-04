import moment from "moment";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTimeCtx } from "../utils/useTimeCtx";
import { SingleDetail } from "./SingleDetail";

export const ExpandedDetails = () => {
  const [styleControl, setStyleControl] = useState<boolean>(true);
  const timeCtx = useTimeCtx();
  const timezone = timeCtx.geoData[0]?.timezone.id;
  const now = moment();
  const dayOfTheYear = now.dayOfYear();
  const dayOfTheWeek = now.weekday();
  const weekNumber = now.week();

  useEffect(() => {
    if (timeCtx.timeNow >= 19 || timeCtx.timeNow <= 5) {
      setStyleControl(true);
    } else {
      setStyleControl(false);
    }
  }, [timeCtx.timeNow]);

  const animateVariants = {
    initial: { opacity: 0, y: 100, height: "0px" },
    animate: { opacity: 1, y: 0, height: "200px" },
  };

  return (
    <motion.div
      variants={animateVariants}
      initial="initial"
      animate={timeCtx.active ? "animate" : "initial"}
      transition={{ duration: 0.5 }}
      className={classNames("flex flex-col items-center justify-evenly", {
        "bg-darkBackground": styleControl,
        "bg-lightBackground": !styleControl,
      })}
    >
      <SingleDetail
        title="Current Timezone"
        content={timezone}
        state={styleControl}
      />
      <SingleDetail
        title="Day of the Year"
        content={dayOfTheYear}
        state={styleControl}
      />
      <SingleDetail
        title="Day of the Week"
        content={dayOfTheWeek}
        state={styleControl}
      />
      <SingleDetail
        title="Week Number"
        content={weekNumber}
        state={styleControl}
      />
    </motion.div>
  );
};
