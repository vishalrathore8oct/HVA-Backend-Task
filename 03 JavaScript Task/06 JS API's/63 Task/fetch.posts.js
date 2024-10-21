
fetch("https://jsonplaceholder.typicode.com/posts")
.then((respons)=> {
    return respons.json()
})
.then((data) => {
    console.log(data);

    data.forEach(element => {
        let newDiv = document.createElement("div")
        newDiv.innerHTML = `<p><span>id = ${element.id}</span>, <span>title = ${element.title}</span> <br>
            <span>body = ${element.body}</span>
        </p>`
        document.getElementById("posts").append(newDiv)
    });
    
})
.catch((error) => {
    console.log(error);
    document.getElementById("posts").innerHTML = error
})

