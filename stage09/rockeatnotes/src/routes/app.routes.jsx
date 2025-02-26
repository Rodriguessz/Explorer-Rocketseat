import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Profile } from '../pages/Profile'
import { New } from '../pages/New'


export const AppRoutes = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home /> }/>
                <Route path='/details/:id' element={<Details />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/new' element={<New />} />

                {/* Rota coringa - Utilizada para capturar rotas não definidas */}
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </>
    )
} 

