let tasksCountBtn = document.querySelectorAll('.count');
let resetButtons = document.querySelectorAll('button[type="reset"]');

console.log('myLib = ', myLib);


for (let i = 0; i < resetButtons.length; i++) {

    resetButtons[i].addEventListener('click', function(e) {
        e.preventDefault();

        let parent = this.parentNode;
        let inputs = parent.querySelectorAll('input');
        let resultArea = parent.querySelector('.resultArea');

        if (!inputs.length) {
            console.clear();
            return;
        }

        resultArea.innerHTML = '';

        for (let j = 0; j < inputs.length; j++) {
            inputs[j].value = '';
        }
    });
}


{
    let line = {
        x: [],
        y: [],
        type: 'scatter'
    };

    function getY(x) { 
        if (x >= 1) {
            return 5/x; 
        } else if (x < 1) {
            return x*x-4*x; 
        }
    }

    for (let x = -5; x < 5; x += 0.01) {

        line.x.push(x);
        line.y.push(getY(x));

    }

    let data = [line];

    let layout = {
        xaxis: {
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            showline: false
        }
    };

    Plotly.newPlot('schedule', data, layout);	
}

let showArea = function showArea() {
    let area;
    let areaParts = [];
    let prizesIndex = [];
    let numberLives = null;
    let prizesFound = 0;

    return function showArea(size, container, selectedElem) {

        if (numberLives != null) {
            let lifeArea = document.querySelector('.life-area');
            let partIndex;  
            for (let i = 0; i < areaParts.length; i++) {  
                if (selectedElem == areaParts[i]) { 
                    partIndex = i;                 
                    break;                        
                }
            }

            if (partIndex == undefined) {
                area.addEventListener('click', function(e) {
                    showArea(size, container, e.target);
                }, {once: true});
                return;
            } 

            for (let i = 0; i < prizesIndex.length; i++) { 
                if (partIndex == prizesIndex[i]) { 

                    prizesIndex[i] = null;    
                    prizesFound++;             

                    areaParts[partIndex].style.backgroundColor = 'green'; 

                    if (prizesFound == prizesIndex.length) {
                        
                        areaParts = [];
                        prizesIndex = [];
                        numberLives = null;
                        prizesFound = 0;

                        lifeArea.innerText = `Вы победили`;
                    
                        setTimeout(()=>{
                            area.remove();
                            tasksCountBtn[0].hidden = false;
                        }, 2000);
                        return;

                    }

                    area.addEventListener('click', function(e) {
                        showArea(size, container, e.target);
                    }, {once: true});
                    return;
                }
            }
            numberLives--;
            lifeArea.innerText = `Колличество жизней:${numberLives}`;

            if (!numberLives) {
                areaParts = [];
                prizesIndex = [];
                numberLives = null;
                prizesFound = 0;

                selectedElem.style.backgroundColor = 'red';

                lifeArea.innerText = `Вы проиграли`;

                setTimeout(()=> {
                    area.remove();
                    lifeArea.innerText = `Попробуйте снова`;
                    tasksCountBtn[0].hidden = false;
                }, 2000);
                return;
            }

            area.addEventListener('click', function(e) {
                showArea(size, container, e.target);
            }, {once: true});

            selectedElem.style.backgroundColor = 'red';
            

        } else {
           
            area = document.createElement('div');
            numberLives = size;

            area.classList.add('area');

            for (let i = 0, j = size * size; i < j; i++) {
                let elem = document.createElement('div');
                elem.classList.add('area-part');

                area.append(elem);
                areaParts.push(elem);
            }

 getIndexPrizes:for (let i = 0, prevNum = []; i < size - 1; i++) {
                let numberParts = areaParts.length;
                let randomNum = Math.floor(Math.random() * numberParts);
                
                for (let j = 0; j < prevNum.length; j++) {
                    if (randomNum == prevNum[j]) {
                        i--;
                        continue getIndexPrizes;
                    }
                }

                prevNum.push(randomNum);
                prizesIndex.push(randomNum);
            }

            container.append(area);

            let areaPartWidth = areaParts[0].offsetWidth;

            area.style.width = `${areaPartWidth * size}px`;

            let lifeArea = document.querySelector('.life-area');
            lifeArea.innerText = `Колличество жизней:${numberLives}`;

            return area;
        }

        
    };
}();


tasksCountBtn[0].addEventListener('click', function(e) {
    e.preventDefault();

    let sizeArea = document.querySelector('.size-area');
    let resultArea = document.querySelector('.result-area');

    if (Number.isNaN(+sizeArea.value)) return;

    let area = showArea(sizeArea.value, resultArea, e.target);

    this.hidden = true;

    area.addEventListener('click', function (e) {
       showArea(sizeArea.value, resultArea, e.target);
    }, {once: true});
    
});

