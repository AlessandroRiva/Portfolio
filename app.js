// function myMove() {
//     const arrow = document.getElementsByClassName('arrows-scroll');
//     let pos = 0;
//     let id = setInterval(frame, 5);
//     arrow.animate.style.marginTop = '-150px', 800;
//     arrow.animate.style.marginBottom = '150px', 800;
//     setTimeout(arrow, 1600);
// }

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
