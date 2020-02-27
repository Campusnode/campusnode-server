import CommonFields from "./CommonFields";

let casual = require('casual');

export default function UserFactory() {
    let username = casual.username;
    let password = casual.password;

    console.log("Creating User from seeder:");
    console.log('username: ' + username);
    console.log('password: ' + password);

    return {
        ... CommonFields,
        'username'      : username,
        'password'      : password,
        'last_name'     : casual.last_name,
        'phone'         : casual.phone,
        'email'         : casual.email,
    }
}