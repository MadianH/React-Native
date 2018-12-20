import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { WebBrowser } from 'expo';



export default class SignUp extends React.Component {
  constructor() {
   super();
   
   this.state = {
     firstName: '',
     lastName: '',
     email: '',
     job:'',
     password: '',
   };
  }

  handleSubmit(){
    console.log('ok');
    var ctx = this;
    fetch('http://localhost:3000/sign-up', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: 'firstName='+this.state.firstName+'&lastName='+this.state.lastName+'&email='+this.state.email+'&password='+this.state.password+'&job='+this.state.job
    });
    ctx.props.navigation.navigate('Home')
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <FormLabel>First Name</FormLabel>
        <FormInput onChangeText={(value) => this.setState({firstName: value})} value={this.state.firstName}/>
        <FormLabel>Last Name</FormLabel>
        <FormInput onChangeText={(value) => this.setState({lastName: value})} value={this.state.lastName}/>
          <FormLabel>Your Job</FormLabel>
          <FormInput onChangeText={(value) => this.setState({job: value})} value={this.state.job}/>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={(value) => this.setState({email: value})} value={this.state.email}/>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={(value) => this.setState({password: value})} value={this.state.password}/>
        <Button buttonStyle={styles.button} title="Submite"
            onPress={() => this.handleSubmit() }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex:1,
    alignItems:'center',
    marginTop: 20,
  },
  title:{
    fontSize: 40,
    marginBottom: 30,
  },
  button:{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 200,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 40,
  },
});
