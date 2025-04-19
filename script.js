function showIntro() {

  // Hide the header and show the intro section

  document.querySelector("header").style.display = "none";

  document.getElementById("introSection").classList.remove("hidden");

}

function showRoadmap() {

  // Hide the intro section and show the roadmap section

  document.getElementById("introSection").style.display = "none";

  document.getElementById("roadmapSection").classList.remove("hidden");

}