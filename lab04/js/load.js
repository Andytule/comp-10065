/*
* Andy Le
* 000805099
* Loads and retrieves list of students and updates page
* I, Andy Le, 000805099 certify that this material is my original work. No other person's work has been used without due acknowledgement.
*/
window.addEventListener("load", function() {

	let alert = document.getElementById("alert");
	let addBut = document.getElementById("add");

	addBut.addEventListener("click", addStudent)

	function success(a) {
		let ol = document.getElementById("studentList");
		let html = "<ol>";
		for (let i = 0; i < a.length; i++) {
			html += "<li>" + a[i]["fullname"] + " (" + a[i]["grade"] +")</li>";
		}
		html += "</ol>";
		ol.innerHTML = html;
	}

	function success2(b) {
		alert.innerHTML = b;
		let url = "php/get.php";
		fetch(url, {credentials:"include"})
			.then(response => response.json())
			.then(success)
	}

	let url = "php/get.php";
	fetch(url, {credentials:"include"})
		.then(response => response.json())
		.then(success)

	function addStudent() {
		let fullname = document.getElementById("fullname").value;
		let grade = document.getElementById("grade").value;

		let params = "fullname=" + fullname + "&grade=" + grade;
		fetch("php/add.php", {
                method: 'POST',
                credentials: 'include',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params
            })
            .then(response => response.text())
            .then(success2)
	}
})