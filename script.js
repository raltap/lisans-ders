document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    // Menü açma/kapama fonksiyonu
    function toggleSidebar() {
        sidebar.classList.toggle('open');
        adjustMainContentMargin();
    }

    // İçerik alanının sol boşluğunu ayarlama fonksiyonu
    function adjustMainContentMargin() {
        if (sidebar.classList.contains('open')) {
            mainContent.style.marginLeft = `${sidebar.offsetWidth}px`;
        } else {
            mainContent.style.marginLeft = '0';
        }
    }

    // Menü butonuna tıklandığında menüyü aç/kapat
    menuToggleBtn.addEventListener('click', toggleSidebar);

    // Kenar menüsündeki linklere tıklandığında hem kaydır hem menüyü kapat
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Varsayılan davranışı engelle

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Yumuşak kaydırma
                window.scrollTo({
                    top: targetElement.offsetTop, // Direkt elementin üstüne kaydır
                    behavior: 'smooth'
                });
            }

            // Menüyü kapat (özellikle küçük ekranlarda önemli)
            if (sidebar.classList.contains('open')) {
                toggleSidebar();
            }
        });
    });

    // Sayfa yüklendiğinde içerik alanının boşluğunu ayarla
    adjustMainContentMargin();

    // Sayfa boyutu değiştiğinde boşluğu yeniden ayarla
    window.addEventListener('resize', adjustMainContentMargin);
});
