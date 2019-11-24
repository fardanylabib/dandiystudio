const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

exports.test = functions.https.onRequest((req, res) =>{
    return cors(req, res, () => {
        return res.status(200).json({
            message: 'This cloud functions work!!!'
        });
    });
});

exports.addUser = functions.https.onRequest((req, res) =>{
    return cors(req, res, () =>{
        if(req.method !== 'POST') {
            return res.status(401).json({
              message: 'Request Not allowed'
            });
        }
        return db.collection('users').add(req.body)
        .then((docRef)=>{
            return res.status(200).json({
                message: 'Successfully adding user',
                user: req.body,
                ref: docRef
            });
        })
        .catch((err)=>{
            return res.status(500).json({
                error: err.code,
                message: err.message
            });
        });
    });
});

exports.getUser = functions.https.onRequest((req, res) =>{
    return cors(req, res, () =>{
        if(req.method !== 'GET') {
            return res.status(401).json({
              message: 'Request Not allowed'
            });
        }
        const id = req.query.uid;

        if(id){
            return db.collection('users').where('uid', '==', id).get()
            .then((snapshot)=>{
                let users = [];
                if(snapshot.empty){
                    return res.status(401).json({
                        message: 'User with id: '+ id +' not found'
                    });
                }
                snapshot.forEach((item)=>{
                    users.push(item.data());
                })
                return res.status(200).json({
                    user: users
                });
            })
            .catch((err)=>{
                return res.status(500).json({
                    error: err.code,
                    message: err.message
                });
            });
        } else {
            return db.collection('users').get()
            .then((snapshot)=>{
                let users = [];
                if(snapshot.empty){
                    return res.status(401).json({
                        message: 'Users is empty'
                    });
                }
                snapshot.forEach((item)=>{
                    users.push(item.data());
                })
                return res.status(200).json({
                    user: users
                });
            })
            .catch((err)=>{
                return res.status(500).json({
                    error: err.code,
                    message: err.message
                });
            });
        }
        
    });
});





// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
