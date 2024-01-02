const main = document.querySelector(".main");

export function renderData(products) {
  products.forEach((product) => {
    const template = `
      <div class="m-5 p-5 border rounded-xl w-fit">
        <img src="${product?.image}" alt="${product?.title}" class="w-96  object-cover">
        <h2 class="text-2xl font-semibold">${product?.title}</h2>
        <p class="text-2xl font-semibold">$${product?.price}</p>
      </div>
      `;
    main.insertAdjacentHTML("beforeend", template);
  });
}
export function renderError(message) {
  const template = `
    <div class="flex justify-center items-center min-h-screen">
    <p class="text-rose-500 text-3xl font-semibold">${message}</p>
    </div>`;
  main.insertAdjacentHTML("beforeend", template);
}
export function renderLoading(loadingState) {
  const template = `
    <div class="loading flex justify-center min-h-screen items-center">
      <span class="animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader"><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/></svg>
      </span>
    </div>
  `;

  if (loadingState) {
    main.insertAdjacentHTML("beforeend", template);
  } else {
    document.querySelector(".loading").style.display = "none";
  }
}
