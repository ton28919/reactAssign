import * as firebase from 'firebase';

//insert config from firebase
const config = {
  apiKey: "AIzaSyA2sILjCtJSFd4vH1fh1r3lKM442Cr5KV4",
  authDomain: "assign-ff4db.firebaseapp.com",
  databaseURL: "https://assign-ff4db.firebaseio.com",
  projectId: "assign-ff4db",
  storageBucket: "assign-ff4db.appspot.com",
  messagingSenderId: "400440788888"
};
firebase.initializeApp(config);

export default firebase;