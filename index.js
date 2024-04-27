var lister = [37, 38, 39, 40];
// alert('hi')
$(document).keydown(function(e) {
    alert(e.which)
    if (lister.includes(e.which)) {
        alert("hi");
    }
});
