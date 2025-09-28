import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react";
import HomePage from "./pages/home"
import Goals from "./pages/goals"
import Notes from "./pages/notes";
import CTFNotesAndWriteups from "./pages/CTF notes and writeups";
import ThemeSwitch from "./components/theme switch/theme-switch";
import Navbar from "./components/navbar/navbar";
import Shapes from './pages/shapes/shapes';
import Sudoku from "./pages/sudoku/sudoku";
import NotFound from "./pages/not found";
import BehaviourTreePage from "./pages/behaviour tree visual editor/behaviour tree";

function AnimatedRoutes() {
    const location = useLocation();


    return (
        <>
        <Navbar />
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/personal-site"
                    element={ 
                        <PageWrapper>
                            <HomePage /> 
                        </PageWrapper>
                    }  
                    />
                <Route path="/personal-site/goals" 
                    element={
                        <PageWrapper>
                            <Goals />
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
                <Route path="/personal-site/ctf-notes"
                    element={
                        <PageWrapper>
                            <CTFNotesAndWriteups />
                        </PageWrapper>
                    }
                    />
                <Route path="/personal-site/shapes"
                    element={
                        <PageWrapper>
                            <Shapes />
                        </PageWrapper>
                    }
                    />
                <Route path="/personal-site/sudoku"
                    element={
                        <PageWrapper>
                            <Sudoku />
                        </PageWrapper>
                    }
                    />
                <Route path="/personal-site/behaviour-tree-visual-editor"
                    element={
                        <PageWrapper>
                            <BehaviourTreePage />
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
        <ThemeSwitch />
        </>
    )
}

function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <motion.div 
            style={{ height: "100%", width: "100%" }}
            // Entering the page
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Exiting the page
            exit={{ opacity: 0, y: -20 }}
            // Transition Properties
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedRoutes;