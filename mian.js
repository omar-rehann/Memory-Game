let btn = document.querySelector(".click");
let content = document.querySelector(".start-game");
let text = document.querySelector(".title");
let index = 0;
let incre = 0;
btn.onclick = function() {
    let message = prompt('Whats Your Name');
    if (message == "") {
        text.innerHTML = "Please Enter Name";
        content.classList.add("active")


    } else if (!isNaN(message)) {
        text.innerHTML = "Please Enter String";
        content.classList.add("active")
    } else {
        text.innerHTML = `Welcome To :${message}`;
        content.classList.add("active")
    }




}
let duration = 1000;
let section = document.querySelector(".game-block-game");
let all_children = Array.from(section.children);
let all_number = Array.from(Array(all_children.length).keys());
change_order(all_number);
console.log(change_order(all_number));
all_children.forEach((element, index) => {

    element.style.order = all_number[index];
    element.addEventListener("click", function() {
        rotate(element);
    })


});

function change_order(array) {
    let curent = array.length,
        temp,
        random;
    while (curent > 0) {
        random = Math.floor(Math.random() * curent);
        curent--;
        temp = array[curent];
        array[curent] = array[random];
        array[random] = temp;
    }
    return array;
}

function rotate(e) {
    e.classList.add("rotate");

    let all_boxes = all_children.filter(content => {
        return content.classList.contains("rotate");
    });

    if (all_boxes.length === 2) {
        stop();
        match_element(all_boxes[0], all_boxes[1])

    }
}

function stop() {
    section.classList.add("stop");

    setTimeout(() => {
        section.classList.remove("stop");

    }, duration);
}

function match_element(frist, second) {
    let tryy = document.querySelector(".try");
    let su = document.querySelector(".suc");


    if (frist.dataset.icon === second.dataset.icon) {
        // frist.classList.remove("rotate");
        // second.classList.remove("rotate");
        frist.classList.remove("rotate");
        second.classList.remove("rotate");
        frist.classList.add("same");
        second.classList.add("same");


    } else {
        tryy.innerHTML = `Number Of Try ${++index}`;
        setTimeout(() => {
            frist.classList.remove("rotate");
            second.classList.remove("rotate");
        }, duration);



    }

}