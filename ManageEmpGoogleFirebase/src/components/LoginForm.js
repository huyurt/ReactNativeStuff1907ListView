import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from "react-redux";
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from "./common";

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Giriş
            </Button>
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorText}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="Email Adresinizi Giriniz"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Şifre"
                        placeholder="Şifrenizi Giriniz"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {email, password, error, loading};
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);
