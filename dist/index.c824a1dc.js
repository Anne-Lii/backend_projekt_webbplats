document.addEventListener("DOMContentLoaded",()=>{fetch("https://backend-projekt-api-2zmb.onrender.com/api/foods").then(e=>e.json()).then(e=>{!function(e){let t=document.getElementById("smårätter"),n=document.getElementById("varmrätt"),d=document.getElementById("dessert"),r=document.getElementById("drinks");e.forEach(e=>{let a=document.createElement("div");switch(a.classList.add("menu-item"),a.innerHTML=`
            <h3>${e.name}</h3>
            <p>${e.description}</p>
            <p>Pris: ${e.price} kr</p>
        `,e.category){case"SMÅRÄTTER":t.appendChild(a);break;case"VARMRÄTTER":n.appendChild(a);break;case"DESSERT":d.appendChild(a);break;case"DRYCK":r.appendChild(a);break;default:console.error("Ogiltig kategori:",e.category)}})}(e)}).catch(e=>console.error("Ett fel uppstod när menyn skulle hämtas",e))});
//# sourceMappingURL=index.c824a1dc.js.map
