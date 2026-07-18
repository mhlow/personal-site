import { ReactNode } from "react";
import { motion } from "framer-motion";

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
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper;