function checkDistance() {
  const distance = document.getElementById("distance").value;
  const light = document.getElementById("light");
  const status = document.getElementById("status");

  if (distance <= 500) {
    light.classList.add("on");
    status.textContent = "Status: ON (Sensor within 500m)";
  } else {
    light.classList.remove("on");
    status.textContent = "Status: OFF (Sensor farther than 500m)";
  }
}
