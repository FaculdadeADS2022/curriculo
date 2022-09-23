import { useState } from "react"

const CurriculoForm = () => {
    const [pessoaNome, setPessoaNome] = useState('')
    const [pessoaEmail, setPessoaEmail] = useState('')
    const [pessoaFone, setPessoaFone] = useState('')
    const [pessoaCargo, setPessoaCargo] = useState('')
    const [pessoaHistorico, setPessoaHistorico] = useState('')

    const save = () => {
        const curriculo = {
            pessoaNome,
            pessoaEmail,
            pessoaFone,
            pessoaCargo,
            pessoaHistorico,
        }

//        onSave(curriculo)
        clearForm()
    }

    const clearForm = () => {
        setPessoaNome('')
        setPessoaEmail('')
        setPessoaFone('')
        setPessoaCargo('')
        setPessoaHistorico('')
    }

    return(
        <>

            <input type="text" size="35" value={pessoaNome} placeholder="Nome"
                onChange={event => setPessoaNome(event.target.value)} />
            <div></div>

            <br />

            <input type="text" size="35" value={pessoaEmail} placeholder="Email"
                onChange={event => setPessoaEmail(event.target.value)} />
            <div></div>

            <br />

            <input type="text" size="35" value={pessoaFone} placeholder="Telefone"
                onChange={event => setPessoaFone(event.target.value)} />
            <div></div>

            <br />

            <input type="text" size="35" value={pessoaCargo} placeholder="Cargo"
                onChange={event => setPessoaCargo(event.target.value)} />
            <div></div>

            <br />

            <input type="text" size="50" value={pessoaHistorico} placeholder="Historico"
                onChange={event => setPessoaHistorico(event.target.value)} />
            <div></div>

            <br />

            <br />
            <input type="button" value="Salvar" />

        </>
    )
}

export default CurriculoForm;