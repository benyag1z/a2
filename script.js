let aktifMod = 'normal'; // 'normal' veya 'wrong'
let siradakiKelime = null;
let secenekler = [];
let yalnisKelimeler = JSON.parse(localStorage.getItem('yalnisKelimeler')) || [];
let dogruSayisi = parseInt(localStorage.getItem('dogruSayisi')) || 0; // Doğru sayısını tarayıcı hafızasından çek

// Sayfa yüklendiğinde başlat
window.onload = () => {
    guncelleSayaclar();
    yeniSoruUret();
};

// Ekrandaki sayacların sayılarını günceller
function guncelleSayaclar() {
    const wrongCountEl = document.getElementById('wrong-count');
    const correctCountEl = document.getElementById('correct-count');
    
    if (wrongCountEl) wrongCountEl.innerText = yalnisKelimeler.length;
    if (correctCountEl) correctCountEl.innerText = dogruSayisi;
}

// Modlar arası (Normal / Yanlış Yapılanlar) geçişi sağlar
function setMode(mod) {
    if (mod === 'wrong' && yalnisKelimeler.length === 0) {
        alert("Henüz yanlış yaptığın bir kelime yok başkan!");
        return;
    }
    aktifMod = mod;
    document.getElementById('btn-normal').classList.toggle('active', mod === 'normal');
    document.getElementById('btn-wrong').classList.toggle('active', mod === 'wrong');
    yeniSoruUret();
}

// Yeni soru üretir ve ekrana basar
function yeniSoruUret() {
    // Durum yazısını ve butonları sıfırla/gizle
    const statusText = document.getElementById('status-text');
    const nextBtn = document.getElementById('next-btn');
    const deleteBtn = document.getElementById('delete-btn');

    if (statusText) statusText.innerText = "";
    if (nextBtn) nextBtn.style.display = "none";
    if (deleteBtn) deleteBtn.style.display = "none";

    let havuz = aktifMod === 'normal' ? kelimeHavuzu : yalnisKelimeler;

    // Yanlış modundayken tüm kelimeler ezberlendiyse normale dön
    if (havuz.length === 0 && aktifMod === 'wrong') {
        alert("Harika! Yanlış listendeki tüm kelimeleri ezberledin!");
        setMode('normal');
        return;
    }

    // Rastgele bir kelime seç (Sonsuz Döngü Garantisi)
    const rastgeleIndex = Math.floor(Math.random() * havuz.length);
    siradakiKelime = havuz[rastgeleIndex];

    const wordDisplay = document.getElementById('word-display');
    const levelBadge = document.getElementById('level-badge');
    if (wordDisplay) wordDisplay.innerText = siradakiKelime.en;
    if (levelBadge) levelBadge.innerText = siradakiKelime.level || "A1-A2";

    // Havuzdan 3 tane rastgele YANLIŞ şık bul
    let digerKelimeler = kelimeHavuzu.filter(k => k.en !== siradakiKelime.en);
    digerKelimeler = karistir(digerKelimeler).slice(0, 3);

    // Doğru şıkla birleştir ve şıkları karıştır
    secenekler = [siradakiKelime, ...digerKelimeler];
    secenekler = karistir(secenekler);

    // Butonları ekrana bas
    const container = document.getElementById('options-container');
    if (container) {
        container.innerHTML = "";
        secenekler.forEach(kelime => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = kelime.tr;
            btn.onclick = () => cevabiKontrolEt(btn, kelime);
            container.appendChild(btn);
        });
    }
}

// Seçilen şıkkın doğru olup olmadığını kontrol eder
function cevabiKontrolEt(secilenBtn, secilenKelime) {
    const tumButonlar = document.querySelectorAll('.option-btn');
    tumButonlar.forEach(btn => btn.disabled = true); // Çift tıklamayı önlemek için butonları kilitle

    const statusText = document.getElementById('status-text');
    const nextBtn = document.getElementById('next-btn');
    const deleteBtn = document.getElementById('delete-btn');

    if (secilenKelime.en === siradakiKelime.en) {
        secilenBtn.classList.add('correct');
        if (statusText) {
            statusText.innerText = "🎉 Doğru!";
            statusText.style.color = "var(--success)";
        }
        
        // Doğru sayısını 1 arttır, tarayıcı hafızasına kaydet ve ekrana yansıt
        dogruSayisi++;
        localStorage.setItem('dogruSayisi', dogruSayisi);
        guncelleSayaclar();
    } else {
        secilenBtn.classList.add('wrong');
        if (statusText) {
            statusText.innerText = "❌ Yanlış! Doğrusu: " + siradakiKelime.tr;
            statusText.style.color = "var(--danger)";
        }

        // Doğru olan şıkkı yeşil yakarak göster
        tumButonlar.forEach(btn => {
            if (btn.innerText === siradakiKelime.tr) {
                btn.classList.add('correct');
            }
        });

        // Yanlış yapılan kelimeyi listeye ekle (Eğer listede zaten yoksa)
        if (!yalnisKelimeler.some(k => k.en === siradakiKelime.en)) {
            yalnisKelimeler.push(siradakiKelime);
            localStorage.setItem('yalnisKelimeler', JSON.stringify(yalnisKelimeler));
            guncelleSayaclar();
        }
    }

    if (nextBtn) nextBtn.style.display = "inline-block";

    // Eğer "Yanlış Yapılanlar" modundaysak, "Ezberledim" butonunu görünür yap
    if (aktifMod === 'wrong' && deleteBtn) {
        deleteBtn.style.display = "inline-block";
    }
}

// Kelimeyi "Yanlış Yapılanlar" listesinden manuel olarak siler
function kelimeyiEzberledim() {
    yalnisKelimeler = yalnisKelimeler.filter(k => k.en !== siradakiKelime.en);
    localStorage.setItem('yalnisKelimeler', JSON.stringify(yalnisKelimeler));
    guncelleSayaclar();
    
    // Silme işleminden sonra hemen sıradaki soruya geç
    yeniSoruUret();
}

// "Yeni Soru" butonuna basılınca çalışır
function nextQuestion() {
    yeniSoruUret();
}

// Dizi karıştırma algoritması (Fisher-Yates)
function karistir(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
