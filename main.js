var menu_array = ["Veg Extravaganza", "Farmhouse", "Margherita", "Veggie paradise", "Mexican green wave", "Creamy Tomato Pasta Pizza"];


function openmenu() {
    console.log(menu_array);
    document.getElementById("display_menu").innerHTML = menuarray;
}

function add_item() {
    document.getElementById("add_item").value;
    menu_array.push(add_item);
    document.getElementById("display_menu").innerHTML = menu_array;
}