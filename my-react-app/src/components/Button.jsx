
function Button(){

    let count = 0;
    const handleClick = (e,name) => {
        count++;
        e.target.textContent = "Ouch!";
        console.log(`${name}, you clicked me ${count} time/s`);
    }

    // if parameters then use onclick like this
    return(<>
        <button onClick={(e) => handleClick(e,"Harsh")}>Click Me</button>
        <p>This button show how many times you clicked it in the console.</p>
        <p>And also on the first click changes the text to Ouch!</p>
    </>);
}

export default Button;