var instagram_users = [{
        id: 1,
        name: "Atif Bhat",
        likes: "10,001 Likes",
        img: "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?b=1&k=20&m=1185953092&s=170667a&w=0&h=piovAtT7yPx3v8ovL64iQZJrfF8VMedyyOLf2AuRSUU=",
        paragraph: "The Palm Jumeirah is an archipelago of artificial islands in Dubai, in the United Arab Emirates, created using land reclamation which extends into the ...!",
        header_img: "https://images.unsplash.com/photo-1619182597083-17bda72c1d56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
        id: 2,
        name: "Elon Musk",
        likes: "20000 Likes",
        body_img: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        paragraph: "The Palm Jumeirah is an archipelago of artificial islands in Dubai, in the United Arab Emirates, created using land reclamation which extends into the ...!",
        header_img: "https://images.unsplash.com/photo-1619182597083-17bda72c1d56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    },
    {
        id: 3,
        name: "Sundar Pichai",
        likes: "80000 Likes",
        img: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        paragraph: "The Palm Jumeirah is an archipelago of artificial islands in Dubai, in the United Arab Emirates, created using land reclamation which extends into the ...!",
        header_img: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Tim Cook",
        likes: "15000 Likes",
        img: "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?b=1&k=20&m=1185953092&s=170667a&w=0&h=piovAtT7yPx3v8ovL64iQZJrfF8VMedyyOLf2AuRSUU=",
        paragraph: "The Palm Jumeirah is an archipelago of artificial islands in Dubai, in the United Arab Emirates, created using land reclamation which extends into the ...!",
        header_img: "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?b=1&k=20&m=1185953092&s=170667a&w=0&h=piovAtT7yPx3v8ovL64iQZJrfF8VMedyyOLf2AuRSUU="
    },

];





function changeColor(t) {


    if (t.classList.contains('red-class')) {
        t.setAttribute('class', 'fa fa-heart-o');
    } else {
        t.setAttribute('class', 'red-class fa fa-heart');
    }


}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("inside dom");


    var header_img = document.getElementById("header_img");

    header_img.src = instagram_users[0].header_img;

    var main_user = document.querySelector(".main_user");
    main_user.innerHTML = instagram_users[0].name;


    var img = document.querySelector(".main_img");
    img.src = instagram_users[0].img;


    document.querySelector(".likes").innerText = instagram_users[0].likes;

    var user = document.querySelector(".user");
    var span = document.createElement("span");
    span.innerText = instagram_users[0].name;
    user.appendChild(span);

    document.querySelector(".paragraph").innerText = instagram_users[0].paragraph;
});






// var myImage = document.getElementById("main_img");
// // myImage.onmouseover = mouseOver;
// // myImage.onmouseout = mouseOut;
// myImage.onclick = click;


// function mouseOver() {
//     myImage.src = "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
// }

// function mouseOut() {
//     myImage.src = "https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
// }



// function click() {
//     changeColor();



// }