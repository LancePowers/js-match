function addPerson(people){
  event.preventDefault();
  var input = document.getElementsByName('person');
  input = input[0];
  var name = input[0].value;
  var phone = input[1].value;
  var city = input[2].value;
  var person = {
    name: name,
    phone: phone,
    city: city
  };
  people.push(person);
}

function printOut(list,person){
  var newElement = document.createElement("ul");
  var name = document.createElement("li");
  var phone = document.createElement("li");
  var city = document.createElement("li");
  name.innerHTML = person.name;
  phone.innerHTML = person.phone;
  city.innerHTML = person.city;
  newElement.appendChild(name);
  newElement.appendChild(phone);
  newElement.appendChild(city);
  var currentElement = document.getElementById(list);
  currentElement.appendChild(newElement);
}
