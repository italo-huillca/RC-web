export function initContactForm() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (!form) return;

    let emailjsModPromise: Promise<any> | null = null;
    const loadEmailJS = () => {
      if (!emailjsModPromise) {
        emailjsModPromise = import("@emailjs/browser").then((mod) => {
          const emailjs = mod.default || mod;
          emailjs.init("QfLJtGWncFZZRW72b"); // Public Key
          return emailjs;
        });
      }
      return emailjsModPromise;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const emailjs = await loadEmailJS();
        await emailjs.sendForm("service_u0q07za", "template_wlgfr4r", form);
        alert("Mensaje enviado correctamente");
        form.reset();
      } catch (error: any) {
        alert("Error al enviar: " + (error?.text || JSON.stringify(error)));
      }
    });
  });
}
// Auto-inicializar si se carga vía <script src=...>
initContactForm();
