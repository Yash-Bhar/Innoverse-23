function clearRequestsTable() {
    var table = document.querySelector("#requests table");
  
    // Remove all rows except the header row
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
  }

function gotoSR(){
    window.location.href = "sponsor-requests.html";
}

function logout() {
    // Perform logout logic here
    // Example: Redirect to the login page
    window.location.href = "index.html";
  }
  
  // Populate the requests table
  function populateRequests() {
    var requests = JSON.parse(localStorage.getItem("requests"));
    var table = document.querySelector("#requests table");
    clearRequestsTable()
    for (var i = 0; i < requests.length; i++) {
      var row = table.insertRow(i + 1);
      var usernameCell = row.insertCell(0);
      var eventNameCell = row.insertCell(1);
      var eventDetailsCell = row.insertCell(2);
      var expectedParticipantsCell = row.insertCell(3);
      var statusCell = row.insertCell(4);

      
      usernameCell.textContent = requests[i].user;
      eventNameCell.textContent = requests[i].name;
      eventDetailsCell.textContent = requests[i].details;
      expectedParticipantsCell.textContent = requests[i].participants;
    //   statusCell.textContent = requests[i].status;
        if (requests[i].status == 'Pending') {
            const approveButton = document.createElement("button");
            approveButton.addEventListener("click", createApproveHandler(i));
            approveButton.textContent = "Approve";
            statusCell.appendChild(approveButton);
        } else {
            statusCell.textContent = `Approved By: ${requests[i].sponsor}`;    
        }
    }
  }
  
  function approveHandler(indexer) {
    const requests = JSON.parse(localStorage.getItem("requests"));
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    requests[indexer].status = "Approved";
    requests[indexer].sponsor = user.username;

    localStorage.setItem("requests" , JSON.stringify(requests));

    populateRequests()
}

function createApproveHandler(index) {
    return function () {
      approveHandler(index);
    };
  }
  
  populateRequests();
  

  // Function to redirect to Sponsor Requests page
function redirectToSponsorRequests() {
    window.location.href = "sponsor-requests.html";
  }
  
  // Function to handle sponsor request form submission
  function handleSponsorRequestForm(event) {
    event.preventDefault(); // Prevent form submission
  
    var eventName = document.getElementById("sponsor-event-name").value;
    var eventDetails = document.getElementById("sponsor-event-details").value;
    var expectedParticipants = document.getElementById("sponsor-expected-participants").value;
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    // Create an object to represent the sponsor request
    var sponsorRequest = {
        user:user.username,
      name: eventName,
      details: eventDetails,
      participants: expectedParticipants
    };
  
    // Retrieve existing sponsor requests from local storage or initialize an empty array
    var sponsorRequests = JSON.parse(localStorage.getItem("sponsorRequests")) || [];
  
    // Add the new sponsor request to the array
    sponsorRequests.push(sponsorRequest);
  
    // Save the updated sponsor requests array back to local storage
    localStorage.setItem("sponsorRequests", JSON.stringify(sponsorRequests));
  
    alert("Sponsor request added successfully!");
    document.getElementById("sponsor-request-form").reset(); // Reset the form
  }
  
  // Attach event listener to sponsor request form
  var sponsorRequestForm = document.getElementById("sponsor-request-form");
  if (sponsorRequestForm) {
    sponsorRequestForm.addEventListener("submit", handleSponsorRequestForm);
  }
  