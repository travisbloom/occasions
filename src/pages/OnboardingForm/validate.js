import { combineValidators, isRequired } from 'revalidate'
import * as validators from '../../utilities/validators'

export default combineValidators({
    email: validators.email,
    lastName: isRequired('last name'),
    firstName: isRequired('first name'),
    address: validators.address
})
