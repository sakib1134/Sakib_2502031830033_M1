
function Hello(){

    function getName(){
        return "Java Devloper"
    }
    function handleClick(){
        alert("button was clicked")
    }

    const handleInput = (event) =>{
        console.clear()
        console.log("Value:",event.target.value)
    }

    const handleMouseOver = (event) => {console.log("mouse is over text");}
    const handleDoubleClick = (event) => {console.log("on Double Click");}
    


    return(
        <>
        <h1>Sakib Shaikh{getName()}</h1>
        <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>this is click function</p>
        <button onClick={handleClick}>Click me</button>
        <button onClick={() =>alert("this arrow fuction")}>say bye</button>
        <br/>
        <input type="text" onChange={handleInput} placeholder="type somrthing"/>
        </>
    )
}
export default Hello