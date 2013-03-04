function initIndex() {
  document.addEventListener("deviceready", function() {
    steroids.view.navigationBar.show("Cats index");
  });
}

function initShow() {
  document.addEventListener("deviceready", function() {
    catIndex = steroids.view.params["id"];
    steroids.view.navigationBar.show("Cat number " + catIndex);
  });
}

function showCatWithId(id) {
  var webView = new steroids.views.WebView("views/cats/show.html?id=" + id);
  steroids.layers.push(webView);
}