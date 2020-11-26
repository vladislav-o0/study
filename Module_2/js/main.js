let elem_module_list = document.querySelectorAll('.module');

window.onload = drop;

function drop() {
    let i = 0;
    elem_module_list[i].addEventListener('animationend', function sw() {

        elem_module_list[i].removeEventListener('animationend', sw);
        i++;
        if (elem_module_list[i]) {
            elem_module_list[i].addEventListener('animationend', sw);
            elem_module_list[i].classList.add('drop');
        }

    });
    elem_module_list[i].classList.add('drop');

}