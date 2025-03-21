document.querySelectorAll(".list li").forEach(item => {
    item.addEventListener("click", () => {
        const title = item.querySelector("a").textContent.trim();
        const imageSrc = item.querySelector("img").src;
        const tags = item.dataset.tags || "";
        const description = item.dataset.description || "";
        
        // Chuyển hướng sang trang chi tiết
        const url = `detail.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(imageSrc)}&tags=${encodeURIComponent(tags)}&description=${encodeURIComponent(description)}`;
        window.open(url, "_blank");
    });
});
