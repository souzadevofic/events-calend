import React from 'react';
import { Routes, Route } from "react-router-dom"
import { HomePage } from '../Pages/HomePage/HomePage'
import { Login } from "../Pages/Login/Login"
import { CadUser } from "../Components/CadUser/CadUser"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} /> 
            <Route path="/createAccount" element={<CadUser/>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
