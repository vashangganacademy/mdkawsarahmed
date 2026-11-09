const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}
const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector("[data-contact-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent("Website enquiry from " + (data.get("name") || "a visitor"));
    const body = encodeURIComponent(
      "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
      "\nInterested in: " + data.get("interest") + "\n\nMessage:\n" + data.get("message")
    );
    // Replace the placeholder address in contact.html with your real email.
    window.location.href = "mailto:your.email@example.com?subject=" + subject + "&body=" + body;
  });
}
