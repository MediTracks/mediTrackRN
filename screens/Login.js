import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ToastAndroid,
  AsyncStorage,
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class Login extends Component {

  state = {
    email: null,
    id : 4,
    phone: "+243828598304",
    password: "123456",
    errors: [],
    loading: false,
    isConnected: true
  };

  handleLogin() {
    const { navigation } = this.props;
    const { email, password, phone } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    if (phone.trim().length <= 8) { //12
      errors.push("phone");
    }
    if (password.trim().length <= 5) {
      errors.push("password");
    }
    console.log(errors)
    //this.setState({ errors, loading: false });

    if (!errors.length) {
      //Call the API here
      this._login2();
    }
  }

  _login2 = async () =>{
    const { navigation } = this.props;
    const { password, phone } = this.state;

    var request = new XMLHttpRequest();
    request.onreadystatechange = async e => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        var req = JSON.parse(request.responseText)
        //ToastAndroid.show(JSON.stringify(req), ToastAndroid.LONG)

        // Iterrate trhought all the user to find one who matches the current users
        var clientsPhone = req.find((item2) => item2.phone == phone);
        //ToastAndroid.show(JSON.stringify(clientsPhone), ToastAndroid.LONG)
       
        //TODO Get the structures
        
        if(!clientsPhone ){
          this.setState({ loading: false });
          ToastAndroid.show("Identifiants incorrects...", ToastAndroid.LONG)
        }
        else if( password == clientsPhone.password){
          //ToastAndroid.show(JSON.stringify(req), ToastAndroid.LONG)
          //Save current user in localstorage
          await AsyncStorage.setItem('current_user', JSON.stringify(clientsPhone))
          .then(async json => {
            //ToastAndroid.show('Current user save locally', ToastAndroid.SHORT)
            await this._srtuctures();
          }).catch(error => ToastAndroid.show('current_user error local memory', ToastAndroid.SHORT));
          //navigation.navigate("Browse");
        }
        else{
          ToastAndroid.show("Mots de passe incorrect...", ToastAndroid.LONG)
          this.setState({ loading: false });
        }
      } else {
        ToastAndroid.show("Identifiants incorrects", ToastAndroid.LONG)
        this.setState({ loading: false });

        //console.warn('error');
      }
    };

    request.open('GET', 'https://apimeditracks.azurewebsites.net/api/users/');
    request.send();
  }

  //Structures de sante
  _srtuctures = async () =>{
    const { navigation } = this.props;
    const { phone } = this.state;

    var request = new XMLHttpRequest();
    request.onreadystatechange = async e => {
      if (request.readyState !== 4) {
        this.setState({ loading: false });
        return;
      }
      if (request.status === 200) {
        var req = JSON.parse(request.responseText)
        //ToastAndroid.show(JSON.stringify(req), ToastAndroid.LONG)

        // Iterrate trhought all the user to find one who matches the current users
        var zoneByPhone = req.find((item2) => item2.telephone == phone);
        //ToastAndroid.show(JSON.stringify(zoneByPhone), ToastAndroid.LONG)
        
        //TODO Get the structures
        
        if(!zoneByPhone){
          //ToastAndroid.show("zoneByPhone incorrects...", ToastAndroid.LONG)
          this.setState({ loading: false });
        }
        else{
          //ToastAndroid.show(JSON.stringify(req), ToastAndroid.LONG)
          //Save current user in localstorage
          await AsyncStorage.setItem('zoneByPhone', JSON.stringify(zoneByPhone))
          .then(async json => {
            //ToastAndroid.show('Current zoneByPhone save locally', ToastAndroid.SHORT)
            await navigation.navigate("Browse");
          }).catch(error => ToastAndroid.show('zoneByPhone error local memory', ToastAndroid.SHORT));
        }
      } else {
        ToastAndroid.show("Vous etes assigne a aucune structure de sante", ToastAndroid.LONG)
        this.setState({ loading: false });

        //console.warn('error');
      }
    };

    request.open('GET', 'https://apimeditracks.azurewebsites.net/api/Structures/');
    request.send();
  }

  
  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Se connecter
          </Text>
          <Block middle>
            <Input
              label="Téléphone"
              error={hasErrors("phone")}
              style={[styles.input, hasErrors("phone")]}
              defaultValue={this.state.phone}
              onChangeText={text => this.setState({ phone: text })}
            />
            <Input
              secure
              label="Mots de passe"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Se connecter
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Forgot")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Mots de passe oublie?
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    paddingTop:30
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
