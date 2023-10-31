// includeSidebar.js
document.addEventListener("DOMContentLoaded", function () {
    // Use fetch() para carregar o conteúdo da barra lateral
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            // Insira o conteúdo na div com id "sidebarContainer"
            document.getElementById("sidebarContainer").innerHTML = data;
        })
        .catch(error => {
            console.error("Erro ao carregar a barra lateral:", error);
        });
});
