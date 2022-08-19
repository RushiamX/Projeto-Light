import './styles.css';
import Container from '../../components/Container';
import Waves from '../../components/Waves';
import Footer from '../../components/Footer';
import HeaderLogged from '../../components/HeaderLogged';
import FooterLogged from '../../components/FooterLogged';


export default function Help() {
    return (
        <Container>
            <HeaderLogged/>
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
            </main>

            <FooterLogged/>
            {/* <FooterLogged/> */}
        </Container>
    );
};