const url = 'https://jsonplaceholder.typicode.com/'

function getUsers(){
    return getFetch(url+'users')
}

function getUserPosts(userId){
    return getFetch(url+'posts',{userId})
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts=>{
            console.log(user.name)
            console.log(posts.length)
            
        })
    })
})

function getFetch(url,params = {}){
    return axios({
        url,
        method:"GET",
        params
    }).then(res=>res.data)
}