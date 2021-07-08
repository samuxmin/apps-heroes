import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const {heroeId} = useParams();
    const hero = useMemo(() =>  getHeroById(heroeId) , [heroeId]);
   
    if(!hero){
        return <Redirect to='/' />
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () =>{
        if(history.length <=2){
            history.push('/')
        }else{
            history.goBack()
        }
    }
    return (
    <div className="animate__animated animate__bounceIn heroscreen">
        <div img-container>
            <h1>{superhero}</h1>
            <img className="superheroe"
                src={`./assets/heroes/${heroeId}.jpg`}
                alt={superhero}
            />
        </div>
        <div className="hero-text">
            <h3>{superhero}</h3>
            <ul>
                <li><b>Alter ego: {alter_ego}</b></li>
                <li><b>Publisher: {publisher}</b></li>
                <li><b>First appearance: {first_appearance}</b></li>
            </ul>
            <h5>Characters:</h5>
            <p>{characters}</p>

            <button className="btn"
                onClick={handleReturn}
            >Return</button>
        </div>
        </div>
    )
}
