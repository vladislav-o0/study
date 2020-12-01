let elem_module_list = document.querySelectorAll('.module');
let container = document.querySelector('.container');

window.onload = drop;

function drop() {
    let i = 0;
    elem_module_list[i].addEventListener('animationend', function sw() {

        elem_module_list[i].removeEventListener('animationend', sw);
        setTimeout(j => elem_module_list[j].classList.remove('bottom-glow'), 1000, i);
        i++;
        if (elem_module_list[i]) {
            elem_module_list[i].addEventListener('animationend', sw);
            elem_module_list[i].classList.add('drop');
            elem_module_list[i].classList.add('bottom-glow');
        }

    });

    elem_module_list[i].classList.add('drop');
    elem_module_list[i].classList.add('bottom-glow');

}

container.addEventListener('click', function(e) {
    let target = e.target;
    let module, images_arr = [];

    if (target == this) return;
    
    exit:for (let elem = target; elem != this; elem = elem.parentElement) {
        for (let i = 0; i < elem_module_list.length; i++) {
            if (elem_module_list[i] == elem) {
                module = elem;
                break exit;
            }
        }
    }

    for (let i = 0; i < module.children.length; i++) {
        if (module.children[i].classList.contains('module_icon')) {
            images_arr.push(module.children[i]);
        }
    }

    for (let i = 0; i < images_arr.length; i++) {
        let distance = images_arr[i].getBoundingClientRect().top + images_arr[i].clientHeight + 7;
        images_arr[i].style.transform = `translateY(-${distance}px)`;
        setTimeout(function() {
            images_arr[i].style.display = 'none';
        }, 500);
    }

    module.style.width = '100%';
});