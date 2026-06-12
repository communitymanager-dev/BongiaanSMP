// Copy IP Button
function copyIP(){
    navigator.clipboard.writeText("bongiaanSMP.minehut.gg");
    alert("Server IP copied!");
}

// Live server status
fetch("https://api.mcsrvstat.us/2/play.bongiaansmp.net")
.then(res => res.json())
.then(data => {
    document.getElementById("players").innerText =
        data.players
        ? data.players.online + " players online"
        : "Server offline";
})
.catch(() => {
    document.getElementById("players").innerText = "Status error";
});
