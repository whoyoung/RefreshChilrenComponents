import React,{Component} from 'react';
import {
  View,
  Button,
  ActivityIndicator
} from 'react-native';

export default class childComponent extends Component{
  static propTypes = {
    componentId: React.PropTypes.string.isRequired,
  };
  constructor(props){
    super(props);
    this.state = {
        [props.componentId]:{
            animating:false,
        }
    };
  }

  componentWillUnmount(){
      this.timeOut && clearTimeout(this.timeOut);
  }
  
  _refresh() {
      if(!this.state[this.props.componentId].animating) {
        this.setState({
                [this.props.componentId]:{
                animating:true,
            }
        });
        this.timeOut = setTimeout(()=> {
            this.setState({
                [this.props.componentId]:{
                animating:false,
            }
        }); 
        }, 2000);
      }
  }

  render(){
    let {componentId} = this.props;
    let {animating} = this.state[componentId];
    return(
      <View style ={{alignItems:'center',justifyContent:'center',height:40,}} >
      {
          animating ?  <ActivityIndicator animating={animating} color='gray' /> :
                    <Button title={'refresh '+this.props.componentId} color='#841584' onPress={()=>this._refresh()} />
      }        
      </View>
    )
  }
}
