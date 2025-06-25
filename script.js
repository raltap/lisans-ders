document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    // Menü açma/kapama fonksiyonu
    function toggleSidebar() {
        sidebar.classList.toggle('open');
        mainContent.classList.toggle('sidebar-open');
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

    // Sayfa yüklendiğinde veya boyut değiştiğinde başlangıç durumu
    // Menü kapalı başlayacağı için ekstra bir ayara gerek yok,
    // main-content'in margin-left'i 0 olacak.

    // Eğer sayfa bir hash ile yüklendiyse (örn: site.com/#soru-cevap), ilgili bölüme kaydır
    if (window.location.hash) {
         try {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
             if (targetElement) {
                 // Sayfa yüklendikten kısa süre sonra kaydır
                 setTimeout(() => {
                      window.scrollTo({
                           top: targetElement.offsetTop,
                           behavior: 'smooth'
                      });
                 }, 100);
             }
         } catch (e) {
             console.error("Hash ile kaydırmada hata:", e);
         }
    }
});
