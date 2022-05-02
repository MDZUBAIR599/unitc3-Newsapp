let navbar=()=>{

    return ` <h1>
    <a href="index.html">News App</a>
   </h1>
   <input type="text" id="search_input" placeholder="Search News">
   <div id="sidebar">
      <h2>Countreies</h2>
      <h3 id="in" onclick="cSearch(this.id)">India</h3>
      <h3 id="ch" onclick="cSearch(this.id)">China</h3>
      <h3 id="us" onclick="cSearch(this.id)">Usa</h3>
      <h3 id="uk" onclick="cSearch(this.id)">United Kingdom</h3>
      <h3 id="nz" onclick="cSearch(this.id)">New Zealand</h3>
    </div>
   `
}

export {navbar}


let navbar1=()=>{


    return `<a href="index.html">News App</a>
    </h1>
    <input type="text" id="search_input" placeholder="Search News">`

}

export {navbar1};