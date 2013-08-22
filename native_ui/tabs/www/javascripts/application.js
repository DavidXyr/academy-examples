function show() {
  var webView = new steroids.views.WebView("show.html");
  steroids.layers.push(webView);
}

steroids.view.navigationBar.show("Tabs");
