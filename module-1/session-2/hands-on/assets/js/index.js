const students = [
    {name: 'Alice', age: 20},
    {name: 'Bob', age: 21},
    {name: 'Jane', age: 20}
];

const bikinTable = () => {

    let tbody = document.getElementById("tbody");

    students.forEach(({ name, age }) => {
        tbody.innerHTML += `<tr><td>${name}</td><td>${age}</td></tr>`;
    });   
}

bikinTable();

const wait = time => new Promise((resolve) => setTimeout(resolve, time));

const keluarinAverage = () => {

    let total = 0;

    students.forEach(({age}) => {
        total = total + age
    });

    let avg = total / students.length;

    // wait(5000).then(() => {
    //     console.log(`age is ${avg}`)
    // })

    console.log('calculation start');

    let average_age = document.getElementById("average_age");
    average_age.innerHTML = avg;

    console.log('second call started');
    wait(2000).then(() => {
        console.log('second call finished')
        console.log('third call started')
        wait(5000).then(() => {
            console.log(`avg is`)
            console.log(`${avg}`)
            wait(2000).then(() => {
                console.log('third call finished')
            })
        })
    })
}