import React from "react";
import style from "./ScheduleUpcoming.module.scss";
const ScheduleUpcoming = () => {
  return (
    <div className={style.upcoming}>
      <p>UPCOMING SCHEDULE</p>
      <div className={style.upcoming__btn_box}>
        <button className={`${style.upcoming__btn} ${style.active}`}>
          All
        </button>
        <button className={style.upcoming__btn}>Classes</button>
        <button className={style.upcoming__btn}>Meetings</button>
        <button className={style.upcoming__btn}>Events</button>
      </div>
      <strong>...</strong>
    </div>
  );
};

export default ScheduleUpcoming;
