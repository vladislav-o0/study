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

let oldTaskList;

container.addEventListener('click', function clickContainer(e) {
  
        let target = e.target;
        let module, images_arr = [];
        let active_module = document.querySelector('.active_module');
        let taskList;

        container.removeEventListener('click', clickContainer);
    
        if (target == container) return;

        exit:for (let elem = target; elem != container; elem = elem.parentElement) {
            for (let i = 0; i < elem_module_list.length; i++) {
                if (elem_module_list[i] == elem) {
                    module = elem;
                    break exit;
                }
            }
        }
       
        if (module.classList.contains('active_module')) {
            container.addEventListener('click', clickContainer);
            return;
        }

        if (oldTaskList) {
            oldTaskList.style.display = '';
            oldTaskList.style.opacity = '';
        }
        taskList = module.querySelector('.task-list');
    
        if (active_module) {
    
            let imgs = [];
            findImages(active_module, imgs);
            active_module.classList.remove('active_module');
            
            active_module.addEventListener('transitionend', function showImgs(e) {
                for (let i = 0; i < imgs.length; i++) {
                    imgs[i].style.display = '';
            
                    setTimeout(() => {
                        imgs[i].style.transform = "translateY(0px)";
                    }, 500);
                }

                taskList.style.display = 'block';
                setTimeout(() => taskList.style.opacity = '1', 100);
                oldTaskList = taskList;

                setTimeout(() => container.addEventListener('click', clickContainer), 1000);
                active_module.removeEventListener('transitionend', showImgs);
            });
    
            active_module.style.width = '';
            active_module.style.cursor = '';
    
        } else {
            setTimeout(() => {
                container.addEventListener('click', clickContainer);
                taskList.style.display = 'block';
                setTimeout(() => taskList.style.opacity = '1', 100);
                oldTaskList = taskList;
            }, 1500);
        }
    
        module.classList.add('active_module');
    
        findImages(module, images_arr);
        
        for (let i = 0; i < images_arr.length; i++) {
            let distance = images_arr[i].getBoundingClientRect().top + images_arr[i].clientHeight + 7;
            images_arr[i].style.transform = `translateY(-${distance}px)`;
            setTimeout(function() {
                images_arr[i].style.display = 'none';
            }, 500);
        }
    
        module.style.width = '100%';
        module.style.cursor = 'auto';
    
        function findImages(module, img_arr) {
            for (let i = 0; i < module.children.length; i++) {
                if (module.children[i].classList.contains('module_icon')) {
                    img_arr.push(module.children[i]);
                }
            }
        }
    
});