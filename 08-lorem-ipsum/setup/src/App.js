import React, { useState } from "react";
import data from "./data";
function App() {
    const [text, setText] = useState([]);
    const [count, setCount] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        let newCount = parseInt(count);
        if (newCount <= 0) {
            newCount = 1;
        }
        if (newCount > 8) {
            newCount = 8;
        }
        setText(data.slice(0, newCount));
    };
    return (
        <section className="section-center">
            <h3>TIRED OF BORING LOREM IPSUM?</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="paragraphs">Paragraphs</label>
                <input
                    type="number"
                    id="paragraphs"
                    name="paragraphs"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button type="submit" className="btn">
                    Generate
                </button>
            </form>
            <article>
                {text.map((para, index) => {
                    return <p key={index}>{para}</p>;
                })}
            </article>
        </section>
    );
}

export default App;
