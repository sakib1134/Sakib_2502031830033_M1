// Switch sections
function showSection(sectionId){
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";

    document.getElementById(sectionId).style.display = "block";
}

// Load users & count
if(window.location.pathname.includes("admin.html")){
    let list = document.getElementById("userList");
    let total = 0;

    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);

        if(key !== "loggedInUser"){
            total++;

            let li = document.createElement("li");
            li.textContent = key;
            list.appendChild(li);
        }
    }

    document.getElementById("totalUsers").innerText = total;
}
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedPass = localStorage.getItem(user);

    if (storedPass === pass) {
        // login success
        localStorage.setItem("loggedInUser", user);

        // redirect to home page
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
}
function signup() {
    let user = document.getElementById("signupUser").value;
    let pass = document.getElementById("signupPass").value;

    if (user && pass) {
        localStorage.setItem(user, pass);

        alert("Signup Successful ✅");

        // redirect to login page
        window.location.href = "index.html";
    } else {
        alert("Please fill all fields ❌");
    }
}
function showFood(title, desc){
    document.getElementById("foodTitle").innerText = title;
    document.getElementById("foodDesc").innerText = desc;
    document.getElementById("popup").style.display = "block";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
function goToAdmin() {
    let user = localStorage.getItem("loggedInUser");

    if (user === "admin") {
        window.location.href = "admin.html";
    } else {
        alert("Only admin can access ❌");
    }
}
// Show admin button
window.onload = function () {
    let user = localStorage.getItem("loggedInUser");

    if (user === "admin") {
        let btn = document.getElementById("adminBtn");
        if (btn) btn.style.display = "inline-block";
    }
};

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

// Admin navigation
function goToAdmin() {
    let user = localStorage.getItem("loggedInUser");

    if (user === "admin") {
        window.location.href = "admin.html";
    } else {
        alert("Access Denied ❌");
    }
}

// Food popup
function showFood(title, desc, img) {
    document.getElementById("foodTitle").innerText = title;
    document.getElementById("foodDesc").innerText = desc;
    document.getElementById("foodImg").src = img;

    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedPass = localStorage.getItem(user);

    if (storedPass === pass) {
        localStorage.setItem("loggedInUser", user);

        // 👇 Admin direct admin page
        if (user === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "home.html";
        }
    } else {
        alert("Invalid username ❌");
    }
}
window.onload = function () {
    let user = localStorage.getItem("loggedInUser");

    if (user === "admin") {
        let btn = document.getElementById("adminBtn");
        if (btn) btn.style.display = "inline-block";
    }
};
function goToAdmin() {
    let user = localStorage.getItem("loggedInUser");

    if (user === "admin") {
        window.location.href = "admin.html";
    } else {
        alert("Access Denied ❌");
    }
}