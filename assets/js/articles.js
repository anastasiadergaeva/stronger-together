const button = document.querySelector('.form__button');
const container = document.querySelector('.articles');

function createPost(post) {
    return `
        <div class="post">
            <div class="post__content">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
            <button class="post__button" onClick="testButton()">Перейти к посту</button>
        </div>
    `;
}

function testButton() {
    console.log('тест', document.querySelectorAll('.post__button'));
}

function createNewPost(post) {
    const postContainer = document.createElement('div');
    postContainer.className = 'post'
    postContainer.innerHTML = `
        <div class="post__content">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        <button class="post__button">Перейти к посту</button>
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

const goToPostButton = document.querySelector('.post__button');
console.log(goToPostButton);

button.addEventListener('click', sendPost);