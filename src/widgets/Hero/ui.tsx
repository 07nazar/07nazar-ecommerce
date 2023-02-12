import { Tab } from "@mui/material";
import { useState, SyntheticEvent } from "react";

import { TabsComponent } from "shared/ui";

import { Offer, modelHero } from "entities/hero";

import styles from "./styles.module.scss";

const TabPanel = ({
  array,
  value,
}: {
  array: modelHero.Iarr[];
  value: number;
}): JSX.Element => <h1>{array[value].text}</h1>;

export const Hero = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: SyntheticEvent, val: number) => {
    setValue(val);
  };

  return (
    <div className={styles.hero}>
      <TabsComponent
        value={value}
        onChange={handleChange}
        orientation="vertical"
        color="black"
      >
        {modelHero.tabsLabels.map((tab) => (
          <Tab label={tab.name} key={tab.name} />
        ))}
      </TabsComponent>
      <TabPanel array={modelHero.tabsLabels} value={value} />

      <div className={styles.offers}>
        <Offer />
        <Offer />
      </div>
    </div>
  );
};
