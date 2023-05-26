document.getElementById("add").addEventListener("click", function () {
  var textareaValue = document.getElementById("blog").value;
  document.getElementById("outputText").textContent = textareaValue;
});
