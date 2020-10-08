const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.quickAndDirty = functions.https.onRequest((request, response) => {
  const db = admin.firestore();

  const timestamp = new Date().toISOString();

  db.collection('qnds')
    .add({ timestamp })
    .then(() => {
      response.send(`Added a new quick and dirty for ${timestamp}`);
    }, (error) => {
      console.error(error);
      response.send(`An error occurred 😭: ${error}`);
    });
});