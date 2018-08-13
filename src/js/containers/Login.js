import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/creators";
//import appConfig from "../helpers/config";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: ""
    };

    this.loginUser = this.loginUser.bind(this);
    this.getUserDetails = this.getUserDetails.bind(this);
    this.logOutLocalUser = this.logOutLocalUser.bind(this);
  }

  componentWillMount() {
    //log out user before login
    this.logOutLocalUser();
  }

  logOutLocalUser() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  loginUser(e) {
    e.preventDefault();
    const userInfo = {
      username: this.refs.usr.value.toLowerCase(),
      password: this.refs.pwd.value.toLowerCase()
    };
    this.props.actions.login(userInfo);
    //this.clearAlert = this.clearAlert.bind(this);
  }

  // clearAlert() {
  //   this.props.actions.clearAlert();
  // }

  getUserDetails(props) {
    //appConfig.token = "A4C4VEY61HAH06OIZL54TTS1D";
    //appConfig.user = loggedUser.firstName.toLowerCase();
    props.history.push("/dashboard");
    this.setState({
      userDetails: props.user
    });
  }

  componentDidMount() {
    //console.log("userDetails", this.state.userDetails);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.data != nextProps.user.data) {
      this.getUserDetails(nextProps);
    }
  }

  render() {
    return (
      <div className="login-panel">
        <div className="box-shashow">
          <form onSubmit={this.loginUser}>
            <div className="col-md-12 no-gutter">
              <h3> Kanban Board </h3>
              <div className="col-xs-12 col-md-12">
                <label>Username</label>
                <input type="text" tabIndex="1" ref="usr" className="form-control" placeholder="username" name="username" />
              </div>
              <div className="col-xs-12 col-md-12">
                <label>Password</label>
                <input type="password" ref="pwd" className="form-control" placeholder="*****" name="password" />

              </div>
              <div className="col-xs-12 col-md-12">
                <button type="submit" className="btn btn-success"> Login </button>
                <button type="reset" className="btn btn-danger" onClick={this.clearAlert}>
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
