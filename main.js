$(".add").click(function () {
    var input = document.getElementById("inputId").value;
    if (input !== "") {
        var id = Math.random().toString(36).substring(7);
		var boughtDiv = $("#left-panel").html();
		var txt = $("#input-panel").html();
		$(".bl-left-left").append(boughtDiv);
		$(".bl-list").append(txt);
		$("#inpBought").text(input);
		$("#inpTo").val(input);
		$("#inpBought").parent().attr("id", id);
		$("#inpBought").removeAttr("id");
		$("#inpTo").parent().attr("id", id);
		$("#inpTo").removeAttr("id");
		$("#inputId").focus();
		$("#inputId").val("");
	} else $("#inputId").focus();;
	return;
});

document.addEventListener("keypress", function(event) {
	var input = document.getElementById("inputId").value;
	if (event.code === 'Enter' && $("#inputId").is(":focus") && input !== "") {
        var id = Math.random().toString(36).substring(7);
        var boughtDiv = $("#left-panel").html();
		var txt = $("#input-panel").html();
		$(".bl-left-left").append(boughtDiv);
		$(".bl-list").append(txt);
		$("#inpBought").text(input);
		$("#inpTo").val(input);
		$("#inpBought").parent().attr("id", id);
		$("#inpBought").removeAttr("id");
		$("#inpTo").parent().attr("id", id);
		$("#inpTo").removeAttr("id");
		$("#inputId").focus();
		$("#inputId").val("");
    }
});

$(".bl-count").each(function() {
	if ($(this).find(".bl-label").text() == "1") {
		$(this).find(".bl-minus").fadeTo("slow", 0.7, function() {});
	}
});

$(document).on('mouseenter', '.bl-plus', function() {
    $(this).css("background","darkgreen");
});
$(document).on('mouseleave', '.bl-plus', function() {
    $(this).css("background","#21BA45");
});
$(document).on('mouseenter', '.bl-minus', function() {
    $(this).css("background","darkred");
});
$(document).on('mouseleave', '.bl-minus', function() {
    $(this).css("background","#DB2828");
});

$(document).on('keypress', '.bl-product', function() {
	var prodId = $(this).parent().attr("id");
	var input = this.value;
	$(".bl-left-product#" + prodId).find(".left-label").text(input);
});

$(document).on('click', '.bl-plus', function() {
	var plusId = $(this).parent().parent().attr("id");
    $(this).blur();
    $(this).parent().find(".bl-label").fadeTo("middle", 0, function() {});
    $(this).parent().find(".bl-label").fadeTo("middle", 1, function() {});
	var addVar = parseInt(($(this).parent(".bl-count")).find(".bl-label").text()) + 1;
	($(this).parent(".bl-count")).find(".bl-label").text(addVar);
	($(this).parent(".bl-count")).find(".bl-minus").fadeTo("slow", 1, function() {});
	$(".bl-left-product#" + plusId).find(".left-number").text(addVar);
});

$(document).on('click', '.bl-minus', function() {
    if($(this).parent(".bl-count").find(".bl-label").text() !== "1"){
        $(this).blur();
        var minusId = $(this).parent().parent().attr("id");
        $(this).parent().find(".bl-label").fadeTo("middle", 0, function() {});
        $(this).parent().find(".bl-label").fadeTo("middle", 1, function() {});
	    var addVar = parseInt(($(this).parent(".bl-count")).find(".bl-label").text()) - 1;
	    ($(this).parent(".bl-count")).find(".bl-label").text(addVar);
        $(".bl-left-product#" + minusId).find(".left-number").text(addVar);
        if ($(this).parent(".bl-count").find(".bl-label").text() === "1") {
			($(this).fadeTo("slow", 0.7, function() {}));
		}
	}
});



$(document).on('click', '#bought-but', function() {
	var id = $(this).parent().parent().attr("id");
	$(".bought").append($(".bl-left-product#" + id));
    $(this).text("Не куплено");
    $(this).attr("id", 'not-bought-but');
    $(this).attr("data-tooltip", "Повернути");
    $(this).parent().parent().fadeTo("fast", 0, function() {}); 
    $(this).parent().parent().fadeTo("fast", 1, function() {});
	$(this).parent().find(".bl-delete").hide();
	$(this).parent().parent().find(".bl-count").find(".bl-plus").hide();
	$(this).parent().parent().find(".bl-count").find(".bl-minus").hide();
	$(this).parent().parent().find(".bl-product").css("text-decoration", "line-through");
	$(this).parent().parent().find(".bl-product").attr("disabled", "disabled");
	$(this).parent().parent().find(".bl-product").css("background", "none");
	$(".bl-left-product#" + id).find(".left-label").css("text-decoration", "line-through");
});

$(document).on('click', '#not-bought-but', function() {
	var id = $(this).parent().parent().attr("id");
	$(".bl-left-left").append($(".bl-left-product#" + id));
    $(this).text("Куплено");
    $(this).attr("id", 'bought-but');
    $(this).attr("data-tooltip", "Куплено");
    $(this).parent().parent().fadeTo("fast", 0, function() {}); 
    $(this).parent().parent().fadeTo("fast", 1, function() {});
	$(this).parent().find(".bl-delete").show();
    $(this).parent().parent().find(".bl-count").find(".bl-plus").show();
	$(this).parent().parent().find(".bl-count").find(".bl-minus").show();
    $(this).parent().parent().find(".bl-product").removeAttr("disabled");
	$(this).parent().parent().find(".bl-product").css("text-decoration", "none");
	$(".bl-left-product#" + id).find(".left-label").css("text-decoration", "none");
});

$(document).on('click', '.bl-delete', function() {
	$(this).parent().parent().animate({
		height: 'toggle'
	});
	setTimeout(function() {}, 1000);
	var Id = $(this).parent().parent().attr("id");
	$(".bl-left-product#" + Id).remove();
	$(this).parent().parent().remove();
});