import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/SelectTYpe.css'

const SelectType = ({setTypeSelected}) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [ types, geTypes ] = useFetch(url)

    useEffect(() => {
        geTypes()
    }, [])

    const typeRef = useRef()


    const handleChange = () => (
        setTypeSelected(typeRef.current.value)
    )

  return (
    <select className='select' ref={typeRef} onChange={handleChange}>
        <option value='allPokemons' >All Pokemons</option>
        {     
            types?.results.map(type =>(
                <option key={type.url} value={type.url}>{type.name}</option>
            ))


        }
    </select>
  )
}

export default SelectType