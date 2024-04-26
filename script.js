let vault_dwellers = {
    dwellers: [
        { name: "James Bond", age: 31, job: "Peace Keeper" },
        { name: "Dr. Yap", age: 43, job: "Doctor/Dentist" },
        { name: "Pablo Escobar", age: 52, job: "Pharmacist" },
        { name: "Bob Belcher", age: 40, job: "Head Chef" },
        { name: "Anakin Skywalker", age: 26, job: "Child Caretaker" },
        { name: "Wade Wilson", age: 71, job: "Combat Instructor" },
        { name: "Itadori Yuji", age: 17, job: "Fitness Instructor" },
        { name: "Sylvanas Windrunner", age: 29, job: "Funeral Director" },
        { name: "Anduin Wrynn", age: 19, job: "Priest" },
        { name: "Rick Sanchez", age: 69, job: "Engineer" }
    ]
};

// variable to access table
const table = document.getElementById("vault_999");

// loop for all data in JSON. extracting data to be put in table
for (let i in vault_dwellers.dwellers) {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = vault_dwellers.dwellers[i].name;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.classList.add("center");
    cell2.textContent = vault_dwellers.dwellers[i].age;
    row.appendChild(cell2);

    const cell3 = document.createElement("td");
    cell3.classList.add("right");
    cell3.textContent = vault_dwellers.dwellers[i].job;
    row.appendChild(cell3);

    table.appendChild(row);
}

// Calculate the average age of vault dwellers
let totalAge = 0;
// gets total age of all vault dwellers
for (let dweller of vault_dwellers.dwellers) {
    totalAge += dweller.age;
}

// calculates average age after getting sum of all ages
let averageAge = totalAge / vault_dwellers.dwellers.length;

console.log("Average age of Vault Dwellers", averageAge);

const tableFooter = document.createElement("tfoot");
const footerRow = document.createElement("tr");

const footerCell1 = document.createElement("th");
footerCell1.textContent = "Average Age is:"

const footerCell2 = document.createElement("th");
footerCell2.textContent =  averageAge;

footerRow.appendChild(footerCell1);
footerRow.appendChild(footerCell2);
tableFooter.appendChild(footerRow);
table.appendChild(tableFooter);