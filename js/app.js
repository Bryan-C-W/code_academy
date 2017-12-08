$(document).ready(function () {
    $("#btnmain button").on("click", function(){
        $("#textmain").toggle();
        $("#skills").toggle();
        $("#hobbies").toggle();
        $("#contact").toggle();
    })
    $("#btnskill button").click(function(){
        $("#textskill").toggle();
    })
    $("#btnhobbies button").click(function(){
        $("#texthobbies").toggle();
    })
    $("#btncontact button").click(function(){
        $("#textcontact").toggle();
    })
})