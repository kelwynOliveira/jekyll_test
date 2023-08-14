function aboutProject(project) {
  async function fetchCourses(url) {
    try {
      const coursesResponse = await fetch(url);
      const coursesJSON = await coursesResponse.json();
      const coursesList = document.querySelector("[data-list='about-project']");

      coursesJSON.forEach((course) => {
        if (course.project_id === project) {
          coursesList.innerHTML += `
          <div class="about-project-container">
            <p class="about-project-text">
              Project developed in the <span class="course-name">${course.course}</span> course - 
              <a href="${course.link_course}" target="_blank">${course.school}</a>
              - 
              <a href="${course.certificate}" target="_blank">Certificate</a>
            </p>
            <p class="about-project-text">
              Other projects - <a href="https://kelwynoliveira.github.io/courses"> Courses Projects</a>
            </p>
          </div>
        `;
        }
      });

      // style
      coursesList.style.background = "#ff7700";
      coursesList.style.padding = "1rem";
      coursesList.style.fontFamily =
        "sans-serif, 'Segoe UI', Tahoma, Geneva, Verdana";

      const projectContainer = document.querySelector(
        ".about-project-container"
      );
      projectContainer.style.margin = "0 auto";
      projectContainer.style.maxWidth = "1200px";
      projectContainer.style.textAlign = "center";

      const projectText = document.querySelectorAll(".about-project-text");
      projectText.forEach((item) => {
        item.style.color = "#f5f5f5";
        item.style.fontSize = "1rem";
        item.style.lineHeight = "1.5";

        item.querySelectorAll("a").forEach((item) => {
          item.style.color = "#f5f5f5";
          item.style.textDecoration = "underline";
        });

        item.querySelectorAll("a").forEach((item) => {
          item.addEventListener("mouseenter", () => {
            item.style.color = "#775500";
          });
        });

        item.querySelectorAll("a").forEach((item) => {
          item.addEventListener("mouseleave", () => {
            item.style.color = "#f5f5f5";
          });
        });

        item.querySelectorAll(".course-name").forEach((item) => {
          item.style.textTransform = "uppercase";
        });
      });
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchCourses("/courses/data/coursesProjectsapi.json");
}
