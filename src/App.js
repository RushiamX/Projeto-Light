
import './App.css';

import InputEmail from './components/InputEmail';
import ButtonLogin from './components/ButtonLogin';
import InputSenha from './components/InputSenha';

function App() {
  return (
    <div className="App">
     <InputEmail />
     <InputSenha />
     <ButtonLogin>Entrar</ButtonLogin>
    </div>
  );
}

export default App;
