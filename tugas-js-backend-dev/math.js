function luasLingkaran(jari) {
    return Math.PI * Math.pow(jari, 2);
}

function getDouble(arr) {
    return arr.map((x) => x * x);
}

const jari = 3;
console.log(luasLingkaran(jari)); // 28.274333882308138

const arr = [1, 2, 3, 4, 5];
const kuadrat = getDouble(arr);
console.log(kuadrat); // [1, 4, 9, 16, 25]