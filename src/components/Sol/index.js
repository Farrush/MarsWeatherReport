import './index.scss'
import {FtoC, FtoK, dateFormatter} from '../../utils/converter.js'

const Sol = ({sol, temperature, date, temp_scale}) => {
    // temperature = [{av, mn, mx}]
    const scales = ['K', 'C', 'F']

    function convert(conversion, temp){
        return conversion(temp)
    }
    return(
        <div className="sol-component">
            <h1>Sol {sol}</h1>
            <h2>{dateFormatter(date)}</h2>
            {temperature.map((t) => {
                if(scales[temp_scale] === 'C')
                    t = {mx: convert(FtoC, t.mx), mn: convert(FtoC,t.mn), av: convert(FtoC,t.av)}

                if(scales[temp_scale] === 'K')
                    t = {mx: convert(FtoK, t.mx), mn: convert(FtoK,t.mn), av: convert(FtoK,t.av)}
                return(
                    <div>
                        <h2>Máx. {t.mx.toFixed(0)} {scales[temp_scale]}º</h2>
                        <h2>Min. {t.mn.toFixed(0)} {scales[temp_scale]}º</h2>
                        <h2>Méd. {t.av.toFixed(0)} {scales[temp_scale]}º</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Sol