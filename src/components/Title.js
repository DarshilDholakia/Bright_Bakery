import {useState} from 'react'; //looks for useState hook in react library

const Title = () => {

    const [status, setStatus] = useState("open");

    const handleClick = () => {
        if (status === "open") {
            setStatus("close");
        } else if (status === "close") {
            setStatus("open");
        }
    }
    
    return (

        <>
            <h1>The Bright Bakery</h1>
            <p>est 2022</p>
            <h4 className="red">The Bakery is now {status}!</h4>
            <button onClick={handleClick}>Open/Closed</button>
        </>
    )

}

export default Title;