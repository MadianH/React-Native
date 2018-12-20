import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import {connect} from 'react-redux';

class LogInButton extends Component {
  render() {
    return (
      <View>
        <Button buttonStyle={styles.button} title="Sign In"
          onPress={ this.props.LogInClick }}
        />
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    LogInClick: function() {
        dispatch( {type: 'ID'} )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(LogInButton);
