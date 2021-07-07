import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="img-container">
                    <img src={`./assets/heroes/${ id }.jpg`} alt={superhero} />
                </div>
                <div className="card-text">
                    <h3>{superhero}</h3><br/>
                    <p>{alter_ego}</p><br/>
                    {
                    (alter_ego !== characters)
                    && <p>{characters}</p>
                    }
                <small>{first_appearance}</small><br/>
                    <Link className="btn" to={`./hero/${id}`}>Mas...</Link>
                </div>
            </div>
        </div>

    )
}
