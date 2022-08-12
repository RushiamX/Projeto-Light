
import './App.css';

import InputEmail from './components/InputEmail';
import ButtonLogin from './components/ButtonLogin';
import InputSenha from './components/InputSenha';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <Header />
        </div>
      <div className='App__grey-box'>
        <div className='App__main'>
          <InputEmail />
          <InputSenha />
          <ButtonLogin>Entrar</ButtonLogin>
        </div> 
      </div>
      <div className='App__footer'>
          <Footer />
      </div>
    </div>  
      
  );
}

export default App;
