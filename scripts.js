// Highlight payment method tooltips
const paymentOptions = document.querySelectorAll("#payment-options img");
const ClickableImg = document.querySelectorAll("categories img");

paymentOptions.forEach(option => {
    option.addEventListener("mouseenter", () => {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerText = option.getAttribute("data-tooltip");
        option.appendChild(tooltip);
    });

ClickableImg.forEach(option => {
    option.addEventListener("mouseenter", () => {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerText = option.getAttribute("data-tooltip");
        option.appendChild(tooltip);
    });

    option.addEventListener("mouseleave", () => {
        const tooltip = option.querySelector(".tooltip");
        if (tooltip) tooltip.remove();
    });
});
