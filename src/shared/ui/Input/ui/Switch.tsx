import { animated, useSpring } from "@react-spring/web";
import { FC, ReactNode } from "react";

import { colors } from "shared/lib";

interface CheckboxProps {
  children: ReactNode;
  isChecked?: boolean;
  onChange: () => void;
  radio?: boolean;
  value?: string;
}

export const ToggleSwitch: FC<CheckboxProps> = ({
  children,
  isChecked,
  onChange,
}) => {
  const { transform, fill } = useSpring({
    transform: isChecked ? "translateX(19px)" : "translateX(0px)",
    fill: isChecked ? `${colors.blue}` : "#BDBDBD",
  });

  return (
    <label className={"inline-flex items-center select-none cursor-pointer"}>
      <input
        className={"sr-only peer"}
        type={"checkbox"}
        checked={isChecked}
        onChange={onChange}
      />
      <animated.svg
        width="48"
        height="25"
        viewBox="0 0 48 25"
        fill="none"
        className={"mr-3"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="48" height="25" rx="12.5" style={{ fill }} />
        <animated.path
          d="M4.5 12.5C4.5 6.97715 8.97715 2.5 14.5 2.5C20.0228 2.5 24.5 6.97715 24.5 12.5C24.5 18.0228 20.0228 22.5 14.5 22.5C8.97715 22.5 4.5 18.0228 4.5 12.5Z"
          fill="white"
          style={{ transform }}
        />
      </animated.svg>
      {children}
    </label>
  );
};
