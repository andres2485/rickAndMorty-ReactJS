import { useState } from "react"
import { useFormulario } from "../hooks/useFormulario"
import Swal from "sweetalert2"

// setNombrePersonaje viene de App y se destructura
const Formulario = ({ setNombrePersonaje }) => {

    const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    })

    const { nombre } = inputs

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre);
        if (!nombre.trim()) {
            return Swal.fire({
                title: 'Error!',
                text: 'Escriba algo por favor',
                icon: 'error'
            });
        }
        // le mando el nombre a setNombrePersonaje que viene de app
        setNombrePersonaje(nombre.trim().toLowerCase())
        reset()
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type='text'
                placeholder='Ingresa personaje'
                className='form-control mb-2'
                value={nombre}
                name='nombre'
                onChange={handleChange}
            />
            <button type='submit' className="btn btn-dark">Buscar</button>
        </form>
    )
}

export default Formulario