function showCat() {
  var webView = new steroids.views.WebView("cat.html");
  steroids.layers.push(webView);
}

function showCatModal() {
  var modalWebView = new steroids.views.WebView("catModal.html");
  steroids.modal.show(modalWebView);
}

steroids.view.navigationBar.show("Cat Gallery");
