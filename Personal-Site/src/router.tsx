import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ReactNode, useState } from "react";
import HomePage from "./pages/home/home"
import Notes from "./pages/notes";
import NotFound from "./pages/not found";

import Test from "./pages/test";
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
                    <Route path="/personal-site"
                        element={
                            <PageWrapper>
                                <HomePage />
                            </PageWrapper>
                        }
                    />
                    <Route path="/personal-site/notes"
                        element={
                            <PageWrapper>
                                <Notes />
                            </PageWrapper>
                        }
                    />
                    <Route path="/personal-site/test"
                        element={
                            <PageWrapper>
                                <Test />
                            </PageWrapper>
                        }
                    />
                    <Route path="/personal-site/ship-game"
                        element={
                            <PageWrapper>
                                <ShipGame />
                            </PageWrapper>
                        }
                    />
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

function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <motion.div
            // style={{ height: "100%", width: "100%" }}
            // Entering the page
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Exiting the page
            exit={{ opacity: 0, y: -20 }}
            // Transition Properties
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedRoutes;