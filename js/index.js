function Student(fName, lName, dni, mail) {
    this.fName = fName;
    this.lName = lName;
    this.dni = dni;
    this.mail = mail;
}

var fName = prompt('Ingrese el nombre del alumno.');
var lName = prompt('Infrese el apellido del alumno');
var dni = prompt('Ingrese el DNI del alumno');
var mail = prompt('Ingrese el mail del alumno');

var createStudent = new Student (fName, lName, dni, mail);
var studentData = JSON.stringify(createStudent);

function createLi (student) {
    var mainList = document.getElementById('mainList');

    var liNode = document.createElement('li');
    liNode.className = 'list-group-item';
    var listItem = mainList.appendChild(liNode);
    var output = JSON.parse(studentData);

    return listItem.innerHTML = '<p>' + output.fName + ' ' + output.lName + '<p> DNI: ' + output.dni + '</p> <p> Mail: ' + output.mail + '</p>';
}

createLi (studentData);