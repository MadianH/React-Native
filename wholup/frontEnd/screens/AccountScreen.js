import React from 'react';
import {
  View,
} from 'react-native';
import {Avatar, Text, Button} from 'react-native-elements';
import { connect } from 'react-redux';


class AccountScreen extends React.Component {


  render() {

  

    return (


      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>

        <Avatar
          large
          title="JD"
          rounded
          overlayContainerStyle={{backgroundColor:"#e67e22"}}
        />

      <Text h3>{this.props.count.firstName} {this.props.count.lastName}</Text>
      <Text h4>{this.props.count.job}</Text>
      <Text>{this.props.count.email}</Text>
      </View>
    );
  }
}


function mapStateToProps(state){
  return {count:state.Count}
}

export default connect(
    mapStateToProps,
    null
)(AccountScreen);
