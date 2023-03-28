import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom'

function CartaPoke() {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon'
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    const [imagenPokemon, setImagenPokemon] =useState('')
    const navigate = useNavigate()
    const volver = () => {
        navigate(`/pokemon`)
    }

    useEffect(() => {
        fetch(`${endpoint}/${id}`).then(resp => resp.json())
            .then(data => {
                setPokemon(data)
                setImagenPokemon(data['sprites']['other']['official-artwork']['front_default'])
            })
    }, [id])

    return (
        <div className='Carta'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagenPokemon} />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text>
                        Número: {pokemon.order}
                    </Card.Text>
                    <Card.Text>
                        Peso: {pokemon.weight}
                    </Card.Text>
                    <Card.Text>
                        Altura: {pokemon.height}
                    </Card.Text>
                    <Button variant="info" onClick={volver}>Volver</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartaPoke