function submitForm(){
    document.getElementById('submitForm').innerHTML= 
    "Successful! Your order has been recorded and will be received within the next hour<nbr>Thanks for choosing us";
}
let data = [
    {
        category: "people",
        src: "people1.jpg"
    },
    {
        category:"people",
        src:"people2.jpg"

    },
    {
        category:"people",
        src:"people3.jpg"
    },
    {
        category: "cars",
        src: "cars1.jpg"
    },
    {
        category:"cars",
        src:"cars2.jpg"

    },
    {
        category:"cars",
        src:"cars3.jpg"
    },
    {
        category: "nature",
        src: "lights.jpg"
    },
    {
        category:"nature",
        src:"mountains.jpg"

    },
    {
        category:"nature",
        src:"nature.jpg"
    }
]
const container= document.getElementById('container');
function filterSelector(selectElement){
    container.innerHTML="";
    for(let i=0; i<data.length; i++){
        if( data[i].category.toLowerCase()!=selectElement.toLowerCase() && selectElement!='all' ){
            
            continue;
        }
        
        container.innerHTML+=`<img src="${data[i].src}">`
    }

}