function init() {
    let normal_user_btn = document.getElementById("normal-user-btn");
    let journalist_btn = document.getElementById("journalist-btn");
    let user_choice_div = document.getElementById("user-type-div");

    if (normal_user_btn && journalist_btn) {
        normal_user_btn.onclick = user_choice;
        journalist_btn.onclick = journalist_choice;
    }

    if (user_choice_div) {
        user_choice_div.onclick = show_popup_window;
    } else {
        console.error("ciao");
    }
}

function user_choice() {
    let user_type_text = document.getElementById("user-type-text");

    if (user_type_text) {
        user_type_text.innerText = "User"
    }

    close_popup_window();
}

function journalist_choice() {
    let user_type_text = document.getElementById("user-type-text");

    if (user_type_text) {
        user_type_text.innerText = "Journalist"
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

// TODO: non funziona testo user-choice cliccabile per aprire popup window
function show_popup_window() {
    console.log("test");
    let popup_div = document.getElementById("popup-window-div");

    if (popup_div) {
        popup_div.style.display = "visible";
    } else {
        console.log("sas");
    }
}