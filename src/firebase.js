import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDep79L-2vKGARRMEV9bz_jtFoJNXtFEz4',
  projectId: 'quick-and-dirty-b24ff'
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();