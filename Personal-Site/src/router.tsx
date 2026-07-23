import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useState } from "react";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import { vectorCalculusRouter } from "./vector calculus/components/VectorCalculusRouter";
import HomePage from "./pages/home/home"
import Notes from "./pages/notes";
import NotFound from "./pages/not found";

import Test from "./pages/test";
import JJ from "./pages/jj/jj";
import ShipGame from "./pages/ship game/ShipGame";
import ShipGameButton from "./pages/ship game/ShipGameButton";


function AnimatedRoutes() {
    const location = useLocation();
    const [isShipGameOpen, setIsShipGameOpen] = useState(false);
    const toggleShipGame = () => {
        setIsShipGameOpen(prev => !prev);
    }

    return (
        <>
            {/* <Navbar /> */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/"
                        element={
                            <PageWrapper>
                                <HomePage />
                            </PageWrapper>
                        }
                    />
                    <Route path="/notes"
                        element={
                            <PageWrapper>
                                <Notes />
                            </PageWrapper>
                        }
                    />
                    <Route path="/test"
                        element={
                            <PageWrapper>
                                <Test />
                            </PageWrapper>
                        }
                    />
                    <Route path="/jj"
                        element={
                            <PageWrapper>
                                <JJ />
                            </PageWrapper>
                        }
                    />
                    <Route path="/ship-game"
                        element={
                            <PageWrapper>
                                <ShipGame />
                            </PageWrapper>
                        }
                    />

                    {vectorCalculusRouter}

                    <Route path="*"
                        element={
                            <NotFound />
                        }
                    />
                </Routes>
            </AnimatePresence>
            <ShipGameButton onClick={() => toggleShipGame()} />
            {isShipGameOpen && <ShipGame />}

        </>
    )
}


export default AnimatedRoutes;