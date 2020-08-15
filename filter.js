function submitForm(){
    document.getElementById('submitForm').innerHTML= 
    "Successful! Your order has been recorded and will be received within the next hour<nbr>Thanks for choosing us!";
}
let data = [
    {
        category: "people",
        src: "people1.jpg",
        name: "shit"
    },
    {
        category:"people",
        src:"people2.jpg",
        name: "shit"

    },
    {
        category:"people",
        src:"people3.jpg",
        name: "shit"
    },
    {
        category: "cars",
        src: "cars1.jpg",
        name: "shit"
    },
    {
        category:"cars",
        src:"cars2.jpg",
        name: "shit"

    },
    {
        category:"cars",
        src:"cars3.jpg",
        name: "shit"
    },
    {
        category: "nature",
        src: "lights.jpg",
        name: "shit"
    },
    {
        category:"nature",
        src:"mountains.jpg",
        name: "shit"

    },
    {
        category:"nature",
        src:"nature.jpg",
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