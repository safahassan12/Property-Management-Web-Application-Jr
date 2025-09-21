document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const role = document.getElementById("role").value;

  if (username && role) {
    if (role === "tenant") {
      window.location.href = "tenant_dashboard.html";
    } else if (role === "owner") {
      window.location.href = "owner_dashboard.html";
    } else if (role === "payment") {
      window.location.href = "payment_dashboard.html";
    } else if (role === "maintenance") {
      window.location.href = "maintenance_dashboard.html";
    }
  } else {
    alert("من فضلك أدخل البيانات كاملة");
  }
});
