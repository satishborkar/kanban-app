import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../actions/creators";
import Alert from "../components/Alert";


class Home extends Component {
    constructor(props) {
        super(props)
        this.clearAlert = this.clearAlert.bind(this);
    }

    clearAlert() {
        this.props.actions.clearAlert();
    }

    render() {
        const { alert } = this.props;

        return (
            <div className="container-fluid">
                {alert.message && <Alert alert={alert} clearAlert={this.clearAlert} />}
                <div>
                    <h1>Welcome to Kanban.</h1>
                    <p>
                        Now you can stream the props, including both the input value and the change handler from your HoC, and also trigger changes in the Subject from your Component’s events.
                </p>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        user: state.user,
        alert: state.alert
    }
}

function mapDispatchToProps(dispatch) {
    const obj = {
        actions: bindActionCreators(actionCreators, dispatch)
    };

    return obj;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);