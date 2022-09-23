const formCriar = () => {

    return(
        <>

            <input type="text" size="35" value={pessoaNome}
                onChange={event => setPessoaNome(event.target.value)} />
            <div></div>

            <br />

            <input type="text" size="35" value={pessoaEmail}
                onChange={event => setPessoaEmail(event.target.value)} />
            <div></div>

            <br />

            <input type="text" size="35" value={pessoaFone}
                onChange={event => setPessoaFone(event.target.value)} />
            <div></div>

            <br />

            <input type="text" size="35" value={pessoaCargo}
                onChange={event => setPessoaCargo(event.target.value)} />
            <div></div>

            <br />

            <input type="text" size="50" value={pessoaHistorico}
                onChange={event => setPessoaHistorico(event.target.value)} />
            <div></div>

            <br />

            <br />
            <input type="button" value="Salvar" onClick={save}/>

        </>
    )
}

export default formCriar;