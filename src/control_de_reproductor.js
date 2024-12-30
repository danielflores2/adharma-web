document.addEventListener("DOMContentLoaded", () => {
    // Detectar si el usuario está en un dispositivo móvil
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        const videos = document.querySelectorAll("video");

        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    // Reproducir el video si está visible
                    video.play().catch((error) => console.error("Error al reproducir el video:", error));
                } else {
                    // Pausar el video si está fuera de la pantalla
                    video.pause();
                }
            });
        });

        videos.forEach((video) => {
            videoObserver.observe(video);
        });
    }
});