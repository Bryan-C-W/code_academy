$(document).ready(function () {
    $("#btnmain button").on("click", function(){
        $("#textmain").toggle();
        $("#skills").toggle();
        $("#textskill").hide();
        $("#btnskill button").show();
        $("#hobbies").toggle();
        $("#texthobbies").hide();
        $("#btnhobbies button").show();
        $("#contact").toggle();
        $("#textcontact").hide();
        $("#btncontact button").show();
        
    })
    $("#btnskill button").on("click",function(){
        $("#textskill").toggle();
        $("#btnskill button").toggle();
    })
    $("#btnhobbies button").on("click",function(){
        $("#texthobbies").toggle();
        $("#btnhobbies button").toggle();
    })
    $("#btncontact button").on("click",function(){
        $("#textcontact").toggle();
        $("#btncontact button").toggle()
})
})