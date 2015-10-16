var loadBtn;
var req;
function myFunction() {
    req = new XMLHttpRequest();
    req.open('GET', 'users.json');
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                console.log(req.responseText);
            }
        }
    };
    req.send(null);
    var data = data.people[].
    loadBtn.removeEventListener("click");
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("Content Loaded");
    loadBtn = document.querySelector("#loadBtn");
    loadBtn.addEventListener("click", myFunction()
        );
});

/*Then change the load data button to class disabled.
Could use an if statement to move the current data over to the old data section
Need to look up how to display the data from json.

-When show first/next is clicked have the function display the data in the #output1 or 2
display img,first name, last name and email in the main display make sure their email is clickable.
thumbnail, first name, last name in the side display but have their whole name a link to their email
*/