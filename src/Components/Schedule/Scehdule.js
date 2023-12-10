import React from "react";
import ScheduleUpcoming from "./ScheduleUpcoming";
import ScheduleList from "./ScheduleList";
import style from "./ScheduleCart.module.scss";

const Scehdule = () => {
  return (
    <div className={style.schedule__layout}>
      <ScheduleUpcoming />
      <hr></hr>
      <ScheduleList />
    </div>
  );
};

export default Scehdule;
