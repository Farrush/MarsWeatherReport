import env from '../../enviroment/env'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Sol from '../../components/Sol'
import './index.scss'

const Main = () =>{
    const url = env.url
    // sol_keys
    const [solKeys, setSolKeys] = useState([])
    // sol -> at -> av = média, mn = mínima, mx = máxima em Fº
    const [temperatures, setTemperatures] = useState([])

    const [scale, setScale] = useState(2)

    useEffect(()=> {
        getData()
    }, [])
    async function getData(){
        await axios.get(url)
            .then(res => {
                const data = res.data
                setSolKeys(data["sol_keys"])

                const temps = data["sol_keys"].map((key)=> {
                    return {...data[key], key}
                })
                
                setTemperatures(temps)
            })
    }
    return(
        <div className='main-page'>
            <div className='top'>
                <h1>Mars Weather Report</h1>
                <h4>Monitoramento da temperatura da superfície de Marte em Elysium Planitia</h4>
            </div>
            <section className='temperatures'>
                <div className='botoes'>
                    <button className={scale === 0? "ativo": ""} onClick={() => setScale(0)}>Kº</button>
                    <button className={scale === 1? "ativo": ""} onClick={() => setScale(1)}>Cº</button>
                    <button className={scale === 2? "ativo": ""} onClick={() => setScale(2)}>Fº</button>
                </div>
                <div className='content'>
                    {temperatures.map(t => <Sol sol={t.key} temperature={[t.AT]} date={t.First_UTC} temp_scale={scale}/>)}
                </div>
            </section>
            <section className='elysium'>
                <p>Elysium Planitia é uma planície vulcânica de Marte e a segunda maior região vulcânica do planeta.</p>
                <p>É o local de pouso da sonda InSight lançada em 2018 com equipamentos para medição de condições meteorológicas e sísmicas do local.</p>
                <p className='insight-data'>
                    <h2>Dados sobre a missão</h2>
                    <ul>
                        <li>Lançamento: 5 de maio de 2018</li>
                        <li>Veículo de lançamento: Atlas V-401</li>
                        <li>Local de lançamento: Vandenberg Air Force Base, California</li>
                        <li>Data de pouso: 26 de novembro de 2018</li>
                        <li>Local de pouso: Elysium Planitia, Marte</li>
                        <li>Fim da missão: 15 de dezembro de 2022</li>
                    </ul>
                </p>
            </section>
        </div>
    )
}
export default Main