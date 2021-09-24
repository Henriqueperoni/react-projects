import React from "react";

const List = ({ people, setPeople }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                const deletePerson = (id) => {
                    const newPeople = people.filter(
                        (person) => person.id !== id
                    );

                    setPeople(newPeople);
                };
                return (
                    <article key={id} className="person">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age}</p>
                        </div>
                        <button onClick={() => deletePerson(id)}>delete</button>
                    </article>
                );
            })}
        </>
    );
};

export default List;
