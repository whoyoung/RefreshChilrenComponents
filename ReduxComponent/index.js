import React,{Component} from 'react';
import {createStore,applyMiddleware,combineReducers} from 'redux';

import { Provider} from 'react-redux';
import reduxReducer from './reducer';
import thunk from 'redux-thunk';

const Reducer = combineReducers({
    reduxReducer
});
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(Reducer);
import ReduxContainer from './reduxContainer'

export default class Container extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <Provider store={store}> 
            <ReduxContainer ref={(ref)=>{ this.containedApp = ref; }} {...this.props}/>
        </Provider>
    );
  }
}

