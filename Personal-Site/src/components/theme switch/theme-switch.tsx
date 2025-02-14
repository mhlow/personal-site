import { useState } from "react";

/* CSS */
const themeSwitchStyles = {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    width: "56px",
    height: "56px",
    overflow: "hidden",
    // border: "2px solid red",
    cursor: "pointer",
    padding: "0",
    border: "2px solid var(--icon-default)", 
    borderRadius: "50%",
    background: "var(--icon-neutral)",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    transition: "all 0.25s",
    "&:hover": {
        background: "rgba(0, 0, 0, 0.1)"
    },
} as React.CSSProperties;

const iconContainerStyles = {
    width: "120px",
    height: "100%",
    display: "flex",
    flex: "none",
    flexWrap: "nowrap"
} as React.CSSProperties;

function ThemeSwitch() {
    // document.documentElement.setAttribute("data-theme", "dark");
    let darkmode : String | null = localStorage.getItem("darkmode");
    // console.log("darkmode is", darkmode);
    if (!darkmode) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            // console.log("detected dark mode");
            darkmode = "enabled";
            localStorage.setItem("darkmode", "enabled");
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            // console.log("detected light mode");
            darkmode = "disabled";
            localStorage.setItem("darkmode", "disabled");
        }
    }

    if (darkmode === "enabled") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    const toggleTheme = () => {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("darkmode", "disabled");
            setTransformAmount(0);
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("darkmode", "enabled");
            setTransformAmount(-52);
        }
    }

    const [transformAmount, setTransformAmount] = useState(0);
    const sunMoonIconStyles = {
        margin: "2px",
        position: "relative",
        transform: `translateX(${transformAmount}px)`,
        transition: "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    } as React.CSSProperties;

    return (
        <button id="theme-switch" aria-label="Switch Theme" style={themeSwitchStyles} onClick={toggleTheme}>
            <div style={iconContainerStyles}>
                <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={sunMoonIconStyles}>
                    {/* Sun Rays */}
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12Z" fill="#1C274C"/>
                    <g opacity="0.5">
                    <path d="M4.39838 4.39838C4.69127 4.10549 5.16615 4.10549 5.45904 4.39838L5.85188 4.79122C6.14477 5.08411 6.14477 5.55898 5.85188 5.85188C5.55898 6.14477 5.08411 6.14477 4.79122 5.85188L4.39838 5.45904C4.10549 5.16615 4.10549 4.69127 4.39838 4.39838Z" fill="#1C274C"/>
                    <path d="M19.6009 4.39864C19.8938 4.69153 19.8938 5.16641 19.6009 5.4593L19.2081 5.85214C18.9152 6.14503 18.4403 6.14503 18.1474 5.85214C17.8545 5.55924 17.8545 5.08437 18.1474 4.79148L18.5402 4.39864C18.8331 4.10575 19.308 4.10575 19.6009 4.39864Z" fill="#1C274C"/>
                    </g>
                    {/* Sun */}
                    <path opacity="0.5" d="M5.25 12C5.25 13.1778 5.5521 14.2858 6.08267 15.25H17.9173C18.4479 14.2858 18.75 13.1778 18.75 12C18.75 8.27208 15.7279 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12Z" fill="#1C274C"/>
                    {/* Reflection */}
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z" fill="#1C274C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.08267 15.25H2C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25H17.9173H6.08267Z" fill="#1C274C"/>
                    <path opacity="0.5" d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19Z" fill="#1C274C"/>
                </svg>

                <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={sunMoonIconStyles}>
                    {/* Moon */}
                    <path opacity="0.5" d="M12 2C6.47715 2 2 6.47715 2 12C2 13.4222 2.2969 14.7751 2.83209 16H21.1679C21.7031 14.7751 22 13.4222 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2Z" fill="#1C274C"/>
                    {/* Stars */}
                    <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="#1C274C"/>
                    <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="#1C274C"/>
                    {/* Reflection */}
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z" fill="#1C274C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.08267 15.25H2C1.58579 15.25 1.25 15.5858 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.5858 22.4142 15.25 22 15.25H17.9173H6.08267Z" fill="#1C274C"/>
                    <path opacity="0.5" d="M4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19Z" fill="#1C274C"/>
                </svg>
            </div>
        </button>
    )
}

export default ThemeSwitch;
