function projectsMarkup(projectsUrl = []) {
  return projectsUrl.reduce(
    (strMarkup, { url1x, url2x }) =>
      strMarkup +
      `
       <li class="projects-item swiper-slide">
        <div class="project-info-container">
          <ul class="project-lang-list">
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#react</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#node js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#git</span>
            </li>
          </ul>
          <div class="project-description-wrapper">
            <p class="project-description">
              Programming Across Borders: Ideas, Technologies, Innovations
            </p>
           <a href="https://github.com/aandrea-alex/alex-template-portfolio" class="project-link js-project-link" target="_blank">See project</a>
          </div>
        </div>
        <div class="projects-img-wrapper">
          <picture>
            <source
              srcset="
                ${url1x} 1x,
                ${url2x} 2x
              "
              type="image/webp"
            />
            <img
              class="projects-img"
              src="${url1x}"
              alt="Project 01 main page"
            />
          </picture>
        </div>
      </li>
      `,
    ''
  );
}

export default projectsMarkup;