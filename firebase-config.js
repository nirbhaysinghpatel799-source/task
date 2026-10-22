// Paste your Firebase web app config here (see SYNC-SETUP.md).
// While this is null, the app works normally but without cloud sync.
window.FIREBASE_CONFIG = ;

/* Example of what it looks like after you paste yours:
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyCLDB-ONDnkQVhrrQqhnb-84NVRRkCclPI",
  authDomain: "task-65e23.firebaseapp.com",
  projectId: "task-65e23",
  storageBucket: "task-65e23.firebasestorage.app",
  messagingSenderId: "598237241590",
  appId: "1:598237241590:web:28f0a0affb79d671b08cd7",
  measurementId: "G-NBK7G3D3PN"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);