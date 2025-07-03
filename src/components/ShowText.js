import { useState } from 'react';
import './ShowText.css';

function ShowText() {
    const [showText, setShowText] = useState(false);
    const quote = "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill";

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <div className="toggle-container">
            <h2 className="toggle-title">Quote Revealer</h2>
            <button
                className={`toggle-btn ${showText ? 'active' : ''}`}
                onClick={toggleText}
            >
                {showText ? 'Hide Quote' : 'Show Quote'}
            </button>

            {showText && (
                <div className="quote-container">
                    <p className="quote-text">{quote}</p>
                </div>
            )}
        </div>
    );
}

export default ShowText;