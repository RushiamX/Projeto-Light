import './styles.css';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Waves from '../../components/Waves';
import FooterLogged from '../../components/FooterLogged';

import logoDh from '../../assets/images/deh.png';


export default function Help() {
    return (
        <Container>
            <Header/>
            <div classeName="group__waves">
                <Waves/>
            </div>
            
            <main>
                <div className='help__descrition'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Sed, eveniet expedita
                        dolorum, amet ipsum suscipit tenetur, 
                        autem cupiditate eaque rerum sint similique 
                        delectus cum neque temporibus natus 
                        reprehenderit est facere.
                    </p>
                </div>

                <div className='help__information'>
                    <p>
                        Quer saber mais sobre os benefícios de usar esste tipo de energia clicando AQUI.
                    </p>
                </div>  
                <div>
                    <img src="" alt="" />
                    <img cla src={logoDh} alt="logo dh" />
                    <img src="" alt="" />
                </div>  
            </main>
            <FooterLogged/>
        </Container>
    );
};