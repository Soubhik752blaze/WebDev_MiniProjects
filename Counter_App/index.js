const content = document.getElementById('livecounter');

function decrease_value() {
    let value = parseInt(content.innerText);
    value--;
    content.innerHTML = value;
}

function increase_value(){
    let value = parseInt(content.innerText);
    value ++ ;
    content.innerHTML = value;
}

function reset_value(){
    content.innerHTML = 0;
}