import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home';

const Stack = createStackNavigator();


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9-HjBaUT1EH4PeRvF9qQ32Mwux9eiJBs",
  authDomain: "fir-2ccf5.firebaseapp.com",
  projectId: "fir-2ccf5",
  storageBucket: "fir-2ccf5.appspot.com",
  messagingSenderId: "894361905722",
  appId: "1:894361905722:web:b7b7aee06ce0d8f0de2303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}