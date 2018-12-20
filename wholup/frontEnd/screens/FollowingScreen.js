import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import {Avatar, Text,  List, ListItem } from 'react-native-elements'
import {connect} from 'react-redux';

class FollowingScreen extends React.Component {
  constructor() {
   super();

   this.state = {
     followList: [],
   };
  }
  componentWillMount(){
    var ctx = this;
    var userId = this.props.count.userId;
    fetch('http://localhost:3000/findFollow', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: 'Id='+userId
    }).then(function(response) {
        return response.json();
        })
        .then(function(data) {

          var followListCopy = [...ctx.state.followList];
          data.user.map(function(contact){
            followListCopy.push(contact)
          })
          ctx.setState({followList: followListCopy})
          console.log('mise a jour ok');

        })
        .catch(function(error) {
            console.log('Request failed', error)
        });
  }



  render() {
    var followList = this.state.followList.map(function(contact, l){
      return<Item firstName={contact.firstName} lastName={contact.lastName} job={contact.job} email={contact.email} userId={contact.userId} key={l} />
    })
    return (
      <ScrollView style={styles.container}>

        <SafeAreaView>
          <List>
              {followList}
          </List>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

class Item extends React.Component {

  render() {

    return(
    <ListItem
      avatar={
      <Avatar
        small
        rounded
        title="EC"
        overlayContainerStyle={{backgroundColor: '#e67e22'}}/>}
      title={this.props.firstName + " " + this.props.lastName}
      key="{this.props.key}"
      subtitle={
        <View style={styles.subtitle}>
          <Text style={styles.ratingText}>{this.props.job + " "}</Text>
          <Text style={styles.ratingText}>{this.props.email}</Text>
        </View>
      }
    />
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  subtitle:{
    flexDirection:'row',
    padding:10,
    paddingTop:5,
  },
  ratingText:{
    color: 'grey',
  }
});

function mapStateToProps(state){
  return {count:state.Count, contactList: state.ContactList}
}

export default connect(
    mapStateToProps,
    null
)(FollowingScreen);
