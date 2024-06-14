# Hosting a Simple React App in Firebase

## Prerequisites
- Node version (v.18.12.0)
- NPM version (v.8.1.0)
- Git
- VS Code (IDE)

## Step-by-Step Guide

### Check Node and NPM Version
Ensure you have the correct versions of Node and NPM installed.

### Create React Application

1. **Choose File Location and create react project**
   ```sh
   npx create-react-app ./

2. **Do necessary changes and run the application**
   ```sh
   npm start


### Create Firebase Project

1. **Access Firebase Console**
   - Visit the Firebase official site.
   - Sign in using your Gmail account and navigate to the console.

2. **Create a Project**
   - Click on "Create a project" and set a project name (e.g., `react-firebase`).

3. **Disable Google Analytics**
   - Disable Google Analytics for the project and continue.

4. **Register Your App**
   - Click on "Web" to host a web application.
   - Register your app by providing a name and enabling the Firebase hosting option.
   - Click on "Register app".

5. **Install Firebase**
   - Install Firebase in your React application.

6. **Configure Firebase**
   - Create a `firebaseConfig.js` file in your project and add the configuration details provided by Firebase.

7. **Install Firebase CLI**
   - Install the Firebase CLI in your React application.

### Deploy and Host the React Application on Firebase

1. **Login to Firebase CLI**
   - Login using the Gmail account associated with your Firebase project.
   ```sh
   $ firebase login

2. **Initialize the Project**
   - Initialize your Firebase project..
   ```sh
   $ firebase init

3. **Build the React Project**
   - Create and build your React project.
   ```sh
   npm run build

4. **Deploy the Project**
   - Deploy your project to Firebase.
   ```sh
   $ firebase init
