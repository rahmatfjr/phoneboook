import UsersBox from "./components/UsersBox";
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
    <UsersBox />
    </Provider>
  );
}
