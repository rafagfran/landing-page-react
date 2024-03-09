import style from './EconomySimulator.module.css';
import React, { useState } from 'react';
import { Chart } from 'react-google-charts';


const EconomySimulator = () => {
    const [options, setOptions] = useState({
        title: 'grafico de barra'
    });
    const [data, setData] = useState([
        ['Gastos', 'valores'],
        ['Gasto Atual', 5000],
        ['Gasto placa solar', 3000],
    ]);
    return (
        <section className={style.economy_simulator}>
            <div className={style.container}>
                <div className={style.graphic}>
                    <Chart 
                        width={'100%'}
                        height={'100%'}
                        chartType='ColumnChart'
                        data={data}
                        options={options}
                    />
                </div>

                <div className={style.userInputs}>
                    <div>
                        <label for="consumoAtual">Consumo atual</label>
                        <input id={style.consumoAtual} title="Consumo atual"></input>
                    </div>
                    <div>
                        <label for="localGeo">Localização graografica</label>
                        <input id={style.localGeo} title="Localização graografica"></input>
                    </div>
                    <div>
                        <label for="modeloPlaca">Modelo da placa</label>
                        <input id={style.modeloPlaca} title="Modelo da placa"></input>
                    </div>
                    <div>
                        <label for="valorAtual">Valor atual da energia</label>
                        <input id={style.valorAtual} title="Valor atual da energia"></input>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EconomySimulator;