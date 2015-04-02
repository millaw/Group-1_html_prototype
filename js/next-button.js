$(document).ready(function() {
// for next:
    $("#radio_submit").click(function (e) {
        var checked_option_radio = $('input:radio[name=result]:checked').val();
        var p = document.getElementById('toNext');
        if(checked_option_radio==="0")
            {
                p.innerHTML = "Unfortunately, you can not move to the next step if this step is not completed";
            }else{
                window.location = $('.side-nav li.active').next().find('a').attr('href');
            }
    });

// for back:
    $('#radio_back').click(function() {
    window.location = $('.side-nav li.active').prev().find('a').attr('href');
    });

// for finish:
    $("#radio_finish").click(function (e) {
        var checked_option_radio = $('input:radio[name=result]:checked').val();
        var p = document.getElementById('toNext');
        if(checked_option_radio==="0")
            {
                p.innerHTML = "Unfortunately, you can not move to the next step if this step is not completed";
            }else{
                document.location.href = 'index.html';
            }
    });

});


