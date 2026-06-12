// Copy IP
function copyIP(){
    navigator.clipboard.writeText("bongiaanSMP.minehut.gg");
    alert("IP copied!");
}

// Hide loader
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Particles
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 2 },
        move: { speed: 1 },
        line_linked: { enable: true },
        color: { value: "#22c55e" }
    }
});
