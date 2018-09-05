import firebase from 'firebase'

firebase.initializeApp({
    apiKey: 'AIzaSyBL8wS6YNup79raWs7ps6JWWRZxevm4hMg',
    authDomain: 'reactflix-a0af7.firebaseapp.com',
    databaseURL: 'https://reactflix-a0af7.firebaseio.com',
    projectId: 'reactflix-a0af7',
    storageBucket: 'reactflix-a0af7.appspot.com',
    messagingSenderId: '246774910380'
})

const db = firebase.database()

export { db }