function initFetchSocials() {
  async function fetchSocials(url) {
    try {
      const socialsResponse = await fetch(url);
      const socialsJSON = await socialsResponse.json();
      const socialsList = document.querySelectorAll("[data-list='contacts']");

      socialsList.forEach((item) => {
        socialsJSON.forEach((social) => {
          item.innerHTML += `
          <li>
          <a class="link" href="${social.url}" target="_blank">
          <img src="${social.imgSrc}" alt="${social.imgAlt}">
          ${social.social}
          </a>
          </li>  
          `;
        });
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchSocials("https://kelwynoliveira.github.io/Assets/data/socialsapi.json");
}
initFetchSocials();
