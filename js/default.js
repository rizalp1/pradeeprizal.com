var showdown_converter = new showdown.Converter();

$.get("../markdown/body.md", function( data ) {
    var convertedHtml = showdown_converter.makeHtml(data);
    $("#main_body").html(convertedHtml);
        console.log( "successfully loaded body.md and applied to main div." );
    });

$.get("../markdown/left.md", function( data ) {
        var convertedHtml = showdown_converter.makeHtml(data);
        $("#left_nav").html(convertedHtml);
        console.log("left.md will be rendered.");
    }).fail(function () {
        console.log("left.md doesn't exist. This is fine if you don't want a left navigation bar.");
    });
$('#body_container').scroll(function() {
debugger;
    $('#left_nav').css('top', $(this).scrollTop());
});
