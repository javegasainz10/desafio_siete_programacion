function Student(fName, lName, dni, mail) {
    this.fName = fName;
    this.lName = lName;
    this.dni = dni;
    this.mail = mail;
}

var fName = prompt('Ingrese el nombre del alumno:');
var lName = prompt('Infrese el apellido del alumno:');
var dni = prompt('Ingrese el DNI del alumno:');
var mail = prompt('Ingrese el mail del alumno:');

var createStudent = new Student (fName, lName, dni, mail);

function createLi (student) {
    var mainList = document.getElementById('mainList');

    var liNode = document.createElement('li');
    liNode.className = 'list-group-item';
    var listItem = mainList.appendChild(liNode);

    return listItem.innerHTML = '<p> Nombre del alumno: ' + student.fName + ' ' + student.lName + '<p> DNI: ' + student.dni + '</p> <p> Mail: ' + student.mail + '</p>';
}

createLi (createStudent);