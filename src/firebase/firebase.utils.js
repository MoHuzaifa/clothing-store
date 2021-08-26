import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDgfXLjw5Dr5gRSw_kHZKDBuLwZOZrsteU",
  authDomain: "clothing-store-db-c00d5.firebaseapp.com",
  projectId: "clothing-store-db-c00d5",
  storageBucket: "clothing-store-db-c00d5.appspot.com",
  messagingSenderId: "543741111146",
  appId: "1:543741111146:web:4fd22258a10f7bc7b05313",
  measurementId: "G-PBR13J86Q9",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    // console.log(`Title: ${title}`);
    // console.log(`Items: ${items}`);

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // return transformedCollection;
  // const transCollection = transformedCollection.reduce(
  //   (accumulator, collection) => {
  //     accumulator[collection.title.toLowerCase()] = collection;
  //     return accumulator;
  //   },
  //   {}
  // );
  return transformedCollection;
};

/*RAN ONLY ONCE TO ADD STORE DATA TO FIREBASE, IN ORDER TO AVOID MANUAL INPUT ON FIREBASE CONSOLE*/
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
