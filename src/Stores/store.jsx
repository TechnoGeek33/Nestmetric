import {
    observable, decorate, action
} from 'mobx';
import SampleData from './SampleData'

class Store {
    pageCount = 0;

    // Login values
    LoginEmail = '';
    LoginPassword = '';
    ExtractedData = []

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

    getExtractedData () {
        this.ExtractedData = SampleData;
    }

}

decorate(Store, {
    pageCount: observable,
    Email: observable,
    Password: observable,
    RegEmail : observable,
    RegPassword : observable,
    RegFirstName : observable,
    RegLastName : observable,
    ExtractedData : observable,
    LoginCheck: action.bound,
    RegistrationCheck : action.bound,
});

const store = new Store();

export default store;