import { Provider } from 'react-redux';
import store from '@/store';
import Card from '@/app/create-pdf-card-flow/card.container';

export default function App() {
  return (
    <Provider store={store}>
      <Card />
    </Provider>
  );
}
