function showCat() {
  var webView = new steroids.views.WebView("showCat.html");
  steroids.layers.push(webView);
}

function showCatNoNavBar() {
  var webView = new steroids.views.WebView("showCat.html");
  steroids.layers.push( {
    view: webView,
    navigationBar: false
  } );
}

function showCatWithAnimation() {
  var webView = new steroids.views.WebView("showCat.html");
  steroids.layers.push( {
    view: webView,
    animation: {
      transition: "slideFromLeft",
      duration: 1.2,
      reversedTransition: "slideFromRight",
      reversedDuration: 1.2
    }
  } );
}

function previewDolanImage() {
  var webView = new steroids.views.PreviewFileView("images/dolan.png");
  steroids.modal.show(webView);
}
