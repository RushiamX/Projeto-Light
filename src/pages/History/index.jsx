import './styles.css'
import Container from '../../components/Container';
import HeaderLogged from '../../components/HeaderLogged';
import FooterLogged from '../../components/FooterLogged';
import CardFromHistory from '../../components/CardFromHistory';

export default function History() {
    return (
        <Container>
            <HeaderLogged />

            <div className="main__history">
                <CardFromHistory />
            </div>

            <FooterLogged />

        </Container>
    );
};