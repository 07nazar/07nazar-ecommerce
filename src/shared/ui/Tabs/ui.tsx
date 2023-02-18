import { useSpring, animated } from "@react-spring/web";
import { FC, ReactNode } from "react";

import { colors } from "../../lib";

interface OrientationTabs {
  orientation: "vertical" | "horizontal";
}

interface ITabs extends OrientationTabs {
  children: ReactNode;
  buttons: ReactNode;
  border?: string;
}

interface ITabBtnProps {
  children: ReactNode;
  index: number;
  activeTab: number;
  setActiveTab: (index: number) => void;
  isPill?: boolean;
  outlined?: boolean;
}

export const TabBtn: FC<ITabBtnProps> = ({
  children,
  index,
  activeTab,
  setActiveTab,
  isPill = true,
  outlined = false,
}) => {
  const isActiveTab = activeTab !== null && activeTab === index;

  const animation = useSpring({
    config: {
      duration: 600,
    },
    borderColor: isActiveTab && outlined ? `${colors.blue}` : "#fff",
    backgroundColor: isActiveTab && isPill ? `${colors.lightblue}` : "#fff",
  });

  const nonActiveStylesText = isPill ? "text-gray-dark" : "text-gray-hot";

  const activeStylesText = isPill ? "bg-lightblue text-black" : "text-blue";

  return (
    <>
      <animated.button
        onClick={() => setActiveTab(index)}
        style={animation}
        className={`p-[10px] whitespace-nowrap rounded-md
      ${isActiveTab ? activeStylesText : nonActiveStylesText}
      ${
        isActiveTab && outlined
          ? "border-b-2 border-blue rounded-none z-[3]"
          : ""
      }`}
      >
        {children}
      </animated.button>
      {outlined && (
        <span
          className={
            "absolute left-[-10px] right-[-10px] bottom-[10px] h-[2px] bg-gray-medium z-[2]"
          }
        />
      )}
    </>
  );
};

export const Tabs: FC<ITabs> = ({
  children,
  buttons,
  orientation = "vertical",
  border = "",
}) => (
  <div
    className={`inline-flex p-2.5 ${border} rounded-md ${
      orientation === "horizontal" ? "flex-col" : "flex-row"
    }`}
  >
    <div
      className={`relative flex ${
        orientation === "horizontal" ? "flex-row pb-2.5" : "flex-col pr-2.5"
      }`}
    >
      {buttons}
    </div>
    {children}
  </div>
);
