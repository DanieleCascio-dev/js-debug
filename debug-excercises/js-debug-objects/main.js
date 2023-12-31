/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
  {
    manufacturer: "Ford",
    model: "Fiesta",
    type: "diesel",
  },
  {
    manufacturer: "Audi",
    model: "A1",
    type: "benzina",
  },
  {
    manufacturer: "Volkswagen",
    model: "Golf",
    type: "Benzina", //6 B grande
  },
  {
    manufacturer: "Fiat",
    model: "Panda",
    type: "metano",
  },
  {
    manufacturer: "Fiat",
    model: "Multipla",
    type: "GPL",
  },
  {
    manufacturer: "Tesla",
    model: "Model 3",
    type: "elettrico",
  },
  {
    manufacturer: "Volkswagen",
    model: "Polo",
    type: "benzina",
  },
  {
    manufacturer: "Ford",
    model: "Kuga",
    type: "Diesel", // 3. Disel andrebbe senza maisucola
  },
  {
    manufacturer: "Seat",
    model: "Ibiza",
    type: "metano",
  }, // 1. Manca una virgola qui
  {
    manufacturer: "Audi",
    model: "R8",
    type: "Benzina", //5. benzina
  },
];

const gasolineCars = cars.filter(
  (auto) => auto.type.toLowerCase() === "benzina"
); // 2. dobbiamo scrivere =>

const dieselCars = cars.filter((auto) => {
  return auto.type.toLowerCase() === "diesel"; //7. return
});

const otherCars = cars.filter((auto) => {
  return (
    auto.type.toLowerCase() !== "benzina" &&
    auto.type.toLowerCase() !== "diesel"
  ); //4. dovremmo usare un && // 5. dovremmo usare delle parentesi // possiamo non usare il return
});

console.log("Auto a benzina");
console.log("*******************************");
console.log(gasolineCars);

console.log("Auto a diesel");
console.log("*******************************");
console.log(dieselCars);

console.log("Tutte le altre auto");
console.log(otherCars);
