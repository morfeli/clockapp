import { motion } from "framer-motion";
import { useContext } from "react";
import { TimeContext } from "../ContextStore/TimeProvider";
import { RefreshSVG } from "./RefreshSVG";

export const Quotes = (): JSX.Element => {
  const timeCtx = useContext(TimeContext);
  const quotesArr = timeCtx.quotes;

  const quotesVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: -100 },
  };

  return (
    <motion.section
      className="flex p-4"
      variants={quotesVariants}
      initial="initial"
      animate={timeCtx.active ? "animate" : "initial"}
      transition={{ duration: 0.5 }}
    >
      {quotesArr &&
        quotesArr.map((item, i) => {
          return (
            <div key={item._id} className="font-bold text-white">
              <p className="pr-10 text-lg md:text-2xl lg:text-3xl">
                {item.content}
              </p>
              <h1 className="pt-2">-{item.author}</h1>
            </div>
          );
        })}
      <RefreshSVG />
    </motion.section>
  );
};
