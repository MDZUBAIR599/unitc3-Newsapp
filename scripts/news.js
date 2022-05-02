// Ude Import export (MANDATORY)
import { navbar1 } from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar1();
let el =JSON.parse(localStorage.getItem("details"))
let div=document.createElement("div");
        let img=document.createElement("img")
         img.src=el.urlToImage
        
         let Title=document.createElement("h4")
         Title.innerText=el.title;
         let  Content=document.createElement("p")
         Content.innerText=el.content
         
         div.append(img,Title,Content);

         results.append(div)


         document.getElementById("detailed_news").append(div)