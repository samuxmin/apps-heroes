import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import {heroes} from '../../data/heroes.js'
import { useForm } from '../../hooks/useForm.js';
import { HeroCard } from '../heroes/HeroCard.js';

export const SearchScreen = ({history}) => {


    const {q = ''} = queryString.parse(useLocation().search)

    const [ values, handleInputChange] = useForm({search:q})
    const { search } = values
    
    const getHeroesByName = ( name ) => {
        if(!name){return []}
        
        name = name.toLowerCase();
        return heroes.filter(hero=> hero.superhero.toLowerCase().includes(name))
    }
    const heroesFiltered = useMemo(()=>getHeroesByName(q),[q]);
    

    const handleSearch = (e) =>{
        e.preventDefault()
        history.push(`?q=${search}`)
    }
    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="search-container">
                <div className="search">
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            name='search'
                            type='text'
                            placeholder='Find your hero'
                            className='search-input'
                            onChange={handleInputChange}
                            value={search}
                            autoComplete='off'
                            />
                            <button
                                type='submit'
                                className='btn btn-search'
                            >Search...</button>
                    </form>
                </div>
                <div className="search-results">
                    <h2>Results</h2>
                    <hr />
                    {(q==='') 
                    && 
                    <div className="aviso"
                        >Search a hero
                    </div>}
                    {
                        (q!=="" && heroesFiltered.length=== 0) && <div className="aviso">No hero found with {q}</div>
                    }
                    {
                        heroesFiltered.map(hero =>(<HeroCard key={hero.id} {...hero}/>))
                    }
                </div>
            </div>
        </>
    )
}
