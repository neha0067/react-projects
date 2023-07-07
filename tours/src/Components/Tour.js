import React from 'react';



export default function Tour(props) {

    const [readMore, setReadMore] = React.useState(false);

    function toggleReadMore() {
        setReadMore((prevState) => {
            return !prevState;
        })
    }

    return (
        <section className="eachTour">
            <img src={props.image}/>
            <footer>
                <h2>{props.name}</h2>
                <h2 className='price'>{props.price}</h2>
                <div>
                    <p>
                        {readMore ? props.info : `${props.info.substring(0, 200)}...`}
                        <button className="readMore" onClick={toggleReadMore}>
                            {readMore ? 'Show Less' : 'Read More'}
                        </button>
                    </p>
                    <button className='not-interested' onClick={() => props.removeTour(props.id)}>Not Interested</button>
                </div>
            </footer>
        </section>
    )
}