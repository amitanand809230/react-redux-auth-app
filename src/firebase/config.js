import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCK_FHsV0exuGMcfnngHUwX4VQxxx3_MtY",
  authDomain: "redux-auth-app-aea6a.firebaseapp.com",
  projectId: "redux-auth-app-aea6a",
  storageBucket: "redux-auth-app-aea6a.firebasestorage.app",
  messagingSenderId: "362656128519",
  appId: "1:362656128519:web:83357b0e301ce917b6d4a2"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
