// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar1 } from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar1();




let searchnews=async(search_input)=>{


    try{

        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${search_input}`);
        let data=await res.json();
        return data
    }catch (err){
        console.log(err)
    }
}
searchnews(null).then((data)=>{


    let results=document.getElementById("results");
    results.innerHTML=null;
    append(data.articles,results)
})

let append=(data,results)=>{
   
    data.map((el)=>{

        let div=document.createElement("div");
        let img=document.createElement("img")
         img.src=el.urlToImage
        
         let Title=document.createElement("h4")
         Title.innerText=el.title;
         let  Content=document.createElement("p")
         Content.innerText=el.content
         
         div.append(img,Title,Content);

         results.append(div)

        
    })


}




let search=(e)=>{
    if(e.key==="Enter"){

        let search_input=document.getElementById("search_input").value;
       

        searchnews(search_input).then((data)=>{

            console.log(data)

            let results=document.getElementById("results");
            results.innerHTML=null;
            append(data.articles,results);

            div.onclick=()=>{
                showdetails(el)

            }
        })

    }
    
}

function  showdetails(data)
{

    window.location.href="news.html"
    localStorage.setItem("details", JSON.stringify(data))
}
let sidebar=document.getElementById("sidebar").children;

function cSearch(){

    searchnews(this.id).then((data)=>{


        let results=document.getElementById("sidebar");
        results.innerHTML=null;

        append(data.articles,results)

    });
}

for(let el of sidebar){
    el.addEventListener("click", cSearch)
}




document.getElementById("search_input").addEventListener("keydown", search)

