import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { alert } = this.props;

        return (
            <div className="container-fluid">
                {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
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

export default connect(mapStateToProps)(Home);