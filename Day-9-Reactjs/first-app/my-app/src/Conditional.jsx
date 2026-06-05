function Conditional(){

    const isLoggedIn = true;

return(
    <div>
        {isLoggedIn ? <h2>Welcome Usere!</h2>:<h2>Please Login</h2>}
    </div>
)

    /*
    <--------First Method With Variable--------->
    let message;

    if(isLoggedIn){
        message = <h2>Welcome User</h2>
    }else{
        message = <h2>Please Login</h2>
    }

  return<div>{message}</div>
  */
}
export default Conditional
