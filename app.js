/* Class Example */
class Entity {
    constructor ( hp, atk ) {
        this.hp = hp;
        this.atk = atk;
    }

    fight(entity) {
        entity.hp -= this.atk
    }
};

const player = new Entity(100, 10);
const monster = new Entity(50, 5);

console.log(`Player health: ${player.hp}`);
console.log(`Monster health: ${monster.hp}`);
while (player.hp > 0 && monster.hp > 0) {
    player.fight(monster);
    monster.fight(player);
    console.log(`Player health: ${player.hp}`);
    console.log(`Monster health: ${monster.hp}`);
};


/* Drum kit / Sound Board */
const soundMap = {
    q: 'work_it',
    w: 'make_it',
    e: 'do_it',
    r: 'makes_us',
    t: 'harder',
    y: 'better',
    u: 'faster',
    i: 'stronger',
    o: 'more_than',
    p: 'hour',
    a: 'our',
    s: 'never',
    d: 'ever',
    f: 'after',
    g: 'work_is',
    h: 'over'
}

const drumContainer = document.querySelector("#drum-container");
for (const key in soundMap) {
    const drumElement = document.createElement('div');
    drumElement.classList.add('soundButton');
    drumContainer.append(drumElement);

    const textElement = document.createElement('p');
    textElement.textContent = `${key}: ${soundMap[key]}`
    drumElement.append(textElement);

    drumElement.addEventListener('click', () => {
        playSound(soundMap[key]);
    });
};

const playSound = (sound) => {
    const audio = new Audio(`./sounds/${sound}.wav`);
    audio.play();
};

document.addEventListener('keydown', (e) => {
    const key = e.key;
    const sound = soundMap[key];
    if (sound) {
        playSound(sound);
    }
});