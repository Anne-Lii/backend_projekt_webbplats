document.addEventListener("DOMContentLoaded",()=>{fetch("https://backend-projekt-api-2zmb.onrender.com/api/foods").then(e=>e.json()).then(e=>{!function(e){let t=document.getElementById("smårätter"),n=document.getElementById("varmrätt"),r=document.getElementById("dessert"),d=document.getElementById("drinks");e.forEach(e=>{let a=document.createElement("div");switch(a.classList.add("menu-item"),a.innerHTML=`
            <h4>${e.food}</h4>
            <p>${e.description}</p>
            <p>Pris: ${e.price} kr</p>
        `,e.category){case"smårätter":t.appendChild(a);break;case"varmrätt":n.appendChild(a);break;case"dessert":r.appendChild(a);break;case"DRYCK":d.appendChild(a);break;default:console.error("Ogiltig kategori:",e.category)}})}(e)}).catch(e=>console.error("Ett fel uppstod när menyn skulle hämtas",e))});
//# sourceMappingURL=index.36c468da.js.map
