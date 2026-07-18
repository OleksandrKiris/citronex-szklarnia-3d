import * as THREE from "./assets/vendor/three.module.min.js";

(() => {
  "use strict";

  const LANGS = ["pl", "en", "ua", "ru", "az", "es", "fil", "id", "ne"];
  const translations = {
    pl: {
      brandSub: "Szklarnia 3D", chooseLanguage: "Wybierz język", eyebrow: "OSOBNY PROJEKT WIZUALIZACJI", title: "Poznaj szklarnię", heroLead: "Zobacz z góry, gdzie są drogi, nawy, przejścia, rzędy pomidorów i praca ludzi.", overview: "Cała szklarnia", nave: "Jedna nawa", work: "Praca i zbiór", liveEyebrow: "WIDOK INTERAKTYWNY", sceneTitle: "Szklarnia z góry i z boku", sceneLead: "Scena pokazuje centralną drogę, dwie strony szklarni, rzędy roślin oraz ruch podczas pracy.", moving: "Ruch włączony", paused: "Ruch zatrzymany", pause: "Zatrzymaj ruch", play: "Włącz ruch", middleRoad: "DROGA ŚRODKOWA", leftSide: "LEWA STRONA", rightSide: "PRAWA STRONA", upperCart: "GÓRNY WÓZEK", plants: "Rzędy pomidorów", passages: "Przejścia i droga", people: "Pracownicy", carts: "Wózki", rememberEyebrow: "ZAPAMIĘTAJ", stepsTitle: "Trzy rzeczy, które trzeba rozumieć", step1Title: "Cała szklarnia", step1Text: "Stoisz plecami do pierwszych naw. Droga pośrodku dzieli lewą i prawą stronę.", step2Title: "Jedna nawa", step2Text: "W jednej nawie widzisz 5 przejść. W każdym przejściu są dwa rzędy: lewy i prawy.", step3Title: "Praca i zbiór", step3Text: "Człowiek idzie wyznaczonym przejściem, pracuje przy swoim rzędzie i odkłada zebrane pomidory.", factPassages: "przejść w nawie", factRows: "rzędów w nawie", factNaves: "naw zależnie od szklarni", factSides: "strony drogi", footerText: "Osobny projekt wizualizacji szklarni. Instrukcje pracy pozostają w systemie lokalizacji.", fallback: "Wizualizacja wymaga włączonej obsługi grafiki w przeglądarce." },
    en: {
      brandSub: "Greenhouse 3D", chooseLanguage: "Choose a language", eyebrow: "SEPARATE VISUALIZATION PROJECT", title: "Understand the greenhouse", heroLead: "See the roads, naves, passages, tomato rows and people at work from above.", overview: "Whole greenhouse", nave: "One nave", work: "Work and harvest", liveEyebrow: "INTERACTIVE VIEW", sceneTitle: "Greenhouse from above and the side", sceneLead: "The scene shows the middle road, both sides of the greenhouse, plant rows and movement during work.", moving: "Movement on", paused: "Movement paused", pause: "Pause movement", play: "Start movement", middleRoad: "MIDDLE ROAD", leftSide: "LEFT SIDE", rightSide: "RIGHT SIDE", upperCart: "OVERHEAD CART", plants: "Tomato rows", passages: "Passages and road", people: "Workers", carts: "Carts", rememberEyebrow: "REMEMBER", stepsTitle: "Three things to understand", step1Title: "Whole greenhouse", step1Text: "Stand with your back to the first naves. The middle road divides the left and right sides.", step2Title: "One nave", step2Text: "One nave has 5 passages. Each passage has two rows: left and right.", step3Title: "Work and harvest", step3Text: "A worker follows the assigned passage, works at the assigned row and places picked tomatoes in the cart.", factPassages: "passages in a nave", factRows: "rows in a nave", factNaves: "naves depending on greenhouse", factSides: "sides of the road", footerText: "Separate greenhouse visualization project. Work instructions remain in the location system.", fallback: "The visualization needs browser graphics support." },
    ua: {
      brandSub: "Теплиця 3D", chooseLanguage: "Оберіть мову", eyebrow: "ОКРЕМИЙ ПРОЄКТ ВІЗУАЛІЗАЦІЇ", title: "Зрозумійте теплицю", heroLead: "Зверху видно дороги, нави, проходи, ряди помідорів і роботу людей.", overview: "Вся теплиця", nave: "Одна нава", work: "Робота і збір", liveEyebrow: "ІНТЕРАКТИВНИЙ ВИГЛЯД", sceneTitle: "Теплиця зверху і збоку", sceneLead: "Сцена показує центральну дорогу, обидві сторони теплиці, ряди рослин і рух під час роботи.", moving: "Рух увімкнено", paused: "Рух зупинено", pause: "Зупинити рух", play: "Увімкнути рух", middleRoad: "ЦЕНТРАЛЬНА ДОРОГА", leftSide: "ЛІВА СТОРОНА", rightSide: "ПРАВА СТОРОНА", upperCart: "ВЕРХНІЙ ВІЗОК", plants: "Ряди помідорів", passages: "Проходи і дорога", people: "Працівники", carts: "Візки", rememberEyebrow: "ЗАПАМ’ЯТАЙТЕ", stepsTitle: "Три речі, які треба зрозуміти", step1Title: "Вся теплиця", step1Text: "Станьте спиною до перших нав. Центральна дорога ділить ліву і праву сторони.", step2Title: "Одна нава", step2Text: "В одній наві є 5 проходів. У кожному проході два ряди: лівий і правий.", step3Title: "Робота і збір", step3Text: "Працівник іде призначеним проходом, працює біля свого ряду та складає зібрані помідори у візок.", factPassages: "проходів у наві", factRows: "рядів у наві", factNaves: "нав залежно від теплиці", factSides: "сторони дороги", footerText: "Окремий проєкт візуалізації теплиці. Інструкції залишаються в системі локації.", fallback: "Для візуалізації потрібна підтримка графіки у браузері." },
    ru: {
      brandSub: "Теплица 3D", chooseLanguage: "Выберите язык", eyebrow: "ОТДЕЛЬНЫЙ ПРОЕКТ ВИЗУАЛИЗАЦИИ", title: "Поймите теплицу", heroLead: "Сверху видно дороги, пролёты, проходы, ряды помидоров и работу людей.", overview: "Вся теплица", nave: "Один пролёт", work: "Работа и сбор", liveEyebrow: "ИНТЕРАКТИВНЫЙ ВИД", sceneTitle: "Теплица сверху и сбоку", sceneLead: "Сцена показывает центральную дорогу, обе стороны теплицы, ряды растений и движение во время работы.", moving: "Движение включено", paused: "Движение остановлено", pause: "Остановить движение", play: "Включить движение", middleRoad: "ЦЕНТРАЛЬНАЯ ДОРОГА", leftSide: "ЛЕВАЯ СТОРОНА", rightSide: "ПРАВАЯ СТОРОНА", upperCart: "ВЕРХНЯЯ ТЕЛЕЖКА", plants: "Ряды помидоров", passages: "Проходы и дорога", people: "Работники", carts: "Тележки", rememberEyebrow: "ЗАПОМНИТЕ", stepsTitle: "Три вещи, которые нужно понять", step1Title: "Вся теплица", step1Text: "Встаньте спиной к первым пролётам. Центральная дорога делит левую и правую стороны.", step2Title: "Один пролёт", step2Text: "В одном пролёте 5 проходов. В каждом проходе два ряда: левый и правый.", step3Title: "Работа и сбор", step3Text: "Работник идёт по назначенному проходу, работает у своего ряда и складывает собранные помидоры в тележку.", factPassages: "проходов в пролёте", factRows: "рядов в пролёте", factNaves: "пролётов зависит от теплицы", factSides: "стороны дороги", footerText: "Отдельный проект визуализации теплицы. Инструкции остаются в системе локации.", fallback: "Для визуализации нужна поддержка графики в браузере." },
    az: {
      brandSub: "İstixana 3D", chooseLanguage: "Dil seçin", eyebrow: "AYRI VİZUALİZASİYA LAYİHƏSİ", title: "İstixananı anlayın", heroLead: "Yuxarıdan yolları, navaları, keçidləri, pomidor sıralarını və insanların işini görün.", overview: "Bütün istixana", nave: "Bir nava", work: "İş və yığım", liveEyebrow: "İNTERAKTİV GÖRÜNÜŞ", sceneTitle: "İstixana yuxarıdan və yandan", sceneLead: "Səhnə mərkəzi yolu, istixananın iki tərəfini, bitki sıralarını və iş zamanı hərəkəti göstərir.", moving: "Hərəkət açıqdır", paused: "Hərəkət dayandırılıb", pause: "Hərəkəti dayandır", play: "Hərəkəti başlat", middleRoad: "MƏRKƏZİ YOL", leftSide: "SOL TƏRƏF", rightSide: "SAĞ TƏRƏF", upperCart: "YUXARI ARABA", plants: "Pomidor sıraları", passages: "Keçidlər və yol", people: "İşçilər", carts: "Arabalar", rememberEyebrow: "YADDA SAXLAYIN", stepsTitle: "Anlamaq üçün üç əsas şey", step1Title: "Bütün istixana", step1Text: "İlk navalara arxanızla dayanın. Mərkəzi yol sol və sağ tərəfi ayırır.", step2Title: "Bir nava", step2Text: "Bir navada 5 keçid var. Hər keçiddə iki sıra var: sol və sağ.", step3Title: "İş və yığım", step3Text: "İşçi təyin olunmuş keçidlə gedir, öz sırasında işləyir və yığılmış pomidorları arabaya qoyur.", factPassages: "navada keçid", factRows: "navada sıra", factNaves: "istixanaya görə nava", factSides: "yolun tərəfi", footerText: "Ayrı istixana vizualizasiya layihəsi. İş təlimatları lokasiya sistemində qalır.", fallback: "Vizualizasiya üçün brauzer qrafik dəstəyi lazımdır." },
    es: {
      brandSub: "Invernadero 3D", chooseLanguage: "Elige idioma", eyebrow: "PROYECTO INDEPENDIENTE DE VISUALIZACIÓN", title: "Entiende el invernadero", heroLead: "Mira desde arriba los caminos, naves, pasillos, filas de tomates y el trabajo de las personas.", overview: "Invernadero completo", nave: "Una nave", work: "Trabajo y cosecha", liveEyebrow: "VISTA INTERACTIVA", sceneTitle: "Invernadero desde arriba y de lado", sceneLead: "La escena muestra el camino central, los dos lados, las filas de plantas y el movimiento durante el trabajo.", moving: "Movimiento activo", paused: "Movimiento detenido", pause: "Detener movimiento", play: "Iniciar movimiento", middleRoad: "CAMINO CENTRAL", leftSide: "LADO IZQUIERDO", rightSide: "LADO DERECHO", upperCart: "CARRO SUPERIOR", plants: "Filas de tomates", passages: "Pasillos y camino", people: "Trabajadores", carts: "Carros", rememberEyebrow: "RECUERDA", stepsTitle: "Tres cosas que debes entender", step1Title: "Invernadero completo", step1Text: "Ponte de espaldas a las primeras naves. El camino central divide el lado izquierdo y el derecho.", step2Title: "Una nave", step2Text: "Una nave tiene 5 pasillos. Cada pasillo tiene dos filas: izquierda y derecha.", step3Title: "Trabajo y cosecha", step3Text: "La persona sigue el pasillo indicado, trabaja en su fila y coloca los tomates recogidos en el carro.", factPassages: "pasillos por nave", factRows: "filas por nave", factNaves: "naves según el invernadero", factSides: "lados del camino", footerText: "Proyecto independiente de visualización del invernadero. Las instrucciones siguen en el sistema de la ubicación.", fallback: "La visualización necesita soporte gráfico del navegador." },
    fil: {
      brandSub: "3D na bahay-taniman", chooseLanguage: "Pumili ng wika", eyebrow: "HIWALAY NA PROYEKTO NG VISUALIZATION", title: "Unawain ang bahay-taniman", heroLead: "Makikita mula sa itaas ang mga daan, nave, daanan, hanay ng kamatis at galaw ng mga tao.", overview: "Buong bahay-taniman", nave: "Isang nave", work: "Trabaho at pag-aani", liveEyebrow: "INTERAKTIBONG TANAW", sceneTitle: "Bahay-taniman mula sa itaas at gilid", sceneLead: "Ipinapakita ng eksena ang gitnang daan, dalawang panig, mga hanay ng halaman at kilos habang nagtatrabaho.", moving: "May galaw", paused: "Nakahinto ang galaw", pause: "Itigil ang galaw", play: "Simulan ang galaw", middleRoad: "GITNANG DAAN", leftSide: "KALIWANG BAHAGI", rightSide: "KANANG BAHAGI", upperCart: "PANG-ITAAS NA KARITON", plants: "Mga hanay ng kamatis", passages: "Mga daanan at daan", people: "Mga manggagawa", carts: "Mga kariton", rememberEyebrow: "TANDAAN", stepsTitle: "Tatlong bagay na dapat maintindihan", step1Title: "Buong bahay-taniman", step1Text: "Tumayo nang nakatalikod sa mga unang nave. Hinahati ng gitnang daan ang kaliwa at kanan.", step2Title: "Isang nave", step2Text: "May 5 daanan sa isang nave. Sa bawat daanan ay dalawang hanay: kaliwa at kanan.", step3Title: "Trabaho at pag-aani", step3Text: "Dadaan ang manggagawa sa itinakdang daanan, magtatrabaho sa sariling hanay at ilalagay ang napitas na kamatis sa kariton.", factPassages: "daan sa isang nave", factRows: "hanay sa isang nave", factNaves: "nave depende sa bahay-taniman", factSides: "panig ng daan", footerText: "Hiwalay na proyekto ng visualization ng bahay-taniman. Nasa location system ang mga tagubilin sa trabaho.", fallback: "Kailangan ng browser ang graphics support para sa visualization." },
    id: {
      brandSub: "Rumah kaca 3D", chooseLanguage: "Pilih bahasa", eyebrow: "PROYEK VISUALISASI TERPISAH", title: "Pahami rumah kaca", heroLead: "Lihat dari atas jalan, nave, lorong, baris tomat, dan orang yang bekerja.", overview: "Seluruh rumah kaca", nave: "Satu nave", work: "Kerja dan panen", liveEyebrow: "TAMPILAN INTERAKTIF", sceneTitle: "Rumah kaca dari atas dan samping", sceneLead: "Adegan menunjukkan jalan tengah, dua sisi rumah kaca, baris tanaman, dan gerakan saat bekerja.", moving: "Gerakan aktif", paused: "Gerakan dihentikan", pause: "Hentikan gerakan", play: "Mulai gerakan", middleRoad: "JALAN TENGAH", leftSide: "SISI KIRI", rightSide: "SISI KANAN", upperCart: "TROLI ATAS", plants: "Baris tomat", passages: "Lorong dan jalan", people: "Pekerja", carts: "Troli", rememberEyebrow: "INGAT", stepsTitle: "Tiga hal yang harus dipahami", step1Title: "Seluruh rumah kaca", step1Text: "Berdirilah membelakangi nave pertama. Jalan tengah membagi sisi kiri dan kanan.", step2Title: "Satu nave", step2Text: "Satu nave memiliki 5 lorong. Setiap lorong memiliki dua baris: kiri dan kanan.", step3Title: "Kerja dan panen", step3Text: "Pekerja mengikuti lorong yang ditentukan, bekerja di barisnya dan menaruh tomat yang dipetik ke troli.", factPassages: "lorong dalam nave", factRows: "baris dalam nave", factNaves: "jumlah nave tergantung rumah kaca", factSides: "sisi jalan", footerText: "Proyek visualisasi rumah kaca terpisah. Instruksi kerja tetap di sistem lokasi.", fallback: "Visualisasi membutuhkan dukungan grafik browser." },
    ne: {
      brandSub: "ग्रीनहाउस 3D", chooseLanguage: "भाषा छान्नुहोस्", eyebrow: "अलग दृश्य परियोजना", title: "ग्रीनहाउस बुझ्नुहोस्", heroLead: "माथिबाट बाटो, नावा, पैदल बाटो, गोलभेडाका लाइन र मानिसको काम हेर्नुहोस्।", overview: "पूरै ग्रीनहाउस", nave: "एउटा नावा", work: "काम र टिपाइ", liveEyebrow: "अन्तरक्रियात्मक दृश्य", sceneTitle: "माथि र छेउबाट ग्रीनहाउस", sceneLead: "दृश्यले बीचको बाटो, दुवै भाग, बिरुवाका लाइन र कामको समयमा हुने चाल देखाउँछ।", moving: "चालु", paused: "रोकिएको", pause: "चलायमान रोक्नुहोस्", play: "चलायमान सुरु गर्नुहोस्", middleRoad: "बीचको बाटो", leftSide: "बायाँ भाग", rightSide: "दायाँ भाग", upperCart: "माथिल्लो गाडी", plants: "गोलभेडाका लाइन", passages: "बाटा र सडक", people: "कामदार", carts: "गाडीहरू", rememberEyebrow: "याद गर्नुहोस्", stepsTitle: "बुझ्नुपर्ने तीन कुरा", step1Title: "पूरै ग्रीनहाउस", step1Text: "पहिलो नावा पछाडि फर्केर उभिनुहोस्। बीचको बाटोले बायाँ र दायाँ भाग छुट्याउँछ।", step2Title: "एउटा नावा", step2Text: "एउटा नावामा ५ वटा बाटा हुन्छन्। प्रत्येक बाटामा दुई लाइन हुन्छन्: बायाँ र दायाँ।", step3Title: "काम र टिपाइ", step3Text: "कामदार तोकिएको बाटोबाट जान्छ, आफ्नो लाइनमा काम गर्छ र टिपेका गोलभेडा गाडीमा राख्छ।", factPassages: "नावामा बाटा", factRows: "नावामा लाइन", factNaves: "ग्रीनहाउसअनुसार नावा", factSides: "बाटाका भाग", footerText: "ग्रीनहाउसको अलग दृश्य परियोजना। कामका निर्देशनहरू स्थान प्रणालीमै छन्।", fallback: "दृश्यका लागि ब्राउजरमा ग्राफिक्स समर्थन चाहिन्छ।" }
  };

  const educationalTranslations = {
    pl: {
      demoEyebrow: "TECHNICZNE DEMO EDUKACYJNE", demoTitle: "Jak działa szklarnia?", demoLead: "Obejrzyj przykładową szklarnię i zobacz, co oznaczają nawa, rzędy, kapilary i wózki.", fivePassages: "5 przejść / 10 rzędów",
      technicalEyebrow: "CO TU WIDAĆ", technicalTitle: "Elementy przykładowej szklarni", capillaries: "Kapilary", capillaryInfo: "Cienkie przewody doprowadzające wodę i pożywkę do roślin.", growMat: "Pampersy / maty uprawowe", matInfo: "Podłoże, w którym rosną rośliny i do którego trafia pożywka.", harvestCart: "Wózek do zbioru", tomatoes: "Pomidory", growthInfo: "Roślina rośnie w rzędzie; dojrzałe owoce trafiają do wózka do zbioru."
    },
    en: {
      demoEyebrow: "TECHNICAL EDUCATIONAL DEMO", demoTitle: "How does a greenhouse work?", demoLead: "Explore one example greenhouse and see what a nave, rows, capillary tubes and carts mean.", fivePassages: "5 passages / 10 rows",
      technicalEyebrow: "WHAT YOU SEE", technicalTitle: "Example greenhouse elements", capillaries: "Capillary tubes", capillaryInfo: "Thin tubes that deliver water and nutrients to the plants.", growMat: "Growing mats", matInfo: "The growing medium where plants grow and receive the nutrient solution.", harvestCart: "Harvest cart", tomatoes: "Tomatoes", growthInfo: "A plant grows in a row; ripe fruit goes to the harvest cart."
    },
    ua: {
      demoEyebrow: "ТЕХНІЧНЕ НАВЧАЛЬНЕ ДЕМО", demoTitle: "Як працює теплиця?", demoLead: "Подивіться на приклад теплиці та зрозумійте, що таке нава, ряди, капіляри й візки.", fivePassages: "5 проходів / 10 рядів",
      technicalEyebrow: "ЩО ТУТ ВИДНО", technicalTitle: "Елементи прикладу теплиці", capillaries: "Капіляри", capillaryInfo: "Тонкі трубки, які подають воду та поживний розчин до рослин.", growMat: "Мати для вирощування", matInfo: "Субстрат, у якому ростуть рослини та до якого надходить поживний розчин.", harvestCart: "Візок для збору", tomatoes: "Помідори", growthInfo: "Рослина росте в ряду; стиглі плоди складають у візок для збору."
    },
    ru: {
      demoEyebrow: "ТЕХНИЧЕСКОЕ УЧЕБНОЕ ДЕМО", demoTitle: "Как работает теплица?", demoLead: "Посмотрите на пример теплицы и поймите, что такое пролёт, ряды, капилляры и тележки.", fivePassages: "5 проходов / 10 рядов",
      technicalEyebrow: "ЧТО ЗДЕСЬ ВИДНО", technicalTitle: "Элементы примерной теплицы", capillaries: "Капилляры", capillaryInfo: "Тонкие трубки, которые подают воду и питательный раствор к растениям.", growMat: "Маты для выращивания", matInfo: "Субстрат, в котором растут растения и куда поступает питательный раствор.", harvestCart: "Тележка для сбора", tomatoes: "Помидоры", growthInfo: "Растение растёт в ряду; спелые плоды складывают в тележку для сбора."
    },
    az: {
      demoEyebrow: "TEXNİKİ TƏDRİS DEMOSU", demoTitle: "İstixana necə işləyir?", demoLead: "Nümunə istixanaya baxın və nava, cərgələr, kapilyarlar və arabaların nə olduğunu görün.", fivePassages: "5 keçid / 10 sıra",
      technicalEyebrow: "BURADA NƏ GÖRÜNÜR", technicalTitle: "Nümunə istixananın elementləri", capillaries: "Kapilyarlar", capillaryInfo: "Su və qida məhlulunu bitkilərə aparan nazik borular.", growMat: "Becərmə matları", matInfo: "Bitkilərin böyüdüyü və qida məhlulunu aldığı substrat.", harvestCart: "Yığım arabası", tomatoes: "Pomidorlar", growthInfo: "Bitki cərgədə böyüyür; yetişmiş meyvələr yığım arabasına qoyulur."
    },
    es: {
      demoEyebrow: "DEMO TÉCNICA EDUCATIVA", demoTitle: "¿Cómo funciona un invernadero?", demoLead: "Mira un invernadero de ejemplo y descubre qué son las naves, las filas, los capilares y los carros.", fivePassages: "5 pasillos / 10 filas",
      technicalEyebrow: "QUÉ VES AQUÍ", technicalTitle: "Elementos de un invernadero de ejemplo", capillaries: "Tubos capilares", capillaryInfo: "Tubos finos que llevan agua y nutrientes a las plantas.", growMat: "Sustrato de cultivo", matInfo: "La base donde crecen las plantas y reciben la solución nutritiva.", harvestCart: "Carro de cosecha", tomatoes: "Tomates", growthInfo: "La planta crece en una fila; los frutos maduros van al carro de cosecha."
    },
    fil: {
      demoEyebrow: "TECHNICAL NA DEMO SA PAG-AARAL", demoTitle: "Paano gumagana ang greenhouse?", demoLead: "Tingnan ang isang halimbawa ng greenhouse at unawain ang nave, mga hanay, capillary tube at mga kariton.", fivePassages: "5 daanan / 10 hanay",
      technicalEyebrow: "ANO ANG MAKIKITA", technicalTitle: "Mga bahagi ng halimbawa ng greenhouse", capillaries: "Mga capillary tube", capillaryInfo: "Manipis na tubo na naghahatid ng tubig at sustansiya sa mga halaman.", growMat: "Mga banig na taniman", matInfo: "Lalagyan kung saan tumutubo ang halaman at tumatanggap ng sustansiyang solusyon.", harvestCart: "Kariton sa pag-aani", tomatoes: "Mga kamatis", growthInfo: "Lumalaki ang halaman sa hanay; inilalagay ang hinog na bunga sa kariton sa pag-aani."
    },
    id: {
      demoEyebrow: "DEMO TEKNIS PEMBELAJARAN", demoTitle: "Bagaimana rumah kaca bekerja?", demoLead: "Lihat satu contoh rumah kaca dan pahami arti nave, baris, pipa kapiler, dan troli.", fivePassages: "5 lorong / 10 baris",
      technicalEyebrow: "YANG TERLIHAT DI SINI", technicalTitle: "Elemen rumah kaca contoh", capillaries: "Pipa kapiler", capillaryInfo: "Pipa tipis yang mengalirkan air dan nutrisi ke tanaman.", growMat: "Media tanam", matInfo: "Media tempat tanaman tumbuh dan menerima larutan nutrisi.", harvestCart: "Troli panen", tomatoes: "Tomat", growthInfo: "Tanaman tumbuh dalam baris; buah yang matang dimasukkan ke troli panen."
    },
    ne: {
      demoEyebrow: "प्राविधिक सिकाइ डेमो", demoTitle: "ग्रीनहाउस कसरी काम गर्छ?", demoLead: "एउटा उदाहरण ग्रीनहाउस हेर्नुहोस् र नावा, लाइन, केपिलरी पाइप र गाडी बुझ्नुहोस्।", fivePassages: "५ बाटा / १० लाइन",
      technicalEyebrow: "यहाँ के देखिन्छ", technicalTitle: "उदाहरण ग्रीनहाउसका भागहरू", capillaries: "केपिलरी पाइप", capillaryInfo: "बिरुवामा पानी र पोषक घोल पुर्‍याउने पातला पाइपहरू।", growMat: "उत्पादन म्याट", matInfo: "बिरुवा उम्रने र पोषक घोल पाउने माध्यम।", harvestCart: "बाली टिप्ने गाडी", tomatoes: "गोलभेडा", growthInfo: "बिरुवा लाइनमा बढ्छ; पाकेका फल बाली टिप्ने गाडीमा राखिन्छ।"
    }
  };
  Object.entries(educationalTranslations).forEach(([language, values]) => Object.assign(translations[language], values));

  const state = { lang: new URLSearchParams(location.search).get("lang") || localStorage.getItem("citronex-3d-lang") || "pl", moving: true, cameraMode: "overview" };
  if (!LANGS.includes(state.lang)) state.lang = "en";
  const $ = (selector) => document.querySelector(selector);
  const t = (key) => (translations[state.lang] && translations[state.lang][key]) || translations.en[key] || key;

  function applyLanguage() {
    document.documentElement.lang = state.lang === "ua" ? "uk" : state.lang;
    document.title = `CITRONEX | ${t("brandSub")}`;
    document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
    $("#languageSelect").value = state.lang;
    $("#languageSelect").setAttribute("aria-label", t("chooseLanguage"));
    $("#greenhouseCanvas").setAttribute("aria-label", t("sceneTitle"));
    updateMotionText();
  }

  function updateMotionText() {
    $("#statusText").textContent = state.moving ? t("moving") : t("paused");
    const label = state.moving ? t("pause") : t("play");
    $("#motionButton span:last-child").textContent = label;
  }

  $("#languageSelect").addEventListener("change", (event) => {
    state.lang = event.target.value;
    localStorage.setItem("citronex-3d-lang", state.lang);
    applyLanguage();
  });

  const sceneCanvas = $("#greenhouseCanvas");
  const fallback = $("#sceneFallback");
  let renderer;
  let camera;
  let targetCamera;
  let scene;
  let animated = [];

  function box(width, height, depth, color, x, y, z, materialOptions = {}) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), new THREE.MeshStandardMaterial({ color, ...materialOptions }));
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
  }

  function plant(x, z, side) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const support = new THREE.Mesh(new THREE.CylinderGeometry(.018, .018, 2.45, 5), new THREE.MeshStandardMaterial({ color: 0x8a9b98, roughness: .8 }));
    support.position.y = 1.55;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(.035, .05, 1.35, 6), new THREE.MeshStandardMaterial({ color: 0x2f7845 }));
    stem.position.y = .9;
    group.add(support, stem);
    [-.12, .12].forEach((offset, index) => {
      const tomato = new THREE.Mesh(new THREE.SphereGeometry(.12, 8, 8), new THREE.MeshStandardMaterial({ color: index ? 0xd94d39 : 0xe96a3c }));
      tomato.position.set(offset, .95 + index * .14, 0);
      group.add(tomato);
    });
    const leaves = new THREE.Mesh(new THREE.BoxGeometry(.48, .05, .08), new THREE.MeshStandardMaterial({ color: 0x4e9b57 }));
    leaves.position.set(side * .1, .65, 0);
    leaves.rotation.z = side * .25;
    group.add(leaves);
    scene.add(group);
  }

  function person(x, z, color, phase) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(.13, .16, .55, 7), new THREE.MeshStandardMaterial({ color }));
    body.position.y = .5;
    const head = new THREE.Mesh(new THREE.SphereGeometry(.15, 8, 8), new THREE.MeshStandardMaterial({ color: 0xf0b48f }));
    head.position.y = .9;
    group.add(body, head);
    scene.add(group);
    animated.push({ object: group, type: "person", baseX: x, baseZ: z, phase });
  }

  function overheadCart(x, z, phase) {
    const group = new THREE.Group();
    group.position.set(x, 4.7, z);
    const body = new THREE.Mesh(new THREE.BoxGeometry(.72, .28, 1.1), new THREE.MeshStandardMaterial({ color: 0x4b83c4, metalness: .25, roughness: .4 }));
    const load = new THREE.Mesh(new THREE.BoxGeometry(.48, .18, .62), new THREE.MeshStandardMaterial({ color: 0xf0b936 }));
    load.position.y = .22;
    group.add(body, load);
    scene.add(group);
    animated.push({ object: group, type: "cart", baseX: x, baseZ: z, phase });
  }

  function harvestCart(x, z, phase) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const body = new THREE.Mesh(new THREE.BoxGeometry(.82, .42, 1.2), new THREE.MeshStandardMaterial({ color: 0x315f9f, metalness: .15, roughness: .5 }));
    body.position.y = .42;
    const handle = new THREE.Mesh(new THREE.BoxGeometry(.08, .62, .08), new THREE.MeshStandardMaterial({ color: 0x263e5a, metalness: .2 }));
    handle.position.set(0, .86, -.48);
    const load = new THREE.Mesh(new THREE.BoxGeometry(.54, .22, .74), new THREE.MeshStandardMaterial({ color: 0xe8ad2e, roughness: .7 }));
    load.position.y = .76;
    group.add(body, handle, load);
    [-.3, .3].forEach((wheelX) => [-.38, .38].forEach((wheelZ) => {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, .07, 10), new THREE.MeshStandardMaterial({ color: 0x27333d }));
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wheelX, .14, wheelZ);
      group.add(wheel);
    }));
    scene.add(group);
    animated.push({ object: group, type: "harvest", baseX: x, baseZ: z, phase });
  }

  function addGlasshouse() {
    const glass = { color: 0x8bd0c3, transparent: true, opacity: .18, roughness: .2, metalness: .05, side: THREE.DoubleSide };
    box(18, .12, 32, 0xd9e7dd, 0, .05, 0);
    box(2.5, .05, 30, 0xd6bd83, 0, .13, 0);
    box(.08, 5.8, 32, 0x78b9aa, -9.2, 2.9, 0, glass);
    box(.08, 5.8, 32, 0x78b9aa, 9.2, 2.9, 0, glass);
    box(18, 5.8, .08, 0x78b9aa, 0, 2.9, -16, glass);
    box(18, 5.8, .08, 0x78b9aa, 0, 2.9, 16, glass);
    box(18, .08, 32, 0x8dcfc2, 0, 6.1, 0, glass);
    [-8.9, -5.5, -2.1, 2.1, 5.5, 8.9].forEach((x) => box(.08, 6, .08, 0x609b8b, x, 3, 0));
    [-12, -4, 4, 12].forEach((z) => { box(18, .08, .08, 0x609b8b, 0, 6.08, z); box(.08, 5.9, .08, 0x609b8b, 0, 3, z); });
    const rows = [-7.8, -6.2, -4.6, -3.0, 3.0, 4.6, 6.2, 7.8];
    rows.forEach((x) => {
      box(1.16, .10, 29, 0xb98258, x, .22, 0);
      box(1.1, .22, 29, 0x64a965, x, .38, 0);
      box(.045, .045, 29, 0x4d9bd0, x, .54, 0);
      for (let z = -13; z <= 13; z += 2.15) plant(x, z, x < 0 ? -1 : 1);
    });
    [-8, -6.4, -4.8, -3.2, 3.2, 4.8, 6.4, 8].forEach((x) => box(.08, .12, 29, 0xf1dfaf, x, .5, 0));
    [-6.8, -4.9, -3.0, 3.0, 4.9, 6.8].forEach((x) => overheadCart(x, -10 + (x + 7) * .7, x));
    person(-1.0, -9, 0xe36b54, 0); person(1.0, -3, 0x4d86c6, 1.4); person(-1.0, 6, 0xe5a631, 2.8); person(1.0, 11, 0x8d67bf, 4.1);
    harvestCart(-1.35, 11, .8);
    box(.5, .5, 1.1, 0xd74d37, -1.0, .45, 13.2); box(.5, .5, 1.1, 0xe9ad28, 1.0, .45, 13.2);
  }

  function lookAt(position, target) {
    camera.position.lerp(new THREE.Vector3(...position), .085);
    targetCamera.lerp(new THREE.Vector3(...target), .085);
    camera.lookAt(targetCamera);
  }

  function configureCamera(mode) {
    state.cameraMode = mode;
    document.querySelectorAll("[data-camera]").forEach((button) => button.classList.toggle("is-active", button.dataset.camera === mode));
  }

  function initScene() {
    if (!THREE) { fallback.hidden = false; sceneCanvas.hidden = true; return; }
    try {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xdff4ea);
      camera = new THREE.PerspectiveCamera(38, 1, .1, 200);
      targetCamera = new THREE.Vector3(0, 1, 0);
      renderer = new THREE.WebGLRenderer({ canvas: sceneCanvas, antialias: true, alpha: false, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.shadowMap.enabled = false;
      scene.add(new THREE.HemisphereLight(0xffffff, 0x6e9677, 2.1));
      const sun = new THREE.DirectionalLight(0xffffff, 2.2); sun.position.set(12, 22, 10); scene.add(sun);
      addGlasshouse();
      resizeScene();
      requestAnimationFrame(animate);
    } catch (error) {
      console.warn("3D fallback", error);
      fallback.hidden = false; sceneCanvas.hidden = true;
    }
  }

  function resizeScene() {
    if (!renderer || !camera) return;
    const width = sceneCanvas.clientWidth || 800;
    const height = sceneCanvas.clientHeight || 460;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function animate(time) {
    requestAnimationFrame(animate);
    const mode = state.cameraMode;
    const position = mode === "nave" ? [18, 9, 20] : mode === "work" ? [9, 4.8, 12] : [25, 23, 31];
    const target = mode === "work" ? [0, 1, 5] : [0, 1, 0];
    lookAt(position, target);
    if (state.moving) animated.forEach((item) => {
      if (item.type === "person") { item.object.position.z = item.baseZ + Math.sin(time * .00045 + item.phase) * 5.5; item.object.rotation.y = Math.sin(time * .00045 + item.phase) > 0 ? 0 : Math.PI; }
      if (item.type === "cart") { item.object.position.z = ((item.baseZ + time * .0025 + item.phase * 2) % 28) - 14; }
      if (item.type === "harvest") { item.object.position.z = ((item.baseZ + time * .0012 + item.phase * 2) % 22) - 11; }
    });
    renderer.render(scene, camera);
  }

  document.querySelectorAll("[data-camera]").forEach((button) => button.addEventListener("click", () => configureCamera(button.dataset.camera)));
  $("#motionButton").addEventListener("click", () => { state.moving = !state.moving; updateMotionText(); });
  window.addEventListener("resize", resizeScene, { passive: true });
  applyLanguage();
  initScene();
})();
