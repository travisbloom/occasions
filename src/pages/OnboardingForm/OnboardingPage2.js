import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {FormField, Input, FormSubmit, Row, Col, Button} from '../../components'

import validate from './validate';

class OnboardingPage2 extends React.Component {
    render() {
        const {handleSubmit, previousPage} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <FormField name='otherField' label='otherField' component={Input} />
                <FormField name='anotherField' label='anotherField' component={Input} />
                <Row>
                    <Col xs={6}><Button block onClick={previousPage}>Back</Button></Col>
                    <Col xs={6}><FormSubmit block {...this.props} /></Col>
                </Row>
            </form>
        )
    }
}

export default reduxForm({
    form: 'onboarding',
    destroyOnMount: false,
    validate
})(OnboardingPage2);
