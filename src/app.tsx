import { Provider } from 'react-redux';
import store from '@/store';
import Card from './card/card';

export default function App() {
  const someVarHere = "123332"

  some()

  function some(): unknown {
    console.log()
    return ''
  }

  return (
    <Provider store={store}>
      <Card />
    </Provider>
  );
}
