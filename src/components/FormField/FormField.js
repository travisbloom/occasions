import { Field } from 'redux-form'
import React from 'react'
import classNames from 'classnames'

const FormField = ({component, label, defaultValue, name, ...passedProps}) => (
    <Field
        name={name}
        defaultValue={defaultValue}
        component={(props) =>
            <div className='form-group'>
                {label && <label for={name}>{label}</label>}
                {component({...props, ...passedProps, name})}
                {props.touched && props.error && <div style={{color: 'red'}}>{props.error}</div>}
            </div>
        }
    />
);

FormField.propTypes = {
    label: React.PropTypes.node,
    component: React.PropTypes.func.isRequired,
    defaultValue: React.PropTypes.any,
    name: React.PropTypes.string.isRequired
}

export default FormField
