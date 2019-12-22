function myMove() {
    const arrow = document.getElementsByClassName('arrows-scroll');
    let pos = 0;
    let id = setInterval(frame, 5);
    arrow.animate.style.marginTop = '-150px', 800;
    arrow.animate.style.marginBottom = '150px', 800;
    setTimeout(arrow, 1600);
}
