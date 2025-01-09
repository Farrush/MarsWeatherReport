import env from '../../enviroment/env'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './index.scss'

const Main = () =>{
    const url = env.url
    // sol_keys
    const [solKeys, setSolKeys] = useState([])
    // sol -> at -> av = média, mn = mínima, mx = máxima em Fº
    const [temperatures, setTemperatures] = useState([])

    useEffect(()=> {
        getData()
    }, [])
    async function getData(){
        await axios.get(url)
            .then(res => {
                const data = res.data
                setSolKeys(data["sol_keys"])

                const temps = data["sol_keys"].map((key)=> {
                    return data[key]
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
                {temperatures.map(t => <p>{t.AT.mn}Fº</p>)}
            </section>
            <section className='elysium'>
                <p>Elysium Planitia é uma planície vulcânica de Marte e a segunda maior região vulcânica do planeta.</p>
                <p>É o local de pouso da sonda InSight lançada em 5 de maio de 2018 equipada com um sismógrafo e um medidor de fluxo de calor.</p>
            </section>
        </div>
    )
}
export default Main