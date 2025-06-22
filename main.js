function convertToBinary() {
  const text = document.getElementById("textInput").value;
  const binary = text.split("").map(char =>
    char.charCodeAt(0).toString(2).padStart(8, "0")
  ).join(" ");
  document.getElementById("output").value = binary;
}

function convertToText() {
  const binary = document.getElementById("textInput").value.trim();
  try {
    const text = binary.split(" ").map(bin =>
      String.fromCharCode(parseInt(bin, 2))
    ).join("");
    document.getElementById("output").value = text;
  } catch (err) {
    document.getElementById("output").value = "Invalid binary input!";
  }
}

function copyOutput() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
}
