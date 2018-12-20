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
import {connect} from 'react-redux';


class HomeScreen extends React.Component {
  constructor() {
   super();
   this.SignIn = this.SignIn.bind(this);
   this.state = {
     email: '',
     password: '',
     eMessage: false,
   };
  }

  SignIn(){
    var ctx = this;
    fetch('http://localhost:3000/sign-in', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: 'email='+this.state.email+'&password='+this.state.password
    }).then(function(response) {
        return response.json();
        })
        .then(function(data) {
        
            if(data.isUserExist){
              ctx.props.onIncreaseClick(data.userEmail, data.userFirstName, data.userLastName, data.userJob, data.userId)
              ctx.props.navigation.navigate('AccountStack')
            }else{
              ctx.setState({
                eMessage:true
              })
            }

        })
        .catch(function(error) {
            console.log('Request failed', error)
        });

   }


  render() {
    return (
      <ImageBackground source={require('../assets/images/network.jpg')} style={styles.container}>
        <Text style={styles.title}>Whol'Up</Text>
        <Text style={styles.text}>Start your networking</Text>
        <Text style={styles.text}>now and everywhere</Text>
        {this.state.eMessage
            ?<FormValidationMessage>Une erreur d'identification à eu lieu</FormValidationMessage>
            :<View></View>
        }
        <View style={styles.input}>
          <FormLabel>Email</FormLabel>
          <FormInput onChangeText={(value) => this.setState({email: value})} placeholder='Your Email' value={this.state.email}/>
          <FormLabel>Password</FormLabel>
          <FormInput onChangeText={(value) => this.setState({password: value})} placeholder='Your password' value={this.state.password}/>
        </View>
        <Button buttonStyle={styles.button} title="Submite"
            onPress={ this.SignIn }
        />
        <Button buttonStyle={styles.button} title="Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />

        <Text style={styles.signUp} onPress={() => this.props.navigation.navigate('SignUp')}>Sign Up</Text>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    color: '#ffff',
    fontSize: 50,
    marginBottom: 10,
  },
  text: {
    color: '#ffff',
    fontSize: 20,
  },
  input:{
    backgroundColor: '#f5f6fa',
    marginTop: 40,
    marginBottom: 10,
  },
  button:{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 200,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 10,
  },
  signUp:{
    color: '#ffff',
    fontSize: 20,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function(email, firstName, lastName, job, userId) {
        dispatch( {type: 'increase', email:email, firstName:firstName, lastName:lastName, job:job, userId:userId } )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(HomeScreen);
