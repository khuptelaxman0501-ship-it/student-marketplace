
function searchSkills() {
  const skill = document
    .getElementById("search")
    .value.trim();

  if (skill === "") {
    alert("Please enter a skill to search!");
    return;
  }

  window.location.href =
    "skills.html?skill=" + encodeURIComponent(skill);
}

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const college = document.getElementById("college").value.trim();
        const skill = document.getElementById("skill").value.trim();
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (!name || !email || !college || !skill || password.length < 8) {
            message.textContent = "Please enter all details correctly.";
            return;
        }

        message.textContent =
            "Form validated successfully! Backend registration is not connected yet.";
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("loginMessage").textContent =
            "Login page is ready. Real login requires a backend.";
    });

}

function showSkill(skillName) {
    alert("You selected: " + skillName);
}

const skillSearch = document.getElementById("skillSearch");

if (skillSearch) {
    skillSearch.addEventListener("input", function () {
        const searchText = skillSearch.value.toLowerCase();
        const skillCards = document.querySelectorAll(".skill-card");

        skillCards.forEach(function (card) {
            const skillName = card.querySelector("h3").textContent.toLowerCase();

            if (skillName.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

const studentSearch = document.getElementById("studentSearch");

if (studentSearch) {
    studentSearch.addEventListener("input", function () {
        const searchText = studentSearch.value.toLowerCase().trim();

        const students = document.querySelectorAll(".student-card");
        const noResults = document.getElementById("studentNoResults");

        let found = 0;

        students.forEach(function (student) {
            const studentInfo = student.textContent.toLowerCase();

            if (studentInfo.includes(searchText)) {
                student.style.display = "";
                found++;
            } else {
                student.style.display = "none";
            }
        });

        if (noResults) {
            noResults.style.display = found === 0 ? "block" : "none";
        }
    });
}

function contactStudent(studentName) {
    alert(
        "You selected " + studentName +
        ". Contact feature will be available soon!"
    );
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const senderName =
            document.getElementById("senderName").value.trim();

        const senderEmail =
            document.getElementById("senderEmail").value.trim();

        const studentName =
            document.getElementById("studentName").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (!senderName || !senderEmail || !studentName || !message) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Message submitted successfully!");

        contactForm.reset();
    });
}

