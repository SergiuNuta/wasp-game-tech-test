

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
            return `<div class="queen">
            <p>${this.name}</p>
            <p>${this.hitPoints}</p>
        </div>`;

        } else if (this.name == "Worker") {
            return `<div class="worker">
            <p>${this.name}</p>
            <p>${this.hitPoints}</p>
        </div>`;
        } else {
            return `<div class="drone">
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

    for (i = 0; i < 5; i++) {
        wasps.push(new Worker());
    }
    for (i = 0; i < 8; i++) {
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

$("#hitButton").click(function () {
    let randomNumber = Math.floor(Math.random() * wasps.length);
    let randomWasp = wasps[randomNumber];

    randomWasp.getsHit();

    $("div").eq(randomNumber).effect("bounce", "slow");

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

