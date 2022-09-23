import { render } from "@testing-library/react";
import { useEffect, useState } from "react"

const App = () => {

    const [curriculo, setCurriculo] = useState('');
    let [editando, setEditando] = useState(false);

    if(!curriculo && !editando){
        return (
            <>
                <br />
                <input type="button" value="Criar Curriculo" onClick={render()} />
            </>
        )
    }

    if(!editando){
        return (
            <>
                <br />
                <input type="button" value="Salvar" onClick={setEditando=false} />
            </>
        )
    }

    return (
        <>
            <br />
            <input type="button" value="Editar" onClick={setEditando=true} />
        </>
    )
}

export default App;