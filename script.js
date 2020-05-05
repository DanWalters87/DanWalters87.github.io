
function submitText() {

  var post= document.getElementById("comments").value;

  var body = document.getElementById("parent");

  var paragraph = document.createElement("p");
  paragraph.innerHTML = post;

  body.appendChild(paragraph);


}
