let dwellers = {
    "dwellers": [
        { "name": "James Bond", "Age": 31, "Job Title": "Peace Keeper" },
        { "name": "Vladamir Feelsgood", "Age": 43, "Job Title": "Head Doctor" },
        { "name": "Pablo Escobar", "Age": 52, "Job Title": "Pharmacist" },
        { "name": "Bob Belcher", "Age": 40, "Job Title": "Head Chef" },
        { "name": "Anakin Skywalker", "Age": 26, "Job Title": "Child Care Overseer" },
        { "name": "Wade Wilson", "Age": 71, "Job Title": "Vault Overseer" }
    ]
};

let jsonString = JSON.stringify(dwellers);
console.log(jsonString);