import './animated text.css';

function AnimatedText({ children } : { children: React.ReactNode }) {
    return (
        <div className="animatedText">
            {children}
        </div>
    );
}

export default AnimatedText;