import './styles.css'
import Container from '../../components/Container';
import CardFormCalculation from '../../components/CardFormCalculation';
import Waves from '../../components/Waves';
import HeaderLogged from '../../components/HeaderLogged';
import FooterLogged from '../../components/FooterLogged';

export default function Login() {
    return(
        <Container>
            <HeaderLogged/>
            <div className="group__waves">
                <Waves/>
            </div>
            <div  className='main__calculation'>
                <CardFormCalculation/>
            </div>
            <FooterLogged/>
        </Container>

    );
};