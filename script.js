document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("timesPet") === null) {
        localStorage.setItem("timesPet", 0);
    }
    document.getElementById("pet-mascot").innerText = localStorage.getItem("timesPet");

    const mascot = document.getElementById("mascot");

    mascot.addEventListener("mouseover", function() {
        this.src = "images/neko2.png";
    });

    mascot.addEventListener("mouseout", function() {
        this.src = "images/neko1.png";
    });

    mascot.addEventListener("click", function() {
        const timesPet = parseInt(localStorage.getItem("timesPet")) + 1;
        localStorage.setItem("timesPet", timesPet);
        document.getElementById("pet-mascot").innerText = timesPet;
    });

    particlesJS("petal", {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff7da0"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                },
                "onclick": {
                    "enable": false,
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
});