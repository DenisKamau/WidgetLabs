export const createButton = ({
  useAlpine = false,
  variant,
  size = "medium",
  backgroundColor = "",
  hoverBackgroundColor = "",
  textColor = "",
  label = "Button",
  borderRadius = "rounded-md",
  border = "border",
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  btn.addEventListener("click", handleClick);

  // Determine button mode based on variant
  const mode =
    variant === "primary"
      ? "bg-[#7F56D9]"
      : variant === "secondary"
      ? "bg-gray-300"
      : variant === "tertiary"
      ? "bg-gray-800"
      : "";

  // Determine button size class based on size
  const sizeClass = size === "small" ? "px-2 py-1 text-sm" : size === "large" ? "px-6 py-3 text-lg" : "px-4 py-2.5";

  // Determine background color class
  const bgColorClass = backgroundColor ? (backgroundColor.startsWith("#") ? "" : backgroundColor) : mode;

  // Determine hover background color class
  const hoverBgColorClass = hoverBackgroundColor
    ? hoverBackgroundColor.startsWith("#")
      ? `hover:bg-[${hoverBackgroundColor.slice(1)}]`
      : `hover:${hoverBackgroundColor}`
    : `hover:${hoverBackgroundColor}`;

  // Build class list
  const classList = ["inline-block", sizeClass, border, bgColorClass, textColor, borderRadius, hoverBgColorClass];

  // Apply base classes and styles
  btn.className = classList.join(" ");

  // Apply background color (HEX)
  if (backgroundColor.startsWith("#")) {
    btn.style.backgroundColor = backgroundColor;
  }

  // Apply hover background color (HEX)
  if (hoverBackgroundColor.startsWith("#")) {
    btn.style.setProperty("--hover-bg", hoverBackgroundColor);
    btn.classList.add(`hover:bg-[var(--hover-bg)]`);
  }

  // Alpine.js functionality (if needed)
  if (useAlpine) {
    btn.setAttribute("x-data", "{ isActive: false }");
    btn.setAttribute("x-bind:class", `{'bg-blue-500 text-white': isActive, 'bg-gray-300 text-gray-800': !isActive}`);
    btn.setAttribute("x-on:click", "isActive = !isActive");
  }

  return btn;
};
