function searchMethods(input) {
  resultsList.innerHTML = "";
  const searchTerm = input.toLowerCase();
  const filteredMethods = Object.keys(methods).filter((method) =>
    method.toLowerCase().includes(searchTerm)
  );
  for (const method of filteredMethods) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = methods[method];
    link.textContent = method;
    link.target = "_blank";
    listItem.appendChild(link);

    const copyIcon = document.createElement("i");
    copyIcon.className = "fas fa-copy";
    copyIcon.style.marginLeft = "10px";
    copyIcon.style.cursor = "pointer";
    listItem.appendChild(copyIcon);

    copyIcon.classList.add("copied");
    setTimeout(() => {
      copyIcon.classList.remove("copied");
    }, 1000);
    copyIcon.addEventListener("click", () => {
      copyToClipboard(`[\`${method}\`](${methods[method]})`);
    });

    resultsList.appendChild(listItem);
  }
}
function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

searchInput.addEventListener("input", (event) => {
  searchMethods(event.target.value);
});
