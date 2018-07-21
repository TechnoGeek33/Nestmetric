import {
    observable , decorate, action
} from 'mobx';
// import axios from 'axios'
// import {
//     getCookie
// } from '../Services'
class Store {

 Email = '';
 Password = '';

 change() {
    
 }

}

decorate(Store, {
    Email : observable,
    Password : observable,
    change : action.bound
  });

const store = new Store();

export default store;