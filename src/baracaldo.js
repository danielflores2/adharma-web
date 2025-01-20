document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    fetch('/proyectos/proyectos.json')
        .then(response => response.json())
        .then(data => {
            const project = data.projects.find(p => p.id === projectId);
            if (project) {
                let htmlTemplate = document.documentElement.outerHTML;

                htmlTemplate = htmlTemplate.replace(/{title}/g, project.title);
                htmlTemplate = htmlTemplate.replace(/{category}/g, project.category);
                htmlTemplate = htmlTemplate.replace(/{videoSrc}/g, project.videoSrc);

                let creditsHtml = '';
                for (let role in project.credits) {
                    creditsHtml += `<p><strong>${role}:</strong> ${project.credits[role]}</p>`;
                }
                htmlTemplate = htmlTemplate.replace(/{credits}/g, creditsHtml);

                document.open();
                document.write(htmlTemplate);
                document.close();
            } else {
                console.error("Proyecto no encontrado");
            }
        })
        .catch(error => console.log("Error al cargar el JSON:", error));
});