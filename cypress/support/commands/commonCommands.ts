Cypress.Commands.add("hideRequests", () => {
  const routes = ["/some-route-to-hide"];

  Cypress.on("log:added", (ev) => {
    if (
      ev.displayName === "xhr" &&
      routes.some((route) => ev.consoleProps?.URL.includes(route))
    ) {
      const el = Array.from(
        window.top.document.querySelectorAll(".command-wrapper")
      ).slice(-1)[0];
      if (el) {
        el.parentElement.style.display = "none";
      }
    }
  });
});
