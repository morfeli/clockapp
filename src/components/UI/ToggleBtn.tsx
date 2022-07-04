import { useTimeCtx } from "../utils/useTimeCtx";

import { IconArrowSVG } from "./IconArrow";

export const ToggleBtn = () => {
  const timeCtx = useTimeCtx();
  const active = timeCtx.active;

  const showExpandedDetails = () => {
    timeCtx.toggleActive?.();
  };

  return (
    <button
      onClick={showExpandedDetails}
      className="flex items-center self-end w-24 h-12 mr-8 text-sm font-bold text-black bg-white rounded-full justify-evenly"
    >
      {active ? <p className="w-10">LESS</p> : <p className="w-10">MORE</p>}{" "}
      <IconArrowSVG />
    </button>
  );
};
