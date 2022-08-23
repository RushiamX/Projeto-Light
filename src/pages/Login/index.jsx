import './styles.css'
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import CardFormLogin from '../../components/CardFormLogin';

export default function Login() {
    return(
        <Container>
            <Header/>

            <div className='main__login'>
                <CardFormLogin/>
            </div>
            
            <Footer/>
        </Container>

    );
};