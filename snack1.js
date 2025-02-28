

// const getPostTitleId = id => {

//     return new Promise((resolve, reject)=>{

//         fetch(`https://dummyjson.com/posts/${id}`)
//         .then(response => response.json())
//         .then(data=>resolve(data.title))
//         .catch(reject);
//     })
// }

// getPostTitleId(2).then((obj)=>console.log(obj)).catch(err=>console.error(err));




const getPostId = id => {

    return new Promise((resolve, reject)=>{

        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(data=>resolve(data))
        .catch(reject);
})}

const getUser = userId => {

    return new Promise((resolve, reject)=>{
        fetch(`https://dummyjson.com/users/${userId}`)
        .then(response => response.json())
        .then(data=>resolve(data))
        .catch(reject)
    })
}



getPostId(2)
.then(post=>{console.log(post);
    return post
})
.then(post=>getUser(post.userId))
.then(user=>console.log(user))
.catch(err=>console.error(err));

