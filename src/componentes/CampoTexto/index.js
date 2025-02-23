import './CampoTexto.css'

const CampoTexto = (props) => {

    // let valor = ''

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type="text" value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>

        </div>
    )

}

export default CampoTexto;