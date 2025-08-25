export function initContactForm() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (!form) return;

    const WHATSAPP_PHONE = "51999666134"; // +51 999 666 134

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = (data.get("name") as string || "").trim();
      const email = (data.get("email") as string || "").trim();
      const message = (data.get("message") as string || "").trim();

      if (!name || !message) {
        alert("Por favor completa tu nombre y el mensaje.");
        return;
      }

      const text = email
        ? `hola me contacto desde la web RC, soy ${name}, mi correo es ${email} y mi mensaje es:\n${message}`
        : `hola me contacto desde la web RC, soy ${name} y mi mensaje es:\n${message}`;

      const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;

      const win = window.open(url, "_blank");
      if (!win) window.location.href = url;

      form.reset();
    });
  });
}
// Auto-inicializar si se carga vía <script src=...>
initContactForm();
