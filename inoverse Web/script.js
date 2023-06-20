const users=[
  {
      "username": "eventuser1",
      "password": "password",
      "type": "event"
  },
  {
      "username": "eventuser2",
      "password": "password",
      "type": "event"
  },
  {
      "username": "sponsor1",
      "password": "password",
      "type": "sponsor"
  },
  {
      "username": "sponsor2",
      "password": "password",
      "type": "sponsor"
  }
]
localStorage.setItem("users", JSON.stringify(users));

// validateEventUser = (username, password) => {
//   const users = localStorage.getItem("users");
  
//   const user = users.filter(element => {
//        return (element.username == username && element.password == password && user.type == "event");
//   });

//   if (user) {
//       sessionStorage.setItem("loggedInUser", user);
//       // load the event home page 
//   } else {
//       console.log("Username password does not match");
//   }
// }

// validateSponsorUser = (username, password) => {
//   const users = localStorage.getItem("users");
  
//   const user = users.filter(element => {
//        return (element.username == username && element.password == password && user.type == "sponsor");
//   });

//   if (user) {
//       sessionStorage.setItem("loggedInUser", user);
//       // load the event home page 
//   } else {
//       console.log("Username password does not match");
//   }
// }

function clubLogin() {
  var username = document.getElementById("club-username").value;
  var password = document.getElementById("club-password").value;
  const users = JSON.parse(localStorage.getItem("users"));
  
  const user = users.find(element => {
       return (element.username == username && element.password == password && element.type == "event");  
  });

  if (user) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "club-page.html"; 
  } else {
    alert("Username password does not match");
  }

  // Perform club login logic here
  // // Example:
  // if (username === "clubuser" && password === "clubpass") {
  //   window.location.href = "club-page.html";
  // } else {
  //   alert("Invalid club credentials!");
  // }
}

function sponsorLogin() {
  var username = document.getElementById("sponsor-username").value;
  var password = document.getElementById("sponsor-password").value;
  const users = JSON.parse(localStorage.getItem("users"));
  
  const user = users.find(element => {
       return (element.username == username && element.password == password && element.type == "sponsor");
  });

  if (user) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "sponsor-page.html";
  } else {
      alert("Username password does not match");
  }

  // Perform sponsor login logic here
  // Example:
  // if (username === "sponsoruser" && password === "sponsorpass") {
  //   window.location.href = "sponsor-page.html";
  // } else {
  //   alert("Invalid sponsor credentials!");
  // }
}

  
