import { Field } from 'redux-form'
import React from 'react'

const componentRenderer = ({ name, label, renderedComponent, helpText, ...props }) => (
    <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        {renderedComponent({ tabIndex: '1', ...props, name })}
        {helpText && <div className="help-block">{helpText}</div>}
        {props.touched && props.error && <div style={{ color: 'red' }}>{props.error}</div>}
    </div>
)

const FormField = ({ name, component, ...props }) => (
    <Field
        {...props}
        name={name}
        tabIndex="1"
        renderedComponent={component}
        component={componentRenderer}
    />
)

FormField.propTypes = {
    label: React.PropTypes.node,
    component: React.PropTypes.func.isRequired,
    defaultValue: React.PropTypes.any,
    helpText: React.PropTypes.node,
    name: React.PropTypes.string.isRequired,
}

export default FormField
