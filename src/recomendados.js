// Función para obtener videos aleatorios
function obtenerVideosAleatorios() {
    // Cargar el archivo JSON desde el servidor
    fetch('/videos-recomendados.json')  // Asegúrate de que la ruta del archivo sea correcta
        .then(response => response.json())
        .then(videos => {
            // Seleccionar dos videos aleatorios
            const videosAleatorios = [];
            while (videosAleatorios.length < 2) {
                const video = videos[Math.floor(Math.random() * videos.length)];
                if (!videosAleatorios.includes(video)) {
                    videosAleatorios.push(video);
                }
            }

            // Insertar los videos recomendados en el HTML
            const container = document.getElementById("video-container");
            container.innerHTML = ""; // Limpiar contenido previo

            videosAleatorios.forEach(video => {
                const col = document.createElement("div");
                col.classList.add("col-md-5", "col-sm-12");

                const enlace = document.createElement("a");
                enlace.href = video.subpagina;
                enlace.classList.add("d-block", "text-normal-link");

                const videoContenedor = document.createElement("div");
                videoContenedor.classList.add("video-recomendado");

                const videoElement = document.createElement("video");
                videoElement.muted = true;
                videoElement.autoplay = true;
                videoElement.loop = true;
                videoElement.preload = "auto";
                videoElement.classList.add("w-100");
                videoElement.src = video.url;

                const descripcion = document.createElement("div");
                descripcion.classList.add("video-description", "mt-2");
                descripcion.innerHTML = `<p><b>${video.titulo}</b><br>${video.descripcion}</p>`;

                videoContenedor.appendChild(videoElement);
                videoContenedor.appendChild(descripcion);
                enlace.appendChild(videoContenedor);
                col.appendChild(enlace);
                container.appendChild(col);
            });
        })
        .catch(error => console.error('Error cargando los videos:', error));
}

// Cargar los videos aleatorios al cargar la página
window.onload = obtenerVideosAleatorios;
