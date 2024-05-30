document.addEventListener("DOMContentLoaded",()=>{console.log("DOMContentLoaded event fired"),fetch("https://backend-projekt-api-2zmb.onrender.com/api/drinks").then(e=>e.json()).then(e=>{!function(e){let t=document.getElementById("white"),n=document.getElementById("red"),d=document.getElementById("rose"),a=document.getElementById("champagne"),r=document.getElementById("drinks"),o=document.getElementById("beer"),c=document.getElementById("alcoholfree");e.forEach(e=>{let l=document.createElement("div");switch(l.classList.add("menu-item"),l.innerHTML=`
            <h4>${e.drinkname}</h4>
            <p>${e.description}</p>
            <p>Pris: ${e.price} kr</p>
        `,e.category){case"white":t.appendChild(l);break;case"red":n.appendChild(l);break;case"rose":d.appendChild(l);break;case"champagne":a.appendChild(l);break;case"drink":r.appendChild(l);break;case"beer":o.appendChild(l);break;case"alcoholfree":c.appendChild(l);break;default:console.error("Ogiltig kategori:",e.category)}})}(e)}).catch(e=>console.error("Ett fel uppstod när dryck skulle hämtas",e))});
//# sourceMappingURL=index.b5623760.js.map
