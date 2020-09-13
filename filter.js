const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});
const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);
function submitForm(){
    document.getElementById('submitForm').innerHTML= 
    "Successful! Your order has been recorded and will be received within the next hour<nbr>Thanks for choosing us!";
}
let data = [
    {
        category: "people",
        src: "menu1.jpg",
        name: "shit"
    },
    {
        category:"people",
        src:"menu2.jpg",
        name: "shit"

    },
    {
        category:"people",
        src:"menu3.jpg",
        name: "shit"
    },
    {
        category: "cars",
        src: "menu4.jpg",
        name: "shit"
    },
    {
        category:"cars",
        src:"menu5.jpg",
        name: "shit"

    },
    {
        category:"cars",
        src:"menu6.jpg",
        name: "shit"
    },
    {
        category: "nature",
        src: "menu7.jpg",
        name: "shit"
    },
    {
        category:"nature",
        src:"menu8.jpg",
        name: "shit"

    },
    {
        category:"nature",
        src:"menu9.jpg",
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