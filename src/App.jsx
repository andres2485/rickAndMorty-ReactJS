import { useState } from "react"
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"

const App = () => {
    //envio setNombrePersonaje a formulario y recibe como props
    const [nombrePersonaje, setNombrePersonaje] = useState('')

    return (
        <>
            <div className="container">
                <h1>App Rick and Morty</h1>
                <Formulario setNombrePersonaje={setNombrePersonaje} />
                {/* setNombrePersonaje viene seteado con formulario y se le envia const nombre personaje con el nombre */}
                <PintarDatos nombrePersonaje={nombrePersonaje} />

            </div>
        </>
    )
}

export default App