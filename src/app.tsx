import styled from 'styled-components'
import { Provider } from 'react-redux'
import { store } from '@/store'

export default function App() {
    return (
        <Provider store={store}>
            <StyledWrapper>HELLO ! ! ! ! </StyledWrapper>
        </Provider>
    )
}

const StyledWrapper = styled.div`
    font-size: 30px;
`