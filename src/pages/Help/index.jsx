import './styles.css';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Waves from '../../components/Waves';
import Footer from '../../components/Footer';
// import FooterLogged from '../../components/FooterLogged';


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
            </main>

            <Footer/>
            {/* <FooterLogged/> */}
        </Container>
    );
};