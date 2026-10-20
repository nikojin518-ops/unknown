<button type="button" className="btn" onClick="tryEnter()">ENTER</button>

<script>
    function tryEnter() {
    const key = prompt("KEY:");
    if (key === "0x13") {
    location.href = "unknown.html";
} else {
    alert("WRONG KEY");
}
}
</script>
