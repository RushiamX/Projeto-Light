import './styles.css'
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import CardFormCalculation from '../../components/CardFormCalculation';
import Waves from '../../components/Waves';

export default function Login() {
    return(
    <Container>
            <Header/>
            <div className="group__waves">
            <Waves/>

            </div>
            <main>
                <CardFormCalculation/>
            </main>
            <Footer/>
    </Container>

        )
}