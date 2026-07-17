 const burger = document.getElementById('burger');
        const mobileMenu = document.getElementById('mobileMenu');
        burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

        // Scroll reveal
        const revealEls = document.querySelectorAll('.reveal');
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
        }, { threshold: 0.15 });
        revealEls.forEach(el => io.observe(el));

        // Spice selector active state
        document.querySelectorAll('.spice-opt').forEach(opt => {
            opt.addEventListener('click', () => {
                document.querySelectorAll('.spice-opt').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
            });
        });

        // Order form -> WhatsApp
        const WHATSAPP_NUMBER = "22900000000"; // remplace par le vrai numéro WhatsApp (format international, sans +)
        document.getElementById('orderForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const nom = document.getElementById('nom').value;
            const tel = document.getElementById('tel').value;
            const adresse = document.getElementById('adresse').value;
            const produit = document.getElementById('produit').value;
            const qte = document.getElementById('qte').value;
            const spice = document.querySelector('input[name="spice"]:checked').value;
            const note = document.getElementById('note').value;

            const message =
                `Nouvelle commande 2XAGRESSIF CHAWAMA
--------------------------
Nom : ${nom}
Téléphone : ${tel}
Adresse : ${adresse}
Produit : ${produit}
Quantité : ${qte}
Piment : ${spice}
Note : ${note || 'Aucune'}`;

            const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });

        // Header background intensifies on scroll
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            header.style.background = window.scrollY > 40 ? 'rgba(19,13,10,0.96)' : 'rgba(19,13,10,0.86)';
        });