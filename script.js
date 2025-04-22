
document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip");
  const svgObject = document.getElementById("mapa-svg");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const cities = svgDoc.querySelectorAll("[data-cidade]");

    cities.forEach(cidade => {
      cidade.addEventListener("mouseover", (e) => {
        const info = cidade.getAttribute("data-info");
        tooltip.innerHTML = info;
        tooltip.style.display = "block";
      });

      cidade.addEventListener("mousemove", (e) => {
        tooltip.style.top = (e.pageY + 10) + "px";
        tooltip.style.left = (e.pageX + 10) + "px";
      });

      cidade.addEventListener("mouseout", () => {
        tooltip.style.display = "none";
      });
    });
  });
});
