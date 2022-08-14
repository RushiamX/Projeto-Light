import './styles.css'

import WaveYellow from '../../assets/images/wave-yellow.png'
import WaveBlue from '../../assets/images/wave-blue.png'
import WaveGray from '../../assets/images/wave-gray.png'

export default function Waves(){
    return(

        <div className="group__waves">
            <img className='image__waves' src={WaveGray} alt="gray" />
            <img className='image__waves' src={WaveYellow} alt="yellow" />
            <img className='image__waves' src={WaveBlue} alt="blue" />
            
            
        </div>

    )

}