import styled from 'styled-components';
import { ToDoContainer } from './components/ToDoContainer.tsx';

const WrapperApp = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <WrapperApp>
      <ToDoContainer />
    </WrapperApp>
  );
}

export default App;
