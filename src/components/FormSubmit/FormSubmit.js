import React from 'react'
import classNames from 'classnames'

import {Button} from '../'

//form submit button that consumes redux-form props
const FormSubmit = ({pristine, submitting, disabled, children, onClick, handleSubmit, bsStyle, ...props}) => {
    const isDisabled = pristine || submitting || disabled;
    return (
        <Button
            {...props}
            disabled={isDisabled}
            onClick={onClick || handleSubmit}
            bsStyle={bsStyle || 'primary'}
        >
            {submitting ? 'Submitting' : (children || 'Submit')}
        </Button>
    )
};

FormSubmit.propTypes = {
    pristine: React.PropTypes.bool.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    submitting: React.PropTypes.bool.isRequired
}

export default FormSubmit
