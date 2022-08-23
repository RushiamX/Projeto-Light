import './styles.css';
import Container from '../../components/Container';
import Waves from '../../components/Waves';
import HeaderLogged from '../../components/HeaderLogged';
import FooterLogged from '../../components/FooterLogged';

import energySaving from '../../assets/images/energySaving.png';
import logoDh from '../../assets/images/dh.png';
import teamLight from '../../assets/images/teamLight.png';


export default function Help() {
    return (
        <Container>
            <HeaderLogged/>
            <div classeName="group__waves">
                <Waves/>
            </div>
            
            <div className='main__help'>
                <div className='help__description'>
                    <p className='description__energy'>
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Sed, eveniet expedita
                        dolorum, amet ipsum suscipit tenetur, 
                        autem cupiditate eaque rerum sint similique 
                        delectus cum neque temporibus natus 
                        reprehenderit est facere.
                    </p>
                </div>

                <div className='help__information'>
                    <p className='information__link'>
                        Quer saber mais sobre os benefícios de usar esste tipo de energia clicando 
                        <a href=''>AQUI.</a>
                    </p>
                </div> 
                <div className='help__images'>
                    <img className='images__energySaving' src={energySaving} alt="folha verde" />
                    <img className='images__logoDh' src={logoDh} alt="logo Digital House" />
                    <img className='images__teamLight' src={teamLight} alt="nome do time e da turma" />
                </div>   
            </div>
            <FooterLogged/>
        </Container>
    );
};