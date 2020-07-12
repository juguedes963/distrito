import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Componets/pags/home'
export default function Routers() {
    return (
        <BrowserRouter>
            <Switch >
                <Route path="/" exact component={Home} />
               
              
            </Switch>
        </BrowserRouter>
    )
}