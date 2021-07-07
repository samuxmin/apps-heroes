import React from 'react'
import { Switch,Route, Redirect } from 'react-router-dom'
import { DcScreen } from '../component/dc/DcScreen'
import { HeroScreen } from '../component/heroes/HeroScreen'
import { AllHeroes } from '../component/main/AllHeroes'
import { MarvelScreen } from '../component/marvel/MarvelScreen'
import { SearchScreen } from '../component/search/SearchScreen'
import { Navbar } from '../component/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className='app'>
                <Switch>
                    <Route exact path='/' component={AllHeroes}/>
                    <Route exact path='/search' component={SearchScreen} />
                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/hero/:heroeId" component={ HeroScreen }/>
                    <Route exact path="/dc" component={ DcScreen }/>

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
}
