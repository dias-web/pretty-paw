const debounce = (fn, msec) => {
  let lastCall = 0;
  let lastCallTimer = 0;

  return (...arg) => {
    const prevCall = lastCall;
    lastCall = Date.now();

    if (prevCall && lastCall - prevCall < msec) {
      clearTimeout(lastCallTimer);
    }

    lastCallTimer = setTimeout(() => fn(...arg), msec);
  };
};

const createArrow = (className = "arrow-top", { hover = true } = {}) => {
  const button = document.createElement("button");

  button.innerHTML = `
    <svg class="${className}__svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.99998 0.949918C6.08887 0.949918 6.17221 0.963696 6.24998 0.991251C6.32776 1.01881 6.39998 1.06614 6.46665 1.13325L10.8667 5.53325C11 5.66659 11.0667 5.82481 11.0667 6.00792C11.0667 6.19103 11 6.34947 10.8667 6.48325C10.7333 6.61659 10.5778 6.68325 10.4 6.68325C10.2222 6.68325 10.0667 6.61659 9.93332 6.48325L6.66665 3.21659V10.6833C6.66665 10.8721 6.60265 11.0277 6.47465 11.1499C6.34665 11.2721 6.18843 11.3333 5.99998 11.3333C5.8111 11.3333 5.65265 11.2693 5.52465 11.1413C5.39665 11.0133 5.33287 10.855 5.33332 10.6666V3.21659L2.06665 6.48325C1.93332 6.61659 1.77776 6.68325 1.59998 6.68325C1.42221 6.68325 1.26665 6.61659 1.13332 6.48325C0.999985 6.34992 0.933317 6.19147 0.933317 6.00792C0.933317 5.82436 0.999985 5.66614 1.13332 5.53325L5.53332 1.13325C5.59998 1.06659 5.67221 1.01925 5.74998 0.991251C5.82776 0.963251 5.9111 0.949473 5.99998 0.949918Z" />
    </svg>
  `;

  button.classList.add(className);

  const style = document.createElement("style");

  style.textContent = `
    .${className} {
      position: fixed;
      z-index: 999;
      bottom: 30px;
      right: 30px;
      cursor: pointer;
      padding: 0;
      border: none;
      background-color: #ffffff;
      box-shadow: 0px 4px 4px rgba(49, 33, 1, 0.15);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
      display: none;
      color: #000000;
      ${
        hover &&
        "transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;"
      }
      
    }
    ${
      hover &&
      `
      .${className}:hover {
        color: #ffffff;
        background-color: #000000;
      }`
    }
  `;

  document?.head.prepend(style);

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return button;
};

export const initScrollTopButton = (className, options) => {
  const arrow = createArrow(className, options);

  document?.body.append(arrow);

  const showElemScrollPosition = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    arrow.style.display =
      scrollPosition > window.innerHeight / 2 ? "flex" : "none";
  };

  window.addEventListener("scroll", debounce(showElemScrollPosition, 100));
};
