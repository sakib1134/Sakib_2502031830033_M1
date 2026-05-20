function checkAge(){
const agei = document.getElementById(age).value.trim;

if (agei >= 18){
    document.getElementById("result").textContent= "You are eligible!!" ;
    document.getElementById("result").style.color = "green";
}else{
    document.getElementById("result").textContent = "You are not eligible to vote.";
    document.getElementById("result").style.color = "orange";
}
}