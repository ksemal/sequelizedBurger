$("#submit").on("click", function(event) {
  event.preventDefault();

  var newBurger = {
    burger_name: $(".form-control")
      .val()
      .trim()
  };

  $.ajax("/api/new", {
    type: "POST",
    data: newBurger
  }).then(function() {
    console.log("add new burger");
    location.reload();
  });
});

$(".devour").on("click", function(event) {
  event.preventDefault();

  var id = $(this).data("id");
  console.log(id);

  $.ajax("/api/" + id, {
    type: "PUT",
    data: { boolean: 1 }
  }).then(function() {
    console.log("move burger to the right side");
    location.reload();
  });
});
