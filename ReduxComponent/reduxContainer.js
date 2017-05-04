import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as allActions from './actions';
import ReduxComponent from './reduxComponent';

class reduxContainer extends Component {
  componentWillUnmount(){
    this.timeOut && clearTimeout(this.timeOut);
  }

  render() {
    return (
        <ReduxComponent {...this.props}/>
    );
  }

  _refresh() {
    this.props.actions.refresh();
    this.timeOut = setTimeout(()=>{
        this.props.actions.refresh();
    },1000);
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