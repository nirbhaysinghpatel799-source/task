# Cloud sync setup (Google login, free)

This lets you sign in with the same Google account on every device and see the same tasks and settings.
Your tasks are encrypted with your password BEFORE they are uploaded, so Google/Firebase only stores unreadable data.

## 1. Create a Firebase project
1. Go to https://console.firebase.google.com and sign in with Google.
2. Click **Create a project**, give it a name (for example `task-notes`), and finish (Google Analytics can be off).

## 2. Turn on Google sign-in
1. In the left menu open **Build -> Authentication** and click **Get started**.
2. Under **Sign-in method** choose **Google**, switch it **Enable**, pick a support email, and **Save**.
3. Open **Authentication -> Settings -> Authorized domains** and click **Add domain**.
   Add your GitHub Pages domain, for example: `nirbhaysinghpatel799-source.github.io` (domain only, no https:// and no path).

## 3. Create the database
1. Open **Build -> Firestore Database** and click **Create database**.
2. Choose any location and start in **production mode**.
3. Open the **Rules** tab, replace everything with the rules below, and click **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

## 4. Get your web app config
1. Click the gear icon -> **Project settings** -> scroll to **Your apps** -> click the **</>** (Web) icon.
2. Give it a nickname, click **Register app**.
3. Copy the `firebaseConfig = { ... }` object it shows.

## 5. Put the config in the app
1. Open `firebase-config.js` in this folder and replace `null` with your config, like this:

```
window.FIREBASE_CONFIG = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```
2. Upload all files to your GitHub repository again (replace the old ones) and commit.
3. Open the app, wait a minute, reload with Ctrl+Shift+R.

## 6. Use it
- First device (has your tasks): **More -> Cloud sync -> Sign in with Google**. Your encrypted tasks are uploaded.
- Another device: open the app, tap **Sign in with Google to load my synced tasks** on the lock screen, then enter the SAME password.
- Changes sync automatically when you add, edit or tick tasks, when you reopen the app, and about once a minute.
- Fingerprint/PIN quick unlock is set up separately on each device.

## Notes
- The Firebase config values are not secret; the Firestore rules above protect your data.
- Use the same password on all devices. If you change it on one device, use the new one everywhere after it syncs.
- Free Firebase (Spark plan) is more than enough for a personal task app.
