import React,{Component} from 'react';
import {
  View,
  Button,
  ActivityIndicator
} from 'react-native';

class Box extends Component{
  constructor(props){
    super(props);
  }

  componentWillUnmount(){
    this.timeOut && clearTimeout(this.timeOut);
  }

  _refresh() {
    this.props.actions.refresh();
    this.timeOut = setTimeout(()=>{
        this.props.actions.refresh();
    },1000);
  }
  render(){
    let {animating} = this.props.state;
    return(
       <View style ={{alignItems:'center',justifyContent:'center',height:40,}} >
      {
          animating ?  <ActivityIndicator animating={animating} color='gray' size='large'/> :
                    <Button title='reduxComponent' color='#841584' onPress={()=>this._refresh()} />
      }        
      </View>
    )
  }
}

export default Box;
