import { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";

import { TbTruckDelivery } from "react-icons/tb";
import { BsBox2 } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";

interface IndicatorProps {
  title: string;
  value: number;
  type: "Delivery" | "Box" | "Location";
  indicator: boolean;
  valueIndicator: number;
}
export const Indicator = ({
  indicator,
  title,
  type,
  value,
  valueIndicator,
}: IndicatorProps) => {
  return (
    <article className="overflow-hidden bg-blue-600 text-white w-[15rem] rounded-xl h-[8rem] px-2 py-2 gap-2 flex flex-col relative">
      <h3>{title}</h3>
      <span className="text-2xl">{value}</span>
      <div>
        <span className="absolute right-4 top-4 text-2xl bg-blue-700 p-2 rounded-full">
          {(type === "Box" && <BsBox2 />) ||
            (type === "Delivery" && <TbTruckDelivery />) ||
            (type === "Location" && <TiLocationOutline />)}
        </span>
      </div>
      <span
        className={`${
          indicator ? "" : "text-red-400"
        } shadow mt-3 bg-blue-700 rounded-full py-[2px] gap-1 w-20 text-sm text-center flex items-center justify-center`}
      >
        {indicator ? <MdArrowOutward /> : <GoArrowDownLeft />}
        {valueIndicator.toFixed(2)}%
      </span>
    </article>
  );
};
