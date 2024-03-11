import style from './EconomySimulator.module.css';
import { ComposedChart,Line,Area,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer } from 'recharts';

const gastoAtual = 80000;
const gastoSolar = 55555;

const data = [ 
    {name: "Uso atual", Gasto: gastoAtual},
    {name: "Uso energia solar", Gasto: gastoSolar}
]

const EconomySimulator = () => {

    return (
        <section className={style.economy_simulator}>        
            <div className={style.container}>
                {/* Construção do grafico */}
                <div className={style.graphic}>
                    <ResponsiveContainer width="100%" height="90%">
                            <ComposedChart

                            data={data}
                            margin={{
                                top: 20
                            }}
                            >
                            
                            <XAxis dataKey="name" scale="auto" stroke="#fff" />
                            <YAxis stroke="#fff"/>
                            <Tooltip />
                            <Bar dataKey="Gasto" barSize={50} fill="yellow" />
                            <Line type='linearClosed'dataKey="Gasto" stroke="white"/>
                        </ComposedChart>
                    </ResponsiveContainer>        
               </div> {/* Graphic */}

                {/* Entradas de usuário */}
                <div className={style.userInputs}>
                    <span>Simular economia</span>
                    <div>
                        <label for="consumoAtual">Consumo atual</label>
                        <input id={style.consumoAtual} title="Consumo atual"></input>
                    </div>
                    <div>
                        <label for="localGeo">Localização geografica</label>
                        <input id={style.localGeo} title="Localização geografica"></input>
                    </div>
                    <div>
                        <label for="modeloPlaca">Modelo da placa</label>
                        <input id={style.modeloPlaca} title="Modelo da placa"></input>
                    </div>
                    <div>
                        <label for="valorAtual">Valor atual da energia</label>
                        <input id={style.valorAtual} title="Valor atual da energia"></input>
                    </div>
                    <button>Simular</button>
                </div> {/* UserInputs */}
            </div>
        </section>
    )
}

export default EconomySimulator;