import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../actions/creators";
import { isLogged } from '../helpers/lib';
import Links from '../links';

class Header extends Component {
    constructor(props) {
        super(props);

        this.logOutLocal = this.logOutLocal.bind(this);
    }


    logOutLocal() {
        window.location.pathname = "/login";
        this.props.actions.logOut();
    }

    render() {
        if (this.props.hidden || !isLogged()) {
            return null
        }
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">{this.props.title}</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <span className="active"><a href="javascript:void(0)" onClick={this.logOutLocal}>Logout</a></span>
                        {Links}
                    </div>
                </div>
            </nav>
        );
    }
};
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
)(Header);