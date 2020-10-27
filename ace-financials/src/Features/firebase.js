import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCg5UXTqyREFz8RVKFCahHEHGkCYVpbj84",
  authDomain: "ace-financials.firebaseapp.com",
  databaseURL: "https://ace-financials.firebaseio.com",
  projectId: "ace-financials",
  storageBucket: "ace-financials.appspot.com",
  messagingSenderId: "757096567401",
  appId: "1:757096567401:web:ee8caf63e3f29c506008f8",
  measurementId: "G-NGS05G0WZN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
