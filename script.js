let aktifMod = 'normal'; // 'normal' veya 'wrong'
let siradakiKelime = null;
let secenekler = [];
let yalnisKelimeler = JSON.parse(localStorage.getItem('yalnisKelimeler')) || [];

// Sayfa yüklendiğinde başlat
window.onload = () => {
    guncelleYanlisSayisi();
    yeniSoruUret();
};

function guncelleYanlisSayisi() {
    document.getElementById('wrong-count').innerText = yalnisKelimeler.length;
}

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

function yeniSoruUret() {
    // Durumları ve butonları sıfırla
    document.getElementById('status-text').innerText = "";
    document.getElementById('next-btn').style.display = "none";
    
    // Ezberledim butonu varsa gizle
    const deleteBtn = document.getElementById('delete-btn');
    if (deleteBtn) deleteBtn.style.display = "none";

    let havuz = aktifMod === 'normal' ? kelimeHavuzu : yalnisKelimeler;

    if (havuz.length === 0 && aktifMod === 'wrong') {
        alert("Harika! Yanlış listendeki tüm kelimeleri ezberledin!");
        setMode('normal');
        return;
    }

    // Rastgele bir kelime seç (Sonsuz Döngü)
    const rastgeleIndex = Math.floor(Math.random() * havuz.length);
    siradakiKelime = havuz[rastgeleIndex];

    document.getElementById('word-display').innerText = siradakiKelime.en;
    document.getElementById('level-badge').innerText = siradakiKelime.level || "A1-A2";

    // 3 Tane rastgele YANLIŞ şık bul
    let digerKelimeler = kelimeHavuzu.filter(k => k.en !== siradakiKelime.en);
    digerKelimeler = karistir(digerKelimeler).slice(0, 3);

    // Doğru şıkla birleştir ve karıştır
    secenekler = [siradakiKelime, ...digerKelimeler];
    secenekler = karistir(secenekler);

    // Şıkları ekrana bas
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    
    secenekler.forEach(kelime => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = kelime.tr;
        btn.onclick = () => cevabiKontrolEt(btn, kelime);
        container.appendChild(btn);
    });
}

function cevabiKontrolEt(secilenBtn, secilenKelime) {
    const tumButonlar = document.querySelectorAll('.option-btn');
    tumButonlar.forEach(btn => btn.disabled = true);

    const statusText = document.getElementById('status-text');
    const nextBtn = document.getElementById('next-btn');
    const deleteBtn = document.getElementById('delete-btn');

    if (secilenKelime.en === siradakiKelime.en) {
        secilenBtn.classList.add('correct');
        statusText.innerText = "🎉 Doğru!";
        statusText.style.color = "var(--success)";
        
        // DİKKAT: Artık doğru bilinse bile otomatik silmiyoruz!
    } else {
        secilenBtn.classList.add('wrong');
        statusText.innerText = "❌ Yanlış! Doğrusu: " + siradakiKelime.tr;
        statusText.style.color = "var(--danger)";

        tumButonlar.forEach(btn => {
            if (btn.innerText === siradakiKelime.tr) {
                btn.classList.add('correct');
            }
        });

        // Yanlış kelimelere ekle (Eğer zaten yoksa)
        if (!yalnisKelimeler.some(k => k.en === siradakiKelime.en)) {
            yalnisKelimeler.push(siradakiKelime);
            localStorage.setItem('yalnisKelimeler', JSON.stringify(yalnisKelimeler));
            guncelleYanlisSayisi();
        }
    }

    nextBtn.style.display = "inline-block";

    // Eğer yanlış modundaysak, "Ezberledim" butonunu görünür yap
    if (aktifMod === 'wrong' && deleteBtn) {
        deleteBtn.style.display = "inline-block";
    }
}

// Kelimeyi manuel olarak listeden çıkarma fonksiyonu
function kelimeyiEzberledim() {
    yalnisKelimeler = yalnisKelimeler.filter(k => k.en !== siradakiKelime.en);
    localStorage.setItem('yalnisKelimeler', JSON.stringify(yalnisKelimeler));
    guncelleYanlisSayisi();
    
    // Silme işleminden sonra hemen yeni soruya geç
    yeniSoruUret();
}

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
