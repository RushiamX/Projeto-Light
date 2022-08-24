import './styles.css'
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import CardFormCadastro from '../../components/CardFormCadastro';


export default function SignUp() {
    return (
        <Container>
            <Header/>

            <div className='main__singup'>
                <CardFormCadastro/>
            </div>

            <Footer/>
        </Container>
    );
};