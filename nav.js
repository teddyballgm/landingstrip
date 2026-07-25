// Add a link by adding one line here.
var NAV_LINKS = [
  { label: "TBR", href: "https://tbr.tefleming.com" },
];

(function () {
  var list = document.getElementById("nav-list");
  if (list) {
    NAV_LINKS.forEach(function (link) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.label;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
