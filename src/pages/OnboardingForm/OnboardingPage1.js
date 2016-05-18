import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {FormField, Input, FormSubmit} from '../../components'

import validate from './validate';

class OnboardingPage1 extends React.Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <FormField label='Email' type='email' name='email' component={Input} />
                <FormField label='Password' type='password' name='password' component={Input} />
                <FormSubmit {...this.props}>Next</FormSubmit>
            </form>
        )
    }
}

export default reduxForm({
    form: 'onboarding',
    destroyOnMount: false,
    validate
})(OnboardingPage1);
