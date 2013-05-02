window.CatsController = {

  index: function () {
    steroids.view.navigationBar.show("Index of cats");
  },

  show: function () {

  	// Fetch a value from query parameters ?id=x
    var showId = steroids.view.params["id"];
    steroids.view.navigationBar.show("cats #" + showId);

    // Just to demonstrate the control flow of the application, hook your own code here
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("show-id").textContent = showId;
    });

  }

};
