import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import HomePage from "./home"
import Goals from "./goals"

function AnimatedRoutes() {
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/goals" element={<Goals />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;