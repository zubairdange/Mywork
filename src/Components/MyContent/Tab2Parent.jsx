import React from "react";
import { Row } from "react-bootstrap";
import { CardReducer } from "../Reducer/CardReducer";
import { Tab2 } from "../MyContent/Tab2";
export const Tab2Parent = () => {
  return (
    <div>
      <Row>
        {CardReducer.cardItems.map((item) => {
          return <Tab2 curentItem={item} />;
        })}
      </Row>
    </div>
  );
};
