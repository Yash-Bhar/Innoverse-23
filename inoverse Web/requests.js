
// Clear the requests table
function clearRequestsTable() {
  var table = document.querySelector("#requests-table");

  // Remove all rows except the header row
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}

// Populate the requests table
function populateRequests() {
  var requests = JSON.parse(localStorage.getItem("requests"));
  var table = document.querySelector("#requests-table");
  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

  clearRequestsTable(); // Clear the table before populating it

  for (var i = 0; i < requests.length; i++) {
    var row = table.insertRow(i + 1);
    var userNameCell = row.insertCell(0);
    var eventNameCell = row.insertCell(1);
    var eventDetailsCell = row.insertCell(2);
    var expectedParticipantsCell = row.insertCell(3);
    var statusCell = row.insertCell(4);
    var deleteButtonCell = row.insertCell(5);

    userNameCell.textContent = requests[i].user;
    eventNameCell.textContent = requests[i].name;
    eventDetailsCell.textContent = requests[i].details;
    expectedParticipantsCell.textContent = requests[i].participants;
    statusCell.textContent = requests[i].status;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", createDeleteHandler(i)); // Attach a delete handler for each button
    if (user.username == requests[i].user) {
      
      deleteButtonCell.appendChild(deleteButton);
    }
  }
}

// Delete request
function deleteRequest(index) {
  var requests = JSON.parse(localStorage.getItem("requests"));

  // Remove the request at the specified index from the array
  requests.splice(index, 1);

  // Save the updated requests array back to local storage
  localStorage.setItem("requests", JSON.stringify(requests));

  // Re-populate the requests table to reflect the updated data
  populateRequests();
}

// Create a delete handler closure for each delete button
function createDeleteHandler(index) {
  return function () {
    deleteRequest(index);
  };
}

populateRequests();
