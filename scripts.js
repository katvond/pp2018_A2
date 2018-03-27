$(document).ready(function () {

    $("#datepicker-1").datepicker({
        minDate: 1, // 0 days offset = today
        dateFormat: 'yy-mm-dd'
    });

    var dat = $.datepicker.formatDate('yy-mm-dd', new Date());
    console.log(dat)

    if (getUrlVars()["date"] != null) {
        console.log(getUrlVars()["date"])
        $('#datepicker-1').val(getUrlVars()["date"]);
        doSomething();
    }

    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        console.log(vars)

        return vars;
    }


    $("#datepicker-1").change(function () {
        console.log("test")
        doSomething()

    });

    function doSomething() {
        console.log('Updated Date');
        var inputDate = new Date($("#datepicker-1").val())

        console.log(inputDate)
        console.log($('#datepicker-1').val());
        var countDown = new Date(inputDate - Date.now());
        var days = countDown / 1000 / 60 / 60 / 24;
        days = Math.ceil(days);
        console.log(days)
        console.log(isNaN(days))
        if(isNaN(days)) {
            $("#days").text("This is not a legit date");
            return;
        }
        $("#days").text(days);
        console.log("changed")
        if ($("#vid").is(":hidden")) {
            autoPlayVideo("9jK-NcRmVcw")

            function autoPlayVideo(vcode) {
                "use strict";
                $("#vid").html('<iframe class="embed-responsive-item"  src="https://www.youtube.com/embed/' + vcode + '?start=12&autoplay=1&loop=1&rel=0&wmode=transparent" allowfullscreen wmode="Opaque"></iframe>');
            }
        }

        $('#vid').collapse('show');

    }

    $("form").submit(function (e) {
        e.preventDefault();
    });

});



