import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from "../actions";
import {Card, CardSection, Button} from "./common";
import EmployeeForm from './EmpForm';

class EmpCreate extends Component {
    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Pazartesi'});
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Ekle
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(EmpCreate);
