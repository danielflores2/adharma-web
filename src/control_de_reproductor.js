document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Reproducir el video solo si está en pantalla
                video.play().catch((error) => console.error("Error al reproducir el video:", error));
            } else {
                // Pausar el video cuando sale de la pantalla
                video.pause();
            }
        });
    }, {
        threshold: 0.5 // Puedes ajustar este valor según el porcentaje del video visible que quieras
    });

    videos.forEach((video) => {
        videoObserver.observe(video);
    });
});