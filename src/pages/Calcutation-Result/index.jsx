import './styles.css'
import HeaderLogged from '../../components/HeaderLogged';
import Container from '../../components/Container';
import FooterLogged from '../../components/FooterLogged';
import CardFormResult from '../../components/CardFormResult';
import Waves from '../../components/Waves';

export default function Results() {
    return(
        <Container>
            <HeaderLogged/>

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