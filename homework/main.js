const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const errorText = document.getElementById("error");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");

const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displayCity = document.getElementById("displayCity");
const displayHobby = document.getElementById("displayHobby");

saveBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const city = cityInput.value.trim();
  const hobby = hobbyInput.value.trim();

  if (!name || !age || !city || !hobby) {
    errorText.textContent = "Пожалуйста, заполните все поля.";
    return;
  }

  if (age <= 0 || age > 120) {
    errorText.textContent = "Введите корректный возраст (1–120).";
    return;
  }

  errorText.textContent = "";

  displayName.textContent = name;
  displayAge.textContent = age;
  displayCity.textContent = city;
  displayHobby.textContent = hobby;
});

clearBtn.addEventListener("click", function () {
  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  hobbyInput.value = "";
  errorText.textContent = "";

  displayName.textContent = "—";
  displayAge.textContent = "—";
  displayCity.textContent = "—";
  displayHobby.textContent = "—";
});