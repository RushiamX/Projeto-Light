import './styles.css'
import Container from '../../components/Container';
import HeaderLogged from '../../components/HeaderLogged';
import FooterLogged from '../../components/FooterLogged';
import Waves from '../../components/Waves';
import CardFromHistory from '../../components/CardFromHistory';

export default function History() {
    return (
        <Container>
            <HeaderLogged />
            <div className="group__waves">
                <Waves />
            </div>
            <main className="main">
                <CardFromHistory />
            </main>
      
            <FooterLogged />
           
        </Container>
    );
};