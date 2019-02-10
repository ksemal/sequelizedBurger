$("#submit").on("click", function(event) {
  event.preventDefault();

  var newBurger = {
    burger_name: $(".burger-name")
      .val()
      .trim()
  };

  $.ajax("/api/new", {
    type: "POST",
    data: newBurger,
    error: function() {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Please, enter a name of the burger"
      });
    }
  }).then(function() {
    console.log("add new burger");
    location.reload();
  });
});

$(".devour").on("click", function(event) {
  event.preventDefault();
  var customer_name = $(this)
    .closest(".customer-form")
    .find(".customer-name")
    .val()
    .trim();
  var id = $(this).data("id");
  console.log(id);

  $.ajax("/api/" + id, {
    type: "PUT",
    data: { boolean: 1, customer: customer_name },
    error: function() {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Please, enter a customer's name"
      });
    }
  }).then(function() {
    console.log("move burger to the right side");
    location.reload();
  });
});
