function projectsHome() {
  async function fetchCourses(url) {
    try {
      const coursesResponse = await fetch(url);
      const coursesJSON = await coursesResponse.json();
      const coursesList = document.querySelector("[data-list='projects']");

      for (let index = 0; index < 8; index++) {
        coursesList.innerHTML += `
        <li>
        <a href="${coursesJSON[index].url}" target="_blank">
        <img class="thumb" src="${coursesJSON[index].thumb}" alt="${coursesJSON[index].project_name}">
        <p>Project name: <span>${coursesJSON[index].project_name}</span></p>
        <p>Technologies: <span>${coursesJSON[index].technolgies}</span></p>
        </a>
        </li>  
        `;
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchCourses("https://kelwynoliveira.github.io/Assets/data/projectsapi.json");
}
projectsHome();
