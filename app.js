const Bulb = document.getElementById("bulb");
Bulb.addEventListener("mouseover", function (e) {
    if (Bulb.src.includes("Off")) {
        Bulb.src = "./asset/bulbnew2.jpg";
    } else {
        Bulb.src = "./asset/Bulb-Off1.jpg";
    }
});