
import initialData from './initialData';

function dataPuller() {
  if (localStorage.getItem('UserList')) {
    // console.log('Set to user data data puller');
    return  JSON.parse(localStorage.getItem('UserList'));
  } else {
    return initialData;
  }
};

export default dataPuller;

// TODO: Need a get call to a api endpoint for this info one day. Talked with Jesse 8-13-21 about this. 