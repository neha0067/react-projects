import React from 'react';

export default function Reminder() {
    const people = [
        {
            name: 'Bertie Yates',
            age: 29,
            image: 'https://th.bing.com/th/id/OIP.jAEnONxlpsGr8oF6yPHI9QHaHZ?w=198&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {
            name: 'Hester Hogan',
            age: 32,
            image: 'https://th.bing.com/th/id/OIP.Q_vZZcSYOaPMcxnXMQQ99QHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {
            name: 'Larry Little',
            age: 36,
            image: 'https://th.bing.com/th/id/OIP.gmpYpN6wkITxKralS-AisAHaLy?w=124&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {
            name: 'Sean Walsh',
            age: 34,
            image: 'https://th.bing.com/th/id/OIP.GjEX7pNosV9siZ7OmB_pBwHaFj?w=268&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {
            name: 'Lola Gardner',
            age: 29,
            image: 'https://th.bing.com/th/id/OIP.vQcH6uRqJd1SIpce-41uUgHaLH?w=124&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        }
    ]

    const [birthdays, setBirthdays] = React.useState(people);

    function main() {
        return birthdays.map((birthday, index) => {
            return (
                <div key={index} className="person">
                    <img src={birthday.image} alt={birthday.name} />
                    <div>
                        <h2>{birthday.name}</h2>
                        <p>{birthday.age} years</p>
                    </div>
                </div>
            )
        })
    }

    function clearBirthdays() {
        setBirthdays([])
    }

    return (
        <div className="body">
            <section className="container">
                <h1>{birthdays.length} Birthdays Today</h1>
                <main>
                    {main()}
                </main>

                {/* <button onClick={addBirthdays}>Add Birthday</button> */}
                <button onClick={clearBirthdays}>Clear All</button>
            </section>
        </div>
    )
}