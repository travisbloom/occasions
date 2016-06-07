import React from 'react'
import { reduxForm } from 'redux-form'

import { FormField, Input, FormSubmit, Row, Col } from '../../components'

import validate from './validate'

class OnboardingPage1 extends React.Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <h3>Great! Before we can start sending you postcards, we'll need a few details. First off, what's your name and email?</h3>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col xs={6}><FormField label="First Name" name="firstName" component={Input} /></Col>
                        <Col xs={6}><FormField label="Last Name" name="lastName" component={Input} /></Col>
                        <Col xs={12}>
                            <FormField
                                label="Email"
                                type="email"
                                name="email"
                                component={Input}
                                helpText="We hate spam email as much as you do. Occasions sends delightfully infrequent emails only when you have an upcoming occasion."
                            />
                        </Col>
                        <Col sm={6} smOffset={6}><FormSubmit block {...this.props} /></Col>
                    </Row>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'onboarding',
    destroyOnUnmount: false,
    validate,
})(OnboardingPage1)
