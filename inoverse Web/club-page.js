function logout() {
    // Perform logout logic here
    // Example: Redirect to the login page
    window.location.href = "index.html";
}
  
  function viewRequests() {
    // Perform view requests logic here
    // Example: Redirect to the requests page
    window.location.href = "requests.html";
}
  
function postDetails() {
    var eventName = document.getElementById("event-name").value;
    var eventDetails = document.getElementById("event-details").value;
    var expectedParticipants = document.getElementById("expected-participants").value;
    const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
    // Create an object to represent the request
    var request = {
        user: user.username,
        name: eventName,
        details: eventDetails,
        participants: expectedParticipants,
        status: "Pending", // Initial status is set to "Pending"
        sponsorUser:""
    };

    // Retrieve existing requests from local storage or initialize an empty array
    var requests = JSON.parse(localStorage.getItem("requests")) || [];

    // Add the new request to the array
    requests.push(request);

    // Save the updated requests array back to local storage
    localStorage.setItem("requests", JSON.stringify(requests));

    alert("Event details posted successfully!");

    // Redirect to the requests.html page to see the updated requests
    window.location.href = "requests.html";
}


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
  
    // Create an object to represent the sponsor request
    var sponsorRequest = {
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
  