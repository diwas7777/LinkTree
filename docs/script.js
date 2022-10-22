fetch("data.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (products) {
    let placeholder = document.querySelector("#links");
    let out = "";
    for (let product of products) {
      if (`${product.doYouWantToShowThis}` == "yes") {
        out += `
        <a class="link" href="${product.link}">
        <i class="${product.icons}" style="padding: 10px"></i> 
        ${product.contentToShow}
        </a>
        `;
      }
    }
    placeholder.innerHTML = out;
  });
