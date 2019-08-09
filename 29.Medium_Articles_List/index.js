const getDateKeyFromEpoch = (date) =>
  date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();

const getDetailedDateLabelFromEpoch = (date) =>
  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

const titles = [];
for (let key of Object.keys(data.Post)) {
  const post = data.Post[key];
  titles.push({
    title: post.title,
    slug: post.uniqueSlug,
    createdAt: post.createdAt,
    content: post.content,
  });
}
let html = '';
for (let { title, slug, createdAt, content } of trimData) {
  html += `<a class="title" target="_blank" rel="noopener noreferrer" href="https://medium.com/@C.W.Hu/${slug}">
            ${title}<br/>
            <div class="date">${getDetailedDateLabelFromEpoch(new Date(createdAt))}</div>
          </a>`;
}

document.querySelector('.container').innerHTML = html;
