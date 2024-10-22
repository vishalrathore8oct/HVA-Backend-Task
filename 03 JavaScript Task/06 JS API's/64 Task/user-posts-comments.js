document.querySelector("button").addEventListener("click", fetchPosts);

function fetchPosts() {

    document.getElementById("posts").innerHTML = "";

    let userInputId = document.querySelector("input").value;


    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userInputId}`)
        .then((response) => {
            return response.json();
        })
        .then((posts) => {
            console.log(posts);

            posts.forEach(postElement => {

                let postDiv = document.createElement("div");
                postDiv.innerHTML = `
                <div class="post">
                    <p><strong>User ID:</strong> ${postElement.userId}</p>
                    <p><strong>Post ID:</strong> ${postElement.id}</p>
                    <p><strong>Title:</strong> ${postElement.title}</p>
                    <p><strong>Post Body:</strong> ${postElement.body}</p>
                    <h4>Comments:</h4>
                    <div id="comments-${postElement.id}">Loading comments...</div>
                    <hr>
                </div>
                `;

                document.getElementById("posts").append(postDiv);

                fetchPostsWithPostId(postElement.id);
            });
        })
        .catch((error) => {
            console.error('Error fetching posts:', error);
        });
}

function fetchPostsWithPostId(postId) {

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => {
            return response.json();
        })
        .then((comments) => {
            console.log(comments);

            let commentsDiv = document.getElementById(`comments-${postId}`);
            commentsDiv.innerHTML = "";  

            comments.forEach(commentElement => {
                let commentDiv = document.createElement("div");
                commentDiv.innerHTML = `
                <div class="comment">
                    <p><strong>Post ID:</strong> ${commentElement.postId}</p>
                    <p><strong>Comment ID:</strong> ${commentElement.id}</p>
                    <p><strong>Name:</strong> ${commentElement.name}</p>
                    <p><strong>Email:</strong> ${commentElement.email}</p>
                    <p><strong>Comment Body:</strong> ${commentElement.body}</p>
                    <p>--------------------------------------------------------------------------</p>
                </div>
                `;

                commentsDiv.appendChild(commentDiv);
            });
        })
        .catch((error) => {
            console.error('Error fetching comments:', error);
        });
}
