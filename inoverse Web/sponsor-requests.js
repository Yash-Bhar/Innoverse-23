// Function to populate the sponsor requests table

function populateSponsorRequests() {
  var sponsorRequests = JSON.parse(localStorage.getItem("sponsorRequests"));
  var tableBody = document.querySelector("#sponsor-requests-table tbody");

  // Clear existing table rows
  tableBody.innerHTML = "";
  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  for (var i = 0; i < sponsorRequests.length; i++) {
    var request = sponsorRequests[i];

    var row = document.createElement("tr");
    var usernameCell = document.createElement("td");
    var eventNameCell = document.createElement("td");
    var eventDetailsCell = document.createElement("td");
    var expectedParticipantsCell = document.createElement("td");
    var deleteButtonCell = document.createElement("td");

    usernameCell.textContent = request.user;
    eventNameCell.textContent = request.name;
    eventDetailsCell.textContent = request.details;
    expectedParticipantsCell.textContent = request.participants;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", createDeleteHandler(i));
    deleteButtonCell.appendChild(deleteButton);

    row.appendChild(usernameCell);
    row.appendChild(eventNameCell);
    row.appendChild(eventDetailsCell);
    row.appendChild(expectedParticipantsCell);
    if (user.type == 'sponsor' && user.username==sponsorRequests[i].user) {
    row.appendChild(deleteButtonCell);
    }
    tableBody.appendChild(row);
  }
}

// Delete sponsor request
function deleteSponsorRequest(index) {
  var sponsorRequests = JSON.parse(localStorage.getItem("sponsorRequests"));

  // Remove the sponsor request at the specified index from the array
  sponsorRequests.splice(index, 1);

  // Save the updated sponsor requests array back to local storage
  localStorage.setItem("sponsorRequests", JSON.stringify(sponsorRequests));

  // Re-populate the sponsor requests table to reflect the updated data
  populateSponsorRequests();
}

// Create a delete handler closure for each delete button
function createDeleteHandler(index) {
  return function () {
    deleteSponsorRequest(index);
  };
}

// Populate the sponsor requests table on page load
window.addEventListener("DOMContentLoaded", populateSponsorRequests);

  