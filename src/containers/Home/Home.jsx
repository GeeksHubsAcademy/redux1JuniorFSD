
import React from 'react';

import {connect} from 'react-redux';

const Home = (props) => {
    return(
        <div>{JSON.stringify(props.state)}</div>
    )
}

const mapStateToProps = state => ({state: state})
export default connect(mapStateToProps)(Home);