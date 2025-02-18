import { useId } from 'react';
import './checkbox.css';

// Based on https://codepen.io/milanraring/pen/QWbqBGo

function Checkbox({ children , defaultState = false } : { children: React.ReactNode , defaultState?: boolean }) {
    const id = useId();

    return (
        <div className="checklist">
            <input type="checkbox" name={id} id={id} defaultChecked={defaultState} />
            <label htmlFor={id}>
                {children}
            </label>
        </div>
    );
};

export default Checkbox;