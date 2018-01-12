{
    let msg = ['Hi, ', 'Weclome to My Website.', 'Yaniv Peretz - CV'];
    let len = (msg[0] + msg[1]).length;
    let delay = [1000, 400, 300];
    $(document).ready(() => {
        $('#typewrite-greeting').typewrite({
            showCursor: false,
            actions: [
                { speed: 25 },
                { delay: delay[0] },
                { type: msg[0] },
                { delay: delay[1] },
                { type: msg[1] },
                { delay: delay[2] },
                { speed: 30 },
                { delay: delay[2] },
                { select: { from: 0, to: len } },
                { delay: delay[2] },
                { remove: { num: len, type: 'whole' } },
                { type: msg[2] },
            ]
        });

        setTimeout(() => {
            let element = $('#main-content');
            element[0].style.visibility = 'visible';
            $(element).addClass('animated slideInUp');

            }, 1500 + 3500);
        // }, 1);

    });
}


function pulseStart(id) {
    $(`#${id}`).addClass('animated infinite pulse infinate');
}

function pulseStop(id) {
    $(`#${id}`).removeClass('animated infinite pulse');
}

var fillProcessBars = (function () {
    var isOpen = false;
    function toggle(val) {
        isOpen = !isOpen;
        let processBars = document.querySelectorAll(".progress-bar-animated");
        if (isOpen) {
            setTimeout(() => {
                openBars();
            }, 100);
        }else{
            closeBars();
        }
    }
    return {
        toggle: function () {
            toggle(isOpen);
        }
    };
})();


function openBars() {
    let objs = $('.progress-bar-empty');
    for (let index = 0; index < objs.length; index++) {
        $(objs[index]).addClass('progress-bar-full');
    }
}

function closeBars() {
    let objs = $('.progress-bar-empty');
    for (let index = 0; index < objs.length; index++) {
        $(objs[index]).removeClass('progress-bar-full');
    }
}

/** Angular js */
var app = angular.module("main", []);
app.controller('main', ($scope) => {
    $scope.backendSkills = [
        {
            name: 'Java',
            max_width: '90%',
            msg: 'Spring, Hibernate, Maven, Multitherding, Generics, Optional, Streams, JUnit',
        },
        {
            name: 'NodeJs',
            max_width: '85%',
            msg: 'Express, npm, Knex',        
        },
        {
            name: 'Git',
            max_width: '80%',
            msg: '',
        },
        {
            name: 'Linux',
            max_width: '40%',
            msg: '',
        },
        {
            name: 'AWS',
            max_width: '40%',
            msg: 'Deployed 2 servers on EC2 (see My Project)',
        }
    ]

    $scope.frontendSkills = [
        {
            name: 'HTML & CSS',
            max_width: '100%',
            msg: 'HTML5, CSS3, Bootstrap, Responsive',
        },
        {
            name: 'Javascript',
            max_width: '90%',
            msg: 'ES6, Promise, Cookie',
        },
        {
            name: 'AngularJs',
            max_width: '80%',
            msg: '',
        },
        {
            name: 'React',
            max_width: '50%',
            msg: '',
        }
    ]

});