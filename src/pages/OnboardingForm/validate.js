import {combineValidators} from 'revalidate';
import * as validators from '../../utilities/validators';

export default combineValidators({
    email: validators.email
});
