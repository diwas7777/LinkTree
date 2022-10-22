fetch("data.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (products) {
    let placeholder = document.querySelector("#links");
    let placeholder2 = document.querySelector(".icon-container");

    let out = "";
    let out2 = "";

    for (let product of products) {
      // First set of links
      if (`${product.doYouWantToShowThis}` == "yes") {
        out += `
        <a class="link" href="${product.pageLink}" target="_blank">
        <i class="${product.pageIcons}" style="padding: 10px"></i>${product.contentToShow}
        </a>
        `;
      }
      // Second set of links
      if (`${product.doYouNeedThisSocial}` == "yes") {
        out2 += `
            <a class="icon" href="${product.socialLinks}" target="_blank">
            <i class="${product.socialIcons}" style="padding: 10px"></i>             
            </a>
            `;
      }
    }
    placeholder.innerHTML = out;
    placeholder2.innerHTML = out2;
  });
