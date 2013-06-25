function showModal() {
  var webView = new steroids.views.WebView("modal.html");
  steroids.modal.show(webView);
}

function previewDolanImage() {
  var fileView = new steroids.views.PreviewFileView("images/dolan.png");
  steroids.modal.show(fileView);
}
