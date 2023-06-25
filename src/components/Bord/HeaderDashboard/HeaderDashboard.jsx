import React from "react";
import Filters from '../Filters/Filters';
import s from './HeaderDashboard.module.scss';
import Container from "components/Container/Container";
import MainDashboard from "../MainDashboard/MainDashboard";

const HeaderDashboard = () => {
  return (
    <div className={s.headerDashboard}>
      <Container className={s.containerDashboard}>
        <h1 className={s.titleHeaderDashboard}>Title</h1>
        <Filters />
      </Container>
      <Container className={s.containerMainDashboard}>
        <MainDashboard />
      </Container>
    </div>
  );
};

export default HeaderDashboard;
