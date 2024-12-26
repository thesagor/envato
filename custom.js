document.querySelector(".copy-btn").addEventListener("click", function () {
  const codeSnippet = document.getElementById("code-snippet").innerText;
  navigator.clipboard.writeText(codeSnippet).then(
    function () {
      alert("Code copied to clipboard!");
    },
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
});
