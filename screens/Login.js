import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "user@cordaid.com";
const VALID_PASSWORD = "drugs";

export default class Login extends Component {
  state = {
    email: null,
    phone: "",
    password: "",
    errors: [],
    loading: false
  };

  handleLogin() {
    const { navigation } = this.props;
    const { email, password, phone } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    if (phone.trim().length <= 12) {
      errors.push("phone");
    }
    if (password.trim().length <= 5) {
      errors.push("password");
    }
    console.log(errors)
    this.setState({ errors, loading: false });

    if (!errors.length) {
      //Call the 
      
      navigation.navigate("Browse");
    }
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
    justifyContent: "center"
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
