import './styles.css'
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import CardFormLogin from '../../components/CardFormLogin';
import Waves from '../../components/Waves';

export default function Login() {
    return(
        <Container>
            <Header/>
            <div className="group__waves">
                <Waves/>
            </div>
            <div className='main__login'>
                <CardFormLogin/>
            </div>
            <Footer/>
        </Container>

    );
};