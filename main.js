const articles = [{
        id: '804ed6da-1518-41a9-b620-bfb6250c4a7f',
        zajawka: false,
        title: 'article',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti animi dicta porro doloribus incidunt minus molestias quaerat quis harum!',
        author: 'Me',
    },
    {
        id: '751f2233-7598-4254-ad23-f8eb8545f5b3',
        title: 'article',
        zajawka: false,
        content: 'Natus praesentium distinctio, reiciendis doloribus dolorem, nobis deserunt unde aperiam voluptas eligendi qui veniam iusto nihil fugit! Nesciunt, ducimus temporibus?',
        author: 'Me',
    },
    {
        id: '4db9f150-b4ed-4d15-8a17-4d98fe1037f4',
        title: 'article',
        zajawka: false,
        content: 'Reiciendis earum accusamus atque ducimus maiores nihil culpa impedit voluptate incidunt repellendus libero, vel, quidem at? Numquam veniam quae nesciunt.',
        author: 'Me',
    },
    {
        id: 'add4beac-714a-43b2-9b18-2e18c4d98c4c',
        title: 'article',
        zajawka: false,
        content: 'Minus obcaecati veniam sed voluptate ab provident, illo necessitatibus voluptatem unde quaerat. Adipisci, quae voluptatibus. At nulla repellendus animi cum?',
        author: 'Me',
    },
    {
        id: '68339f74-eb60-4484-aa77-aa34fd305c5c',
        title: 'trailer',
        zajawka: true,
        content: 'Officia eius, magnam saepe at architecto accusantium illo distinctio pariatur cum impedit. Labore accusamus iure ratione, laboriosam dolorem minus odit',
        author: 'Me',
    },
    {
        id: '2d845165-3080-4644-93f4-6c1de03a51bb',
        title: 'trailer',
        zajawka: true,
        content: 'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
        author: 'Me',
    },
    {
        id: 'ad1b8424-223a-402d-bc32-49e1002f7a03',
        title: 'trailer',
        zajawka: true,
        content: 'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
        author: 'Me',
    },
];

//   for(let i = 0; i < articles.length; i++){
//     let uuid = self.crypto.randomUUID();
//     document.querySelector(".container").innerHTML+=`<p>id: ${uuid}</p>`
// }


// document.querySelector("form").addEventListener("submit", function(e){
//     e.preventDefault();

//     let tytul = document.getElementById("tytulInp").value;
//     let tresc = document.getElementById("trescInp").value;
//     let autor = document.getElementById("autorInp").value;
//     let czyZaj = document.getElementById("czyZajawka").value;

//     let artykul = {
//       id: uuid,
//       title: tytul,
//       zajawka: czyZaj,
//       content: tresc,
//       author: autor
//     }

//     console.log(artykul)
//   })
let editingArticleId = null;

function displayArticles() {
    const mainContainer = document.querySelector('main .container');
    const asideContainer = document.querySelector('aside');

    mainContainer.innerHTML = '';
    asideContainer.innerHTML = '';

    articles.map(article => {
        const articleHTML = `
      <div class="article" id="${article.id}">
        <h3>${article.title}</h3>
        <p>${article.content}</p>
        <p><strong>Author:</strong> ${article.author}</p>
        <button onclick="editArticle('${article.id}')">Edit</button>
        <button onclick="deleteArticle('${article.id}')">Delete</button>
      </div>
    `;

        if (article.zajawka) {
            asideContainer.innerHTML += articleHTML;
        } else {
            mainContainer.innerHTML += articleHTML;
        }
    });
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const tytul = document.getElementById('tytulInp').value;
    const tresc = document.getElementById('trescInp').value;
    const autor = document.getElementById('autorInp').value;
    const czyZaj = document.getElementById('czyZajawka').checked;

    if (editingArticleId) {

        const article = articles.find(a => a.id === editingArticleId);
        if (article) {
            article.title = tytul;
            article.content = tresc;
            article.author = autor;
            article.zajawka = czyZaj;
        }
        editingArticleId = null;
    } else {

        const uuid = crypto.randomUUID();
        const newArticle = {
            id: uuid,
            title: tytul,
            zajawka: czyZaj,
            content: tresc,
            author: autor,
        };
        articles.unshift(newArticle);
    }

    displayArticles();
    document.querySelector('form').reset();
});


function editArticle(id) {
    const article = articles.find(a => a.id === id);

    if (article) {

        document.getElementById('tytulInp').value = article.title;
        document.getElementById('trescInp').value = article.content;
        document.getElementById('autorInp').value = article.author;
        document.getElementById('czyZajawka').checked = article.zajawka;

        editingArticleId = id;
    }
}


function deleteArticle(id) {
    const index = articles.findIndex(article => article.id === id);
    if (index !== -1) {
        articles.splice(index, 1);
        displayArticles();
    }
}

displayArticles();
