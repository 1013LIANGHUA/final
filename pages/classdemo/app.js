const ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;


function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    console.log('monster damage',damage.toFixed(2),currentMonsterHealth.toFixed(2));
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    console.log('player damage',playerDamage.toFixed(2),currentPlayerHealth.toFixed(2));
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('Player won!');
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth >0 ){
        alert('Monster won');
    }else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('Draw!');
    }
}



// attackBtn.addEventListener('click', attackHandler);