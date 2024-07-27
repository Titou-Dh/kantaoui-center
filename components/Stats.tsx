import React from "react";
import { CircularProgress } from "@nextui-org/progress";

const Stats = ({ style }: { style: string }) => {
  return (
    <CircularProgress
      classNames={{
        svg: "w-28 h-28 drop-shadow-md",
        indicator: "stroke-primary",
        track: "stroke-white/10",
        value: "text-lg font-semibold text-primary",
      }}
      value={100}
      strokeWidth={4}
      formatOptions={{ style : style, unit : "kilometer" }}
      showValueLabel={true}
    />
  );
};

export default Stats;
