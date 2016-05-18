import {createValidator, composeValidators, isRequired} from 'revalidate';

const emailValidator = createValidator(
    message => value => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return message;
        }
    },
    field => `this ${field} is not a valid format`
);

export const email = composeValidators(
    isRequired,
    emailValidator
)('email');
