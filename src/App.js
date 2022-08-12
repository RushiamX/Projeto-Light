
import './App.css';

import InputEmail from './components/InputEmail';
import ButtonLogin from './components/ButtonLogin';
import InputSenha from './components/InputSenha';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <InputEmail />
      <InputSenha />
      <ButtonLogin>Entrar</ButtonLogin>
    </div>
  );
}

export default App;
