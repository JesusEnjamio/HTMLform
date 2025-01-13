document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        console.log("Name:", document.getElementById("name").value);
        console.log("Email:", document.getElementById("email").value);
        console.log("Age:", document.getElementById("age").value);
        console.log("Description:", document.getElementById("description").value);
        console.log("Recommend:", document.querySelector("input[name='recommend']:checked")?.value || "No selection");
        console.log("Languages:", [...document.querySelectorAll("input[name='languages']:checked")].map(cb => cb.value));
        


        console.log("Comments:", document.getElementById("comments").value);
    });
});