import React from "react";
import ScheduleCart from "./ScheduleCart";
import style from "./ScheduleCart.module.scss";

const ScheduleList = () => {
  const scheduleData = [
    {
      user: "P",
      date: "Fri, 01 Sep",
      time: "3:00 PM - 4:00 PM",
      schedule: "Beginners Badminton Class",
      members: "Jonas Kend 15+ more",
    },
    {
      user: "C",
      date: "Fri, 01 Sep",
      time: "6:00 PM - 7:30 PM",
      schedule: "Intermediate Badminton Class",
      members: "JK Kend 25+ more",
    },

    {
      user: "M",
      date: "Sat, 02 Sep",
      time: "6:00 AM - 7:30 AM",
      schedule: "Staff Meeting",
      members: "John and 5+ more",
    },
    {
      user: "E",
      date: "Sat, 02 Sep",
      time: "4:00 PM - 5:00 PM",
      schedule: "Yoga Competition @Academy",
      members: "Jdl Kard 25+ more",
    },
  ];
  const scheduleList = scheduleData.map((obj) => (
    <ScheduleCart key={Math.random().toString()} data={obj} />
  ));
  return <ul className={style.scheduleList}>{scheduleList}</ul>;
};

export default ScheduleList;
