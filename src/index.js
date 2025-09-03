import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Heroe = {
    Heroe1: { name: "Heroe1", xp: 10001 },
    Heroe2: { name: "Heroe2", xp: 900 },
    Heroe3: { name: "Heroe3", xp: 2500 },
    Heroe4: { name: "Heroe4", xp: 5500 },
    Heroe5: { name: "Heroe5", xp: 7500 },
    Heroe6: { name: "Heroe6", xp: 8500 },
    Heroe7: { name: "Heroe7", xp: 9500 },
    Heroe8: { name: "Heroe8", xp: 1001 }
};

 async function heroeLevel(heroe){
    if (heroe.xp <= 1000){
        console.log(`${heroe.name} level is Iron`) 
    }else if (heroe.xp <= 2000 ){
        console.log(`${heroe.name} level is Bronze`)
    }else if (heroe.xp <= 5000 ){
        console.log(`${heroe.name} level is Silver`)
    }else if (heroe.xp <= 7000 ){
        console.log(`${heroe.name} level is Gold`)
    }else if (heroe.xp <= 8000 ){
        console.log(`${heroe.name} level is Platinum`)
    }else if (heroe.xp <= 9000 ){
        console.log(`${heroe.name} level is Ascendant`)
    }else if (heroe.xp <= 10000 ){
        console.log(`${heroe.name} level is Imortal`)
    }else 
        console.log(`${heroe.name} level is Radiant`)
};


rl.question('Type the heroe name: ', (name) => {
    const foundHeroe = Heroe[name];
    if (foundHeroe) {
        heroeLevel(foundHeroe)
    } else  {
        console.log("Heroe not found.")
    }
    rl.close();
});
