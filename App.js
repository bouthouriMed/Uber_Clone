import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./Redux/store/configureStore";
import Home from "./screens/Home";

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
