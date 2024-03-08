import styles from './Header.module.css'

const Header = () => {
    return(
        <>
            <header>
                <div id={styles.container}>
                    <div id={styles.logo}>
                        <a href="/" title="home page">
                            <h1>FOTOVOLTS</h1>
                        </a>
                    </div>{/*end logo */}
                    <div id={styles.nav_container}>
                        <nav>
                            <ul>
                                <li><a href="/sobre" title="Sobre Nós">Sobre Nós</a></li>
                                <li><a href="/servicos" title="Nossos Seviços">Nossos Seviços</a></li>
                                <li><a href="/contatos" title="Contato">Contatos</a></li>
                            </ul>  
                        </nav>
                        <div id={styles.header_actions}>
                            <a href="/orcamento" id={styles.btn_orcamento}>Simular Orçamento</a>
                        </div>{/*end header-actions*/}
                    </div> {/*end container */}
                </div>
            </header>
        </>
    )
}

export default Header

