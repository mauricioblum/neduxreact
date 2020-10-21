import { Provider } from 'react-redux';
import Catalog from '../components/Catalog';
import store from '../store';

export default function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}
