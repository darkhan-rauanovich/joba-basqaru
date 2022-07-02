import { ref, onUnmounted } from "vue";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  getDoc,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCo_7n3REHfs97zLiwFz8nCtFBmpusoT6s",
  authDomain: "vue-shop-aed17.firebaseapp.com",
  projectId: "vue-shop-aed17",
  storageBucket: "vue-shop-aed17.appspot.com",
  messagingSenderId: "966907136141",
  appId: "1:966907136141:web:21601420477808521c3ac4",
  measurementId: "G-KB45R9P6NR",
};

const firebaseApp = initializeApp(config);

const db = getFirestore(firebaseApp);

const projects = collection(db, "projects");

export const LoadProjects = () => {
  const users = ref([]);
  const close = onSnapshot(projects, (snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};

export const updateProjects = (id, project) => {
  const projectRef = doc(db, "projects", id);
  return updateDoc(projectRef, project);
};

export const deleteProject = (id) => {
  return deleteDoc(doc(db, "projects", id));
};

export const addProject = (project) => {
  return addDoc(projects, project);
};

export const getProject = async (id) => {
  const userRef = doc(db, "projects", id);
  const user = await getDoc(userRef);
  return user.exists() ? user.data() : null;
};
