/**
 * Created by TZM on 2016/9/6.
 */
//button
$(document).ready(function(){
    $('#button').button();
});



//accordion
$(document).ready(function(){
    $('#accordion').accordion();
});


//Dialog
$(document).ready(function(){
    $('#btn').button().on('click',function(){
        $('#dialog').dialog();
    });
});


//AutoComplete
$(document).ready(function(){
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $('#tags').autocomplete({
        source:availableTags
    });
});


//menu
$(document).ready(function(){
   $('#menu').menu({position:{at:'left bottom'}});
});
