import {FC, useEffect, useState} from 'react';

import {convertTimeDeadline} from '../lib';

interface ITimer {
  deadline: string;
}

export const Timer: FC<ITimer> = ({ deadline }) => {
  const [{ days, hours, min, sec }, setTime] = useState(() =>
    convertTimeDeadline(deadline)
  );

  useEffect(() => {
    const timerId = setInterval(
      () => setTime(convertTimeDeadline(deadline)),
      1000
    );

    return () => clearInterval(timerId);
  }, [days, hours, min, sec]);

  return (
    <div className={'flex gap-1.5 text-white'}>
      <div className={'timerItem'}>
        {days} <span>Days</span>
      </div>
      <div className={'timerItem'}>
        {hours} <span>Hour</span>
      </div>
      <div className={'timerItem'}>
        {min} <span>Min</span>
      </div>
      <div className={'timerItem'}>
        {sec} <span>Sec</span>
      </div>
    </div>
  );
};
