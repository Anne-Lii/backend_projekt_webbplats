document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("loginForm"),t=document.getElementById("loginMessage"),n=document.getElementById("loadingMessage");e&&e.addEventListener("submit",async function(e){e.preventDefault(),n&&(n.innerText="Loading",n.innerText="Loading.",setTimeout(()=>{n.innerText="Loading.."},500),setTimeout(()=>{n.innerText="Loading..."},1e3));let o=document.getElementById("username").value,a=document.getElementById("password").value;try{let e=await fetch("https://backend-projekt-api-2zmb.onrender.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o,password:a})});if(e.ok){let a=(await e.json()).token;localStorage.setItem("token",a),localStorage.setItem("username",o),t.innerHTML="",n&&(n.innerText=""),localStorage.getItem("token")?window.location.href="admin.html":window.location.href="login.html"}else{let n=await e.json();t.textContent=n.error}}catch(e){console.error("Inloggningsfel:",e),t.textContent="Ett fel inträffade vid inloggningen. Försök igen senare."}})});
//# sourceMappingURL=login.727ebc7a.js.map
