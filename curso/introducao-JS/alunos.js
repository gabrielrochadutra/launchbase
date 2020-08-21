// Criar um programa que calcula a average
// das crews de students e envia
// mensagem do calculo da average.

const crewA = [
    {
        name: "Gabriel",
        grade: 9.8
    },
    {
        name: "Guilherme",
        grade: 10
    },
    {
        name: "João",
        grade: 5
    },
    {
        name: "Pedro",
        grade: 1
    }
]

const crewB = [
    {
        name: "Eduardo",
        grade: 10
    },
    {
        name: "Mateus",
        grade: 2
    },
    {
        name: "Bruna",
        grade: 3
    },
    {
        name: "Paula",
        grade: 10
    }
]

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

const average1 = calculateAverage(crewA)
const average2 = calculateAverage(crewB)

function sendMessage(average, crew) {
    if (average > 5) {
        console.log(`${crew} average: ${average}. Congrats!`)
    }
    else {
        console.log(`${crew} average: ${average}. Its not so good.`)
    }
}

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

// Marcar students como flunkeds se a grade for menor que 5.
// E também enviar uma mensagem.

function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendMessageFlunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentReprovado(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendMessageFlunked(student)
    }
}

studentReprovado(crewA)
studentReprovado(crewB)