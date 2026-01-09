const students = [
    {name : "Barshan",
        marks : 8,
    age : 20
    },
    {name : "Anik",
        marks : 7,
    age : 22
    },
    {name : "Rafi",
        marks : 6,
    age : 21
    }
]

const filteredStudents = students.filter(student => student.marks > 6);
const names = filteredStudents.map(student => student.name);
const totalMarks = filteredStudents.reduce((acc, student) => acc + student.marks, 0);
console.log("Names of students with marks > 6:", names);
console.log("Total marks of students with marks > 6:", totalMarks);
