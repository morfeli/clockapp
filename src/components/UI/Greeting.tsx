import { useState, useEffect } from "react";
import { isMobile as Props } from "../../App";
import { useTimeCtx } from "../utils/useTimeCtx";
import { SunMoonIcon } from "./SunMoonIcon";
import moment from "moment";

export const Greeting = (props: Props) => {
  const [message, setMessage] = useState<string>("");
  const timeCtx = useTimeCtx();

  const geoDataTime = timeCtx.geoData[0]?.timezone.current_time;
  const abbr = timeCtx.geoData[0]?.timezone.abbr;
  const city = timeCtx.geoData[0]?.city;
  const region = timeCtx.geoData[0]?.region_code;
  const country = timeCtx.geoData[0]?.country;

  const timeNow = moment(geoDataTime).format("LT");
  const currentTime = parseInt(moment(geoDataTime).format("HH"));

  useEffect(() => {
    if (currentTime >= 5 && currentTime < 12) {
      setMessage("GOOD MORNING");
    }
    if (currentTime >= 12 && currentTime < 19) {
      setMessage("GOOD AFTERNOON");
    }
    if (currentTime >= 19 && currentTime < 21) {
      setMessage("GOOD EVENING");
    }
    if (currentTime >= 21 || currentTime < 5) {
      setMessage("GOOD NIGHT");
    }
  }, [currentTime]);

  return (
    <div className="flex flex-col items-center pt-24 text-4xl tracking-wide text-center text-white sm:text-4xl md:text-4xl">
      <div className="flex items-center">
        <SunMoonIcon />
        <p className="pl-4">{message}</p>
        {props.isMobile ? null : <p className="">, IT'S CURRENTLY</p>}
      </div>
      <div className="pt-6">
        <p className="text-4xl md:text-8xl">
          {timeNow} <span className="text-base">{abbr}</span>
        </p>

        <p className="pt-6">
          In {city}, {region}, {country}
        </p>
      </div>
    </div>
  );
};
