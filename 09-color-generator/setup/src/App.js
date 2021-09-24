import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [fields, setFields] = useState("");
    const [list, setList] = useState(new Values("#b00000").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let numberOfFields = parseInt(fields);
            let colors = new Values(color).all(numberOfFields);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };
    return (
        <>
            <section className="container">
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="color">Color:</label>
                    <input
                        type="text"
                        id="color"
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder={`${error ? "Color not valid" : "b00000"}`}
                        className={`${error ? "error" : null}`}
                    />
                    <label htmlFor="fields">Fields</label>
                    <input
                        type="number"
                        id="fields"
                        name="fields"
                        value={fields}
                        placeholder={10}
                        onChange={(e) => setFields(e.target.value)}
                    />
                    <button className="btn" type="submit">
                        submit
                    </button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hex}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default App;
