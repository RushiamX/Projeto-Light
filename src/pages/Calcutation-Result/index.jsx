import './styles.css'
import Header from '../../components/Header';
import Container from '../../components/Container';
import FooterLogged from '../../components/FooterLogged';
import CardFormResult from '../../components/CardFormResult';
import Waves from '../../components/Waves';

export default function Results() {
    return(
        <Container>
            <Header/>

            <div className="group__waves">
                <Waves/>
            </div>

            <main>
                <CardFormResult/>
            </main>
            
            <FooterLogged/>
        </Container>
    );
};