import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as allActions from './actions';
import reduxComponent from './reduxComponent';

class reduxContainer extends Component {
  render() {
    return (
        <reduxComponent {...this.props}/>
    );
  }
  _refresh() {
      this.props.state.actions.refresh();
  }
}

export default connect(state => ({
    state:state.reduxReducer,
  }),
  (dispatch) => ({
    actions: bindActionCreators(allActions, dispatch)
  }),
  null,
  {withRef:true}
)(reduxContainer);