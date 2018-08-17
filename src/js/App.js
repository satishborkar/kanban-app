import React, { Component } from "react";
import { isLogged } from "./helpers/lib";
import PageContainer from './components/PageContainer';

import Header from "./components/Header";
import Footer from "./components/Footer";

import "../scss/style.scss";


const App = () => {
  if (localStorage.getItem("user") && isLogged()) {
    return (
      <div className="app-wrapper">
        <Header title="Kanban" />
        <PageContainer />
        <Footer />
      </div>
    );
  }
  return (
    <div className="login-wrapper">
      <PageContainer />
    </div>
  );
}

export default App;
