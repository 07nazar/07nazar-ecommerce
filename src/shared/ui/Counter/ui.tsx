import { FC, useState } from "react";

export const Counter: FC = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="text-yellow-700 sm:text-red-500">{count}</div>
        <button
          className="button-primary bg-gray-Hot"
          type="button"
          onClick={() => setCount((c) => c + 1)}
        >
          count+
        </button>
      </div>
    </div>
  );
};
