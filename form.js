// Űrlap elérése, eseményfigyelő hozzáadása
document.getElementById('userForm').addEventListener('submit', (e) => {
    //HTML űrlap alapértelmezett viselkedés megakadályozása
    e.preventDefault();
    //FormData objektum létrehozása, az űrlap esemény hozzárendelése
    //(e.target) az esemény címzettje
    const myformData = new FormData(e.target);
    //Az űrlap adatok áthelyezése a userData objektumba
    const userData = Object.fromEntries(myformData);
    console.log(userData);
})