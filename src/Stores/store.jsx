import {
    observable, decorate, action
} from 'mobx';
// import axios from 'axios'
// import {
//     getCookie
// } from '../Services'
class Store {

    // Login values
    LoginEmail = '';
    LoginPassword = '';

    //  Registration Values
    RegEmail = '';
    RegPassword = '';
    RegFirstName = '';
    RegLastName = '';


    LoginCheck() {
        const email = "admin";
        const password = 'admin';
        if (this.LoginEmail === email) {
            if (this.LoginPassword === password) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }

    RegistrationCheck() {

    }

}

decorate(Store, {
    Email: observable,
    Password: observable,
    RegEmail : observable,
    RegPassword : observable,
    RegFirstName : observable,
    RegLastName : observable,
    LoginCheck: action.bound,
    RegistrationCheck : action.bound,
});

const store = new Store();

export default store;