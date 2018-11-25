let chooseBtn = document.getElementById("choose"),
    receiveBtn = document.getElementById("receive"),
    heading = document.getElementsByTagName("h2")[0],
    nameInput = document.querySelector(".contactform_name"),
    phoneInput = document.querySelector(".contactform_phone"),
    mailInput = document.querySelectorAll(".contactform_mail")[0],
    modalWindow = document.querySelector(".modal"),
    close = document.querySelector(".close"),
    text = document.getElementsByName("message")[0];

function hover() {
    heading.textContent = "Действительно все!"
}

function out() {
    heading.textContent = "Все включенно";
}

heading.addEventListener("mouseenter", hover);
heading.addEventListener("mouseleave", out);

receiveBtn.addEventListener("click", function () {
    modalWindow.style.display = "block";
})
close.addEventListener("click", function () {
    modalWindow.style.display = "none";
})

nameInput.addEventListener("input", function () {
    text.value = "Меня зовут " + nameInput.value + ". И я хочу спросить";

    if(nameInput ==""){
        text.value="";
    }
});