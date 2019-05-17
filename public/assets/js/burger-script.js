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
      function () {
        console.log("Added new burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('.devour-burger').on('click', function (event) {
    var id = $(this).data('id');
    console.log(id);

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: {
        devoured: 1
      }
    }).then(function () {
      location.reload();
    })
  });

  $('.reset-burger').on('click', function (event) {
    var id = $(this).data('id');
    console.log(id);

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: {
        devoured: 0
      }
    }).then(function () {
      location.reload();
    })
  });
})