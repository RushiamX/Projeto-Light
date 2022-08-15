import './style.css'



export default function CardFromHistory({ children }) {
    return (
        <div className="card__history">
            <div className="div-title">
                <h4 className="title-card">histórico de uso</h4>
            </div>            
            <div className='card-dados'>
                <p className="dados-history">Ligaçõa: Monofásica</p>
                <p className="dados-history">Consumo Mensal: 8.62 KwP</p>
                <p className="dados-history">Potência Necessária: 8.62 KwP</p>
                <p className="dados-history">Guarulhos - SP</p>
                <p className="dados-history">12/07/2022</p>
            </div>
            <div className='card-dados'>
                <p className="dados-history">Ligaçõa: Monofásica</p>
                <p className="dados-history">Consumo Mensal: 8.62 KwP</p>
                <p className="dados-history">Potência Necessária: 8.62 KwP</p>
                <p className="dados-history">Guarulhos - SP</p>
                <p className="dados-history">12/07/2022</p>
            </div>
            {children}
        </div>
    )

}