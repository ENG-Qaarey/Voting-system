// // Registration Process
// document.addEventListener("DOMContentLoaded", function () {
//     const registerForm = document.getElementById("registerForm");
//     if (registerForm) {
//         registerForm.addEventListener("submit", function (e) {
//             e.preventDefault();
//             const name = document.getElementById("name").value;
//             const email = document.getElementById("email").value;

//             localStorage.setItem("voter", JSON.stringify({ name, email, voted: false }));
//             window.location.href = "vote.html";
//         });
//     }

//     // Voting Page Logic
//     if (window.location.pathname.includes("vote.html")) {
//         const voter = JSON.parse(localStorage.getItem("voter"));
//         if (!voter || voter.voted) {
//             alert("You are not registered or have already voted.");
//             window.location.href = "index.html";
//             return;
//         }
//         document.getElementById("userName").innerText = voter.name;
//     }

//     // Results Page Logic
//     if (window.location.pathname.includes("results.html")) {
//         displayResults();
//     }
// });

// // Voting Function
// function vote(candidate) {
//     const voter = JSON.parse(localStorage.getItem("voter"));
//     if (voter.voted) {
//         alert("You have already voted!");
//         return;
//     }

//     let votes = JSON.parse(localStorage.getItem("votes")) || {};
//     votes[candidate] = (votes[candidate] || 0) + 1;

//     localStorage.setItem("votes", JSON.stringify(votes));
//     voter.voted = true;
//     localStorage.setItem("voter", JSON.stringify(voter));

//     alert("Vote submitted successfully!");
//     window.location.href = "results.html";
// }

// // Display Results
// function displayResults() {
//     const resultsList = document.getElementById("results");
//     const votes = JSON.parse(localStorage.getItem("votes")) || {};

//     resultsList.innerHTML = "";
//     for (const candidate in votes) {
//         const listItem = document.createElement("li");
//         listItem.innerText = `${candidate}: ${votes[candidate]} votes`;
//         resultsList.appendChild(listItem);
//     }
// }
