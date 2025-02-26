import React, {Component} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Text} from 'react-native';
import {Actions} from "react-native-router-flux";
import {CardSection} from "./common";

class ListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({employee: this.props.employee})
    }

    render() {
        const {name} = this.props.employee.item;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.title}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default ListItem;
