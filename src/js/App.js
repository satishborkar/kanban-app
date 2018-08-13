import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "./actions/creators";
import { isLogged } from "./helpers/lib";
import PageContainer from './components/PageContainer';
import Alert from "./components/Alert";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "../scss/style.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updated: false
    };
  }

  render() {
    console.log("APP is rendering...");
    //const alert = this.props.alert;
    if (localStorage.getItem("user") && isLogged()) {
      return (
        <div className="app-wrapper">
          <Alert />
          <Header title="Kanban" />
          <PageContainer />
          <Footer />
        </div>
      );
    }
    return (
      <div className="login-wrapper">
        {/* {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )} */}
        <PageContainer />
      </div>
    );
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.user != nextProps.user) {
  //     this.setState({
  //       updated: true
  //     });
  //   }
  // }
}

// function mapStateToProps(state) {
//   return {
//     alert: state.alert
//   };
// }

// function mapDispatchToProps(dispatch) {
//   const obj = {
//     actions: bindActionCreators(actionCreators, dispatch)
//   };

//   return obj;
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default App;
