function init() {
    let normal_user_btn = document.getElementById("normal-user-btn");
    let journalist_btn = document.getElementById("journalist-btn");

    if (normal_user_btn && journalist_btn) {
        normal_user_btn.onclick = user_choice;
        journalist_btn.onclick = journalist_choice;
    } else {
        console.log("errore");
    }
}

function openPopup() {
    console.log("ciao");
}

function user_choice() {
    let user_type_text = document.getElementById("user-type-text");

    if (user_type_text) {
        user_type_text.innerText = "Utente"
    }

    close_popup_window();
}

function journalist_choice() {
    let user_type_text = document.getElementById("user-type-text");

    if (user_type_text) {
        user_type_text.innerText = "Giornalista"
    }

    close_popup_window();
}

// makes popup div invisible
function close_popup_window() {
    let popup_div = document.getElementById("popup-window-div");

    if (popup_div) {
        popup_div.style.display = "none";
    }
}