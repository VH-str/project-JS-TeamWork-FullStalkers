import icon from '../img/my_projects/icon-visit.svg';

// ... other imports and image definitions remain unchanged

const listProjects = document.querySelector('.project-list');
const loadMoreButton = document.querySelector('.more-projects');

let projectElem = document.querySelector('li.project_card');

loadMoreButton.addEventListener('click', loadProjects);

let loadedProjectsCount = 0;

function loadProjects() {
  const heightProject = projectElem.getBoundingClientRect().height;
  const batchSize = 3;
  const remainingProjects = images.slice(
    loadedProjectsCount,
    loadedProjectsCount + batchSize
  );

  listProjects.insertAdjacentHTML(
    'beforeend',
    createMarkupProjects(remainingProjects)
  );

  let numberScrollSections = 3;
  if (images.length - loadedProjectsCount < 3) {
    numberScrollSections = images.length - loadedProjectsCount;
  }
  window.scrollBy({
    top: heightProject * numberScrollSections,
    left: 0,
    behavior: 'smooth',
  });

  loadedProjectsCount += remainingProjects.length;

  if (loadedProjectsCount >= images.length) {
    loadMoreButton.classList.add('hidden');
  }
}

function createMarkupProjects(images) {
  return images
    .map(
      ({ alt, img, sources: { mobile, tablet, desktop } }) => `
      <li class="project_card">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${mobile['1x']} 1x, ${mobile['2x']} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${tablet['1x']} 1x, ${tablet['2x']} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${desktop['1x']} 1x, ${desktop['2x']} 2x"
          />
          <img
            class="project-img-card"
            src="${img}"
            alt="${alt}"
            loading="lazy"
          />
        </picture>

        <p class="project-skills">React, JavaScript, Node JS, Git</p>
        <div class="bottom-box">
          <h3 class="project-name">${alt}</h3>
          <a
            class="visit-button"
            href="https://github.com/VH-str/project-JS-TeamWork-FullStalkers"
            target="_blank"
          >
            <span>VISIT</span>
            <svg class="icon-visit" width="24" height="24">
              <use xlink:href="${icon}#iconss-visit"></use>
            </svg>
          </a>
        </div>
      </li>`
    )
    .join('');
}
