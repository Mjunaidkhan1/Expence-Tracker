import './App.css';
import Traker from './Components/Traker';
import { TranProvider } from './Components/TranCntext';

function App() {
  return (
    <TranProvider>
      <Traker />
    </TranProvider>

  );
}

export default App;
