const articles = [{
        id: 'art1',
        title: 'article',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti animi dicta porro doloribus incidunt minus molestias quaerat quis harum!',
        author: 'Me',
    },
    {
        id: 'art2',
        title: 'article',
        content: 'Natus praesentium distinctio, reiciendis doloribus dolorem, nobis deserunt unde aperiam voluptas eligendi qui veniam iusto nihil fugit! Nesciunt, ducimus temporibus?',
        author: 'Me',
    },
    {
        id: 'art3',
        title: 'article',
        content: 'Reiciendis earum accusamus atque ducimus maiores nihil culpa impedit voluptate incidunt repellendus libero, vel, quidem at? Numquam veniam quae nesciunt.',
        author: 'Me',
    },
    {
        id: 'art4',
        title: 'article',
        content: 'Minus obcaecati veniam sed voluptate ab provident, illo necessitatibus voluptatem unde quaerat. Adipisci, quae voluptatibus. At nulla repellendus animi cum?',
        author: 'Me',
    },
    {
        id: 'art5',
        title: 'trailer',
        content: 'Officia eius, magnam saepe at architecto accusantium illo distinctio pariatur cum impedit. Labore accusamus iure ratione, laboriosam dolorem minus odit',
        author: 'Me',
    },
    {
        id: 'art6',
        title: 'trailer',
        content: 'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
        author: 'Me',
    },
    {
        id: 'art7',
        title: 'trailer',
        content: 'Dolores ad cumque ea doloribus ab magni. Quasi sint magnam necessitatibus, quod accusamus rerum. Accusamus inventore est delectus sapiente debitis.',
        author: 'Me',
    },
];



const sub = document.querySelector("input[type='submit']")
sub.addEventListener('click', function(evt) {
    for (let i = 0; i < articles.length; i++) {
        let uuid = self.crypto.randomUUID();
    }
    evt.preventDefault()
    let ftit = document.querySelector("#title")
    let fcont = document.querySelector("#content")
    let faut = document.querySelector("#autor")
    let fcheck = document.querySelector("#zajawka")

    let artykul = {
        id: self.crypto.randomUUID(),
        title: ftit.value,
        content: fcont.value,
        author: faut.value
    }
    articles.unshift(artykul)
})
console.log(articles);
