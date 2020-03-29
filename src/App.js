import React from 'react';
import styled from 'styled-components';

function App() {
    return (
        <Main className="App">
            <h1>React Hook Form</h1>
            <form>
                <label>Email</label>
                <input />
            </form>
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
        display: block;
    }
`;



export default App;
