document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Linkin varsayılan davranışını engelle (direkt zıplama)

            const targetId = link.getAttribute('href').substring(1); // # işaretini kaldır
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Yumuşak kaydırma
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Elementin üst pozisyonuna kaydır (varsa sabit menü boşluğu düşülebilir)
                    behavior: 'smooth' // Yumuşak kaydırma efekti
                });
            }
        });
    });

    // Eğer sayfa hash ile yüklendiyse (örn: site.com/#soru-cevap), ilgili bölüme kaydır
    if (window.location.hash) {
         try {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
             if (targetElement) {
                 // Sayfa yüklendikten kısa süre sonra kaydır
                 setTimeout(() => {
                      window.scrollTo({
                           top: targetElement.offsetTop - 20, // Biraz yukarıda durması için boşluk bırak
                           behavior: 'smooth'
                      });
                 }, 100); // Küçük bir gecikme sayfa render olana kadar
             }
         } catch (e) {
             console.error("Hash ile kaydırmada hata:", e);
         }
    }
});