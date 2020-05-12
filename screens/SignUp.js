import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class SignUp extends Component {
  state = {
    email: null,
    name: null,
    lastname:null,
    surname:null,
    password: null,
    phone:null,
    
    errors: [],
    loading: false
  };

  handleSignUp() {
    const { navigation } = this.props;
    const { email, name, password, lastname, surname, phone } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push("email");
    if (!name) errors.push("name");
    if (!password) errors.push("password");
    if (!lastname) errors.push("lastname");
    if (!surname) errors.push("surname");
    if (!phone) errors.push("phone");

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse");
            }
          }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
         
          <Block middle>
          <Text h1 bold>
            Sign Up
          </Text>
           
            <Input
              label="name"
              error={hasErrors("name")}
              style={[styles.input, hasErrors("name")]}
              defaultValue={this.state.name}
              onChangeText={text => this.setState({ name: text })}
            />
            <Input
              label="lastname"
              error={hasErrors("lastname")}
              style={[styles.input, hasErrors("lastname")]}
              defaultValue={this.state.lastname}
              onChangeText={text => this.setState({ lastname: text })}
            />
             <Input
              label="phone"
              error={hasErrors("phone")}
              style={[styles.input, hasErrors("phone")]}
              defaultValue={this.state.phone}
              onChangeText={text => this.setState({ phone: text })}
            />
             <Input
              email
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Input
              secure
              label="confirm_password"
              error={hasErrors("confirm_password")}
              style={[styles.input, hasErrors("confirm_password")]}
              defaultValue={this.state.confirm_password}
              onChangeText={text => this.setState({ confirm_password: text })}
            />
            <Button gradient onPress={() => this.handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Sign Up
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Login")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
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
