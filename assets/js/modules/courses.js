function initFetchCourses() {
  async function fetchCourses(url) {
    try {
      const coursesResponse = await fetch(url);
      const coursesJSON = await coursesResponse.json();
      const coursesList = document.querySelector("[data-list='projects']");

      coursesJSON.forEach((course) => {
        coursesList.innerHTML += `
        <li>
        <a href="${course.url}" target="_blank">
        <img class="thumb" src="${course.thumb}" alt="${course.project_name}">
        <p>Project name: <span>${course.project_name}</span></p>
        <p>Technologies: <span>${course.technolgies}</span></p>
        </a>
        </li>  
        `;
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchCourses(
    "https://kelwynoliveira.github.io/Assets/data/coursesProjectsapi.json"
  );
}
initFetchCourses();
