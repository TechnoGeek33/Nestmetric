import {
    observable, decorate, action
} from 'mobx';
import SampleData from './SampleData'

class Store {
    pageCount = 0;
    ExtractedData = [];

    // Login Object
    Login = {
        Email: '',
        Password: '',
    }

    //  Registration Object
    Registration = {
        Email: '',
        Password: '',
        ConfirmPassword: '',
        FirstName: '',
        LastName: ''
    }



    LoginCheck() {
        const email = "admin";
        const password = 'admin';
        if (this.Login.Email === email) {
            if (this.Login.Password === password) {
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
        return true

    }

    getExtractedData() {
        this.ExtractedData = SampleData;
    }

}

decorate(Store, {
    Login: observable,
    LoginCheck: action.bound,
    Registration: observable,
    RegistrationCheck: action.bound,
    ExtractedData: observable,
    pageCount: observable,
});

const store = new Store();

export default store;