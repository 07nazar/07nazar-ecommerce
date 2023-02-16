import { animated, useSpring } from "@react-spring/web";
import { FC } from "react";

import { colors } from "shared/lib";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  setIsChecked: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  isChecked,
  setIsChecked,
}) => {
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? `${colors.blue}` : "#fff",
    borderColor: isChecked ? `${colors.blue}` : "#ddd",
  });

  return (
    <label className={"inline-flex items-center "}>
      <input
        className={"sr-only peer"}
        type="checkbox"
        checked={isChecked}
        onChange={setIsChecked}
      />
      <animated.svg
        className={`checkbox peer-focus-visible:ring-1`}
        xmlns="http://www.w3.org/2000/svg"
        style={checkboxAnimationStyle}
        width="13"
        height="9"
        fill="none"
        viewBox="-1 0 15 8"
        aria-hidden="true"
      >
        <animated.path
          fill="#fff"
          d="M4.643 9 0 4.673l1.3-1.211 3.343 3.115L11.7 0 13 1.212 4.643 9Z"
        />
      </animated.svg>
      {label}
    </label>
  );
};
