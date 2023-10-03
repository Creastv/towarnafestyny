// Walidacja
const form = document.getElementById("contactForm");

function showError(inputElement, errorMessage) {
  const errorDiv = document.getElementById(inputElement.id + "Error");
  errorDiv.textContent = errorMessage;
}

function clearError(inputElement) {
  const errorDiv = document.getElementById(inputElement.id + "Error");
  errorDiv.textContent = "";
}

form.addEventListener("submit", function (event) {
  const firstInput = document.getElementById("firstname");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const msgInput = document.getElementById("msg");
  const consentInput = document.getElementById("consent");
  const offertInput = document.getElementById("offert");

  if (firstInput.value.trim() === "") {
    showError(firstInput, "Proszę podać imię i nazwisko.");
    firstInput.style.borderBottom = "1px solid red";
    event.preventDefault();
  } else {
    firstInput.style.borderBottom = "1px solid green";
    clearError(firstInput);
  }
  if (surnameInput.value.trim() === "") {
    showError(surnameInput, "Proszę podać nazwę firmy.");
    surnameInput.style.borderBottom = "1px solid red";
    event.preventDefault();
  } else {
    surnameInput.style.borderBottom = "1px solid green";
    clearError(emailInput);
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Proszę podać adres email.");
    emailInput.style.borderBottom = "1px solid red";
    event.preventDefault();
  } else {
    emailInput.style.borderBottom = "1px solid green";
    clearError(emailInput);
  }

  if (msgInput.value.trim() === "") {
    showError(msgInput, "Proszę zostaw wiadomość.");
    msgInput.style.borderBottom = "1px solid red";
    event.preventDefault();
  } else {
    msgInput.style.borderBottom = "1px solid green";
    clearError(msgInput);
  }

  if (!phoneInput.value.match(/^\d{9}$/)) {
    showError(phoneInput, "Proszę podać poprawny numer telefonu (9 cyfr).");
    phoneInput.style.borderBottom = "1px solid red";
    event.preventDefault();
  } else {
    clearError(phoneInput);
    phoneInput.style.borderBottom = "1px solid green";
  }

  if (!consentInput.checked) {
    showError(consentInput, "Zgoda na przetwarzanie danych osobowych jest wymagana.");
    document.querySelector('label[for="consent"]').style.color = "red";
    event.preventDefault();
  } else {
    document.querySelector('label[for="consent"]').style.color = "#0c0c0c";
    clearError(consentInput);
  }

  if (!offertInput.checked) {
    showError(offertInput, "Zgoda na przetwarzanie danych osobowych jest wymagana.");
    document.querySelector('label[for="offert"]').style.color = "red";
    event.preventDefault();
  } else {
    document.querySelector('label[for="offert"]').style.color = "#0c0c0c";
    clearError(offertInput);
  }
});
