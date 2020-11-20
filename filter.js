//navbar
//const nav = document.querySelector("#")
openNav=()=>{
    document.getElementById("sidenav-toggle").style.width="250px";
}
closeNav=()=>{
    document.getElementById("sidenav-toggle").style.width="0px";
}
function submitForm(){
    document.getElementById('submitForm').innerHTML= 
    "Successful! Your order has been recorded and will be received within the next hour<nbr>Thanks for choosing us!";
}
let data = [
    {
        category: "people",
        src: "/images/menu1.jpg",
        name: "shit"
    },
    {
        category:"people",
        src:"/menu2.jpg",
        name: "shit"

    },
    {
        category:"people",
        src:"/menu3.jpg",
        name: "shit"
    },
    {
        category: "cars",
        src: "/menu4.jpg",
        name: "shit"
    },
    {
        category:"cars",
        src:"/menu5.jpg",
        name: "shit"

    },
    {
        category:"cars",
        src:"/menu6.jpg",
        name: "shit"
    },
    {
        category: "nature",
        src: "/menu7.jpg",
        name: "shit"
    },
    {
        category:"nature",
        src:"/menu8.jpg",
        name: "shit"

    },
    {
        category:"nature",
        src:"/menu9.jpg",
        name: "shit"
    }
]
const container= document.getElementById('container');
function filterSelector(selectElement){
    container.innerHTML="";
    for(let i=0; i<data.length; i++){
        if( data[i].category.toLowerCase()!=selectElement.toLowerCase() && selectElement!='all' ){
            
            continue;
        }
        
        container.innerHTML+=`<img src="${data[i].src}">`+ data[i].name;
    }

}