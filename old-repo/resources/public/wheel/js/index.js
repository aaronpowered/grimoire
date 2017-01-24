var circleArray = document.getElementsByClassName("circle"),
    interfaceLock = false,
    angle = 0,
    currentContentNum = 0;
    questionElem = document.getElementById('question'),
    questionArray = [
        'Have you explored how the internet can work harder for you?', 
        'Could you benefit from an instant increase in traffic to your website?', 
        'Do you have an online marketing strategy?', 
        'Do you fully understand how social media can help your business?', 
        'Do you have the right digital tools to attract the right customers?', 
        'Does your technology still tie you to your desk?', 
        'Would you like to increase the number of qualified leads coming through your website?', 
        'Would you like clarity on what to say, how to say it and where to share it?', 
        'Do you want your business to rank at the top of the Google search result?', 
        'Would you like your website to be making you money by selling or processing payments online?', 
        'Are you reaching your customers on their preferred device?', 
        'Do you know what search terms your best customers are using to find you?'
    ],
    answerArray = [
        'n', 
        'y', 
        'n', 
        'n', 
        'n', 
        'y', 
        'y', 
        'y', 
        'y', 
        'y', 
        'n', 
        'n', 
    ];

chargearray();

function chargearray () {
    //alert(currentContentNum)
    for (var i = 0, j = circleArray.length; i < j; i++) {
        var circle = circleArray[i];
        var circleAngle = parseInt (circle.dataset.angle);
        var totalAngle = angle + circleAngle
        var style = "rotate(" + totalAngle + "deg) translate(245px)";
        totalAngle = - totalAngle;
        style = style + " rotate(" + totalAngle + "deg)"
        circle.style.webkitTransform = style;
        circle.style.Transform = style;
    }
}

function answer(input) {
    if (interfaceLock == false) {
        if(input == answerArray[currentContentNum]) {
            if ($('.critical-meter .two').length < 6) {
                $('.circle-big > .circle:nth-child('+currentContentNum+')').clone().css({
                    'position' : 'static',
                    '-webkit-transform' : 'none'
                }).appendTo($('.critical-meter .row')).removeClass('circle').addClass('cloned-circle').wrap('<div class="two columns" />');
            }
            if ($('.critical-meter .two').length > 0 && $('.critical-meter .two').length < 3) {
                $('.alertometer h4').text('Moderate').attr('class', 'text-green2');
            }
            if ($('.critical-meter .two').length > 2 && $('.critical-meter .two').length < 5) {
                $('.alertometer h4').text('Severe').attr('class', 'text-yellow');
            }
            if ($('.critical-meter .two').length > 4) {
                $('.alertometer h4').text('Critical').attr('class', 'text-red');
                $('.transform-business .bright.button').addClass('highlighted');
            }
            if ($('.critical-meter .two').length >= 6) {
                interfaceLock = true;
                $('.circle-inner').html("<h3 class='neg-margin'>Digital engagement for your business is at a critical state!</h3><h5 class='neg-margin'>Take action before it&lsquo;s too late.</h5><a class='button not-absolute' href='/discovery/'>Book a discovery session</a>")
            }
        }
        angle -= 30;
        if(currentContentNum + 1 < questionArray.length)
        {
            currentContentNum++;
        }
        else { currentContentNum = 0; }
        questionElem.innerHTML = questionArray[currentContentNum];
        chargearray();
    }
}

document.onkeydown = function (e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 37:
            angle += 30;
            if(currentContentNum - 1 < 0)
            {
                currentContentNum = questionArray.length - 1;
            } else {
                currentContentNum --;
            }
            questionElem.innerHTML = questionArray[currentContentNum];
            chargearray();
            break;
        case 39:
            angle -= 30;
            if(currentContentNum + 1 < questionArray.length)
            {
                currentContentNum++;
            }
            else { currentContentNum = 0; }
            questionElem.innerHTML = questionArray[currentContentNum];
            chargearray();
            break;
    }
}