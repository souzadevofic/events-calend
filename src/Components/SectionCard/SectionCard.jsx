import { ButtonCard } from '../ButtonCard/ButtonCard'
import './SectionCard.css'

export function SectionCard() {
    return (
        <>
            <div className='color-bg'>
                <section className='ContainerSectionCard'>
                    <div className='container-title-card'>
                        <h1>Eventos em Destaque</h1>
                    </div>
                    <div className='container-collection'>
                        <div className='collection-1'>
                            <div className='oferta'>
                                09:00 às 10:00 28/09/2024
                            </div>
                            <div className='title-card'>
                                <h3>Reunião da Qualidade</h3>
                            </div>
                            <ButtonCard/>
                        </div>
                        <div className='collection-2'>
                            <div className='oferta'>
                            09:00 às 10:00 28/09/2024
                            </div>
                            <div className='title-card'>
                                <h3>Siará Tech Summit</h3>
                            </div>
                            <ButtonCard/>
                        </div>
                        <div className='collection-3'>
                            <div className='oferta'>
                                 09:00 às 10:00 28/09/2024
                            </div>
                            <div className='title-card'>
                                <h3>Festa de Fim de Ano</h3>
                            </div>
                            <ButtonCard/>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
