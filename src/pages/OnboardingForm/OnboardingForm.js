import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import {VelocityTransitionGroup} from 'velocity-react';

import OnboardingPage1 from './OnboardingPage1';
import OnboardingPage2 from './OnboardingPage2';

class OnboardingForm extends React.Component {
    state = {page: 1}
    nextPage = () => this.setState({page: this.state.page + 1})
    previousPage = () => this.setState({page: this.state.page - 1})
    onSubmit = (...args) => console.log(args)
    render() {
        const {page} = this.state;
        return (
            <div>
                <h1>Onboarding Form</h1>
                <VelocityTransitionGroup enter={{animation: 'transition.slideLeftIn'}}>
                    {page === 1 && <OnboardingPage1 key={1} onSubmit={this.nextPage}/>}
                    {page === 2 && <OnboardingPage2 key={2} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                </VelocityTransitionGroup>
            </div>
        )
    }
}

export default OnboardingForm
