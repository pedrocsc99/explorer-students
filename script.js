let student1
let student2
let student3

let students = [
    student1 ={
        name:'Rodrigo',
        grade1:'10',
        grade2:'7'
    },
     student2 ={
        name:'Pedro',
        grade1:'10',
        grade2:'10'
    },
     student3 ={
        name:'Laura',
        grade1:'4',
        grade2:'4'
    }
]
function finalGrade(studentsArray) {
    for (const student of studentsArray) {
        let finalGrade = (Number(student.grade1) + Number(student.grade2)) / 2
        if (finalGrade > 7) {
            alert(`A media do(a) aluno(a) ${student.name} é ${finalGrade}
 Parabéns ${student.name} , você foi aprovado pro concurso
                `)
        } else {
            alert(`A media do(a) aluno(a) ${student.name} é ${finalGrade}
 Não foi dessa vez ${student.name} , Tente novamente`)
        }
    }   
}
finalGrade(students)


