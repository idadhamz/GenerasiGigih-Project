const students = [
    {name: 'Alice', age: 20},
    {name: 'Bob', age: 21},
    {name: 'Jane', age: 20}
];

// let tr = document.getElementById("tr_table");
// let td = document.getElementById("td_table");

// students.forEach((student) => {
//    td += "<td>" + student.name + "</td>";
// });

// tr.append(td);

const bikinTable = () => {

    let tbody = document.getElementById("tbody");

    students.forEach(({ name, age }) => {
        tbody.innerHTML += `<tr><td>${name}</td><td>${age}</td></tr>`;
    });   
}

bikinTable();

const keluarinAverage = () => {

    let total = 0;

    students.forEach(({age}) => {
        total = total + age
    });

    let avg = total / students.length;

    let average_age = document.getElementById("average_age");
    average_age.innerHTML = avg;
}