import styled from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function App() {
  const someVarHere = "123332"

  some()

  function some(): unknown {
    console.log()
    return ''
  }

  return (
    <Provider store={store}>
      <StyledWrapper>HELLO ! ! ! ! </StyledWrapper>
    </Provider>
  );
}

export const StyledWrapper = styled.div`
    font-size: 30px;
`;
