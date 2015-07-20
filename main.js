var students = [];
var mentors = [];
function printStudentList(){printList('studentList');}
function printList(list){console.log(list);
  currentElement = document.getElementById(list);  console.log(currentElement);
  while (list.firstChild){
    currentElement.removeChild(currentElement.firstChild);
  } for (var i = 0; i < list.length; i++) {
    var person = list[i];
    printOut(list,person);
  }
}
