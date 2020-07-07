function feedback(){
    document.getElementById('feedback').style.border="solid 0.5rem salmon";
}
function feedback2(){
    document.getElementById('feedback').style.border = "none";
}

let items=['sweets.jpeg', 'background.jpg',['sweets.jpeg', 'background.jpg']];

document.getElementById('all').addEventListener('click',showAll);
function showAll(){
            for (let i = 0; i < items.length; i++) {
                document.getElementById('images').innerHTML += `<img src=${items[i]}>`;


}

}
document.getElementById('pastries').addEventListener('click',showPastries);
function showPastries(){
    document.getElementById('images').innerHTML+=`<img src=${items[2]}>`;
}
