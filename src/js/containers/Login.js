import React, { Component } from "react";
import { logOutLocalUser } from "../helpers/lib";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/creators";
import appConfig from "../helpers/config";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: ""
    };

    this.loginUser = this.loginUser.bind(this);
    this.getUserDetails = this.getUserDetails.bind(this);
    logOutLocalUser();
  }

  componentWillMount() {
    logOutLocalUser();
  }

  loginUser(e) {
    e.preventDefault();
    const userInfo = {
      username: this.refs.usr.value.toLowerCase(),
      password: this.refs.pwd.value.toLowerCase()
    };
    this.props.actions.login(userInfo);
    this.clearAlert = this.clearAlert.bind(this);
  }

  clearAlert() {
    this.props.actions.clearAlert();
  }

  getUserDetails(props) {
    //appConfig.token = "A4C4VEY61HAH06OIZL54TTS1D";
    //appConfig.user = loggedUser.firstName.toLowerCase();

    props.history.push("/dashboard");
  }

  componentDidMount() {
    //console.log("userDetails", this.state.userDetails);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user != nextProps.user) {
      const loggedUser = nextProps.user[0];
      if (localStorage) {
        localStorage.setItem("user", loggedUser.firstName.toLowerCase());
        localStorage.setItem("token", "A4C4VEY61HAH06OIZL54TTS1D");
      }
      this.getUserDetails(nextProps);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="login-panel">
        <div className="box-shashow">
          <h1> Kanban Login </h1>
          <form onSubmit={this.loginUser}>
            <div className="row">
              <div>
                <label>Username</label>
                <input type="text" tabIndex="1" ref="usr" name="username" />
              </div>
              <div>
                <label>Password</label>
                <input type="password" ref="pwd" name="password" />
              </div>
              <div>
                <button type="submit"> Login </button>
                <button type="reset" onClick={this.clearAlert}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// Login.propTypes = {

// }
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  const obj = {
    actions: bindActionCreators(actionCreators, dispatch)
  };

  return obj;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
