function showCat() {
  var webView = new steroids.views.WebView("showCat.html");
  steroids.layers.push(webView);
}

function showCatWithAnim() {
  var anim = new steroids.Animation("curlUp");
  var webView = new steroids.views.WebView("showCat.html");
  
  steroids.layers.push( {
    view: webView,
    animation: anim
  } );
  
}

steroids.view.navigationBar.show("Layer Stack");