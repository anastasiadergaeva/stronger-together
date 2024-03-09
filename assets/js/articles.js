const button = document.querySelector('.form__button');
const container = document.querySelector('.articles');
const form = document.querySelector('.form');

function createPost(post) {
    return `
        <div class="post">
            <div class="post__content">
                <h2 class="postheader">${post.title}</h2>
                <p class="postdescription">${post.body}</p>
                <p class="fullpost notdisplay">${post.fullstory}</p>
            </div>
            <button class="post__button" onClick="testButton()">Перейти к посту</button>
        </div>
    `;
}

function testButton() {
    const goToPostButtons = document.querySelectorAll('.post__button');
    const posts = document.querySelectorAll('.post__content');

    posts.forEach((post) => {
        post.style.display = 'none';
    });
    goToPostButtons.forEach((button) => {
        button.style.display = 'none';
    });

    form.style.display = 'none';
    const clickedButton = event.target;
    const postContent = clickedButton.previousElementSibling;
    postContent.style.display = 'block';
    clickedButton.style.display = 'none';

    const fullPostParagraph = postContent.querySelector('.fullpost');
    fullPostParagraph.classList.remove(fullPostParagraph.classList.item(1));
}

function createNewPost(post) {
    const postContainer = document.createElement('div');
    postContainer.className = 'post'
    postContainer.innerHTML = `
        <div class="post__content">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        <button class="post__button" onClick="testButton()">Перейти к посту</button>
    `;
    container.append(postContainer);
}

function appendMarkup(container, markup) {
    container.innerHTML += markup;
}

fetch('./posts.json')
    .then(response => response.json())
    .then(posts => {
        const container = document.querySelector('.articles');
        posts.forEach(post => {
            const newPost = createPost(post);
            appendMarkup(container, newPost);
        });
    })
    .catch(error => console.log(error));

function cleanInputs() {
    document.querySelector('.input__text').value = '';
    document.querySelector('.input__header').value = '';
    document.getElementById('story').value = '';
}

function sendPost() {
    const header = document.querySelector('.input__header').value;
    const text = document.querySelector('.input__text').value;

    const postData = {
        title: `${header}`,
        body: `${text}`,
        userId: 1,
    }

    if (header && text) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(postData),
        })
            .then(response => response.json())
            .then(data => createNewPost(data))
            .catch(error => console.log(error));
    }

    cleanInputs()
}

button.addEventListener('click', sendPost);