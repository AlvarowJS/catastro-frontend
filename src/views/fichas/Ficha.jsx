import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

const Ficha = () => {
    const navigate = useNavigate()

    const registrarFicha = () => {
        navigate('/registrar-ficha-individual')
    }
    return (
        <div>
            <Button color='primary' onClick={registrarFicha}> + Registrar Ficha</Button>

        </div>
    )
}

export default Ficha