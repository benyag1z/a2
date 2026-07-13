const kelimeHavuzu = [
    // --- A1 SEVİYE KELİMELER ---
    { en: "About", tr: "Hakkında", level: "A1" }, // [cite: 2324]
    { en: "Across", tr: "Boyunca", level: "A1" }, // [cite: 2324]
    { en: "Action", tr: "Aksiyon", level: "A1" }, // [cite: 2324]
    { en: "Activity", tr: "Aktivite", level: "A1" }, // [cite: 2324]
    { en: "Actor", tr: "Aktör", level: "A1" }, // [cite: 2324]
    { en: "Add", tr: "Eklemek", level: "A1" }, // [cite: 2324]
    { en: "Adult", tr: "Yetişkin", level: "A1" }, // [cite: 2324]
    { en: "Advice", tr: "Tavsiye", level: "A1" }, // [cite: 2324]
    { en: "Afraid", tr: "Korkmuş, korkan", level: "A1" }, // [cite: 2325]
    { en: "After", tr: "Sonra", level: "A1" }, // [cite: 2325]
    { en: "Afternoon", tr: "Öğleden sonra", level: "A1" }, // [cite: 2325]
    { en: "Again", tr: "Yeniden", level: "A1" }, // [cite: 2325]
    { en: "Age", tr: "Yaş", level: "A1" }, // [cite: 2325]
    { en: "Agree", tr: "Anlaşmak, hem fikir olmak", level: "A1" }, // [cite: 2325]
    { en: "Air", tr: "Hava", level: "A1" }, // [cite: 2325]
    { en: "Airport", tr: "Havaalanı", level: "A1" }, // [cite: 2325]
    { en: "All", tr: "Hepsi, bütünü", level: "A1" }, // [cite: 2325]
    { en: "Also", tr: "De, da, ayrıca", level: "A1" }, // [cite: 2325]
    { en: "Always", tr: "Her zaman", level: "A1" }, // [cite: 2325]
    { en: "Amazing", tr: "Harika", level: "A1" }, // [cite: 2325]
    { en: "Angry", tr: "Kızgın, öfkeli", level: "A1" }, // [cite: 2325]
    { en: "Animal", tr: "Hayvan", level: "A1" }, // [cite: 2325]
    { en: "Answer", tr: "Cevap", level: "A1" }, // [cite: 2325]
    { en: "Apartment", tr: "Apartman", level: "A1" }, // [cite: 2326]
    { en: "Apple", tr: "Elma", level: "A1" }, // [cite: 2326]
    { en: "Area", tr: "Bölge, alan", level: "A1" }, // [cite: 2326]
    { en: "Arm", tr: "Kol", level: "A1" }, // [cite: 2326]
    { en: "Around", tr: "Etrafında", level: "A1" }, // [cite: 2326]
    { en: "Arrive", tr: "Varmak, ulaşmak", level: "A1" }, // [cite: 2326]
    { en: "Art", tr: "Sanat", level: "A1" }, // [cite: 2326]
    { en: "Ask", tr: "Sormak", level: "A1" }, // [cite: 2326]
    { en: "Autumn", tr: "Sonbahar", level: "A1" }, // [cite: 2326]
    { en: "Away", tr: "Uzakta", level: "A1" }, // [cite: 2326]
    { en: "Baby", tr: "Bebek", level: "A1" }, // [cite: 2326]
    { en: "Back", tr: "Geri", level: "A1" }, // [cite: 2326]
    { en: "Bad", tr: "Kötü", level: "A1" }, // [cite: 2327]
    { en: "Bag", tr: "Çanta", level: "A1" }, // [cite: 2327]
    { en: "Ball", tr: "Top", level: "A1" }, // [cite: 2327]
    { en: "Banana", tr: "Muz", level: "A1" }, // [cite: 2327]
    { en: "Bank", tr: "Banka", level: "A1" }, // [cite: 2327]
    { en: "Bath", tr: "Banyo", level: "A1" }, // [cite: 2327]
    { en: "Beach", tr: "Sahil", level: "A1" }, // [cite: 2327]
    { en: "Beautiful", tr: "Güzel", level: "A1" }, // [cite: 2327]
    { en: "Because", tr: "Çünkü", level: "A1" }, // [cite: 2327]
    { en: "Bed", tr: "Yatak", level: "A1" }, // [cite: 2327]
    { en: "Before", tr: "Önce", level: "A1" }, // [cite: 2327]
    { en: "Begin", tr: "Başlamak", level: "A1" }, // [cite: 2327]
    { en: "Behind", tr: "Arkasında", level: "A1" }, // [cite: 2327]
    { en: "Believe", tr: "İnanmak", level: "A1" }, // [cite: 2328]
    { en: "Below", tr: "Altında", level: "A1" }, // [cite: 2328]
    { en: "Better", tr: "Daha iyi", level: "A1" }, // [cite: 2328]
    { en: "Between", tr: "Arasında", level: "A1" }, // [cite: 2328]
    { en: "Bicycle", tr: "Bisiklet", level: "A1" }, // [cite: 2328]
    { en: "Big", tr: "Büyük", level: "A1" }, // [cite: 2328]
    { en: "Bird", tr: "Kuş", level: "A1" }, // [cite: 2328]
    { en: "Birthday", tr: "Doğum günü", level: "A1" }, // [cite: 2328]
    { en: "Black", tr: "Siyah", level: "A1" }, // [cite: 2328]
    { en: "Blue", tr: "Mavi", level: "A1" }, // [cite: 2328]
    { en: "Boat", tr: "Bot, tekne", level: "A1" }, // [cite: 2328]
    { en: "Body", tr: "Vücut", level: "A1" }, // [cite: 2328]
    { en: "Book", tr: "Kitap", level: "A1" }, // [cite: 2328]
    { en: "Bored", tr: "Sıkılmış, bıkkın", level: "A1" }, // [cite: 2328]
    { en: "Boring", tr: "Sıkıcı", level: "A1" }, // [cite: 2328]
    { en: "Born", tr: "Doğmak", level: "A1" }, // [cite: 2329]
    { en: "Bottle", tr: "Şişe", level: "A1" }, // [cite: 2329]
    { en: "Box", tr: "Kutu", level: "A1" }, // [cite: 2329]
    { en: "Boy", tr: "Erkek çocuk", level: "A1" }, // [cite: 2329]
    { en: "Bread", tr: "Ekmek", level: "A1" }, // [cite: 2329]
    { en: "Break", tr: "Ara, teneffüs", level: "A1" }, // [cite: 2329]
    { en: "Breakfast", tr: "Kahvaltı", level: "A1" }, // [cite: 2329]
    { en: "Bring", tr: "Getirmek", level: "A1" }, // [cite: 2329]
    { en: "Brother", tr: "Kardeş", level: "A1" }, // [cite: 2329]
    { en: "Brown", tr: "Kahverengi", level: "A1" }, // [cite: 2329]
    { en: "Build", tr: "İnşa etmek", level: "A1" }, // [cite: 2329]
    { en: "Building", tr: "Bina", level: "A1" }, // [cite: 2329]
    { en: "Bus", tr: "Otobüs", level: "A1" }, // [cite: 2329]
    { en: "Business", tr: "İş, işletme", level: "A1" }, // [cite: 2329]
    { en: "Busy", tr: "Meşgul", level: "A1" }, // [cite: 2329]
    { en: "But", tr: "Ama", level: "A1" }, // [cite: 2329]
    { en: "Butter", tr: "Tere yağı", level: "A1" }, // [cite: 2329]
    { en: "Buy", tr: "Satın almak", level: "A1" }, // [cite: 2329]
    { en: "Call", tr: "Aramak", level: "A1" }, // [cite: 2330]
    { en: "Camera", tr: "Kamera", level: "A1" }, // [cite: 2330]
    { en: "Capital", tr: "Başkent", level: "A1" }, // [cite: 2330]
    { en: "Car", tr: "Araba", level: "A1" }, // [cite: 2330]
    { en: "Card", tr: "Kart", level: "A1" }, // [cite: 2330]
    { en: "Career", tr: "Kariyer", level: "A1" }, // [cite: 2330]
    { en: "Carrot", tr: "Havuç", level: "A1" }, // [cite: 2330]
    { en: "Carry", tr: "Taşımak", level: "A1" }, // [cite: 2330]
    { en: "Cat", tr: "Kedi", level: "A1" }, // [cite: 2330]
    { en: "Century", tr: "Yüzyıl", level: "A1" }, // [cite: 2330]
    { en: "Change", tr: "Değişmek, değiştirmek", level: "A1" }, // [cite: 2330]
    { en: "Cheap", tr: "Ucuz", level: "A1" }, // [cite: 2331]
    { en: "Check", tr: "Kontrol etmek", level: "A1" }, // [cite: 2331]
    { en: "Cheese", tr: "Peynir", level: "A1" }, // [cite: 2331]
    { en: "Chicken", tr: "Tavuk", level: "A1" }, // [cite: 2331]
    { en: "Child", tr: "Çocuk", level: "A1" }, // [cite: 2331]
    { en: "Choose", tr: "Seçmek", level: "A1" }, // [cite: 2331]
    { en: "Cinema", tr: "Sinema", level: "A1" }, // [cite: 2331]
    { en: "City", tr: "Şehir", level: "A1" }, // [cite: 2331]
    { en: "Class", tr: "Sınıf, ders", level: "A1" }, // [cite: 2331]
    { en: "Clean", tr: "Temiz", level: "A1" }, // [cite: 2331]
    { en: "Clock", tr: "Saat", level: "A1" }, // [cite: 2331]
    { en: "Close", tr: "Kapamak", level: "A1" }, // [cite: 2331]
    { en: "Clothes", tr: "Elbiseler", level: "A1" }, // [cite: 2331]
    { en: "Coat", tr: "Kaban, mont", level: "A1" }, // [cite: 2331]
    { en: "Coffee", tr: "Kahve", level: "A1" }, // [cite: 2331]
    { en: "Cold", tr: "Soğuk", level: "A1" }, // [cite: 2331]
    { en: "Colour", tr: "Renk", level: "A1" }, // [cite: 2331]
    { en: "Come", tr: "Gelmek", level: "A1" }, // [cite: 2332]
    { en: "Common", tr: "Yaygın", level: "A1" }, // [cite: 2332]
    { en: "Company", tr: "Şirket", level: "A1" }, // [cite: 2332]
    { en: "Compare", tr: "Karşılaştırmak", level: "A1" }, // [cite: 2332]
    { en: "Complete", tr: "Tamamlamak", level: "A1" }, // [cite: 2332]
    { en: "Computer", tr: "Bilgisayar", level: "A1" }, // [cite: 2332]
    { en: "Concert", tr: "Konser", level: "A1" }, // [cite: 2332]
    { en: "Conversation", tr: "Konuşma, sohbet", level: "A1" }, // [cite: 2332]
    { en: "Correct", tr: "Doğru", level: "A1" }, // [cite: 2332]
    { en: "Cost", tr: "Masraf, ücret", level: "A1" }, // [cite: 2332]
    { en: "Country", tr: "Yurt, memleket, ülke", level: "A1" }, // [cite: 2332]
    { en: "Course", tr: "Kurs", level: "A1" }, // [cite: 2332]
    { en: "Cousin", tr: "Kuzen", level: "A1" }, // [cite: 2332]
    { en: "Cow", tr: "İnek", level: "A1" }, // [cite: 2332]
    { en: "Cream", tr: "Krema", level: "A1" }, // [cite: 2332]
    { en: "Create", tr: "Yaratmak", level: "A1" }, // [cite: 2332]
    { en: "Culture", tr: "Kültür", level: "A1" }, // [cite: 2332]
    { en: "Cup", tr: "Kupa, fincan", level: "A1" }, // [cite: 2332]
    { en: "Customer", tr: "Müşteri", level: "A1" }, // [cite: 2333]
    { en: "Dance", tr: "Dans, dans etmek", level: "A1" }, // [cite: 2333]
    { en: "Dark", tr: "Karanlık", level: "A1" }, // [cite: 2333]
    { en: "Date", tr: "Zaman, randevu, tarih", level: "A1" }, // [cite: 2333]
    { en: "Day", tr: "Gün", level: "A1" }, // [cite: 2333]
    { en: "Decide", tr: "Karar vermek", level: "A1" }, // [cite: 2333]
    { en: "Delicious", tr: "Lezzetli", level: "A1" }, // [cite: 2333]
    { en: "Describe", tr: "Tanımlamak", level: "A1" }, // [cite: 2333]
    { en: "Design", tr: "Tasarım, dizayn etmek", level: "A1" }, // [cite: 2333]
    { en: "Desk", tr: "Masa", level: "A1" }, // [cite: 2333]
    { en: "Detail", tr: "Detay", level: "A1" }, // [cite: 2333]
    { en: "Dialogue", tr: "Diyalog", level: "A1" }, // [cite: 2333]
    { en: "Dictionary", tr: "Sözlük", level: "A1" }, // [cite: 2333]
    { en: "Die", tr: "Ölmek", level: "A1" }, // [cite: 2333]
    { en: "Diet", tr: "Diyet", level: "A1" }, // [cite: 2334]
    { en: "Difference", tr: "Fark", level: "A1" }, // [cite: 2334]
    { en: "Different", tr: "Farklı", level: "A1" }, // [cite: 2334]
    { en: "Difficult", tr: "Zor", level: "A1" }, // [cite: 2334]
    { en: "Dinner", tr: "Akşam yemeği", level: "A1" }, // [cite: 2334]
    { en: "Dirty", tr: "Kirli", level: "A1" }, // [cite: 2334]
    { en: "Discuss", tr: "Tartışmak", level: "A1" }, // [cite: 2334]
    { en: "Dish", tr: "Yemek", level: "A1" }, // [cite: 2334]
    { en: "Doctor", tr: "Doktor", level: "A1" }, // [cite: 2334]
    { en: "Dog", tr: "Köpek", level: "A1" }, // [cite: 2334]
    { en: "Door", tr: "Kapı", level: "A1" }, // [cite: 2334]
    { en: "Draw", tr: "Çizmek", level: "A1" }, // [cite: 2334]
    { en: "Dress", tr: "Giysi, giyinmek", level: "A1" }, // [cite: 2334]
    { en: "Drink", tr: "İçmek", level: "A1" }, // [cite: 2334]
    { en: "Drive", tr: "Sürmek", level: "A1" }, // [cite: 2334]
    { en: "Driver", tr: "Sürücü, şoför", level: "A1" }, // [cite: 2334]
    { en: "Early", tr: "Erken", level: "A1" }, // [cite: 2335]
    { en: "East", tr: "Doğu", level: "A1" }, // [cite: 2335]
    { en: "Easy", tr: "Kolay", level: "A1" }, // [cite: 2335]
    { en: "Eat", tr: "Yemek", level: "A1" }, // [cite: 2335]
    { en: "Egg", tr: "Yumurta", level: "A1" }, // [cite: 2335]
    { en: "Email", tr: "Email", level: "A1" }, // [cite: 2335]
    { en: "End", tr: "Son, bitmek", level: "A1" }, // [cite: 2335]
    { en: "Enjoy", tr: "Tadını çıkarmak, zevk almak", level: "A1" }, // [cite: 2335]
    { en: "Evening", tr: "Akşam", level: "A1" }, // [cite: 2335]
    { en: "Event", tr: "Olay, vakıa", level: "A1" }, // [cite: 2335]
    { en: "Exam", tr: "Sınav", level: "A1" }, // [cite: 2336]
    { en: "Excited", tr: "Heyecanlı", level: "A1" }, // [cite: 2336]
    { en: "Exciting", tr: "Heyecan verici", level: "A1" }, // [cite: 2336]
    { en: "Exercise", tr: "Egzersiz, alıştırma", level: "A1" }, // [cite: 2336]
    { en: "Expensive", tr: "Pahalı", level: "A1" }, // [cite: 2336]
    { en: "Explain", tr: "Açıklamak", level: "A1" }, // [cite: 2336]
    { en: "Extra", tr: "Ekstra", level: "A1" }, // [cite: 2336]
    { en: "Eye", tr: "Göz", level: "A1" }, // [cite: 2336]
    { en: "Face", tr: "Yüz", level: "A1" }, // [cite: 2336]
    { en: "Fact", tr: "Gerçek, vak'a", level: "A1" }, // [cite: 2336]
    { en: "Fall", tr: "Düşmek", level: "A1" }, // [cite: 2336]
    { en: "False", tr: "Hatalı, yanlış", level: "A1" }, // [cite: 2336]
    { en: "Family", tr: "Aile", level: "A1" }, // [cite: 2336]
    { en: "Famous", tr: "Ünlü", level: "A1" }, // [cite: 2336]
    { en: "Far", tr: "Uzak", level: "A1" }, // [cite: 2336]
    { en: "Farmer", tr: "Çiftçi", level: "A1" }, // [cite: 2336]
    { en: "Fast", tr: "Hızlı", level: "A1" }, // [cite: 2336]
    { en: "Fat", tr: "Şişman", level: "A1" }, // [cite: 2337]
    { en: "Father", tr: "Baba", level: "A1" }, // [cite: 2337]
    { en: "Feeling", tr: "His", level: "A1" }, // [cite: 2337]
    { en: "Festival", tr: "Festival", level: "A1" }, // [cite: 2337]
    { en: "Fill", tr: "Doldurmak", level: "A1" }, // [cite: 2337]
    { en: "Film", tr: "Film", level: "A1" }, // [cite: 2337]
    { en: "Final", tr: "Final", level: "A1" }, // [cite: 2337]
    { en: "Find", tr: "Bulmak", level: "A1" }, // [cite: 2337]
    { en: "Fine", tr: "İyi, güzel", level: "A1" }, // [cite: 2337]
    { en: "Fire", tr: "Ateş", level: "A1" }, // [cite: 2337]
    { en: "Fish", tr: "Balık", level: "A1" }, // [cite: 2337]
    { en: "Flat", tr: "Daire, apartman katı", level: "A1" }, // [cite: 2337]
    { en: "Flight", tr: "Uçuş", level: "A1" }, // [cite: 2337]
    { en: "Floor", tr: "Zemin, kat", level: "A1" }, // [cite: 2338]
    { en: "Flower", tr: "Çiçek", level: "A1" }, // [cite: 2338]
    { en: "Fly", tr: "Uçmak", level: "A1" }, // [cite: 2338]
    { en: "Follow", tr: "Takip etmek", level: "A1" }, // [cite: 2338]
    { en: "Food", tr: "Yemek, yiyecek", level: "A1" }, // [cite: 2338]
    { en: "Foot", tr: "Ayak", level: "A1" }, // [cite: 2338]
    { en: "Football", tr: "Futbol", level: "A1" }, // [cite: 2338]
    { en: "Forget", tr: "Unutmak", level: "A1" }, // [cite: 2338]
    { en: "Form", tr: "Form, şekil almak", level: "A1" }, // [cite: 2338]
    { en: "Free", tr: "Özgür, ücretsiz", level: "A1" }, // [cite: 2338]
    { en: "Friend", tr: "Arkadaş", level: "A1" }, // [cite: 2338]
    { en: "Friendly", tr: "Arkadaşça, dostça", level: "A1" }, // [cite: 2338]
    { en: "Front", tr: "Ön, cephe", level: "A1" }, // [cite: 2338]
    { en: "Fruit", tr: "Meyve", level: "A1" }, // [cite: 2339]
    { en: "Full", tr: "Dolu, tok", level: "A1" }, // [cite: 2339]
    { en: "Fun", tr: "Eğlence", level: "A1" }, // [cite: 2339]
    { en: "Funny", tr: "Eğlenceli", level: "A1" }, // [cite: 2339]
    { en: "Future", tr: "Gelecek", level: "A1" }, // [cite: 2339]
    { en: "Game", tr: "Oyun", level: "A1" }, // [cite: 2339]
    { en: "Garden", tr: "Bahçe", level: "A1" }, // [cite: 2339]
    { en: "Geography", tr: "Coğrafya", level: "A1" }, // [cite: 2339]
    { en: "Get", tr: "Almak, elde etmek", level: "A1" }, // [cite: 2339]
    { en: "Girl", tr: "Kız", level: "A1" }, // [cite: 2339]
    { en: "Give", tr: "Vermek", level: "A1" }, // [cite: 2339]
    { en: "Glass", tr: "Bardak", level: "A1" }, // [cite: 2339]
    { en: "Go", tr: "Gitmek", level: "A1" }, // [cite: 2339]
    { en: "Good", tr: "İyi, güzel", level: "A1" }, // [cite: 2339]
    { en: "Great", tr: "Harika", level: "A1" }, // [cite: 2339]
    { en: "Green", tr: "Yeşil", level: "A1" }, // [cite: 2340]
    { en: "Group", tr: "Grup", level: "A1" }, // [cite: 2340]
    { en: "Grow", tr: "Büyümek, gelişmek", level: "A1" }, // [cite: 2340]
    { en: "Guitar", tr: "Gitar", level: "A1" }, // [cite: 2340]
    { en: "Gym", tr: "Spor salonu", level: "A1" }, // [cite: 2340]
    { en: "Hair", tr: "Saç", level: "A1" }, // [cite: 2340]
    { en: "Hand", tr: "El", level: "A1" }, // [cite: 2340]
    { en: "Happen", tr: "Olmak, meydana gelmek", level: "A1" }, // [cite: 2340]
    { en: "Happy", tr: "Mutlu", level: "A1" }, // [cite: 2340]
    { en: "Hard", tr: "Zor", level: "A1" }, // [cite: 2340]
    { en: "Hat", tr: "Şapka", level: "A1" }, // [cite: 2340]
    { en: "Hate", tr: "Nefret etmek", level: "A1" }, // [cite: 2340]
    { en: "Have", tr: "Sahip olmak", level: "A1" }, // [cite: 2340]
    { en: "Head", tr: "Kafa, baş", level: "A1" }, // [cite: 2340]
    { en: "Health", tr: "Sağlık", level: "A1" }, // [cite: 2340]
    { en: "Healthy", tr: "Sağlıklı", level: "A1" }, // [cite: 2340]
    { en: "Hear", tr: "Duymak", level: "A1" }, // [cite: 2341]
    { en: "Help", tr: "Yardım etmek", level: "A1" }, // [cite: 2341]
    { en: "High", tr: "Yüksek", level: "A1" }, // [cite: 2341]
    { en: "History", tr: "Tarih", level: "A1" }, // [cite: 2341]
    { en: "Hobby", tr: "Hobi", level: "A1" }, // [cite: 2341]
    { en: "Holiday", tr: "Tatil", level: "A1" }, // [cite: 2341]
    { en: "Home", tr: "Ev", level: "A1" }, // [cite: 2341]
    { en: "Homework", tr: "Ev ödevi", level: "A1" }, // [cite: 2341]
    { en: "Horse", tr: "At", level: "A1" }, // [cite: 2341]
    { en: "Hospital", tr: "Hastahane", level: "A1" }, // [cite: 2341]
    { en: "Hot", tr: "Sıcak", level: "A1" }, // [cite: 2341]
    { en: "Hotel", tr: "Hotel", level: "A1" }, // [cite: 2341]
    { en: "Hour", tr: "Saat", level: "A1" }, // [cite: 2341]
    { en: "House", tr: "Ev", level: "A1" }, // [cite: 2342]
    { en: "Hungry", tr: "Aç", level: "A1" }, // [cite: 2342]
    { en: "Husband", tr: "Koca", level: "A1" }, // [cite: 2342]
    { en: "Ice", tr: "Buz", level: "A1" }, // [cite: 2342]
    { en: "Idea", tr: "İdea, düşünce, fikir", level: "A1" }, // [cite: 2342]
    { en: "Imagine", tr: "Hayal etmek", level: "A1" }, // [cite: 2342]
    { en: "Important", tr: "Önemli", level: "A1" }, // [cite: 2342]
    { en: "Improve", tr: "Geliştirmek", level: "A1" }, // [cite: 2342]
    { en: "Include", tr: "İçermek", level: "A1" }, // [cite: 2342]
    { en: "Information", tr: "Bilgi", level: "A1" }, // [cite: 2342]
    { en: "Interest", tr: "İlgi, ilgilenmek", level: "A1" }, // [cite: 2342]
    { en: "Interested", tr: "İlginç", level: "A1" }, // [cite: 2342]
    { en: "Interesting", tr: "İlginç", level: "A1" }, // [cite: 2342]
    { en: "Internet", tr: "İnternet", level: "A1" }, // [cite: 2343]
    { en: "Interview", tr: "Görüşme, mülakat", level: "A1" }, // [cite: 2343]
    { en: "Introduce", tr: "Tanıtmak", level: "A1" }, // [cite: 2343]
    { en: "Island", tr: "Ada", level: "A1" }, // [cite: 2343]
    { en: "Jacket", tr: "Ceket", level: "A1" }, // [cite: 2343]
    { en: "Jeans", tr: "Kot pantolon", level: "A1" }, // [cite: 2343]
    { en: "Job", tr: "İş", level: "A1" }, // [cite: 2343]
    { en: "Join", tr: "Katılmak", level: "A1" }, // [cite: 2343]
    { en: "Journey", tr: "Seyahat, gezi", level: "A1" }, // [cite: 2343]
    { en: "Juice", tr: "Meyve suyu", level: "A1" }, // [cite: 2343]
    { en: "Keep", tr: "Tutmak", level: "A1" }, // [cite: 2343]
    { en: "Key", tr: "Anahtar", level: "A1" }, // [cite: 2343]
    { en: "Kitchen", tr: "Mutfak", level: "A1" }, // [cite: 2344]
    { en: "Know", tr: "Bilmek", level: "A1" }, // [cite: 2344]
    { en: "Language", tr: "Dil", level: "A1" }, // [cite: 2344]
    { en: "Large", tr: "Geniş", level: "A1" }, // [cite: 2344]
    { en: "Late", tr: "Geç", level: "A1" }, // [cite: 2344]
    { en: "Laugh", tr: "Gülme, gülmek", level: "A1" }, // [cite: 2344]
    { en: "Left", tr: "Sol", level: "A1" }, // [cite: 2344]
    { en: "Leg", tr: "Bacak, ayak", level: "A1" }, // [cite: 2344]
    { en: "Lesson", tr: "Ders", level: "A1" }, // [cite: 2344]
    { en: "Let", tr: "İzin vermek, müsaade etmek", level: "A1" }, // [cite: 2344]
    { en: "Letter", tr: "Mektup", level: "A1" }, // [cite: 2344]
    { en: "Library", tr: "Kütüphane", level: "A1" }, // [cite: 2344]
    { en: "Lie", tr: "Yalan söylemek", level: "A1" }, // [cite: 2344]
    { en: "Life", tr: "Hayat, yaşam", level: "A1" }, // [cite: 2344]
    { en: "Light", tr: "Işık", level: "A1" }, // [cite: 2344]
    { en: "Line", tr: "Satır, hat, çizgi", level: "A1" }, // [cite: 2344]
    { en: "Lion", tr: "Aslan", level: "A1" }, // [cite: 2345]
    { en: "List", tr: "Liste, listelemek", level: "A1" }, // [cite: 2345]
    { en: "Listen", tr: "Dinlemek", level: "A1" }, // [cite: 2345]
    { en: "Little", tr: "Küçük", level: "A1" }, // [cite: 2345]
    { en: "Live", tr: "Yaşamak", level: "A1" }, // [cite: 2345]
    { en: "Local", tr: "Yerel", level: "A1" }, // [cite: 2345]
    { en: "Long", tr: "Uzun", level: "A1" }, // [cite: 2345]
    { en: "Look", tr: "Bakmak", level: "A1" }, // [cite: 2345]
    { en: "Lose", tr: "Kaybetmek", level: "A1" }, // [cite: 2345]
    { en: "Love", tr: "Sevmek, aşk", level: "A1" }, // [cite: 2345]
    { en: "Lunch", tr: "Öğle yemeği", level: "A1" }, // [cite: 2345]
    { en: "Machine", tr: "Makine", level: "A1" }, // [cite: 2345]
    { en: "Magazine", tr: "Dergi", level: "A1" }, // [cite: 2345]
    { en: "Main", tr: "Esas, başlıca, ana", level: "A1" }, // [cite: 2345]
    { en: "Make", tr: "Yapmak", level: "A1" }, // [cite: 2345]
    { en: "Man", tr: "Adam, erkek", level: "A1" }, // [cite: 2345]
    { en: "Many", tr: "Çok", level: "A1" }, // [cite: 2345]
    { en: "Map", tr: "Harita", level: "A1" }, // [cite: 2345]
    { en: "Market", tr: "Market", level: "A1" }, // [cite: 2346]
    { en: "Married", tr: "Evli", level: "A1" }, // [cite: 2346]
    { en: "Maybe", tr: "Belki", level: "A1" }, // [cite: 2346]
    { en: "Meal", tr: "Öğün", level: "A1" }, // [cite: 2346]
    { en: "Mean", tr: "Demek, istemek, kastetmek", level: "A1" }, // [cite: 2346]
    { en: "Meaning", tr: "Anlam, mana", level: "A1" }, // [cite: 2346]
    { en: "Meat", tr: "Et", level: "A1" }, // [cite: 2346]
    { en: "Meet", tr: "Tanışmak, buluşmak", level: "A1" }, // [cite: 2346]
    { en: "Meeting", tr: "Buluşma", level: "A1" }, // [cite: 2346]
    { en: "Member", tr: "Üye", level: "A1" }, // [cite: 2346]
    { en: "Menu", tr: "Menü", level: "A1" }, // [cite: 2346]
    { en: "Message", tr: "Mesaj", level: "A1" }, // [cite: 2346]
    { en: "Midnight", tr: "Gece yarısı", level: "A1" }, // [cite: 2346]
    { en: "Milk", tr: "Süt", level: "A1" }, // [cite: 2346]
    { en: "Minute", tr: "Dakika", level: "A1" }, // [cite: 2346]
    { en: "Miss", tr: "Kaçırmak, özlemek", level: "A1" }, // [cite: 2347]
    { en: "Mistake", tr: "Hata, yanlış", level: "A1" }, // [cite: 2347]
    { en: "Model", tr: "Model", level: "A1" }, // [cite: 2347]
    { en: "Modern", tr: "Modern, yeni", level: "A1" }, // [cite: 2347]
    { en: "Moment", tr: "An", level: "A1" }, // [cite: 2347]
    { en: "Money", tr: "Para", level: "A1" }, // [cite: 2347]
    { en: "Month", tr: "Ay", level: "A1" }, // [cite: 2347]
    { en: "More", tr: "Daha", level: "A1" }, // [cite: 2347]
    { en: "Morning", tr: "Sabah", level: "A1" }, // [cite: 2347]
    { en: "Mother", tr: "Anne", level: "A1" }, // [cite: 2347]
    { en: "Mountain", tr: "Dağ", level: "A1" }, // [cite: 2347]
    { en: "Mouse", tr: "Fare", level: "A1" }, // [cite: 2347]
    { en: "Mouth", tr: "Ağız", level: "A1" }, // [cite: 2347]
    { en: "Move", tr: "Hareket etmek", level: "A1" }, // [cite: 2347]
    { en: "Movie", tr: "Film", level: "A1" }, // [cite: 2347]
    { en: "Much", tr: "Fazla, çok", level: "A1" }, // [cite: 2347]
    { en: "Museum", tr: "Müze", level: "A1" }, // [cite: 2347]
    { en: "Music", tr: "Müzik", level: "A1" }, // [cite: 2348]
    { en: "Must", tr: "Zorunluluk, gereklilik", level: "A1" }, // [cite: 2348]
    { en: "Name", tr: "İsim, isimlendirmek", level: "A1" }, // [cite: 2348]
    { en: "Natural", tr: "Doğal", level: "A1" }, // [cite: 2348]
    { en: "Near", tr: "Yakın, yakınında", level: "A1" }, // [cite: 2348]
    { en: "Need", tr: "Gerekmek, ihtiyacı olmak", level: "A1" }, // [cite: 2348]
    { en: "Negative", tr: "Olumsuz", level: "A1" }, // [cite: 2348]
    { en: "Neighbour", tr: "Komşu", level: "A1" }, // [cite: 2348]
    { en: "Never", tr: "Asla", level: "A1" }, // [cite: 2348]
    { en: "New", tr: "Yeni", level: "A1" }, // [cite: 2348]
    { en: "News", tr: "Haberler", level: "A1" }, // [cite: 2348]
    { en: "Newspaper", tr: "Gazete", level: "A1" }, // [cite: 2348]
    { en: "Next", tr: "Sıradaki, gelecek", level: "A1" }, // [cite: 2348]
    { en: "Nice", tr: "İyi, hoş, güzel", level: "A1" }, // [cite: 2348]
    { en: "Night", tr: "Gece", level: "A1" }, // [cite: 2348]
    { en: "No one", tr: "Hiç kimse", level: "A1" }, // [cite: 2349]
    { en: "Nobody", tr: "Hiç kimse", level: "A1" }, // [cite: 2349]
    { en: "Nose", tr: "Burun", level: "A1" }, // [cite: 2349]
    { en: "Note", tr: "Not", level: "A1" }, // [cite: 2349]
    { en: "Nothing", tr: "Hiçbir şey", level: "A1" }, // [cite: 2349]
    { en: "Now", tr: "Şimdi, şuan", level: "A1" }, // [cite: 2349]
    { en: "Number", tr: "Numara", level: "A1" }, // [cite: 2349]
    { en: "Nurse", tr: "Hemşire", level: "A1" }, // [cite: 2349]
    { en: "Object", tr: "Obje, nesne", level: "A1" }, // [cite: 2349]
    { en: "Office", tr: "Ofis", level: "A1" }, // [cite: 2349]
    { en: "Often", tr: "Sıklıkla", level: "A1" }, // [cite: 2349]
    { en: "Old", tr: "Eski", level: "A1" }, // [cite: 2349]
    { en: "Onion", tr: "Soğan", level: "A1" }, // [cite: 2350]
    { en: "Online", tr: "Online", level: "A1" }, // [cite: 2350]
    { en: "Only", tr: "Sadece", level: "A1" }, // [cite: 2350]
    { en: "Open", tr: "Açık, açmak", level: "A1" }, // [cite: 2350]
    { en: "Opinion", tr: "Görüş, fikir", level: "A1" }, // [cite: 2350]
    { en: "Opposite", tr: "Karşı, zıt, aksi", level: "A1" }, // [cite: 2350]
    { en: "Orange", tr: "Portakal", level: "A1" }, // [cite: 2350]
    { en: "Order", tr: "Sipariş, sipariş vermek", level: "A1" }, // [cite: 2350]
    { en: "Other", tr: "Diğeri, başkası", level: "A1" }, // [cite: 2350]
    { en: "Outside", tr: "Dışarı", level: "A1" }, // [cite: 2350]
    { en: "Over", tr: "Üstünde, üzerinde", level: "A1" }, // [cite: 2350]
    { en: "Page", tr: "Sayfa", level: "A1" }, // [cite: 2350]
    { en: "Paint", tr: "Boya, boyamak", level: "A1" }, // [cite: 2350]
    { en: "Painting", tr: "Tablo, resim", level: "A1" }, // [cite: 2350]
    { en: "Pair", tr: "Çift, eş", level: "A1" }, // [cite: 2351]
    { en: "Paper", tr: "Sayfa", level: "A1" }, // [cite: 2351]
    { en: "Paragraph", tr: "Paragraf", level: "A1" }, // [cite: 2351]
    { en: "Parent", tr: "Ebeveyn", level: "A1" }, // [cite: 2351]
    { en: "Park", tr: "Park", level: "A1" }, // [cite: 2351]
    { en: "Part", tr: "Bölüm, part", level: "A1" }, // [cite: 2351]
    { en: "Partner", tr: "Partner", level: "A1" }, // [cite: 2351]
    { en: "Party", tr: "Parti", level: "A1" }, // [cite: 2351]
    { en: "Passport", tr: "Pasaport", level: "A1" }, // [cite: 2351]
    { en: "Past", tr: "Geçmiş", level: "A1" }, // [cite: 2351]
    { en: "Pay", tr: "Ödemek", level: "A1" }, // [cite: 2351]
    { en: "Pen", tr: "Dolma kalem", level: "A1" }, // [cite: 2351]
    { en: "Pencil", tr: "Kurşun kalem", level: "A1" }, // [cite: 2351]
    { en: "People", tr: "İnsanlar, halk", level: "A1" }, // [cite: 2351]
    { en: "Pepper", tr: "Biber", level: "A1" }, // [cite: 2351]
    { en: "Perfect", tr: "Harika", level: "A1" }, // [cite: 2351]
    { en: "Period", tr: "Periyot", level: "A1" }, // [cite: 2351]
    { en: "Person", tr: "İnsan, kişi", level: "A1" }, // [cite: 2351]
    { en: "Personal", tr: "Kişisel, şahsi", level: "A1" }, // [cite: 2351]
    { en: "Phone", tr: "Telefon", level: "A1" }, // [cite: 2351]
    { en: "Photo", tr: "Foto, resim", level: "A1" }, // [cite: 2352]
    { en: "Photograph", tr: "Fotoğraf", level: "A1" }, // [cite: 2352]
    { en: "Phrase", tr: "İbare, tabir", level: "A1" }, // [cite: 2352]
    { en: "Piano", tr: "Piyano", level: "A1" }, // [cite: 2352]
    { en: "Picture", tr: "Resim", level: "A1" }, // [cite: 2352]
    { en: "Piece", tr: "Tane, parça", level: "A1" }, // [cite: 2352]
    { en: "Pig", tr: "Domuz", level: "A1" }, // [cite: 2352]
    { en: "Pink", tr: "Pembe", level: "A1" }, // [cite: 2352]
    { en: "Place", tr: "Yer, mekan", level: "A1" }, // [cite: 2352]
    { en: "Plan", tr: "Plan, planlamak", level: "A1" }, // [cite: 2352]
    { en: "Plane", tr: "Uçak", level: "A1" }, // [cite: 2352]
    { en: "Plant", tr: "Bitki", level: "A1" }, // [cite: 2352]
    { en: "Play", tr: "Oyun, oynamak", level: "A1" }, // [cite: 2352]
    { en: "Player", tr: "Oyuncu", level: "A1" }, // [cite: 2352]
    { en: "Please", tr: "Lütfen", level: "A1" }, // [cite: 2352]
    { en: "Point", tr: "Nokta, puan", level: "A1" }, // [cite: 2352]
    { en: "Police", tr: "Polis", level: "A1" }, // [cite: 2352]
    { en: "Policeman", tr: "Polis", level: "A1" }, // [cite: 2352]
    { en: "Pool", tr: "Havuz", level: "A1" }, // [cite: 2352]
    { en: "Poor", tr: "Fakir", level: "A1" }, // [cite: 2352]
    { en: "Popular", tr: "Popüler", level: "A1" }, // [cite: 2353]
    { en: "Positive", tr: "Pozitif", level: "A1" }, // [cite: 2353]
    { en: "Possible", tr: "Mümkün, olabilir", level: "A1" }, // [cite: 2353]
    { en: "Post", tr: "Makam, posta, postalamak", level: "A1" }, // [cite: 2353]
    { en: "Potato", tr: "Patates", level: "A1" }, // [cite: 2353]
    { en: "Practice", tr: "Egzersiz, idman", level: "A1" }, // [cite: 2353]
    { en: "Practise", tr: "Alıştırma yapmak", level: "A1" }, // [cite: 2353]
    { en: "Prefer", tr: "Tercih etmek", level: "A1" }, // [cite: 2353]
    { en: "Prepare", tr: "Hazırlamak", level: "A1" }, // [cite: 2353]
    { en: "Present", tr: "Şimdiki zaman", level: "A1" }, // [cite: 2353]
    { en: "Pretty", tr: "Hoş, güzel, şirin, tatlı", level: "A1" }, // [cite: 2353]
    { en: "Price", tr: "Fiyat", level: "A1" }, // [cite: 2353]
    { en: "Probably", tr: "Muhtemelen", level: "A1" }, // [cite: 2353]
    { en: "Problem", tr: "Problem", level: "A1" }, // [cite: 2353]
    { en: "Product", tr: "Ürün", level: "A1" }, // [cite: 2353]
    { en: "Programme", tr: "Program", level: "A1" }, // [cite: 2353]
    { en: "Project", tr: "Proje", level: "A1" }, // [cite: 2353]
    { en: "Purple", tr: "Mor", level: "A1" }, // [cite: 2353]
    { en: "Put", tr: "Koymak", level: "A1" }, // [cite: 2353]
    { en: "Quarter", tr: "Çeyrek", level: "A1" }, // [cite: 2354]
    { en: "Question", tr: "Soru", level: "A1" }, // [cite: 2354]
    { en: "Quick", tr: "Hızlı", level: "A1" }, // [cite: 2354]
    { en: "Quickly", tr: "Hızlıca", level: "A1" }, // [cite: 2354]
    { en: "Quiet", tr: "Sakin, sessiz", level: "A1" }, // [cite: 2354]
    { en: "Quite", tr: "Epeyce, oldukça", level: "A1" }, // [cite: 2354]
    { en: "Radio", tr: "Radyo", level: "A1" }, // [cite: 2354]
    { en: "Rain", tr: "Yağmur, yağmur yağmak", level: "A1" }, // [cite: 2354]
    { en: "Read", tr: "Okumak", level: "A1" }, // [cite: 2354]
    { en: "Reader", tr: "Okuyucu", level: "A1" }, // [cite: 2354]
    { en: "Reading", tr: "Okuma", level: "A1" }, // [cite: 2354]
    { en: "Ready", tr: "Hazır", level: "A1" }, // [cite: 2354]
    { en: "Real", tr: "Gerçek", level: "A1" }, // [cite: 2354]
    { en: "Really", tr: "Gerçekten", level: "A1" }, // [cite: 2354]
    { en: "Reason", tr: "Sebep", level: "A1" }, // [cite: 2354]
    { en: "Red", tr: "Kırmızı", level: "A1" }, // [cite: 2354]
    { en: "Relax", tr: "Rahatlamak, dinlenmek", level: "A1" }, // [cite: 2354]
    { en: "Remember", tr: "Hatırlamak", level: "A1" }, // [cite: 2354]
    { en: "Repeat", tr: "Tekrar etmek", level: "A1" }, // [cite: 2354]
    { en: "Report", tr: "Rapor", level: "A1" }, // [cite: 2354]
    { en: "Restaurant", tr: "Restoran", level: "A1" }, // [cite: 2355]
    { en: "Result", tr: "Sonuç", level: "A1" }, // [cite: 2355]
    { en: "Return", tr: "Geri dönmek", level: "A1" }, // [cite: 2355]
    { en: "Rice", tr: "Pirinç", level: "A1" }, // [cite: 2355]
    { en: "Rich", tr: "Zengin", level: "A1" }, // [cite: 2355]
    { en: "Ride", tr: "Sürmek", level: "A1" }, // [cite: 2355]
    { en: "Right", tr: "Doğru", level: "A1" }, // [cite: 2355]
    { en: "River", tr: "Nehir", level: "A1" }, // [cite: 2355]
    { en: "Road", tr: "Yol", level: "A1" }, // [cite: 2355]
    { en: "Room", tr: "Oda", level: "A1" }, // [cite: 2355]
    { en: "Routine", tr: "Rutin", level: "A1" }, // [cite: 2355]
    { en: "Rule", tr: "Kural", level: "A1" }, // [cite: 2355]
    { en: "Run", tr: "Koşmak", level: "A1" }, // [cite: 2355]
    { en: "Sad", tr: "Üzgün", level: "A1" }, // [cite: 2355]
    { en: "Salad", tr: "Salata", level: "A1" }, // [cite: 2355]
    { en: "Salt", tr: "Tuz", level: "A1" }, // [cite: 2355]
    { en: "Same", tr: "Aynı", level: "A1" }, // [cite: 2355]
    { en: "Sandwich", tr: "Sandviç", level: "A1" }, // [cite: 2355]
    { en: "Say", tr: "Söylemek", level: "A1" }, // [cite: 2355]
    { en: "School", tr: "Okul", level: "A1" }, // [cite: 2356]
    { en: "Science", tr: "Bilim", level: "A1" }, // [cite: 2356]
    { en: "Scientist", tr: "Bilim adamı", level: "A1" }, // [cite: 2356]
    { en: "Sea", tr: "Deniz", level: "A1" }, // [cite: 2356]
    { en: "Second", tr: "İkinci", level: "A1" }, // [cite: 2356]
    { en: "Section", tr: "Kesit, bölüm, kısım", level: "A1" }, // [cite: 2356]
    { en: "See", tr: "Görmek", level: "A1" }, // [cite: 2356]
    { en: "Sell", tr: "Satmak", level: "A1" }, // [cite: 2356]
    { en: "Send", tr: "Göndermek", level: "A1" }, // [cite: 2356]
    { en: "Sentence", tr: "Cümle", level: "A1" }, // [cite: 2356]
    { en: "Share", tr: "Paylaşmak", level: "A1" }, // [cite: 2356]
    { en: "Sheep", tr: "Koyun", level: "A1" }, // [cite: 2356]
    { en: "Shirt", tr: "Gömlek", level: "A1" }, // [cite: 2356]
    { en: "Shoe", tr: "Ayakkabı", level: "A1" }, // [cite: 2356]
    { en: "Shop", tr: "Alışveriş, alışveriş yapmak", level: "A1" }, // [cite: 2356]
    { en: "Shopping", tr: "Alışveriş yapma", level: "A1" }, // [cite: 2357]
    { en: "Short", tr: "Kısa", level: "A1" }, // [cite: 2357]
    { en: "Should", tr: "Gerekmek, -meli, -malı", level: "A1" }, // [cite: 2357]
    { en: "Show", tr: "Göstermek", level: "A1" }, // [cite: 2357]
    { en: "Shower", tr: "Duş", level: "A1" }, // [cite: 2357]
    { en: "Sick", tr: "Hasta", level: "A1" }, // [cite: 2357]
    { en: "Similar", tr: "Benzer", level: "A1" }, // [cite: 2357]
    { en: "Sing", tr: "Şarkı söylemek", level: "A1" }, // [cite: 2357]
    { en: "Singer", tr: "Şarkıcı", level: "A1" }, // [cite: 2357]
    { en: "Sister", tr: "Kız kardeş, hemşire", level: "A1" }, // [cite: 2357]
    { en: "Sit", tr: "Oturmak", level: "A1" }, // [cite: 2357]
    { en: "Situation", tr: "Durum", level: "A1" }, // [cite: 2357]
    { en: "Skill", tr: "Yetenek", level: "A1" }, // [cite: 2357]
    { en: "Skirt", tr: "Etek", level: "A1" }, // [cite: 2357]
    { en: "Sleep", tr: "Uyumak", level: "A1" }, // [cite: 2357]
    { en: "Slow", tr: "Yavaş", level: "A1" }, // [cite: 2357]
    { en: "Small", tr: "Küçük", level: "A1" }, // [cite: 2357]
    { en: "Snake", tr: "Yılan", level: "A1" }, // [cite: 2358]
    { en: "Snow", tr: "Kar, kar yağmak", level: "A1" }, // [cite: 2358]
    { en: "Somebody", tr: "Birisi", level: "A1" }, // [cite: 2358]
    { en: "Someone", tr: "Birisi", level: "A1" }, // [cite: 2358]
    { en: "Something", tr: "Bir şey", level: "A1" }, // [cite: 2358]
    { en: "Sometimes", tr: "Bazen", level: "A1" }, // [cite: 2358]
    { en: "Son", tr: "Oğul", level: "A1" }, // [cite: 2358]
    { en: "Song", tr: "Şarkı", level: "A1" }, // [cite: 2358]
    { en: "Soon", tr: "Yakında", level: "A1" }, // [cite: 2358]
    { en: "Sound", tr: "Ses", level: "A1" }, // [cite: 2358]
    { en: "Soup", tr: "Çorba", level: "A1" }, // [cite: 2358]
    { en: "South", tr: "Güney", level: "A1" }, // [cite: 2358]
    { en: "Space", tr: "Alan, mekan, uzay", level: "A1" }, // [cite: 2358]
    { en: "Speak", tr: "Konuşmak", level: "A1" }, // [cite: 2358]
    { en: "Special", tr: "Özel", level: "A1" }, // [cite: 2358]
    { en: "Spell", tr: "Hecelemek", level: "A1" }, // [cite: 2358]
    { en: "Spelling", tr: "Heceleme", level: "A1" }, // [cite: 2358]
    { en: "Spend", tr: "Harcamak", level: "A1" }, // [cite: 2358]
    { en: "Sport", tr: "Spor", level: "A1" }, // [cite: 2359]
    { en: "Spring", tr: "İlkbahar", level: "A1" }, // [cite: 2359]
    { en: "Stand", tr: "Durmak, dikilmek", level: "A1" }, // [cite: 2359]
    { en: "Star", tr: "Yıldız, ünlü", level: "A1" }, // [cite: 2359]
    { en: "Start", tr: "Başlamak", level: "A1" }, // [cite: 2359]
    { en: "Statement", tr: "Söz, ifade, beyan, demeç", level: "A1" }, // [cite: 2359]
    { en: "Station", tr: "İstasyon", level: "A1" }, // [cite: 2359]
    { en: "Stay", tr: "Kalmak", level: "A1" }, // [cite: 2359]
    { en: "Still", tr: "Hala, henüz", level: "A1" }, // [cite: 2359]
    { en: "Stop", tr: "Durmak", level: "A1" }, // [cite: 2359]
    { en: "Story", tr: "Hikaye", level: "A1" }, // [cite: 2359]
    { en: "Street", tr: "Sokak", level: "A1" }, // [cite: 2359]
    { en: "Strong", tr: "Güçlü", level: "A1" }, // [cite: 2359]
    { en: "Student", tr: "Öğrenci", level: "A1" }, // [cite: 2359]
    { en: "Study", tr: "Çalışmak", level: "A1" }, // [cite: 2359]
    { en: "Style", tr: "Stil", level: "A1" }, // [cite: 2359]
    { en: "Subject", tr: "Ders, özne, konu", level: "A1" }, // [cite: 2359]
    { en: "Success", tr: "Başarı", level: "A1" }, // [cite: 2359]
    { en: "Sugar", tr: "Şeker", level: "A1" }, // [cite: 2359]
    { en: "Summer", tr: "Yaz", level: "A1" }, // [cite: 2359]
    { en: "Sun", tr: "Güneş", level: "A1" }, // [cite: 2360]
    { en: "Supermarket", tr: "Süpermarket", level: "A1" }, // [cite: 2360]
    { en: "Sure", tr: "Emin, kesin", level: "A1" }, // [cite: 2360]
    { en: "Sweater", tr: "Süveter", level: "A1" }, // [cite: 2360]
    { en: "Swim", tr: "Yüzmek", level: "A1" }, // [cite: 2360]
    { en: "Swimming", tr: "Yüzme", level: "A1" }, // [cite: 2360]
    { en: "Table", tr: "Masa", level: "A1" }, // [cite: 2360]
    { en: "Take", tr: "Almak", level: "A1" }, // [cite: 2360]
    { en: "Talk", tr: "Konuşmak", level: "A1" }, // [cite: 2360]
    { en: "Tall", tr: "Uzun", level: "A1" }, // [cite: 2360]
    { en: "Taxi", tr: "Taksi", level: "A1" }, // [cite: 2360]
    { en: "Tea", tr: "Çay", level: "A1" }, // [cite: 2360]
    { en: "Teach", tr: "Öğretmek", level: "A1" }, // [cite: 2360]
    { en: "Teacher", tr: "Öğretmen", level: "A1" }, // [cite: 2360]
    { en: "Team", tr: "Tim, takım", level: "A1" }, // [cite: 2360]
    { en: "Teenager", tr: "Ergen, yeniyetme", level: "A1" }, // [cite: 2360]
    { en: "Telephone", tr: "Telefon", level: "A1" }, // [cite: 2360]
    { en: "Television", tr: "Televizyon", level: "A1" }, // [cite: 2360]
    { en: "Tell", tr: "Söylemek, demek", level: "A1" }, // [cite: 2360]
    { en: "Tennis", tr: "Tenis", level: "A1" }, // [cite: 2361]
    { en: "Terrible", tr: "Korkunç", level: "A1" }, // [cite: 2361]
    { en: "Test", tr: "Test, sınav yapmak", level: "A1" }, // [cite: 2361]
    { en: "Text", tr: "Metin", level: "A1" }, // [cite: 2361]
    { en: "Thank", tr: "Teşekkür etmek", level: "A1" }, // [cite: 2361]
    { en: "Thanks", tr: "Teşekkür ederim", level: "A1" }, // [cite: 2361]
    { en: "Thing", tr: "Şey", level: "A1" }, // [cite: 2361]
    { en: "Think", tr: "Düşünmek", level: "A1" }, // [cite: 2361]
    { en: "Thirsty", tr: "Susamış", level: "A1" }, // [cite: 2361]
    { en: "Ticket", tr: "Bilet", level: "A1" }, // [cite: 2362]
    { en: "Time", tr: "Zaman", level: "A1" }, // [cite: 2362]
    { en: "Tired", tr: "Yorulmuş, yorgun", level: "A1" }, // [cite: 2362]
    { en: "Title", tr: "Başlık", level: "A1" }, // [cite: 2362]
    { en: "Today", tr: "Bugün", level: "A1" }, // [cite: 2362]
    { en: "Together", tr: "Birlikte", level: "A1" }, // [cite: 2362]
    { en: "Toilet", tr: "Tuvalet", level: "A1" }, // [cite: 2362]
    { en: "Tomato", tr: "Domates", level: "A1" }, // [cite: 2362]
    { en: "Tomorrow", tr: "Yarın", level: "A1" }, // [cite: 2362]
    { en: "Tonight", tr: "Bu gece", level: "A1" }, // [cite: 2362]
    { en: "Tooth", tr: "Diş", level: "A1" }, // [cite: 2362]
    { en: "Topic", tr: "Konu", level: "A1" }, // [cite: 2362]
    { en: "Tourist", tr: "Turist", level: "A1" }, // [cite: 2362]
    { en: "Town", tr: "Şehir", level: "A1" }, // [cite: 2362]
    { en: "Traffic", tr: "Trafik", level: "A1" }, // [cite: 2362]
    { en: "Train", tr: "Tren", level: "A1" }, // [cite: 2362]
    { en: "Travel", tr: "Seyahat, seyahat etmek", level: "A1" }, // [cite: 2363]
    { en: "Tree", tr: "Ağaç", level: "A1" }, // [cite: 2363]
    { en: "Trousers", tr: "Pantolon", level: "A1" }, // [cite: 2363]
    { en: "True", tr: "Doğru", level: "A1" }, // [cite: 2363]
    { en: "Try", tr: "Denemek", level: "A1" }, // [cite: 2363]
    { en: "Turn", tr: "Sıra, dönmek, döndürmek", level: "A1" }, // [cite: 2363]
    { en: "TV", tr: "TV", level: "A1" }, // [cite: 2363]
    { en: "Type", tr: "Tür, tip, cins", level: "A1" }, // [cite: 2363]
    { en: "Umbrella", tr: "Şemsiye", level: "A1" }, // [cite: 2363]
    { en: "Uncle", tr: "Amca", level: "A1" }, // [cite: 2363]
    { en: "Under", tr: "Altında", level: "A1" }, // [cite: 2363]
    { en: "Understand", tr: "Anlamak", level: "A1" }, // [cite: 2363]
    { en: "University", tr: "Üniversite", level: "A1" }, // [cite: 2363]
    { en: "Up", tr: "Yukarı", level: "A1" }, // [cite: 2363]
    { en: "Upstairs", tr: "Üst katta olan", level: "A1" }, // [cite: 2364]
    { en: "Use", tr: "Kullanmak", level: "A1" }, // [cite: 2364]
    { en: "Useful", tr: "Kullanışlı", level: "A1" }, // [cite: 2364]
    { en: "Usually", tr: "Genellikle", level: "A1" }, // [cite: 2364]
    { en: "Vacation", tr: "Tatil", level: "A1" }, // [cite: 2364]
    { en: "Vegetable", tr: "Sebze", level: "A1" }, // [cite: 2364]
    { en: "Very", tr: "Çok", level: "A1" }, // [cite: 2364]
    { en: "Video", tr: "Video", level: "A1" }, // [cite: 2364]
    { en: "Village", tr: "Köy", level: "A1" }, // [cite: 2364]
    { en: "Visit", tr: "Ziyaret, ziyaret etmek", level: "A1" }, // [cite: 2364]
    { en: "Visitor", tr: "Ziyaretçi", level: "A1" }, // [cite: 2364]
    { en: "Wait", tr: "Beklemek", level: "A1" }, // [cite: 2364]
    { en: "Waiter", tr: "Garson", level: "A1" }, // [cite: 2364]
    { en: "Wake", tr: "Uyanmak", level: "A1" }, // [cite: 2364]
    { en: "Walk", tr: "Yürümek", level: "A1" }, // [cite: 2364]
    { en: "Wall", tr: "Duvar", level: "A1" }, // [cite: 2364]
    { en: "Want", tr: "İstemek", level: "A1" }, // [cite: 2364]
    { en: "Warm", tr: "Sıcak", level: "A1" }, // [cite: 2364]
    { en: "Wash", tr: "Yıkamak", level: "A1" }, // [cite: 2364]
    { en: "Watch", tr: "İzlemek, kol saati", level: "A1" }, // [cite: 2365]
    { en: "Water", tr: "Su", level: "A1" }, // [cite: 2365]
    { en: "Way", tr: "Yol, yöntem, tarz", level: "A1" }, // [cite: 2365]
    { en: "Wear", tr: "Giymek", level: "A1" }, // [cite: 2365]
    { en: "Weather", tr: "Hava durumu", level: "A1" }, // [cite: 2365]
    { en: "Website", tr: "Website", level: "A1" }, // [cite: 2365]
    { en: "Week", tr: "Hafta", level: "A1" }, // [cite: 2365]
    { en: "Weekend", tr: "Hafta sonu", level: "A1" }, // [cite: 2365]
    { en: "Welcome", tr: "Hoş geldin", level: "A1" }, // [cite: 2365]
    { en: "Well", tr: "İyi", level: "A1" }, // [cite: 2365]
    { en: "West", tr: "Batı", level: "A1" }, // [cite: 2365]
    { en: "White", tr: "Beyaz", level: "A1" }, // [cite: 2365]
    { en: "Wife", tr: "Karı", level: "A1" }, // [cite: 2365]
    { en: "Win", tr: "Kazanmak", level: "A1" }, // [cite: 2365]
    { en: "Window", tr: "Pencere", level: "A1" }, // [cite: 2366]
    { en: "Wine", tr: "Şarap", level: "A1" }, // [cite: 2366]
    { en: "Winter", tr: "Kış", level: "A1" }, // [cite: 2366]
    { en: "Woman", tr: "Kadın", level: "A1" }, // [cite: 2366]
    { en: "Wonderful", tr: "Harika", level: "A1" }, // [cite: 2366]
    { en: "Word", tr: "Kelime", level: "A1" }, // [cite: 2366]
    { en: "Work", tr: "İş, çalışmak", level: "A1" }, // [cite: 2366]
    { en: "Worker", tr: "İşçi", level: "A1" }, // [cite: 2366]
    { en: "World", tr: "Dünya", level: "A1" }, // [cite: 2366]
    { en: "Write", tr: "Yazmak", level: "A1" }, // [cite: 2366]
    { en: "Writer", tr: "Yazar", level: "A1" }, // [cite: 2366]
    { en: "Writing", tr: "Yazı", level: "A1" }, // [cite: 2366]
    { en: "Wrong", tr: "Yanlış", level: "A1" }, // [cite: 2366]
    { en: "Yeah", tr: "He, tamam, evet", level: "A1" }, // [cite: 2366]
    { en: "Year", tr: "Yıl", level: "A1" }, // [cite: 2366]
    { en: "Yellow", tr: "Sarı", level: "A1" }, // [cite: 2366]
    { en: "Yes", tr: "Evet", level: "A1" }, // [cite: 2366]
    { en: "Yesterday", tr: "Dün", level: "A1" }, // [cite: 2366]
    { en: "Young", tr: "Genç", level: "A1" }, // [cite: 2367]
    { en: "Yourself", tr: "Kendin, kendiniz", level: "A1" }, // [cite: 2367]

    // --- A2 SEVİYE KELİMELER ---
    { en: "Ability", tr: "Yetenek", level: "A2" }, // [cite: 2375]
    { en: "Able", tr: "Gücü yeten, yapabilen", level: "A2" }, // [cite: 2375]
    { en: "Abroad", tr: "Yurt dışında", level: "A2" }, // [cite: 2375]
    { en: "Accept", tr: "Kabul etmek", level: "A2" }, // [cite: 2375]
    { en: "Accident", tr: "Kaza, rastlantı", level: "A2" }, // [cite: 2375]
    { en: "According to", tr: "-e göre", level: "A2" }, // [cite: 2376]
    { en: "Achieve", tr: "Başarmak", level: "A2" }, // [cite: 2376]
    { en: "Act", tr: "Yapmak", level: "A2" }, // [cite: 2376]
    { en: "Active", tr: "Aktif", level: "A2" }, // [cite: 2376]
    { en: "Actually", tr: "Fiilen, aslında, hakikaten, gerçekten", level: "A2" }, // [cite: 2376]
    { en: "Advantage", tr: "Avantaj", level: "A2" }, // [cite: 2376]
    { en: "Adventure", tr: "Macera", level: "A2" }, // [cite: 2376]
    { en: "Advertise", tr: "Reklamını yapmak, tanıtım yapmak", level: "A2" }, // [cite: 2376]
    { en: "Advertisement", tr: "Reklam", level: "A2" }, // [cite: 2376]
    { en: "Affect", tr: "Tesir etmek, etkilemek", level: "A2" }, // [cite: 2376]
    { en: "Against", tr: "-e karşı", level: "A2" }, // [cite: 2376]
    { en: "Airline", tr: "Hava yolu", level: "A2" }, // [cite: 2376]
    { en: "Alive", tr: "Canlı", level: "A2" }, // [cite: 2376]
    { en: "All right", tr: "Elbette ki, okey, tamam", level: "A2" }, // [cite: 2376]
    { en: "Allow", tr: "İzin vermek", level: "A2" }, // [cite: 2376]
    { en: "Almost", tr: "Neredeyse", level: "A2" }, // [cite: 2376]
    { en: "Alone", tr: "Yalnız", level: "A2" }, // [cite: 2376]
    { en: "Along", tr: "Boyunca", level: "A2" }, // [cite: 2376]
    { en: "Already", tr: "Hazır", level: "A2" }, // [cite: 2376]
    { en: "Alternative", tr: "Alternatif", level: "A2" }, // [cite: 2376]
    { en: "Although", tr: "-e rağmen", level: "A2" }, // [cite: 2376]
    { en: "Among", tr: "Arasında", level: "A2" }, // [cite: 2377]
    { en: "Amount", tr: "Miktar, tutar", level: "A2" }, // [cite: 2377]
    { en: "Ancient", tr: "Kadim", level: "A2" }, // [cite: 2377]
    { en: "Ankle", tr: "Ayak bileği", level: "A2" }, // [cite: 2377]
    { en: "Anybody", tr: "Hiçkimse", level: "A2" }, // [cite: 2377]
    { en: "Any more", tr: "Artık, başka", level: "A2" }, // [cite: 2377]
    { en: "Anyway", tr: "Neyse, her neyse", level: "A2" }, // [cite: 2377]
    { en: "Anywhere", tr: "Herhangi bir yer, hiçbir yer", level: "A2" }, // [cite: 2377]
    { en: "App", tr: "Uygulama", level: "A2" }, // [cite: 2377]
    { en: "Appear", tr: "Görünmek, ortaya çıkmak", level: "A2" }, // [cite: 2377]
    { en: "Appearance", tr: "Görünüş, ortaya çıkış", level: "A2" }, // [cite: 2377]
    { en: "Apply", tr: "Uygulamak", level: "A2" }, // [cite: 2377]
    { en: "Architect", tr: "Mimar", level: "A2" }, // [cite: 2377]
    { en: "Architecture", tr: "Mimarlık, inşaat", level: "A2" }, // [cite: 2377]
    { en: "Argue", tr: "Tartışmak", level: "A2" }, // [cite: 2377]
    { en: "Argument", tr: "Argüman", level: "A2" }, // [cite: 2377]
    { en: "Army", tr: "Ordu", level: "A2" }, // [cite: 2377]
    { en: "Arrange", tr: "Düzenlemek, ayarlamak", level: "A2" }, // [cite: 2377]
    { en: "Arrangement", tr: "Aranjman, düzenleme, ayarlama", level: "A2" }, // [cite: 2377]
    { en: "Asleep", tr: "Uyuyan, tembel, uyuşuk", level: "A2" }, // [cite: 2377]
    { en: "Assistant", tr: "Asistan", level: "A2" }, // [cite: 2377]
    { en: "Athlete", tr: "Atlet", level: "A2" }, // [cite: 2378]
    { en: "Attack", tr: "Saldırı, saldırmak", level: "A2" }, // [cite: 2378]
    { en: "Attend", tr: "Katılmak", level: "A2" }, // [cite: 2378]
    { en: "Attention", tr: "Dikkat", level: "A2" }, // [cite: 2378]
    { en: "Attractive", tr: "Çekici", level: "A2" }, // [cite: 2378]
    { en: "Audience", tr: "Seyirci", level: "A2" }, // [cite: 2378]
    { en: "Author", tr: "Yazar", level: "A2" }, // [cite: 2378]
    { en: "Available", tr: "Müsait, uygun", level: "A2" }, // [cite: 2378]
    { en: "Average", tr: "Ortalama", level: "A2" }, // [cite: 2378]
    { en: "Avoid", tr: "Kaçınmak", level: "A2" }, // [cite: 2378]
    { en: "Award", tr: "Hediye, ödül", level: "A2" }, // [cite: 2378]
    { en: "Awful", tr: "Berbat", level: "A2" }, // [cite: 2378]
    { en: "Background", tr: "Arka plan", level: "A2" }, // [cite: 2378]
    { en: "Badly", tr: "Berbat bir şekilde", level: "A2" }, // [cite: 2378]
    { en: "Baseball", tr: "Beyzbol", level: "A2" }, // [cite: 2378]
    { en: "Based", tr: "Esaslı, yerleşik", level: "A2" }, // [cite: 2378]
    { en: "Basketball", tr: "Basketbol", level: "A2" }, // [cite: 2378]
    { en: "Bean", tr: "Fasulye", level: "A2" }, // [cite: 2378]
    { en: "Bear", tr: "Ayı", level: "A2" }, // [cite: 2378]
    { en: "Beat", tr: "Dövmek", level: "A2" }, // [cite: 2378]
    { en: "Beef", tr: "Sığır eti", level: "A2" }, // [cite: 2378]
    { en: "Behave", tr: "Davranmak", level: "A2" }, // [cite: 2379]
    { en: "Behaviour", tr: "Davranış", level: "A2" }, // [cite: 2379]
    { en: "Belong", tr: "Ait olmak", level: "A2" }, // [cite: 2379]
    { en: "Belt", tr: "Kayış, kemer", level: "A2" }, // [cite: 2379]
    { en: "Benefit", tr: "Fayda", level: "A2" }, // [cite: 2379]
    { en: "Best", tr: "En iyisi", level: "A2" }, // [cite: 2379]
    { en: "Better", tr: "Daha iyi", level: "A2" }, // [cite: 2379]
    { en: "Between", tr: "Arasında", level: "A2" }, // [cite: 2379]
    { en: "Billion", tr: "Milyar", level: "A2" }, // [cite: 2379]
    { en: "Biology", tr: "Biyoloji", level: "A2" }, // [cite: 2379]
    { en: "Birth", tr: "Doğum", level: "A2" }, // [cite: 2379]
    { en: "Biscuit", tr: "Bisküvi", level: "A2" }, // [cite: 2379]
    { en: "Blank", tr: "Boşluk, boş", level: "A2" }, // [cite: 2379]
    { en: "Blood", tr: "Kan", level: "A2" }, // [cite: 2379]
    { en: "Blow", tr: "Esmek", level: "A2" }, // [cite: 2379]
    { en: "Board", tr: "Tahta", level: "A2" }, // [cite: 2379]
    { en: "Boil", tr: "Kaynamak", level: "A2" }, // [cite: 2379]
    { en: "Bone", tr: "Kılçık, kemik", level: "A2" }, // [cite: 2379]
    { en: "Book", tr: "Ayırtmak", level: "A2" }, // [cite: 2379]
    { en: "Borrow", tr: "Ödünç almak", level: "A2" }, // [cite: 2379]
    { en: "Boss", tr: "Patron", level: "A2" }, // [cite: 2379]
    { en: "Bottom", tr: "Dip, en alt", level: "A2" }, // [cite: 2379]
    { en: "Bowl", tr: "Tas", level: "A2" }, // [cite: 2379]
    { en: "Brain", tr: "Beyin", level: "A2" }, // [cite: 2380]
    { en: "Bridge", tr: "Köprü", level: "A2" }, // [cite: 2380]
    { en: "Bright", tr: "Parlak", level: "A2" }, // [cite: 2380]
    { en: "Brilliant", tr: "Harika", level: "A2" }, // [cite: 2380]
    { en: "Broken", tr: "Arızalı, kırılmış", level: "A2" }, // [cite: 2380]
    { en: "Brush", tr: "Fırçalamak", level: "A2" }, // [cite: 2380]
    { en: "Burn", tr: "Yakmak", level: "A2" }, // [cite: 2380]
    { en: "Businessman", tr: "İş adamı", level: "A2" }, // [cite: 2380]
    { en: "Button", tr: "Düğme", level: "A2" }, // [cite: 2380]
    { en: "Camp", tr: "Kamp", level: "A2" }, // [cite: 2380]
    { en: "Camping", tr: "Kamp yapma", level: "A2" }, // [cite: 2380]
    { en: "Can", tr: "Teneke kutu", level: "A2" }, // [cite: 2380]
    { en: "Care", tr: "İlgi, ilgilenmek", level: "A2" }, // [cite: 2380]
    { en: "Careful", tr: "Dikkatli", level: "A2" }, // [cite: 2380]
    { en: "Carefully", tr: "Dikkatlice", level: "A2" }, // [cite: 2380]
    { en: "Carpet", tr: "Halı", level: "A2" }, // [cite: 2380]
    { en: "Cartoon", tr: "Çizgi film", level: "A2" }, // [cite: 2380]
    { en: "Case", tr: "Dava", level: "A2" }, // [cite: 2380]
    { en: "Cash", tr: "Nakit", level: "A2" }, // [cite: 2380]
    { en: "Castle", tr: "Kale", level: "A2" }, // [cite: 2380]
    { en: "Catch", tr: "Yakalamak", level: "A2" }, // [cite: 2380]
    { en: "Cause", tr: "Sebep, sebep olmak", level: "A2" }, // [cite: 2380]
    { en: "Celebrate", tr: "Kutlamak", level: "A2" }, // [cite: 2380]
    { en: "Celebrity", tr: "Kutlama", level: "A2" }, // [cite: 2381]
    { en: "Certain", tr: "Kesin, belirli", level: "A2" }, // [cite: 2381]
    { en: "Certainly", tr: "Muhakkak, kesinlikle", level: "A2" }, // [cite: 2381]
    { en: "Chance", tr: "Şans", level: "A2" }, // [cite: 2381]
    { en: "Character", tr: "Karakter", level: "A2" }, // [cite: 2381]
    { en: "Charity", tr: "Bağış, hayırseverlik", level: "A2" }, // [cite: 2381]
    { en: "Chat", tr: "Konuşma, sohbet etmek", level: "A2" }, // [cite: 2381]
    { en: "Check", tr: "Kontrol", level: "A2" }, // [cite: 2381]
    { en: "Chef", tr: "Aşçı", level: "A2" }, // [cite: 2381]
    { en: "Chemistry", tr: "Kimya", level: "A2" }, // [cite: 2381]
    { en: "Choice", tr: "Tercih, seçenek", level: "A2" }, // [cite: 2381]
    { en: "Church", tr: "Kilise", level: "A2" }, // [cite: 2381]
    { en: "Cigarette", tr: "Sigara", level: "A2" }, // [cite: 2381]
    { en: "Circle", tr: "Halka, daire, muhit", level: "A2" }, // [cite: 2381]
    { en: "Classical", tr: "Klasik", level: "A2" }, // [cite: 2381]
    { en: "Clear", tr: "Temiz", level: "A2" }, // [cite: 2381]
    { en: "Clearly", tr: "Açık bir şekilde", level: "A2" }, // [cite: 2381]
    { en: "Clever", tr: "Akıllı, zeki", level: "A2" }, // [cite: 2381]
    { en: "Climate", tr: "İklim", level: "A2" }, // [cite: 2381]
    { en: "Close", tr: "Yakın", level: "A2" }, // [cite: 2381]
    { en: "Closed", tr: "Kapalı", level: "A2" }, // [cite: 2381]
    { en: "Clothing", tr: "Giysi, giyim", level: "A2" }, // [cite: 2381]
    { en: "Cloud", tr: "Bulut", level: "A2" }, // [cite: 2381]
    { en: "Coach", tr: "Antrenör", level: "A2" }, // [cite: 2382]
    { en: "Coast", tr: "Sahil", level: "A2" }, // [cite: 2382]
    { en: "Code", tr: "Kod", level: "A2" }, // [cite: 2382]
    { en: "Colleague", tr: "Kolej", level: "A2" }, // [cite: 2382]
    { en: "Collect", tr: "Toplamak", level: "A2" }, // [cite: 2382]
    { en: "Column", tr: "Köşe", level: "A2" }, // [cite: 2382]
    { en: "Comedy", tr: "Komedi", level: "A2" }, // [cite: 2382]
    { en: "Comfortable", tr: "Konforlu", level: "A2" }, // [cite: 2382]
    { en: "Comment", tr: "Yorum", level: "A2" }, // [cite: 2382]
    { en: "Communicate", tr: "İletişim kurmak", level: "A2" }, // [cite: 2382]
    { en: "Community", tr: "Toplum", level: "A2" }, // [cite: 2382]
    { en: "Compete", tr: "Rekabet etmek, yarışmak", level: "A2" }, // [cite: 2382]
    { en: "Competition", tr: "Yarışma", level: "A2" }, // [cite: 2382]
    { en: "Complain", tr: "Şikayet etmek", level: "A2" }, // [cite: 2382]
    { en: "Completely", tr: "Tamamen", level: "A2" }, // [cite: 2382]
    { en: "Condition", tr: "Durum, şart", level: "A2" }, // [cite: 2382]
    { en: "Conference", tr: "Konferans", level: "A2" }, // [cite: 2382]
    { en: "Connect", tr: "Bağlamak", level: "A2" }, // [cite: 2382]
    { en: "Connected", tr: "Bağlı", level: "A2" }, // [cite: 2382]
    { en: "Consider", tr: "Düşünmek", level: "A2" }, // [cite: 2382]
    { en: "Contain", tr: "İçermek", level: "A2" }, // [cite: 2382]
    { en: "Context", tr: "Bağlam", level: "A2" }, // [cite: 2382]
    { en: "Continent", tr: "Kıta", level: "A2" }, // [cite: 2382]
    { en: "Continue", tr: "Devam etmek", level: "A2" }, // [cite: 2383]
    { en: "Control", tr: "Kontrol, kontrol etmek", level: "A2" }, // [cite: 2383]
    { en: "Conversation", tr: "Konuşma, sohbet", level: "A2" }, // [cite: 2383]
    { en: "Cook", tr: "Aşçı", level: "A2" }, // [cite: 2383]
    { en: "Cooker", tr: "Ocak, fırın", level: "A2" }, // [cite: 2383]
    { en: "Copy", tr: "Kopyalamak", level: "A2" }, // [cite: 2383]
    { en: "Corner", tr: "Köşe", level: "A2" }, // [cite: 2383]
    { en: "Correctly", tr: "Düzgün bir şekilde", level: "A2" }, // [cite: 2383]
    { en: "Count", tr: "Saymak", level: "A2" }, // [cite: 2383]
    { en: "Couple", tr: "Çift", level: "A2" }, // [cite: 2383]
    { en: "Cover", tr: "Kapamak, örtmek", level: "A2" }, // [cite: 2383]
    { en: "Crazy", tr: "Çılgın", level: "A2" }, // [cite: 2383]
    { en: "Creative", tr: "Yaratıcı", level: "A2" }, // [cite: 2383]
    { en: "Credit", tr: "Kredi", level: "A2" }, // [cite: 2383]
    { en: "Crime", tr: "Suç", level: "A2" }, // [cite: 2383]
    { en: "Criminal", tr: "Suçlu, sabıkalı", level: "A2" }, // [cite: 2383]
    { en: "Cross", tr: "Geçmek", level: "A2" }, // [cite: 2383]
    { en: "Crowd", tr: "Kalabalık, izdiham", level: "A2" }, // [cite: 2383]
    { en: "Crowded", tr: "Kalabalık", level: "A2" }, // [cite: 2383]
    { en: "Cry", tr: "Ağlamak", level: "A2" }, // [cite: 2383]
    { en: "Cupboard", tr: "Dolap, büfe", level: "A2" }, // [cite: 2383]
    { en: "Curly", tr: "Kıvırcık", level: "A2" }, // [cite: 2383]
    { en: "Cycle", tr: "Devir", level: "A2" }, // [cite: 2383]
    { en: "Daily", tr: "Günlük", level: "A2" }, // [cite: 2384]
    { en: "Danger", tr: "Tehlike", level: "A2" }, // [cite: 2384]
    { en: "Dark", tr: "Karanlık", level: "A2" }, // [cite: 2384]
    { en: "Data", tr: "Data, veri", level: "A2" }, // [cite: 2384]
    { en: "Dead", tr: "Ölü", level: "A2" }, // [cite: 2384]
    { en: "Deal", tr: "Anlaşma", level: "A2" }, // [cite: 2384]
    { en: "Dear", tr: "Tatlı, sevgili", level: "A2" }, // [cite: 2384]
    { en: "Death", tr: "Ölüm", level: "A2" }, // [cite: 2384]
    { en: "Decision", tr: "Karar", level: "A2" }, // [cite: 2384]
    { en: "Deep", tr: "Derin", level: "A2" }, // [cite: 2384]
    { en: "Definitely", tr: "Kesinlikle", level: "A2" }, // [cite: 2384]
    { en: "Degree", tr: "Sınıf, puan", level: "A2" }, // [cite: 2384]
    { en: "Dentist", tr: "Dişçi", level: "A2" }, // [cite: 2384]
    { en: "Department", tr: "Bölüm", level: "A2" }, // [cite: 2384]
    { en: "Depend", tr: "Dayanmak", level: "A2" }, // [cite: 2384]
    { en: "Desert", tr: "Tatlı, çöl", level: "A2" }, // [cite: 2384]
    { en: "Designer", tr: "Tasarımcı", level: "A2" }, // [cite: 2384]
    { en: "Destroy", tr: "Yıkmak", level: "A2" }, // [cite: 2384]
    { en: "Detective", tr: "Dedektif", level: "A2" }, // [cite: 2384]
    { en: "Develop", tr: "Geliştirmek", level: "A2" }, // [cite: 2384]
    { en: "Device", tr: "Alet, edevat", level: "A2" }, // [cite: 2384]
    { en: "Diary", tr: "Günlük", level: "A2" }, // [cite: 2384]
    { en: "Differently", tr: "Farklı bir şekilde", level: "A2" }, // [cite: 2384]
    { en: "Digital", tr: "Dijital", level: "A2" }, // [cite: 2385]
    { en: "Direct", tr: "Doğru, direkt", level: "A2" }, // [cite: 2385]
    { en: "Direction", tr: "Yön", level: "A2" }, // [cite: 2385]
    { en: "Director", tr: "Yönetmen", level: "A2" }, // [cite: 2385]
    { en: "Disagree", tr: "Katılmamak", level: "A2" }, // [cite: 2385]
    { en: "Disappear", tr: "Ortadan kaybolmak", level: "A2" }, // [cite: 2385]
    { en: "Disaster", tr: "Felaket", level: "A2" }, // [cite: 2385]
    { en: "Discover", tr: "Keşfetmek", level: "A2" }, // [cite: 2385]
    { en: "Discovery", tr: "Keşif", level: "A2" }, // [cite: 2385]
    { en: "Discussion", tr: "Tartışma", level: "A2" }, // [cite: 2385]
    { en: "Disease", tr: "Hastalık", level: "A2" }, // [cite: 2385]
    { en: "Distance", tr: "Mesafe", level: "A2" }, // [cite: 2385]
    { en: "Divorced", tr: "Boşanmış", level: "A2" }, // [cite: 2385]
    { en: "Document", tr: "Belge", level: "A2" }, // [cite: 2385]
    { en: "Double", tr: "Çift", level: "A2" }, // [cite: 2385]
    { en: "Download", tr: "İndirmek", level: "A2" }, // [cite: 2385]
    { en: "Downstairs", tr: "Altkat", level: "A2" }, // [cite: 2385]
    { en: "Drama", tr: "Drama", level: "A2" }, // [cite: 2385]
    { en: "Drawing", tr: "Çizme", level: "A2" }, // [cite: 2385]
    { en: "Dream", tr: "Hayal kurma", level: "A2" }, // [cite: 2385]
    { en: "Drive", tr: "Dürtü", level: "A2" }, // [cite: 2385]
    { en: "Driving", tr: "Sürüş", level: "A2" }, // [cite: 2385]
    { en: "Drop", tr: "Düşürmek", level: "A2" }, // [cite: 2385]
    { en: "Drug", tr: "Uyuşturucu", level: "A2" }, // [cite: 2386]
    { en: "Dry", tr: "Kuru, kurulamak", level: "A2" }, // [cite: 2386]
    { en: "Earn", tr: "Para kazanmak", level: "A2" }, // [cite: 2386]
    { en: "Earth", tr: "Kara, yeryüzü, dünya", level: "A2" }, // [cite: 2386]
    { en: "Easily", tr: "Kolayca", level: "A2" }, // [cite: 2386]
    { en: "Education", tr: "Eğitim", level: "A2" }, // [cite: 2386]
    { en: "Effect", tr: "Etki", level: "A2" }, // [cite: 2386]
    { en: "Either", tr: "İki, her iki, herhangi biri", level: "A2" }, // [cite: 2386]
    { en: "Electronic", tr: "Elektronik", level: "A2" }, // [cite: 2386]
    { en: "Employ", tr: "İşe almak", level: "A2" }, // [cite: 2386]
    { en: "Employee", tr: "İşçi", level: "A2" }, // [cite: 2386]
    { en: "Employer", tr: "İşveren", level: "A2" }, // [cite: 2386]
    { en: "Empty", tr: "Boş", level: "A2" }, // [cite: 2386]
    { en: "Ending", tr: "Son", level: "A2" }, // [cite: 2386]
    { en: "Energy", tr: "Enerji", level: "A2" }, // [cite: 2386]
    { en: "Engine", tr: "Motor", level: "A2" }, // [cite: 2386]
    { en: "Engineer", tr: "Mühendis", level: "A2" }, // [cite: 2386]
    { en: "Enormous", tr: "Devasa", level: "A2" }, // [cite: 2386]
    { en: "Enter", tr: "Girmek", level: "A2" }, // [cite: 2386]
    { en: "Environment", tr: "Çevre", level: "A2" }, // [cite: 2386]
    { en: "Equipment", tr: "Ekipman", level: "A2" }, // [cite: 2386]
    { en: "Error", tr: "Hata", level: "A2" }, // [cite: 2386]
    { en: "Especially", tr: "Özellikle", level: "A2" }, // [cite: 2386]
    { en: "Essay", tr: "Makale", level: "A2" }, // [cite: 2387]
    { en: "Everyday", tr: "Her gün", level: "A2" }, // [cite: 2387]
    { en: "Everywhere", tr: "Her yer", level: "A2" }, // [cite: 2387]
    { en: "Evidence", tr: "Kanıt", level: "A2" }, // [cite: 2387]
    { en: "Exact", tr: "Kesin, tamı tamına", level: "A2" }, // [cite: 2387]
    { en: "Exactly", tr: "Kesinlikle", level: "A2" }, // [cite: 2387]
    { en: "Excellent", tr: "Harika", level: "A2" }, // [cite: 2387]
    { en: "Except", tr: "Dışında", level: "A2" }, // [cite: 2387]
    { en: "Exist", tr: "Var olmak", level: "A2" }, // [cite: 2387]
    { en: "Expect", tr: "Ummak", level: "A2" }, // [cite: 2387]
    { en: "Experience", tr: "Deneyim", level: "A2" }, // [cite: 2387]
    { en: "Experiment", tr: "Tecrübe", level: "A2" }, // [cite: 2387]
    { en: "Expert", tr: "Uzman", level: "A2" }, // [cite: 2387]
    { en: "Explanation", tr: "Açıklama", level: "A2" }, // [cite: 2387]
    { en: "Express", tr: "İfade etmek", level: "A2" }, // [cite: 2387]
    { en: "Expression", tr: "İfade", level: "A2" }, // [cite: 2387]
    { en: "Extreme", tr: "Aşırı", level: "A2" }, // [cite: 2387]
    { en: "Extremely", tr: "Aşırı boyutta", level: "A2" }, // [cite: 2387]
    { en: "Factor", tr: "Etken, faktör", level: "A2" }, // [cite: 2387]
    { en: "Factory", tr: "Fabrika", level: "A2" }, // [cite: 2387]
    { en: "Fail", tr: "Başarısız olmak", level: "A2" }, // [cite: 2387]
    { en: "Fair", tr: "Adil", level: "A2" }, // [cite: 2387]
    { en: "Fall", tr: "Sonbahar, düşüş", level: "A2" }, // [cite: 2387]
    { en: "Fan", tr: "Pervane, taraftar", level: "A2" }, // [cite: 2388]
    { en: "Farm", tr: "Çiftçilik yapmak, ekip biçmek", level: "A2" }, // [cite: 2388]
    { en: "Farming", tr: "Tarım", level: "A2" }, // [cite: 2388]
    { en: "Fashion", tr: "Moda", level: "A2" }, // [cite: 2388]
    { en: "Fat", tr: "Yağ", level: "A2" }, // [cite: 2388]
    { en: "Fear", tr: "Korku", level: "A2" }, // [cite: 2388]
    { en: "Feature", tr: "Özellik", level: "A2" }, // [cite: 2388]
    { en: "Feed", tr: "Beslemek", level: "A2" }, // [cite: 2388]
    { en: "Female", tr: "Kadın", level: "A2" }, // [cite: 2388]
    { en: "Fiction", tr: "Kurgu", level: "A2" }, // [cite: 2388]
    { en: "Field", tr: "Alan, saha", level: "A2" }, // [cite: 2388]
    { en: "Fight", tr: "Dövüşmek", level: "A2" }, // [cite: 2388]
    { en: "Figure", tr: "Figür", level: "A2" }, // [cite: 2388]
    { en: "Film", tr: "Film çekmek", level: "A2" }, // [cite: 2388]
    { en: "Final", tr: "Son, final", level: "A2" }, // [cite: 2388]
    { en: "Finally", tr: "Sonunda", level: "A2" }, // [cite: 2388]
    { en: "Finger", tr: "Parmak", level: "A2" }, // [cite: 2388]
    { en: "Finish", tr: "Nihayet", level: "A2" }, // [cite: 2388]
    { en: "First", tr: "Birinci", level: "A2" }, // [cite: 2388]
    { en: "Firstly", tr: "Öncelikle", level: "A2" }, // [cite: 2388]
    { en: "Fish", tr: "Balık avlamak", level: "A2" }, // [cite: 2388]
    { en: "Fishing", tr: "Balık tutma", level: "A2" }, // [cite: 2388]
    { en: "Fit", tr: "Uymak, uygun", level: "A2" }, // [cite: 2388]
    { en: "Fix", tr: "Düzeltmek", level: "A2" }, // [cite: 2389]
    { en: "Flat", tr: "Apartman", level: "A2" }, // [cite: 2389]
    { en: "Flu", tr: "Grip", level: "A2" }, // [cite: 2389]
    { en: "Fly", tr: "Sinek", level: "A2" }, // [cite: 2389]
    { en: "Flying", tr: "Uçuş", level: "A2" }, // [cite: 2389]
    { en: "Focus", tr: "Odaklanmak", level: "A2" }, // [cite: 2389]
    { en: "Following", tr: "Taraftarlar, izleyen, takip eden", level: "A2" }, // [cite: 2389]
    { en: "Foreign", tr: "Yabancı", level: "A2" }, // [cite: 2389]
    { en: "Forest", tr: "Orman", level: "A2" }, // [cite: 2389]
    { en: "Fork", tr: "Çatal", level: "A2" }, // [cite: 2389]
    { en: "Formal", tr: "Resmi", level: "A2" }, // [cite: 2389]
    { en: "Fortunately", tr: "Şükür ki, neyse ki", level: "A2" }, // [cite: 2389]
    { en: "Forward", tr: "İleri", level: "A2" }, // [cite: 2389]
    { en: "Free", tr: "Beleş, muaf", level: "A2" }, // [cite: 2389]
    { en: "Fresh", tr: "Taze", level: "A2" }, // [cite: 2389]
    { en: "Fridge", tr: "Buzdolabı", level: "A2" }, // [cite: 2389]
    { en: "Frog", tr: "Kurbağa", level: "A2" }, // [cite: 2389]
    { en: "Fun", tr: "Eğlenceli", level: "A2" }, // [cite: 2389]
    { en: "Furniture", tr: "Mobilya", level: "A2" }, // [cite: 2389]
    { en: "Further", tr: "Daha ileri", level: "A2" }, // [cite: 2389]
    { en: "Future", tr: "Müstakbel", level: "A2" }, // [cite: 2389]
    { en: "Gallery", tr: "Galeri", level: "A2" }, // [cite: 2389]
    { en: "Gap", tr: "Boşluk", level: "A2" }, // [cite: 2389]
    { en: "Gas", tr: "Gaz", level: "A2" }, // [cite: 2390]
    { en: "Gate", tr: "Kapı", level: "A2" }, // [cite: 2390]
    { en: "General", tr: "Genel, avam", level: "A2" }, // [cite: 2390]
    { en: "Gift", tr: "Hediye", level: "A2" }, // [cite: 2390]
    { en: "Goal", tr: "Hedef, amaç", level: "A2" }, // [cite: 2390]
    { en: "God", tr: "Tanrı", level: "A2" }, // [cite: 2390]
    { en: "Gold", tr: "Altın", level: "A2" }, // [cite: 2390]
    { en: "Golf", tr: "Golf", level: "A2" }, // [cite: 2390]
    { en: "Good", tr: "İyilik, hayır, hasenat", level: "A2" }, // [cite: 2390]
    { en: "Government", tr: "Hükümet", level: "A2" }, // [cite: 2390]
    { en: "Grass", tr: "Çimen", level: "A2" }, // [cite: 2390]
    { en: "Greet", tr: "Selamlaşmak", level: "A2" }, // [cite: 2390]
    { en: "Ground", tr: "Yer, zemin", level: "A2" }, // [cite: 2390]
    { en: "Guest", tr: "Misafir", level: "A2" }, // [cite: 2390]
    { en: "Guide", tr: "Yönlendirmek", level: "A2" }, // [cite: 2390]
    { en: "Gun", tr: "Silah", level: "A2" }, // [cite: 2390]
    { en: "Guy", tr: "Adam", level: "A2" }, // [cite: 2390]
    { en: "Habit", tr: "Alışkanlık", level: "A2" }, // [cite: 2390]
    { en: "Half", tr: "Yarı yarıya, hemen hemen", level: "A2" }, // [cite: 2390]
    { en: "Hall", tr: "Salon", level: "A2" }, // [cite: 2390]
    { en: "Happily", tr: "Mutlu bir şekilde", level: "A2" }, // [cite: 2390]
    { en: "Headache", tr: "Baş ağrısı", level: "A2" }, // [cite: 2390]
    { en: "Heart", tr: "Kalp", level: "A2" }, // [cite: 2390]
    { en: "Heat", tr: "Sıcaklık, öfke, ısıtmak", level: "A2" }, // [cite: 2391]
    { en: "Heavy", tr: "Ağır", level: "A2" }, // [cite: 2391]
    { en: "Helpful", tr: "Yardımsever", level: "A2" }, // [cite: 2391]
    { en: "Hero", tr: "Kahraman", level: "A2" }, // [cite: 2391]
    { en: "Hide", tr: "Saklanmak", level: "A2" }, // [cite: 2391]
    { en: "High", tr: "Yüksek", level: "A2" }, // [cite: 2391]
    { en: "Hill", tr: "Tepe", level: "A2" }, // [cite: 2391]
    { en: "Hit", tr: "Vurmak, vuruş", level: "A2" }, // [cite: 2391]
    { en: "Hockey", tr: "Hokey", level: "A2" }, // [cite: 2391]
    { en: "Hold", tr: "Tutmak", level: "A2" }, // [cite: 2391]
    { en: "Hole", tr: "Delik", level: "A2" }, // [cite: 2391]
    { en: "Home", tr: "Eve ait", level: "A2" }, // [cite: 2391]
    { en: "Hope", tr: "Umut", level: "A2" }, // [cite: 2391]
    { en: "Huge", tr: "Kocaman", level: "A2" }, // [cite: 2391]
    { en: "Human", tr: "İnsan", level: "A2" }, // [cite: 2391]
    { en: "Hurt", tr: "Yaralamak, acıtmak", level: "A2" }, // [cite: 2391]
    { en: "Ideal", tr: "İdeal", level: "A2" }, // [cite: 2391]
    { en: "Identify", tr: "Tanımlamak", level: "A2" }, // [cite: 2391]
    { en: "Ill", tr: "Hasta", level: "A2" }, // [cite: 2391]
    { en: "Illness", tr: "Hastalık", level: "A2" }, // [cite: 2391]
    { en: "Image", tr: "İmaj", level: "A2" }, // [cite: 2391]
    { en: "Immediately", tr: "Hemen", level: "A2" }, // [cite: 2391]
    { en: "Impossible", tr: "İmkansız", level: "A2" }, // [cite: 2391]
    { en: "Included", tr: "İçeren, içinde", level: "A2" }, // [cite: 2392]
    { en: "Including", tr: "Dahil", level: "A2" }, // [cite: 2392]
    { en: "Increase", tr: "Artmak", level: "A2" }, // [cite: 2392]
    { en: "Incredible", tr: "Harika", level: "A2" }, // [cite: 2392]
    { en: "Independent", tr: "Bağımsız", level: "A2" }, // [cite: 2392]
    { en: "Individual", tr: "Bireysel", level: "A2" }, // [cite: 2392]
    { en: "Industry", tr: "Endüstri", level: "A2" }, // [cite: 2392]
    { en: "Informal", tr: "Resmi olmayan", level: "A2" }, // [cite: 2392]
    { en: "Injury", tr: "Zarar, yara", level: "A2" }, // [cite: 2392]
    { en: "Insect", tr: "Böcek", level: "A2" }, // [cite: 2392]
    { en: "Inside", tr: "İçinde", level: "A2" }, // [cite: 2392]
    { en: "Instead", tr: "-yerine", level: "A2" }, // [cite: 2392]
    { en: "Instruction", tr: "Talimat", level: "A2" }, // [cite: 2392]
    { en: "Instructor", tr: "Eğitmen", level: "A2" }, // [cite: 2392]
    { en: "Instrument", tr: "Enstrüman", level: "A2" }, // [cite: 2392]
    { en: "Intelligent", tr: "Zeki, akıllı", level: "A2" }, // [cite: 2392]
    { en: "International", tr: "Uluslarası", level: "A2" }, // [cite: 2392]
    { en: "Introduction", tr: "Giriş", level: "A2" }, // [cite: 2392]
    { en: "Invent", tr: "İcat etmek", level: "A2" }, // [cite: 2392]
    { en: "Invention", tr: "İcat", level: "A2" }, // [cite: 2392]
    { en: "Invitation", tr: "Davet", level: "A2" }, // [cite: 2392]
    { en: "Invite", tr: "Davet etmek", level: "A2" }, // [cite: 2392]
    { en: "Involve", tr: "İçermek", level: "A2" }, // [cite: 2392]
    { en: "Item", tr: "Madde, öğe, kalem", level: "A2" }, // [cite: 2393]
    { en: "Jam", tr: "Reçel", level: "A2" }, // [cite: 2393]
    { en: "Jazz", tr: "Caz", level: "A2" }, // [cite: 2393]
    { en: "Jewellery", tr: "Mücevherat", level: "A2" }, //
    { en: "Joke", tr: "Şaka, şaka yapmak", level: "A2" },
    { en: "Journalist", tr: "Gazeteci", level: "A2" },
    { en: "Jump", tr: "Zıplamak", level: "A2" },
    { en: "Kid", tr: "Çocuk", level: "A2" },
    { en: "Kill", tr: "Öldürmek", level: "A2" },
    { en: "King", tr: "Kral", level: "A2" },
    { en: "Knee", tr: "Diz", level: "A2" },
    { en: "Knife", tr: "Bıçak", level: "A2" },
    { en: "Knock", tr: "Vurmak, çalmak", level: "A2" },
    { en: "Knowledge", tr: "Bilgi", level: "A2" },
    { en: "Lab", tr: "Laboratuvar", level: "A2" },
    { en: "Lady", tr: "Hanımefendi", level: "A2" },
    { en: "Lake", tr: "Göl", level: "A2" },
    { en: "Lamp", tr: "Ampul, lamba", level: "A2" },
    { en: "Land", tr: "Karaya ayak basmak, arazi", level: "A2" },
    { en: "Laptop", tr: "Laptop, dizüstü bilgisayar", level: "A2" },
    { en: "Laughter", tr: "Kahkaha", level: "A2" },
    { en: "Law", tr: "Hukuk, kanun", level: "A2" },
    { en: "Lawyer", tr: "Hukukçu, avukat", level: "A2" },
    { en: "Lazy", tr: "Tembel", level: "A2" },
    { en: "Leader", tr: "Lider", level: "A2" },
    { en: "Learning", tr: "Öğrenme, öğrenim", level: "A2" },
    { en: "Lecture", tr: "Ders, ders anlatmak", level: "A2" },
    { en: "Lemon", tr: "Limon", level: "A2" },
    { en: "Lend", tr: "Ödünç vermek", level: "A2" },
    { en: "Level", tr: "Seviye", level: "A2" },
    { en: "Lifestyle", tr: "Yaşam tarzı", level: "A2" },
    { en: "Lift", tr: "Asansör, kaldırmak", level: "A2" },
    { en: "Light", tr: "Tutuşmak, yanmak, ışık", level: "A2" },
    { en: "Likely", tr: "Büyük ihtimalle", level: "A2" },
    { en: "Link", tr: "Bağ, bağlamak", level: "A2" },
    { en: "Listener", tr: "Dinleyici", level: "A2" },
    { en: "Little", tr: "Biraz, küçük", level: "A2" },
    { en: "Lock", tr: "Kilit, kilitlemek", level: "A2" },
    { en: "Look", tr: "Görünüş, bakış", level: "A2" },
    { en: "Lorry", tr: "Kamyon", level: "A2" },
    { en: "Lost", tr: "Kayıp", level: "A2" },
    { en: "Loud", tr: "Gürültülü, yüksek sesle", level: "A2" },
    { en: "Loudly", tr: "Yüksek sesle", level: "A2" },
    { en: "Lovely", tr: "Sevimli, hoş, güzel", level: "A2" },
    { en: "Low", tr: "Düşük, az, alçak", level: "A2" },
    { en: "Luck", tr: "Şans", level: "A2" },
    { en: "Lucky", tr: "Şanslı", level: "A2" },
    { en: "Mail", tr: "Posta, postalamak", level: "A2" },
    { en: "Major", tr: "Asıl, büyük, ana", level: "A2" },
    { en: "Male", tr: "Erkek", level: "A2" },
    { en: "Manage", tr: "İdare etmek, yönetmek", level: "A2" },
    { en: "Manager", tr: "Menajer, yönetici", level: "A2" },
    { en: "Manner", tr: "Biçim, tutum, tavır", level: "A2" },
    { en: "Mark", tr: "İşaret, işaretlemek", level: "A2" },
    { en: "Marry", tr: "Evlenmek", level: "A2" },
    { en: "Material", tr: "Materyal, malzeme", level: "A2" },
    { en: "Mathematics", tr: "Matematik", level: "A2" },
    { en: "Maths", tr: "Matematik", level: "A2" },
    { en: "Matter", tr: "Konu, önemli olmak", level: "A2" },
    { en: "Media", tr: "Medya", level: "A2" },
    { en: "Medical", tr: "Tıbbi", level: "A2" },
    { en: "Medicine", tr: "İlaç, tıp", level: "A2" },
    { en: "Memory", tr: "Hatıra, hafıza", level: "A2" },
    { en: "Mention", tr: "Bahsetmek", level: "A2" },
    { en: "Metal", tr: "Metal", level: "A2" },
    { en: "Method", tr: "Metot, yöntem", level: "A2" },
    { en: "Middle", tr: "Orta", level: "A2" },
    { en: "Mind", tr: "Akıl, önemsemek", level: "A2" },
    { en: "Mine", tr: "Benim", level: "A2" },
    { en: "Mirror", tr: "Ayna", level: "A2" },
    { en: "Missing", tr: "Eksik, kayıp", level: "A2" },
    { en: "Mobile", tr: "Mobil, taşınabilir", level: "A2" },
    { en: "Monkey", tr: "Maymun", level: "A2" },
    { en: "Moon", tr: "Ay", level: "A2" },
    { en: "Mostly", tr: "Çoğunlukla", level: "A2" },
    { en: "Motorcycle", tr: "Motosiklet", level: "A2" },
    { en: "Movement", tr: "Hareket", level: "A2" },
    { en: "Musical", tr: "Müzikal", level: "A2" },
    { en: "Musician", tr: "Müzisyen", level: "A2" },
    { en: "Myself", tr: "Kendim", level: "A2" },
    { en: "Narrow", tr: "Dar", level: "A2" },
    { en: "National", tr: "Ulusal, milli", level: "A2" },
    { en: "Nature", tr: "Doğa", level: "A2" },
    { en: "Nearly", tr: "Hemen hemen, neredeyse", level: "A2" },
    { en: "Necessary", tr: "Gerekli, lüzumlu", level: "A2" },
    { en: "Neck", tr: "Boyun", level: "A2" },
    { en: "Need", tr: "Gerekmek, ihtiyaç", level: "A2" },
    { en: "Neither", tr: "Hiçbir, ikisinden hiçbiri", level: "A2" },
    { en: "Nervous", tr: "Gergin, sinirli", level: "A2" },
    { en: "Network", tr: "Ağ, şebeke", level: "A2" },
    { en: "Noise", tr: "Ses, gürültü", level: "A2" },
    { en: "Noisy", tr: "Gürültülü", level: "A2" },
    { en: "None", tr: "Hiçbiri", level: "A2" },
    { en: "Normal", tr: "Normal", level: "A2" },
    { en: "Normally", tr: "Normalde, normal olarak", level: "A2" },
    { en: "Notice", tr: "Duyuru, fark etmek", level: "A2" },
    { en: "Novel", tr: "Roman", level: "A2" },
    { en: "Nowhere", tr: "Hiçbir yer", level: "A2" },
    { en: "Number", tr: "Numara, numaralandırmak", level: "A2" },
    { en: "Nut", tr: "Kabuklu yemiş, fındık/ceviz", level: "A2" },
    { en: "Ocean", tr: "Okyanus", level: "A2" },
    { en: "Offer", tr: "Teklif etmek, teklif", level: "A2" },
    { en: "Officer", tr: "Memur, subay", level: "A2" },
    { en: "Oil", tr: "Yağ, petrol", level: "A2" },
    { en: "Opportunity", tr: "Fırsat", level: "A2" },
    { en: "Option", tr: "Seçenek", level: "A2" },
    { en: "Ordinary", tr: "Sıradan, olağan", level: "A2" },
    { en: "Organization", tr: "Organizasyon, kuruluş", level: "A2" },
    { en: "Organize", tr: "Organize etmek, düzenlemek", level: "A2" },
    { en: "Original", tr: "Orijinal, özgün", level: "A2" },
    { en: "Outside", tr: "Dışarı, dıştan", level: "A2" },
    { en: "Oven", tr: "Ocak, fırın", level: "A2" },
    { en: "Own", tr: "Sahip olmak, kendi", level: "A2" },
    { en: "Owner", tr: "Sahip", level: "A2" },
    { en: "Pack", tr: "Ambalajlamak, paketlemek", level: "A2" },
    { en: "Pain", tr: "Ağrı, acı", level: "A2" },
    { en: "Painter", tr: "Ressam, boyacı", level: "A2" },
    { en: "Palace", tr: "Saray", level: "A2" },
    { en: "Pants", tr: "Pantolon", level: "A2" },
    { en: "Parking", tr: "Park yapma, otopark", level: "A2" },
    { en: "Particular", tr: "Özel, belirli", level: "A2" },
    { en: "Pass", tr: "Geçmek", level: "A2" },
    { en: "Passenger", tr: "Yolcu", level: "A2" },
    { en: "Patient", tr: "Hasta, sabırlı", level: "A2" },
    { en: "Pattern", tr: "Model, desen, kalıp", level: "A2" },
    { en: "Pay", tr: "Ödeme, ücret", level: "A2" },
    { en: "Peace", tr: "Barış, huzur", level: "A2" },
    { en: "Penny", tr: "Metelik, kuruş", level: "A2" },
    { en: "Per cent", tr: "Yüzde", level: "A2" },
    { en: "Perform", tr: "Yapmak, yerine getirmek, sergilemek", level: "A2" },
    { en: "Perhaps", tr: "Belki", level: "A2" },
    { en: "Permission", tr: "İzin, müsaade", level: "A2" },
    { en: "Personality", tr: "Kişilik, şahsiyet", level: "A2" },
    { en: "Pet", tr: "Evcil hayvan", level: "A2" },
    { en: "Petrol", tr: "Petrol, benzin", level: "A2" },
    { en: "Photograph", tr: "Fotoğrafını çekmek, fotoğraf", level: "A2" },
    { en: "Physical", tr: "Fiziki, bedensel", level: "A2" },
    { en: "Physics", tr: "Fizik", level: "A2" },
    { en: "Pick", tr: "Koparmak, seçmek", level: "A2" },
    { en: "Pilot", tr: "Pilot", level: "A2" },
    { en: "Planet", tr: "Gezegen", level: "A2" },
    { en: "Plant", tr: "Dikmek, ekmek, bitki", level: "A2" },
    { en: "Plastic", tr: "Plastik", level: "A2" },
    { en: "Plate", tr: "Tabak", level: "A2" },
    { en: "Platform", tr: "Platform, peron", level: "A2" },
    { en: "Please", tr: "Memnun etmek, lütfen", level: "A2" },
    { en: "Pleased", tr: "Memnun, hoşnut", level: "A2" },
    { en: "Pocket", tr: "Cep", level: "A2" },
    { en: "Polite", tr: "Kibar, nazik", level: "A2" },
    { en: "Pollution", tr: "Kirlilik", level: "A2" },
    { en: "Population", tr: "Nüfus", level: "A2" },
    { en: "Position", tr: "Mevki, pozisyon, konum", level: "A2" },
    { en: "Possession", tr: "Sahiplik, mülk", level: "A2" },
    { en: "Possibility", tr: "Olasılık, imkan", level: "A2" },
    { en: "Poster", tr: "Afiş, poster", level: "A2" },
    { en: "Power", tr: "Güç, enerji", level: "A2" },
    { en: "Predict", tr: "Tahmin etmek, öngörmek", level: "A2" },
    { en: "Present", tr: "Sunmak, hediye, mevcut", level: "A2" },
    { en: "President", tr: "Başkan, devlet başkanı", level: "A2" },
    { en: "Prevent", tr: "Önlemek, engel olmak", level: "A2" },
    { en: "Print", tr: "Yazdırmak, basmak", level: "A2" },
    { en: "Printer", tr: "Yazıcı", level: "A2" },
    { en: "Prison", tr: "Hapishane, cezaevi", level: "A2" },
    { en: "Prize", tr: "Ödül", level: "A2" },
    { en: "Process", tr: "Süreç, işlem", level: "A2" },
    { en: "Produce", tr: "Üretmek", level: "A2" },
    { en: "Professional", tr: "Profesyonel", level: "A2" },
    { en: "Professor", tr: "Profesör", level: "A2" },
    { en: "Profile", tr: "Profil", level: "A2" },
    { en: "Program", tr: "Program", level: "A2" },
    { en: "Progress", tr: "Gelişim, ilerleme", level: "A2" },
    { en: "Promise", tr: "Söz vermek, söz", level: "A2" },
    { en: "Pronounce", tr: "Telaffuz etmek, okumak", level: "A2" },
    { en: "Protect", tr: "Korumak", level: "A2" },
    { en: "Provide", tr: "Sağlamak, temin etmek", level: "A2" },
    { en: "Pub", tr: "Pub, taverna, bar", level: "A2" },
    { en: "Public", tr: "Halk, kamu", level: "A2" },
    { en: "Publish", tr: "Yayınlamak, basmak", level: "A2" },
    { en: "Pull", tr: "Çekmek", level: "A2" },
    { en: "Purpose", tr: "Amaç, gaye", level: "A2" },
    { en: "Push", tr: "İtmek", level: "A2" },
    { en: "Quality", tr: "Kalite, nitelik", level: "A2" },
    { en: "Quantity", tr: "Nicelik, miktar", level: "A2" },
    { en: "Queen", tr: "Kraliçe", level: "A2" },
    { en: "Question", tr: "Sorguya çekmek, soru", level: "A2" },
    { en: "Quietly", tr: "Sessizce", level: "A2" },
    { en: "Race", tr: "Yarış, yarışmak, ırk", level: "A2" },
    { en: "Railway", tr: "Demiryolu", level: "A2" },
    { en: "Raise", tr: "Kaldırmak, artırmak, büyütmek", level: "A2" },
    { en: "Rate", tr: "Oran, hız, değer biçmek", level: "A2" },
    { en: "Rather", tr: "Oldukça, epeyce, tercihen", level: "A2" },
    { en: "Reach", tr: "Ulaşmak, erişmek", level: "A2" },
    { en: "React", tr: "Tepki vermek", level: "A2" },
    { en: "Realize", tr: "Gerçekleştirmek, farkına varmak", level: "A2" },
    { en: "Receive", tr: "Almak, teslim almak", level: "A2" },
    { en: "Recent", tr: "Son, yakında olmuş, yeni", level: "A2" },
    { en: "Recently", tr: "Son zamanlarda, yakında", level: "A2" },
    { en: "Reception", tr: "Resepsiyon, karşılama", level: "A2" },
    { en: "Recipe", tr: "Yemek tarifi", level: "A2" },
    { en: "Recognize", tr: "Tanımak, fark etmek", level: "A2" },
    { en: "Recommend", tr: "Tavsiye etmek, önermek", level: "A2" },
    { en: "Record", tr: "Kayıt, kaydetmek", level: "A2" },
    { en: "Recording", tr: "Kayıt, ses/görüntü kaydı", level: "A2" },
    { en: "Recycle", tr: "Geri dönüştürmek", level: "A2" },
    { en: "Reduce", tr: "Azaltmak, düşürmek", level: "A2" },
    { en: "Refer", tr: "Bahsetmek, kastetmek, anmak", level: "A2" },
    { en: "Refuse", tr: "Reddetmek, geri çevirmek", level: "A2" },
    { en: "Region", tr: "Alan, bölge", level: "A2" },
    { en: "Regular", tr: "Düzenli, olağan", level: "A2" },
    { en: "Relationship", tr: "İlişki, bağlantı", level: "A2" },
    { en: "Remove", tr: "Kaldırmak, çıkarmak", level: "A2" },
    { en: "Repair", tr: "Tamir etmek, onarmak", level: "A2" },
    { en: "Replace", tr: "Yer değiştirmek, yerine geçmek", level: "A2" },
    { en: "Reply", tr: "Cevap vermek, yanıtlamak", level: "A2" },
    { en: "Report", tr: "Rapor etmek, bildirmek", level: "A2" },
    { en: "Reporter", tr: "Muhabir, gazeteci", level: "A2" },
    { en: "Request", tr: "İstek, rica, talep etmek", level: "A2" },
    { en: "Researcher", tr: "Araştırmacı", level: "A2" },
    { en: "Respond", tr: "Yanıtlamak, karşılık vermek", level: "A2" },
    { en: "Response", tr: "Yanıt, tepki", level: "A2" },
    { en: "Rest", tr: "Kalan, geri kalan parça", level: "A2" },
    { en: "Rest", tr: "Dinlenmek, istirahat", level: "A2" },
    { en: "Review", tr: "Gözden geçirmek, eleştiri, inceleme", level: "A2" },
    { en: "Ride", tr: "Gezinti, binmek, sürmek", level: "A2" },
    { en: "Rise", tr: "Yükselmek, artış", level: "A2" },
    { en: "Rock", tr: "Kaya, taş", level: "A2" },
    { en: "Rock", tr: "Rock müziği", level: "A2" },
    { en: "Role", tr: "Rol, görev", level: "A2" },
    { en: "Roof", tr: "Çatı", level: "A2" },
    { en: "Route", tr: "Rota, güzergah", level: "A2" },
    { en: "Routine", tr: "Rutin, alışılmış düzen", level: "A2" },
    { en: "Rubbish", tr: "Çöp, saçmalık", level: "A2" },
    { en: "Rude", tr: "Kaba, saygısız", level: "A2" },
    { en: "Run", tr: "Koşu, koşmak, yönetmek", level: "A2" },
    { en: "Runner", tr: "Koşucu, atlet", level: "A2" },
    { en: "Sadly", tr: "Üzüntülü bir şekilde, ne yazık ki", level: "A2" },
    { en: "Safe", tr: "Güvenli, emniyetli", level: "A2" },
    { en: "Sail", tr: "Denize açılmak, yelken açmak", level: "A2" },
    { en: "Sailing", tr: "Deniz yolculuğu, yelken sporu", level: "A2" },
    { en: "Salary", tr: "Maaş, aylık", level: "A2" },
    { en: "Sale", tr: "Satış, indirim", level: "A2" },
    { en: "Sauce", tr: "Sos", level: "A2" },
    { en: "Save", tr: "Kurtarmak, kaydetmek, biriktirmek", level: "A2" },
    { en: "Scared", tr: "Korkmuş, ürkmüş", level: "A2" },
    { en: "Scary", tr: "Korkunç, ürkütücü", level: "A2" },
    { en: "Scene", tr: "Sahne, olay yeri", level: "A2" },
    { en: "Schedule", tr: "Takvim, program, zamanlama", level: "A2" },
    { en: "Score", tr: "Skor, puan, skor kaydetmek", level: "A2" },
    { en: "Screen", tr: "Ekran, perde", level: "A2" },
    { en: "Search", tr: "Arama, aramak, araştırmak", level: "A2" },
    { en: "Season", tr: "Sezon, mevsim", level: "A2" },
    { en: "Seat", tr: "Koltuk, oturacak yer", level: "A2" },
    { en: "Secret", tr: "Gizli, sır", level: "A2" },
    { en: "Secretary", tr: "Sekreter", level: "A2" },
    { en: "Seem", tr: "Görünmek, gibi gelmek", level: "A2" },
    { en: "Sense", tr: "Duyu, his, algı, anlam", level: "A2" },
    { en: "Separate", tr: "Ayrı, ayırmak", level: "A2" },
    { en: "Series", tr: "Seri, dizi", level: "A2" },
    { en: "Serious", tr: "Ciddi, ağır", level: "A2" },
    { en: "Serve", tr: "Hizmet etmek, servis yapmak", level: "A2" },
    { en: "Service", tr: "Servis, hizmet", level: "A2" },
    { en: "Several", tr: "Birkaç, çeşitli", level: "A2" },
    { en: "Shake", tr: "Sallamak, sarsmak, titremek", level: "A2" },
    { en: "Shape", tr: "Şekil, biçim vermek", level: "A2" },
    { en: "Sheet", tr: "Kağıt, levha, çarşaf", level: "A2" },
    { en: "Ship", tr: "Gemi, kargoya vermek", level: "A2" },
    { en: "Shoulder", tr: "Omuz", level: "A2" },
    { en: "Shout", tr: "Bağırmak, haykırmak", level: "A2" },
    { en: "Shut", tr: "Kapamak, kapalı", level: "A2" },
    { en: "Side", tr: "Yan, yön, taraf, kenar", level: "A2" },
    { en: "Sign", tr: "İşaret, belirtmek, imzalamak", level: "A2" },
    { en: "Silver", tr: "Gümüş", level: "A2" },
    { en: "Simple", tr: "Sade, yalın, basit", level: "A2" },
    { en: "Since", tr: "O zamandan beri, -den beri, çünkü", level: "A2" },
    { en: "Single", tr: "Bekar, tek, yalnız", level: "A2" },
    { en: "Sir", tr: "Efendi, sör, bayım", level: "A2" },
    { en: "Site", tr: "Site, alan, bölge", level: "A2" },
    { en: "Size", tr: "Boyut, beden, büyüklük", level: "A2" },
    { en: "Ski", tr: "Kayak, kayak yapmak", level: "A2" },
    { en: "Skiing", tr: "Kayakçılık sporu", level: "A2" },
    { en: "Skin", tr: "Ten, cilt, deri", level: "A2" },
    { en: "Sky", tr: "Gökyüzü", level: "A2" },
    { en: "Sleep", tr: "Uyku, uyumak", level: "A2" },
    { en: "Slowly", tr: "Yavaşça, ağır ağır", level: "A2" },
    { en: "Smartphone", tr: "Akıllı telefon", level: "A2" },
    { en: "Smell", tr: "Koklamak, koku", level: "A2" },
    { en: "Smile", tr: "Gülümseme, gülmek", level: "A2" },
    { en: "Smoke", tr: "Duman, sigara içmek", level: "A2" },
    { en: "Smoking", tr: "Sigara içme", level: "A2" },
    { en: "Soap", tr: "Sabun", level: "A2" },
    { en: "Soccer", tr: "Futbol", level: "A2" },
    { en: "Social", tr: "Sosyal, toplumsal", level: "A2" },
    { en: "Society", tr: "Toplum, cemiyet", level: "A2" },
    { en: "Sock", tr: "Çorap", level: "A2" },
    { en: "Soft", tr: "Yumuşak, hafif", level: "A2" },
    { en: "Soldier", tr: "Asker", level: "A2" },
    { en: "Solution", tr: "Çözüm", level: "A2" },
    { en: "Solve", tr: "Çözmek, halletmek", level: "A2" },
    { en: "Somewhere", tr: "Bir yer, bir yere", level: "A2" },
    { en: "Sort", tr: "Çeşit, tür, sınıflandırmak", level: "A2" },
    { en: "Source", tr: "Kaynak, köken", level: "A2" },
    { en: "Speaker", tr: "Konuşmacı, hoparlör", level: "A2" },
    { en: "Specific", tr: "Spesifik, belirli, özel", level: "A2" },
    { en: "Speech", tr: "Konuşma, nutuk", level: "A2" },
    { en: "Speed", tr: "Hız, sürat", level: "A2" },
    { en: "Spider", tr: "Örümcek", level: "A2" },
    { en: "Spoon", tr: "Kaşık", level: "A2" },
    { en: "Square", tr: "Meydan, kare", level: "A2" },
    { en: "Stage", tr: "Sahne, aşama, evre", level: "A2" },
    { en: "Stair", tr: "Merdiven basamağı", level: "A2" },
    { en: "Stamp", tr: "Pul, kaşe, damga", level: "A2" },
    { en: "Start", tr: "Başlangıç, başlamak", level: "A2" },
    { en: "State", tr: "Demeç, devlet, durum, belirtmek", level: "A2" },
    { en: "Stay", tr: "Kalma, konaklama", level: "A2" },
    { en: "Steal", tr: "Çalmak, hırsızlık yapmak", level: "A2" },
    { en: "Step", tr: "Adım, basamak, adım atmak", level: "A2" },
    { en: "Stomach", tr: "Karın, mide", level: "A2" },
    { en: "Stone", tr: "Taş", level: "A2" },
    { en: "Store", tr: "Mağaza, depo, depolamak", level: "A2" },
    { en: "Storm", tr: "Fırtına", level: "A2" },
    { en: "Straight", tr: "Düz, doğru, düzgün", level: "A2" },
    { en: "Strange", tr: "Yabancı, tuhaf, garip", level: "A2" },
    { en: "Strategy", tr: "Strateji", level: "A2" },
    { en: "Stress", tr: "Stres, vurgulamak", level: "A2" },
    { en: "Structure", tr: "Yapı, bina, yapılandırmak", level: "A2" },
    { en: "Stupid", tr: "Aptal, akılsız", level: "A2" },
    { en: "Succeed", tr: "Başarmak, başarılı olmak", level: "A2" },
    { en: "Successful", tr: "Başarılı", level: "A2" },
    { en: "Such", tr: "Çok, böyle, öyle, bu tür", level: "A2" },
    { en: "Suddenly", tr: "Aniden, birdenbire", level: "A2" },
    { en: "Suggest", tr: "Tavsiye etmek, önermek", level: "A2" },
    { en: "Suggestion", tr: "Öneri, tavsiye", level: "A2" },
    { en: "Suit", tr: "Takım elbise, uymak, yakışmak", level: "A2" },
    { en: "Support", tr: "Destek, desteklemek", level: "A2" },
    { en: "Suppose", tr: "Varsaymak, zannetmek", level: "A2" },
    { en: "Sure", tr: "Emin bir şekilde, elbette", level: "A2" },
    { en: "Surprise", tr: "Sürpriz, şaşırtmak", level: "A2" },
    { en: "Surprised", tr: "Şaşırmış, hayret etmiş", level: "A2" },
    { en: "Surprising", tr: "Şaşırtıcı", level: "A2" },
    { en: "Survey", tr: "Anket, araştırma, inceleme", level: "A2" },
    { en: "Sweet", tr: "Tatlı, şirin", level: "A2" },
    { en: "Symbol", tr: "Sembol, simge", level: "A2" },
    { en: "System", tr: "Sistem, düzen", level: "A2" },
    { en: "Tablet", tr: "Tablet bilgisayar, hap", level: "A2" },
    { en: "Talk", tr: "Konuşma, sohbet", level: "A2" },
    { en: "Target", tr: "Hedef, hedeflemek", level: "A2" },
    { en: "Task", tr: "Görev, vazife, ödev", level: "A2" },
    { en: "Taste", tr: "Tat, lezzet, tatmak", level: "A2" },
    { en: "Teaching", tr: "Öğretmenlik, öğretme", level: "A2" },
    { en: "Technology", tr: "Teknoloji", level: "A2" },
    { en: "Teenage", tr: "Ergenlik, ergen", level: "A2" },
    { en: "Temperature", tr: "Sıcaklık, ısı, derece", level: "A2" },
    { en: "Term", tr: "Dönem, terim, şart", level: "A2" },
    { en: "Themselves", tr: "Kendileri", level: "A2" },
    { en: "Thick", tr: "Kalın, yoğun", level: "A2" },
    { en: "Thief", tr: "Hırsız", level: "A2" },
    { en: "Thin", tr: "İnce, zayıf", level: "A2" },
    { en: "Thinking", tr: "Düşünme, fikir", level: "A2" },
    { en: "Third", tr: "Üçüncü", level: "A2" },
    { en: "Thought", tr: "Düşünce, fikir", level: "A2" },
    { en: "Throw", tr: "Atmak, fırlatmak", level: "A2" },
    { en: "Tidy", tr: "Düzenli, derli toplu, toplamak", level: "A2" },
    { en: "Tie", tr: "Bağlamak, kravat, bağ", level: "A2" },
    { en: "Tip", tr: "Bahşiş, ipucu, uç", level: "A2" },
    { en: "Tool", tr: "Araç gereç, alet", level: "A2" },
    { en: "Top", tr: "Baş, üst, zirve, tepe", level: "A2" },
    { en: "Touch", tr: "Dokunmak, temas", level: "A2" },
    { en: "Tour", tr: "Tur, gezi, tur atmak", level: "A2" },
    { en: "Tourism", tr: "Turizm", level: "A2" },
    { en: "Towards", tr: "-e doğru, yönünde", level: "A2" },
    { en: "Towel", tr: "Havlu", level: "A2" },
    { en: "Tower", tr: "Kule", level: "A2" },
    { en: "Toy", tr: "Oyuncak", level: "A2" },
    { en: "Track", tr: "İz, pist, takip etmek", level: "A2" },
    { en: "Tradition", tr: "Gelenek, anane", level: "A2" },
    { en: "Traditional", tr: "Geleneksel", level: "A2" },
    { en: "Train", tr: "Eğitmek, antrenman yapmak", level: "A2" },
    { en: "Trainer", tr: "Eğitimci, antrenör, spor ayakkabı", level: "A2" },
    { en: "Training", tr: "Eğitim, antrenman, idman", level: "A2" },
    { en: "Transport", tr: "Nakil, taşıma, ulaşım", level: "A2" },
    { en: "Traveller", tr: "Gezgin, seyyah, yolcu", level: "A2" },
    { en: "Trouble", tr: "Sorun, problem, bela, dert", level: "A2" },
    { en: "Truck", tr: "Kamyon, tır", level: "A2" },
    { en: "Twin", tr: "İkiz", level: "A2" },
    { en: "Typical", tr: "Tipik, kendine özgü", level: "A2" },
    { en: "Underground", tr: "Yer altı, metro", level: "A2" },
    { en: "Understanding", tr: "Anlayış, kavrayış", level: "A2" },
    { en: "Unfortunately", tr: "Ne yazık ki, maalesef", level: "A2" },
    { en: "Unhappy", tr: "Mutsuz", level: "A2" },
    { en: "Uniform", tr: "Forma, üniforma", level: "A2" },
    { en: "Unit", tr: "Birlik, ünite, birim", level: "A2" },
    { en: "United", tr: "Birleşmiş, birleşik", level: "A2" },
    { en: "Unusual", tr: "Sıradışı, alışılmadık, tuhaf", level: "A2" },
    { en: "Upstairs", tr: "Üst kat, üst katta olan", level: "A2" },
    { en: "Use", tr: "Kullanım, fayda", level: "A2" },
    { en: "User", tr: "Kullanıcı", level: "A2" },
    { en: "Usual", tr: "Olağan, alelade, alışılmış", level: "A2" },
    { en: "Valley", tr: "Vadi", level: "A2" },
    { en: "Van", tr: "Karavan, minibüs, kamyonet", level: "A2" },
    { en: "Variety", tr: "Çeşitlilik, tür", level: "A2" },
    { en: "Vehicle", tr: "Araç, vasıta", level: "A2" },
    { en: "View", tr: "Görüş, manzara, bakış açısı", level: "A2" },
    { en: "Virus", tr: "Virüs", level: "A2" },
    { en: "Voice", tr: "Ses (insan sesi)", level: "A2" },
    { en: "Wait", tr: "Bekleyiş, beklemek", level: "A2" },
    { en: "War", tr: "Savaş, harp", level: "A2" },
    { en: "Wash", tr: "Yıkama, yıkanma", level: "A2" },
    { en: "Washing", tr: "Yıkama, çamaşır", level: "A2" },
    { en: "Wave", tr: "Dalga, el sallamak", level: "A2" },
    { en: "Weak", tr: "Güçsüz, zayıf, halsiz", level: "A2" },
    { en: "Web", tr: "Ağ, örümcek ağı, web", level: "A2" },
    { en: "Wedding", tr: "Düğün, nikah", level: "A2" },
    { en: "Weight", tr: "Ağırlık, kilo, yük", level: "A2" },
    { en: "Welcome", tr: "Sıcak karşılama, hoş geldin", level: "A2" },
    { en: "Wet", tr: "Islak, yaş", level: "A2" },
    { en: "Wheel", tr: "Tekerlek, direksiyon, çark", level: "A2" },
    { en: "While", tr: "İken, olduğu sırada, süre", level: "A2" },
    { en: "Whose", tr: "Kimin, ki onun", level: "A2" },
    { en: "Wide", tr: "Geniş, bol, engin", level: "A2" },
    { en: "Wild", tr: "Vahşi, yaban, yabani", level: "A2" },
    { en: "Wind", tr: "Rüzgar, esinti", level: "A2" },
    { en: "Winner", tr: "Kazanan, galip", level: "A2" },
    { en: "Wish", tr: "Dilemek, dilek, istek, arzu", level: "A2" },
    { en: "Wood", tr: "Odun, tahta, ahşap, orman", level: "A2" },
    { en: "Wooden", tr: "Tahta, ahşaptan yapılmış", level: "A2" },
    { en: "Working", tr: "Çalışma, işleyen", level: "A2" },
    { en: "Worried", tr: "Endişeli, kaygılı, tasalı", level: "A2" },
    { en: "Worry", tr: "Endişelenmek, merak etmek", level: "A2" },
    { en: "Worse", tr: "Daha kötü, beter", level: "A2" },
    { en: "Worst", tr: "En kötü, en berbat", level: "A2" },
    { en: "Yet", tr: "Henüz, daha, yine de", level: "A2" },
];
