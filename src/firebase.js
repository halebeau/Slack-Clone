import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBjpSlLdxnx_IU51BPgessChlbJNzUPlPQ",
    authDomain: "slack-clone-f83eb.firebaseapp.com",
    projectId: "slack-clone-f83eb",
    storageBucket: "slack-clone-f83eb.appspot.com",
    messagingSenderId: "775692479032",
    appId: "1:775692479032:web:de601faa6e249a51ab94cd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;