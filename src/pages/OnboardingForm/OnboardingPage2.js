import React from 'react'
import { reduxForm } from 'redux-form'

import { AddressForm, Row, Col, FormSubmit, Button } from '../../components'

import validate from './validate'

class OnboardingPage2 extends React.Component {
    render() {
        const { handleSubmit, previousPage } = this.props
        return (
            <div>
                <h3>Awesome! What's your shipping address?</h3>
                <h4>This will be used as your default return address.</h4>
                <form onSubmit={handleSubmit}>
                    <AddressForm parentName="address" />
                    <Row>
                        <Col xs={6}><Button block onClick={previousPage}>Back</Button></Col>
                        <Col xs={6}><FormSubmit block {...this.props} /></Col>
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
})(OnboardingPage2)
