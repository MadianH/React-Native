import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Text, Button, List, ListItem} from 'react-native-elements';
import { connect } from 'react-redux';



 class SearchScreen extends React.Component {
   constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      userList: [],
    };
   }

   componentDidMount(){
     var ctx = this;
    fetch('http://localhost:3000/finduser')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
       var userListCopy = [...ctx.state.userList]
       data.user.map((l) => (
         userListCopy.push(l)
       ))
       ctx.setState({userList: userListCopy})


    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
  }



  handleClick(contact){
    var ctx = this;
    var userProps = {...contact};
    var userId = this.props.count.userId;

    fetch('http://localhost:3000/follow', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: 'firstName='+userProps.firstName+'&lastName='+userProps.lastName+'&email='+userProps.email+'&job='+userProps.job+'&Id='+userId
    });


    var firstName = userProps.firstName;
    var lastName = userProps.lastName;
    var email = userProps.email;
    var job = userProps.job;
    var userId = this.props.count.userId;

    ctx.props.handleContact(firstName, lastName, email, job, userId)

  }



  render() {

    var handleClick = this.handleClick
    var userList = this.state.userList.map(function(user, l){
      return <Item handleClick={handleClick} firstName={user.firstName} lastName={user.lastName} job={user.job} email={user.email} key={l} />
    })
      // Pour continuer il faut passer en props les elements l du map pour que le composant Item les connaisses
    return (
      <View>
        <List>
          {userList}
        </List>
      </View>
    );
  }
}


class Item extends React.Component {


  render() {
    

    return(
    <ListItem
      onPress={()=> this.props.handleClick(this.props)}
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
          <Text style={styles.ratingText}>{this.props.job}</Text>
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

function mapDispatchToProps(dispatch){
  return{
    handleContact : function(firstName, lastName, email, job, userId){
      dispatch({type:'addcontact', firstName:firstName, lastName:lastName, email:email, job:job, userId:userId})
    }
  }
}

function mapStateToProps(state){
  return {count:state.Count}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen)
