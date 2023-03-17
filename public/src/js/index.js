$(document).ready(function(){

    $.ajax({
        type: "get",
        url: "http://localhost:8000/api/menu",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(msg) {
            for (i = 0; i < msg.length; i++) {
              $(".nav.nav.d-flex.justify-content-between").append("<a href='#' class='p-2 text-muted'>"+msg[i].title+"</a>");
            }
        },
        error: function() {
            alert('loadUserGrp :failure');
        }
    });
});
