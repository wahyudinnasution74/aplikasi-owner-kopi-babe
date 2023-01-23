import { NativeBaseProvider } from "native-base";

import { light } from "./src/theme/light";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Navigator from "./src/component/Navigator";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={light}>
        <Navigator />
      </NativeBaseProvider>
    </Provider>
  );
}
