const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "25/06/2021"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "03/09/2021"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "15/05/2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=18"
        },
        "likes": 56,
        "created": "03/04/2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "03/05/2021"
    }
];

console.log(posts);


let container = document.querySelector('#container');


for (let i = 0; i < posts.length; i++) {

    // Creo il div che assume il ruolo di card

    const divPost = document.createElement('div');
    divPost.classList.add('post');
    container.append(divPost);


    // Creo l'header della card che contiene le info dell'utente

    const postHeader = document.createElement('div');
    postHeader.classList.add('post_header');
    divPost.append(postHeader);


    // Creo le info dell'utente (logo & nome)

    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.append(postMeta);

    const postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');
    const img = document.createElement('img');
    img.src = `${posts[i].author.image}`;
    img.classList.add('profile-pic');
    console.log(img);
    postMetaIcon.append(img);
    postMeta.append(postMetaIcon);

    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMeta.append(postMetaData);

    const postMetaAuthor = document.createElement('div');
    postMetaAuthor.classList.add('post-meta__author');
    postMetaAuthor.innerHTML += posts[i].author.name;
    postMetaData.append(postMetaAuthor);
    console.log(postMetaAuthor);

    const postMetaTime = document.createElement('div');
    postMetaTime.classList.add('post-meta__time');
    postMetaTime.innerHTML += posts[i].created;
    postMetaData.append(postMetaTime);


    // Creo la 'descrizione' della card sotto le info e sopra l'immagine principale

    const postText = document.createElement('div');
    postText.classList.add('post__text');
    postText.innerHTML += posts[i].content;
    divPost.append(postText);


    // Creo l'immagine principale

    const postImage = document.createElement('div');
    postImage.classList.add('post__image');
    const imgTwo = document.createElement('img');
    imgTwo.src = `${posts[i].media}`;
    postImage.append(imgTwo);
    divPost.append(postImage);


    // Creo il footer della card, il tasto like e quanti ce ne sono

    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    
    const likes = document.createElement('div');
    likes.classList.add('likes');
    postFooter.append(likes);
    divPost.append(postFooter);

    const likesCta = document.createElement('div');
    likesCta.classList.add('likes__cta');
    likes.append(likesCta);
    console.log(likes);

    const aLink = document.createElement('a');
    aLink.classList.add('like-button');
    

    aLink.innerHTML = ` 
         <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i> 
         `
    const spanLikes = document.createElement('span');
    spanLikes.classList.add('like-button__label');
    spanLikes.innerHTML = 'Mi piace'
    aLink.append(spanLikes);
    likesCta.append(aLink);

    const likesCounter = document.createElement('div');
    likesCounter.classList.add('likes__counter');
    likesCounter.innerHTML += 'Piace a ' + '<b>' + posts[i].likes  + '</b>' + ' persone';
    likes.append(likesCounter);


    likesCta.addEventListener('click', myFunction);


    let count = posts[i].likes;
    console.log(count);

    function myFunction(x) {
        console.log('ciao');
    }

}