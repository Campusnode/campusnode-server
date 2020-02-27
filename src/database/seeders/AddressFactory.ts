import CommonFields from "./CommonFields";

let casual = require('casual');

export default function AddressFactory() {
    return {
        ... CommonFields,
        'contact_name'  : casual.name,
        'estate_name'   : casual.address1,
        'street'        : casual.street,
        'city'          : casual.city,
        'district'      : casual.city,
        'state'         : casual.state,
        'country'       : casual.country,
        'zip'           : casual.zip(),
        'email'         : casual.email,
        'phone'         : casual.phone
    }
}