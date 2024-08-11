document.addEventListener("DOMContentLoaded", function() {
    // Get the link with the specific ID
    const links = document.querySelectorAll(".pdf-link");

    // Create an SVG element
    links.forEach(function(link) {
        const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 50 50");
    svg.setAttribute("fill", "black");
    svg.setAttribute("stroke", "black");
    svg.setAttribute("stroke-width", "1");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    // Create the path element inside the SVG
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M 31.5 9 C 31.224 9 31 9.224 31 9.5 C 31 9.776 31.224 10 31.5 10 L 39.292969 10 L 25.146484 24.146484 C 24.951484 24.341484 24.951484 24.658516 25.146484 24.853516 C 25.244484 24.950516 25.372 25 25.5 25 C 25.628 25 25.755516 24.950516 25.853516 24.853516 L 40 10.707031 L 40 18.5 C 40 18.776 40.224 19 40.5 19 C 40.776 19 41 18.776 41 18.5 L 41 9.5 C 41 9.224 40.776 9 40.5 9 L 31.5 9 z M 14.5 10 C 12.019 10 10 12.019 10 14.5 L 10 35.5 C 10 37.981 12.019 40 14.5 40 L 35.5 40 C 37.981 40 40 37.981 40 35.5 L 40 23.5 C 40 23.224 39.776 23 39.5 23 C 39.224 23 39 23.224 39 23.5 L 39 35.5 C 39 37.43 37.43 39 35.5 39 L 14.5 39 C 12.57 39 11 37.43 11 35.5 L 11 14.5 C 11 12.57 12.57 11 14.5 11 L 26.5 11 C 26.776 11 27 10.776 27 10.5 C 27 10.224 26.776 10 26.5 10 L 14.5 10 z");

    // Append the path to the SVG
    svg.appendChild(path);

    // Add some spacing before the SVG icon
    svg.style.marginLeft = "2px";

    // Append the SVG after the link
    link.appendChild(svg);
    })
    
});
