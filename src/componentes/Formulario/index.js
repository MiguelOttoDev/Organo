import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = (props) =>{


    const aoSalvar = (evento) => {
        evento.preventDefault()
        alert('Card criado com sucesso!')
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setcargo('')
        setimagem('')
        setTime('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setcargo] = useState('')
    const [imagem, setimagem] = useState('')
    const [time, setTime] = useState('')


    return(

        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preecha os dados para criar o card do colaborador</h2>
                
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder = "Digite seu nome" 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} />
                
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder= "Digite seu cargo" 
                    valor={cargo} 
                    aoAlterado={valor => setcargo(valor)} />
                
                <CampoTexto  
                    label="Imagem" 
                    placeholder= "Informe o endereço da imagem" 
                    valor={imagem} 
                    aoAlterado={valor => setimagem(valor)} />
                
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time"  
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}  
                    />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )

}

export default Formulario