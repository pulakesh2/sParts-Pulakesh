import React from "react";
import "./index.scss";
import Header from "./Components/header/Header";
import DashBoard from "./Components/dashboard/DashBoard";
import Students from "./Components/students/Students";
import Add from "./Components/addStudents/Add";
import Scehdule from "./Components/Schedule/Scehdule";
import PaymentSummary from "./Components/PaymentSummary/PaymentSummary";
import Growth from "./Components/growth/Growth";

function App() {
  return (
    <div>
      <Header />
      <div className="page__layout">
        <div className="page__layout__dashboard">
          <DashBoard />
        </div>
        <div className="page__layout__active__students">
          <Students />
        </div>
        <div className="page__layout__add__students">
          <Add />
        </div>

        <div className="page__layout__schedule">
          <Scehdule />
        </div>

        <div className="page__layout__amount__pie">
          <PaymentSummary />
        </div>

        <div className="page__layout__growth">
          <Growth />
        </div>
      </div>
    </div>
  );
}

export default App;
