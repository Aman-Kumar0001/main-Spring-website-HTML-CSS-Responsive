function showBarSelect() {
    let barSelect = document.getElementById("bar-select");
    barSelect.style.display = "block";
    let cross = document.getElementById("cross");
    cross.style.display = "block";
    let bars = document.getElementById("bars");
    bars.style.display = "none";
}

function hideBarSelect() {
    let barSelect = document.getElementById("bar-select");
    barSelect.style.display = "none";
    let cross = document.getElementById("cross");
    cross.style.display = "none";
    let bars = document.getElementById("bars");
    bars.style.display = "block";
}