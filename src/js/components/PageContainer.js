import React, { Component } from 'react';
import Routes from '../routes/index';
import { connect } from 'react-redux';


const PageContainer = () => {
    return (
        <div>
            {Routes}
        </div>
    );
};

export default PageContainer;

// class PageContainer extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         console.log("State Props", this.props);
//         const { alert } = this.props;
//         return (
//             <div className="container-fluid">
//                 {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
//                 {Routes}
//             </div>
//         )
//     }

// }

// function mapStateToProps(state) {
//     return {
//         alert: state.alert
//     }
// }

// export default connect(mapStateToProps)(PageContainer);