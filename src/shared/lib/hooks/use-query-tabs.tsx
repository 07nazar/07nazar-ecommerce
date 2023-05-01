import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

type QueryTabsProps = {
  buttonText: string;
};

export const useQueryTabs = (data: QueryTabsProps[]) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<number>(
    Number(new URLSearchParams(location.search).get('tab')) || 0
  );

  useEffect(() => {
    const tabParam = new URLSearchParams(location.search).get('tab');
    const tabParamIndex = data.findIndex(
      detail => detail.buttonText.toLowerCase() === tabParam
    );
    if (tabParamIndex !== -1) {
      setActiveTab(tabParamIndex);
    }
  }, [data, location.search]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    navigate(`?tab=${data[index].buttonText.toLowerCase()}`, {
      replace: true,
    });
  };

  return { activeTab, handleTabClick };
};
