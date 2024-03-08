import styles from './Main.module.css'

const Main = () => {
    return(
        <>
            <div id={styles.container}>
                <div id={styles.conteudo}>
                    <h1><span>ECO<br/></span>TECH SOLAR PANELS</h1>
                    <p>Consectetur consequat irure id nostrud laboris pariatur est incididunt eiusmod consectetur eiusmod sunt dolor incididunt.</p>
                </div>
                <form>
                    <div id={styles.formu}>
                        <h4>RECEBA UMA MÉDIA DE COTAÇÃO PARA INSTLAÇÃO DE PAINEL SOLAR RESIDENCIAL OU EMPRESARIAL</h4>
                        <div>
                            <label for="nome">Nome</label>
                            <input id={styles.nome} title="Nome"></input>
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input id={styles.email} title="Email"></input>
                        </div>
                        <div>
                            <label for="telefone">Telefone</label>
                            <input id={styles.telefone} title="Telefone"></input>
                        </div>
                        <div>
                            <label for="tipo">Tipo de instalação</label>
                            <select id={styles.tipo} title="Tipo de instalação">
                                <option>Residencial</option>
                                <option>Empresarial</option>
                            </select>
                        </div>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Main