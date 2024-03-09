function createPost() {
    return `
        <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </div>
    `;
}

function appendMarkup(container, markup) {
    container.innerHTML += markup;
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const container = document.querySelector('.articles');
        posts.forEach(post => {
            const newPost = createPost(post);
            appendMarkup(container, newPost);
        });
    })
    .catch(error => console.log(error));