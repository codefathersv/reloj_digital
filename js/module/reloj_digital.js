const d = document;

export default function relojDigital(reloj, btnshow, btnhide) {

    let relojT;

    d.addEventListener("click", (e) => {

        if (e.target.matches(btnshow)) {

            relojT = setInterval(() => {

                let hora = new Date().toLocaleTimeString();

                d.querySelector(reloj).innerHTML = `<h1>${hora}</h1>`
                d.querySelector(reloj).classList.add("texto");

            }, 1000);

            d.querySelector(btnshow).disabled = true;

        }

        if (e.target.matches(btnhide)) {

            setTimeout(() => {
                clearInterval(relojT);
                d.querySelector(reloj).innerHTML = null;
                d.querySelector(btnshow).disabled = false;
            }, 1000);

        }

    })

}