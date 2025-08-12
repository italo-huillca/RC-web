import emailjs from "@emailjs/browser";

export function initContactForm() {
  document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("QfLJtGWncFZZRW72b"); // Tu Public Key

    const form = document.getElementById("contact-form") as HTMLFormElement | null;

    form?.addEventListener("submit", (e) => {
      e.preventDefault();

      emailjs.sendForm("service_u0q07za", "template_wlgfr4r", form)
        .then(() => {
          alert("Mensaje enviado correctamente");
          form.reset();
        })
        .catch((error) => {
          alert("Error al enviar: " + JSON.stringify(error));
        });
    });
  });
}
