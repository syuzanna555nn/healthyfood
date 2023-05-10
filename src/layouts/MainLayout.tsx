import React from "react";
import { Routes, Route } from "react-router-dom";
import {Login} from "../pages/login";
import {Dashboard} from "../pages/dashboard";
import {Landing} from "../pages/landing";
import {Menu} from "../pages/menu/menu";

export const MainLayout:React.FC = () => {
    return <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
}