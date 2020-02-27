import CommonFields from "./CommonFields";

let casual = require('casual');

export default function EntityFactory() {
    return {
        ... CommonFields,
        'first_name'    : casual.first_name,
        'middle_name'   : casual.last_name,
        'last_name'     : casual.last_name,
        'phone'         : casual.phone,
        'email'         : casual.email,
    }
}