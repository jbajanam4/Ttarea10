
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { 
      getFirestore, 
      collection,
      addDoc,
      getDocs,
      deleteDoc,
      onSnapshot,
      doc,
      getDoc,
      updateDoc, 
    } 
    from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDiXsuPm728f_AMGMfr2YdumTnL-hCO5eM",
    authDomain: "tareas10-a0dae.firebaseapp.com",
    projectId: "tareas10-a0dae",
    storageBucket: "tareas10-a0dae.appspot.com",
    messagingSenderId: "410261977146",
    appId: "1:410261977146:web:8fbb35bd5ca862c5ef5d03"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  export const saveTask = (title, description)=> 
      addDoc(collection(db,"tasks"), {title, description});
      
 export const getTasks = () => getDocs(collection(db, "tasks"));

 export const onGetTasks = (callback) => 
  onSnapshot(collection(db, "tasks"), callback);

  export const deleteTask = (id) => deleteDoc(doc(de,"tasks", id));
  
  export const getTask = (id) => getDoc(doc(db,"tasks", id));
   
  export const updateTask = (id, newFields) => 
   updateDoc (doc(db,"tasks", id), newFields);
