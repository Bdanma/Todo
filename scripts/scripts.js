$ ("form").on("submit", function(event) {
	event.preventDefault ();

	var acti = $("input#acti").val();
	var fech = $("input#fech").val();
	var hora = $("input#hora").val();
	var desc = $("input#desc").val();

	$(".agenda").append("<tr><td>" + acti + "</td><td>" + fech + "</td><td>" + hora + "</td><td>" + desc + "</td> <th><button class=marcarHecho>Completar</button> <button class=marcarDeshecho>Incompleto</button> <button class=eliminar>Eliminar</button> </th>");

	$(".marcarHecho").on("click", function() {
		$(this).closest("tr").children("td").addClass("hecho");
		$(this).hide();
		$(this).next(".marcarDeshecho").show();
	})

	$(".marcarDeshecho").on("click", function() {
		$(this).closest("tr").children("td").removeClass("hecho");
		$(this).hide();
		$(this).prev(".marcarHecho").show();
	})

	$(".eliminar").on("click", function() {
		$(this).closest("tr").remove();
	})

	$("#borrar").on("click", function() {
		$(".agenda").empty();
	})
})

$("#empezar").on("click", function() {
		$(".todo").fadeIn();
})

$("#finalizar").on("click", function() {
		$(".todo").fadeOut();
})