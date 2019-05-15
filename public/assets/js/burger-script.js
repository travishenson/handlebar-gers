$(function () {
  $('.create-form').on('submit', function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $('#burger_name').val().trim(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Added new burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })
})