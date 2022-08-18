import './styles.css';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Waves from '../../components/Waves';
import FooterLogged from '../../components/FooterLogged';


export default function Help() {
    return (
        <Container>
            <Header/>
            <div classeName="group__waves">
                <Waves/>
            </div>
            
            <main>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sed, eveniet expedita
                dolorum, amet ipsum suscipit tenetur, 
                autem cupiditate eaque rerum sint similique 
                delectus cum neque temporibus natus 
                reprehenderit est facere.
            </main>

            <FooterLogged/>
        </Container>
    );
};