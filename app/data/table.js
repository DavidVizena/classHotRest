$(document).ready(function () {

    $.post("/table", "", function(data){
        console.log(data);
    });

});