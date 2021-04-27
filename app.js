

class Wasp {
    constructor(name, hitPoints, damage) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.damage = damage;
    }

    getsHit() {
        this.hitPoints = this.hitPoints - this.damage;
    }

    get html() {
        if (this.name == "Queen") {
            return `<div class="queen bee">
            <p>${this.name}</p>
            <p>${this.hitPoints}</p>
        </div>`;

        } else if (this.name == "Worker") {
            return `<div class="worker bee">
            <p>${this.name}</p>
            <p>${this.hitPoints}</p>
        </div>`;
        } else {
            return `<div class="drone bee">
            <p>${this.name}</p>
            <p>${this.hitPoints}</p>
        </div>`;
        }

    }
}

class Queen extends Wasp {
    constructor() {
        super("Queen", 80, 7);
    }
}

class Worker extends Wasp {
    constructor() {
        super("Worker", 68, 10);
    }
}

class Drone extends Wasp {
    constructor() {
        super("Drone", 60, 12);
    }
}

let wasps = [];

const createWasps = () => {

    wasps.push(new Queen());

    for (let i = 0; i < 5; i++) {
        wasps.push(new Worker());
    }

    for (let j = 0; j < 8; j++) {
        wasps.push(new Drone());
    }
};

createWasps();

const updateWasps = () => {
    document.querySelector(".container").innerHTML = "";
    wasps.forEach(wasp => {
        document.querySelector(".container").innerHTML += wasp.html;
    });
};

updateWasps();

const beeElement = document.querySelectorAll('.bee');

$("#hitButton").click(function () {

    // beeElement.classList.remove('miniBounce');
    // beeElement.offsetWidth = beeElement.offsetWidth;
    let randomNumber = Math.floor(Math.random() * wasps.length);
    let randomWasp = wasps[randomNumber];
    // $("div").eq(randomWasp).effect("bounce", "slow");
    beeElement.offsetWidth = Element.offsetWidth;
    beeElement[randomNumber].classList.add('miniBounce');
    setTimeout(function() {
        beeElement[randomNumber].classList.remove('miniBounce');
    }, 3000)
    // beeElement[randomNumber].classList.remove('miniBounce');

    console.log(beeElement)


    randomWasp.getsHit();

    // $("div").eq(randomNumber).effect("bounce", "slow");

    console.log(randomWasp);

    if (wasps[0].hitPoints <= 0) {
        wasps.splice(0, wasps.length);
    } else if (randomWasp.hitPoints <= 0) {
        wasps.splice(randomNumber, 1);
    }
    updateWasps();
});

// const shakeBee = () => {
//     let randomNumber = Math.floor(Math.random() * wasps.length);    

//     $("#hitButton").click(function () {
//         $("div").eq(randomNumber).effect("bounce", "slow");
//     });
// }
// shakeBee();

