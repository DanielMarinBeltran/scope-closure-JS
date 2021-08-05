const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins+= coins;
    console.log('MoneyBox: ' +saveCoins);
}

moneyBox(5);
moneyBox(10);

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log('MoneyBox: ' + saveCoins);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4); // 4
myMoneyBox(6); // 10
myMoneyBox(10); // 20

// Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.