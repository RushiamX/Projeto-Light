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
            <Waves className="group__waves"/>

            <main>
                <CardFormResult/>
            </main>
            
            <FooterLogged/>
    </Container>

        )
}