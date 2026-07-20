import * as THREE from "./assets/vendor/three.module.min.js";

(() => {
  "use strict";

  const LANGS = ["pl", "en", "ua", "ru", "az", "es", "fil", "id", "ne"];
  const translations = {
    pl: {
      brandSub: "Szklarnia 3D", chooseLanguage: "Wybierz język", eyebrow: "OSOBNY PROJEKT WIZUALIZACJI", title: "Poznaj szklarnię", heroLead: "Zobacz z góry, gdzie są drogi, nawy, przejścia, rzędy pomidorów i praca ludzi.", overview: "Cała szklarnia", nave: "Jedna nawa", work: "Praca i zbiór", liveEyebrow: "WIDOK INTERAKTYWNY", sceneTitle: "Szklarnia z góry i z boku", sceneLead: "Scena pokazuje centralną drogę, dwie strony szklarni, rzędy roślin oraz ruch podczas pracy.", moving: "Ruch włączony", paused: "Ruch zatrzymany", pause: "Zatrzymaj ruch", play: "Włącz ruch", middleRoad: "DROGA ŚRODKOWA", leftSide: "LEWA STRONA", rightSide: "PRAWA STRONA", upperCart: "GÓRNY WÓZEK", plants: "Rzędy pomidorów", passages: "Przejścia i droga", people: "Pracownicy", carts: "Wózki", rememberEyebrow: "ZAPAMIĘTAJ", stepsTitle: "Trzy rzeczy, które trzeba rozumieć", step1Title: "Cała szklarnia", step1Text: "Stoisz plecami do pierwszych naw. Droga pośrodku dzieli lewą i prawą stronę.", step2Title: "Jedna nawa", step2Text: "W jednej nawie widzisz 5 przejść. W każdym przejściu są dwa rzędy: lewy i prawy.", step3Title: "Praca i zbiór", step3Text: "Człowiek idzie wyznaczonym przejściem, pracuje przy swoim rzędzie i odkłada zebrane pomidory.", factPassages: "przejść w nawie", factRows: "rzędów w nawie", factNaves: "naw zależnie od szklarni", factSides: "strony drogi", footerText: "Osobny projekt wizualizacji szklarni. Instrukcje pracy pozostają w systemie lokalizacji.", fallback: "Wizualizacja wymaga włączonej obsługi grafiki w przeglądarce.", tourHint: "Zobacz po kolei, jak działa szklarnia.", overviewDesc: "Układ szklarni z góry.", mainRoadDesc: "Droga pośrodku, strony naprzeciw siebie.", passageDesc: "Dwa rzędy po bokach.", workerDesc: "Praca przy roślinach." },
    en: {
      brandSub: "Greenhouse 3D", chooseLanguage: "Choose a language", eyebrow: "SEPARATE VISUALIZATION PROJECT", title: "Understand the greenhouse", heroLead: "See the roads, naves, passages, tomato rows and people at work from above.", overview: "Whole greenhouse", nave: "One nave", work: "Work and harvest", liveEyebrow: "INTERACTIVE VIEW", sceneTitle: "Greenhouse from above and the side", sceneLead: "The scene shows the middle road, both sides of the greenhouse, plant rows and movement during work.", moving: "Movement on", paused: "Movement paused", pause: "Pause movement", play: "Start movement", middleRoad: "MIDDLE ROAD", leftSide: "LEFT SIDE", rightSide: "RIGHT SIDE", upperCart: "OVERHEAD CART", plants: "Tomato rows", passages: "Passages and road", people: "Workers", carts: "Carts", rememberEyebrow: "REMEMBER", stepsTitle: "Three things to understand", step1Title: "Whole greenhouse", step1Text: "Stand with your back to the first naves. The middle road divides the left and right sides.", step2Title: "One nave", step2Text: "One nave has 5 passages. Each passage has two rows: left and right.", step3Title: "Work and harvest", step3Text: "A worker follows the assigned passage, works at the assigned row and places picked tomatoes in the cart.", factPassages: "passages in a nave", factRows: "rows in a nave", factNaves: "naves depending on greenhouse", factSides: "sides of the road", footerText: "Separate greenhouse visualization project. Work instructions remain in the location system.", fallback: "The visualization needs browser graphics support.", tourHint: "See how the greenhouse works, step by step.", overviewDesc: "Greenhouse layout from above.", mainRoadDesc: "Central road, sides facing each other.", passageDesc: "Two rows on the sides.", workerDesc: "Work beside the plants." },
    ua: {
      brandSub: "Теплиця 3D", chooseLanguage: "Оберіть мову", eyebrow: "ОКРЕМИЙ ПРОЄКТ ВІЗУАЛІЗАЦІЇ", title: "Зрозумійте теплицю", heroLead: "Зверху видно дороги, нави, проходи, ряди помідорів і роботу людей.", overview: "Вся теплиця", nave: "Одна нава", work: "Робота і збір", liveEyebrow: "ІНТЕРАКТИВНИЙ ВИГЛЯД", sceneTitle: "Теплиця зверху і збоку", sceneLead: "Сцена показує центральну дорогу, обидві сторони теплиці, ряди рослин і рух під час роботи.", moving: "Рух увімкнено", paused: "Рух зупинено", pause: "Зупинити рух", play: "Увімкнути рух", middleRoad: "ЦЕНТРАЛЬНА ДОРОГА", leftSide: "ЛІВА СТОРОНА", rightSide: "ПРАВА СТОРОНА", upperCart: "ВЕРХНІЙ ВІЗОК", plants: "Ряди помідорів", passages: "Проходи і дорога", people: "Працівники", carts: "Візки", rememberEyebrow: "ЗАПАМ’ЯТАЙТЕ", stepsTitle: "Три речі, які треба зрозуміти", step1Title: "Вся теплиця", step1Text: "Станьте спиною до перших нав. Центральна дорога ділить ліву і праву сторони.", step2Title: "Одна нава", step2Text: "В одній наві є 5 проходів. У кожному проході два ряди: лівий і правий.", step3Title: "Робота і збір", step3Text: "Працівник іде призначеним проходом, працює біля свого ряду та складає зібрані помідори у візок.", factPassages: "проходів у наві", factRows: "рядів у наві", factNaves: "нав залежно від теплиці", factSides: "сторони дороги", footerText: "Окремий проєкт візуалізації теплиці. Інструкції залишаються в системі локації.", fallback: "Для візуалізації потрібна підтримка графіки у браузері.", tourHint: "Побачте крок за кроком, як працює теплиця.", overviewDesc: "План теплиці зверху.", mainRoadDesc: "Центральна дорога, сторони навпроти.", passageDesc: "Два ряди з боків.", workerDesc: "Робота біля рослин." },
    ru: {
      brandSub: "Теплица 3D", chooseLanguage: "Выберите язык", eyebrow: "ОТДЕЛЬНЫЙ ПРОЕКТ ВИЗУАЛИЗАЦИИ", title: "Поймите теплицу", heroLead: "Сверху видно дороги, пролёты, проходы, ряды помидоров и работу людей.", overview: "Вся теплица", nave: "Один пролёт", work: "Работа и сбор", liveEyebrow: "ИНТЕРАКТИВНЫЙ ВИД", sceneTitle: "Теплица сверху и сбоку", sceneLead: "Сцена показывает центральную дорогу, обе стороны теплицы, ряды растений и движение во время работы.", moving: "Движение включено", paused: "Движение остановлено", pause: "Остановить движение", play: "Включить движение", middleRoad: "ЦЕНТРАЛЬНАЯ ДОРОГА", leftSide: "ЛЕВАЯ СТОРОНА", rightSide: "ПРАВАЯ СТОРОНА", upperCart: "ВЕРХНЯЯ ТЕЛЕЖКА", plants: "Ряды помидоров", passages: "Проходы и дорога", people: "Работники", carts: "Тележки", rememberEyebrow: "ЗАПОМНИТЕ", stepsTitle: "Три вещи, которые нужно понять", step1Title: "Вся теплица", step1Text: "Встаньте спиной к первым пролётам. Центральная дорога делит левую и правую стороны.", step2Title: "Один пролёт", step2Text: "В одном пролёте 5 проходов. В каждом проходе два ряда: левый и правый.", step3Title: "Работа и сбор", step3Text: "Работник идёт по назначенному проходу, работает у своего ряда и складывает собранные помидоры в тележку.", factPassages: "проходов в пролёте", factRows: "рядов в пролёте", factNaves: "пролётов зависит от теплицы", factSides: "стороны дороги", footerText: "Отдельный проект визуализации теплицы. Инструкции остаются в системе локации.", fallback: "Для визуализации нужна поддержка графики в браузере.", tourHint: "Посмотрите по шагам, как работает теплица.", overviewDesc: "План теплицы сверху.", mainRoadDesc: "Центральная дорога, стороны напротив.", passageDesc: "По бокам находятся два ряда.", workerDesc: "Работа возле растений." },
    az: {
      brandSub: "İstixana 3D", chooseLanguage: "Dil seçin", eyebrow: "AYRI VİZUALİZASİYA LAYİHƏSİ", title: "İstixananı anlayın", heroLead: "Yuxarıdan yolları, navaları, keçidləri, pomidor sıralarını və insanların işini görün.", overview: "Bütün istixana", nave: "Bir nava", work: "İş və yığım", liveEyebrow: "İNTERAKTİV GÖRÜNÜŞ", sceneTitle: "İstixana yuxarıdan və yandan", sceneLead: "Səhnə mərkəzi yolu, istixananın iki tərəfini, bitki sıralarını və iş zamanı hərəkəti göstərir.", moving: "Hərəkət açıqdır", paused: "Hərəkət dayandırılıb", pause: "Hərəkəti dayandır", play: "Hərəkəti başlat", middleRoad: "MƏRKƏZİ YOL", leftSide: "SOL TƏRƏF", rightSide: "SAĞ TƏRƏF", upperCart: "YUXARI ARABA", plants: "Pomidor sıraları", passages: "Keçidlər və yol", people: "İşçilər", carts: "Arabalar", rememberEyebrow: "YADDA SAXLAYIN", stepsTitle: "Anlamaq üçün üç əsas şey", step1Title: "Bütün istixana", step1Text: "İlk navalara arxanızla dayanın. Mərkəzi yol sol və sağ tərəfi ayırır.", step2Title: "Bir nava", step2Text: "Bir navada 5 keçid var. Hər keçiddə iki sıra var: sol və sağ.", step3Title: "İş və yığım", step3Text: "İşçi təyin olunmuş keçidlə gedir, öz sırasında işləyir və yığılmış pomidorları arabaya qoyur.", factPassages: "navada keçid", factRows: "navada sıra", factNaves: "istixanaya görə nava", factSides: "yolun tərəfi", footerText: "Ayrı istixana vizualizasiya layihəsi. İş təlimatları lokasiya sistemində qalır.", fallback: "Vizualizasiya üçün brauzer qrafik dəstəyi lazımdır.", tourHint: "İstixananın necə işlədiyini addım-addım görün.", overviewDesc: "İstixananın yuxarıdan planı.", mainRoadDesc: "Ortada yol, tərəflər qarşı-qarşıya.", passageDesc: "Yanlarda iki cərgə.", workerDesc: "Bitkilərin yanında iş." },
    es: {
      brandSub: "Invernadero 3D", chooseLanguage: "Elige idioma", eyebrow: "PROYECTO INDEPENDIENTE DE VISUALIZACIÓN", title: "Entiende el invernadero", heroLead: "Mira desde arriba los caminos, naves, pasillos, filas de tomates y el trabajo de las personas.", overview: "Invernadero completo", nave: "Una nave", work: "Trabajo y cosecha", liveEyebrow: "VISTA INTERACTIVA", sceneTitle: "Invernadero desde arriba y de lado", sceneLead: "La escena muestra el camino central, los dos lados, las filas de plantas y el movimiento durante el trabajo.", moving: "Movimiento activo", paused: "Movimiento detenido", pause: "Detener movimiento", play: "Iniciar movimiento", middleRoad: "CAMINO CENTRAL", leftSide: "LADO IZQUIERDO", rightSide: "LADO DERECHO", upperCart: "CARRO SUPERIOR", plants: "Filas de tomates", passages: "Pasillos y camino", people: "Trabajadores", carts: "Carros", rememberEyebrow: "RECUERDA", stepsTitle: "Tres cosas que debes entender", step1Title: "Invernadero completo", step1Text: "Ponte de espaldas a las primeras naves. El camino central divide el lado izquierdo y el derecho.", step2Title: "Una nave", step2Text: "Una nave tiene 5 pasillos. Cada pasillo tiene dos filas: izquierda y derecha.", step3Title: "Trabajo y cosecha", step3Text: "La persona sigue el pasillo indicado, trabaja en su fila y coloca los tomates recogidos en el carro.", factPassages: "pasillos por nave", factRows: "filas por nave", factNaves: "naves según el invernadero", factSides: "lados del camino", footerText: "Proyecto independiente de visualización del invernadero. Las instrucciones siguen en el sistema de la ubicación.", fallback: "La visualización necesita soporte gráfico del navegador.", tourHint: "Mira paso a paso cómo funciona el invernadero.", overviewDesc: "Plano del invernadero desde arriba.", mainRoadDesc: "Camino central, lados enfrentados.", passageDesc: "Dos filas a los lados.", workerDesc: "Trabajo junto a las plantas." },
    fil: {
      brandSub: "3D na bahay-taniman", chooseLanguage: "Pumili ng wika", eyebrow: "HIWALAY NA PROYEKTO NG VISUALIZATION", title: "Unawain ang bahay-taniman", heroLead: "Makikita mula sa itaas ang mga daan, nave, daanan, hanay ng kamatis at galaw ng mga tao.", overview: "Buong bahay-taniman", nave: "Isang nave", work: "Trabaho at pag-aani", liveEyebrow: "INTERAKTIBONG TANAW", sceneTitle: "Bahay-taniman mula sa itaas at gilid", sceneLead: "Ipinapakita ng eksena ang gitnang daan, dalawang panig, mga hanay ng halaman at kilos habang nagtatrabaho.", moving: "May galaw", paused: "Nakahinto ang galaw", pause: "Itigil ang galaw", play: "Simulan ang galaw", middleRoad: "GITNANG DAAN", leftSide: "KALIWANG BAHAGI", rightSide: "KANANG BAHAGI", upperCart: "PANG-ITAAS NA KARITON", plants: "Mga hanay ng kamatis", passages: "Mga daanan at daan", people: "Mga manggagawa", carts: "Mga kariton", rememberEyebrow: "TANDAAN", stepsTitle: "Tatlong bagay na dapat maintindihan", step1Title: "Buong bahay-taniman", step1Text: "Tumayo nang nakatalikod sa mga unang nave. Hinahati ng gitnang daan ang kaliwa at kanan.", step2Title: "Isang nave", step2Text: "May 5 daanan sa isang nave. Sa bawat daanan ay dalawang hanay: kaliwa at kanan.", step3Title: "Trabaho at pag-aani", step3Text: "Dadaan ang manggagawa sa itinakdang daanan, magtatrabaho sa sariling hanay at ilalagay ang napitas na kamatis sa kariton.", factPassages: "daan sa isang nave", factRows: "hanay sa isang nave", factNaves: "nave depende sa bahay-taniman", factSides: "panig ng daan", footerText: "Hiwalay na proyekto ng visualization ng bahay-taniman. Nasa location system ang mga tagubilin sa trabaho.", fallback: "Kailangan ng browser ang graphics support para sa visualization.", tourHint: "Tingnan kung paano gumagana ang greenhouse, bawat hakbang.", overviewDesc: "Ayos ng greenhouse mula sa itaas.", mainRoadDesc: "Gitnang daan, magkaharap ang mga panig.", passageDesc: "Dalawang hanay sa mga gilid.", workerDesc: "Pagtatrabaho sa tabi ng mga halaman." },
    id: {
      brandSub: "Rumah kaca 3D", chooseLanguage: "Pilih bahasa", eyebrow: "PROYEK VISUALISASI TERPISAH", title: "Pahami rumah kaca", heroLead: "Lihat dari atas jalan, nave, lorong, baris tomat, dan orang yang bekerja.", overview: "Seluruh rumah kaca", nave: "Satu nave", work: "Kerja dan panen", liveEyebrow: "TAMPILAN INTERAKTIF", sceneTitle: "Rumah kaca dari atas dan samping", sceneLead: "Adegan menunjukkan jalan tengah, dua sisi rumah kaca, baris tanaman, dan gerakan saat bekerja.", moving: "Gerakan aktif", paused: "Gerakan dihentikan", pause: "Hentikan gerakan", play: "Mulai gerakan", middleRoad: "JALAN TENGAH", leftSide: "SISI KIRI", rightSide: "SISI KANAN", upperCart: "TROLI ATAS", plants: "Baris tomat", passages: "Lorong dan jalan", people: "Pekerja", carts: "Troli", rememberEyebrow: "INGAT", stepsTitle: "Tiga hal yang harus dipahami", step1Title: "Seluruh rumah kaca", step1Text: "Berdirilah membelakangi nave pertama. Jalan tengah membagi sisi kiri dan kanan.", step2Title: "Satu nave", step2Text: "Satu nave memiliki 5 lorong. Setiap lorong memiliki dua baris: kiri dan kanan.", step3Title: "Kerja dan panen", step3Text: "Pekerja mengikuti lorong yang ditentukan, bekerja di barisnya dan menaruh tomat yang dipetik ke troli.", factPassages: "lorong dalam nave", factRows: "baris dalam nave", factNaves: "jumlah nave tergantung rumah kaca", factSides: "sisi jalan", footerText: "Proyek visualisasi rumah kaca terpisah. Instruksi kerja tetap di sistem lokasi.", fallback: "Visualisasi membutuhkan dukungan grafik browser.", tourHint: "Lihat cara kerja rumah kaca langkah demi langkah.", overviewDesc: "Tata letak rumah kaca dari atas.", mainRoadDesc: "Jalan tengah, kedua sisi saling berhadapan.", passageDesc: "Dua baris di kedua sisi.", workerDesc: "Bekerja di samping tanaman." },
    ne: {
      brandSub: "ग्रीनहाउस 3D", chooseLanguage: "भाषा छान्नुहोस्", eyebrow: "अलग दृश्य परियोजना", title: "ग्रीनहाउस बुझ्नुहोस्", heroLead: "माथिबाट बाटो, नावा, पैदल बाटो, गोलभेडाका लाइन र मानिसको काम हेर्नुहोस्।", overview: "पूरै ग्रीनहाउस", nave: "एउटा नावा", work: "काम र टिपाइ", liveEyebrow: "अन्तरक्रियात्मक दृश्य", sceneTitle: "माथि र छेउबाट ग्रीनहाउस", sceneLead: "दृश्यले बीचको बाटो, दुवै भाग, बिरुवाका लाइन र कामको समयमा हुने चाल देखाउँछ।", moving: "चालु", paused: "रोकिएको", pause: "चलायमान रोक्नुहोस्", play: "चलायमान सुरु गर्नुहोस्", middleRoad: "बीचको बाटो", leftSide: "बायाँ भाग", rightSide: "दायाँ भाग", upperCart: "माथिल्लो गाडी", plants: "गोलभेडाका लाइन", passages: "बाटा र सडक", people: "कामदार", carts: "गाडीहरू", rememberEyebrow: "याद गर्नुहोस्", stepsTitle: "बुझ्नुपर्ने तीन कुरा", step1Title: "पूरै ग्रीनहाउस", step1Text: "पहिलो नावा पछाडि फर्केर उभिनुहोस्। बीचको बाटोले बायाँ र दायाँ भाग छुट्याउँछ।", step2Title: "एउटा नावा", step2Text: "एउटा नावामा ५ वटा बाटा हुन्छन्। प्रत्येक बाटामा दुई लाइन हुन्छन्: बायाँ र दायाँ।", step3Title: "काम र टिपाइ", step3Text: "कामदार तोकिएको बाटोबाट जान्छ, आफ्नो लाइनमा काम गर्छ र टिपेका गोलभेडा गाडीमा राख्छ।", factPassages: "नावामा बाटा", factRows: "नावामा लाइन", factNaves: "ग्रीनहाउसअनुसार नावा", factSides: "बाटाका भाग", footerText: "ग्रीनहाउसको अलग दृश्य परियोजना। कामका निर्देशनहरू स्थान प्रणालीमै छन्।", fallback: "दृश्यका लागि ब्राउजरमा ग्राफिक्स समर्थन चाहिन्छ।", tourHint: "ग्रीनहाउस कसरी चल्छ भनेर क्रमैसँग हेर्नुहोस्।", overviewDesc: "माथिबाट ग्रीनहाउसको योजना।", mainRoadDesc: "बीचको बाटो, आमनेसामनेका भाग।", passageDesc: "दुवै छेउमा दुई लाइन।", workerDesc: "बिरुवाको छेउमा काम।" }
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
  const interactionTranslations = {
    pl: { liftView: "Wózek podnośnikowy", liftCart: "WÓZEK PODNOŚNIKOWY", liftStart: "Podnieś platformę", liftStop: "Opuść platformę", resetView: "Resetuj widok", fullscreen: "Pełny ekran", closeFullscreen: "Zamknij pełny ekran", touchHint: "Przeciągnij, aby obejrzeć. Uszczypnij, aby przybliżyć." },
    en: { liftView: "Lift platform cart", liftCart: "LIFT PLATFORM CART", liftStart: "Raise platform", liftStop: "Lower platform", resetView: "Reset view", fullscreen: "Full screen", closeFullscreen: "Close full screen", touchHint: "Drag to look around. Pinch to zoom." },
    ua: { liftView: "Візок з підйомною платформою", liftCart: "ВІЗОК З ПІДЙОМНОЮ ПЛАТФОРМОЮ", liftStart: "Підняти платформу", liftStop: "Опустити платформу", resetView: "Скинути вигляд", fullscreen: "На весь екран", closeFullscreen: "Закрити повний екран", touchHint: "Проведіть пальцем, щоб оглянути. Зведіть пальці, щоб наблизити." },
    ru: { liftView: "Тележка с подъёмной платформой", liftCart: "ТЕЛЕЖКА С ПОДЪЁМНОЙ ПЛАТФОРМОЙ", liftStart: "Поднять платформу", liftStop: "Опустить платформу", resetView: "Сбросить вид", fullscreen: "Полный экран", closeFullscreen: "Закрыть полный экран", touchHint: "Проведите пальцем для обзора. Сведите пальцы для приближения." },
    az: { liftView: "Qaldırıcı platformalı araba", liftCart: "QALDIRICI PLATFORMALI ARABA", liftStart: "Platformanı qaldır", liftStop: "Platformanı endir", resetView: "Görünüşü sıfırla", fullscreen: "Tam ekran", closeFullscreen: "Tam ekranı bağla", touchHint: "Baxmaq üçün sürüşdürün. Yaxınlaşdırmaq üçün iki barmağınızı sıxın." },
    es: { liftView: "Carro con plataforma elevadora", liftCart: "CARRO CON PLATAFORMA ELEVADORA", liftStart: "Subir plataforma", liftStop: "Bajar plataforma", resetView: "Restablecer vista", fullscreen: "Pantalla completa", closeFullscreen: "Cerrar pantalla completa", touchHint: "Arrastra para mirar. Pellizca para ampliar." },
    fil: { liftView: "Karitong may lift platform", liftCart: "KARITONG MAY LIFT PLATFORM", liftStart: "Itaas ang platform", liftStop: "Ibaba ang platform", resetView: "Ibalik ang tanawin", fullscreen: "Buong screen", closeFullscreen: "Isara ang buong screen", touchHint: "I-drag para tumingin. Kurutin para mag-zoom." },
    id: { liftView: "Troli dengan platform pengangkat", liftCart: "TROLI DENGAN PLATFORM PENGANGKAT", liftStart: "Naikkan platform", liftStop: "Turunkan platform", resetView: "Atur ulang tampilan", fullscreen: "Layar penuh", closeFullscreen: "Tutup layar penuh", touchHint: "Geser untuk melihat. Cubit untuk memperbesar." },
    ne: { liftView: "लिफ्ट प्लेटफर्म भएको गाडी", liftCart: "लिफ्ट प्लेटफर्म भएको गाडी", liftStart: "प्लेटफर्म उठाउनुहोस्", liftStop: "प्लेटफर्म झार्नुहोस्", resetView: "दृश्य रिसेट गर्नुहोस्", fullscreen: "पूरै स्क्रिन", closeFullscreen: "पूरै स्क्रिन बन्द गर्नुहोस्", touchHint: "हेर्न तान्नुहोस्। ठूलो बनाउन दुई औँला चिमोट्नुहोस्।" }
  };
  const explorationTranslations = {
    pl: {
      exploreTitle: "Wybierz element do obejrzenia", naveChoice: "Wybierz stronę nawy", passageChoice: "Wybierz przejście 1–5", rowChoice: "Wybierz rząd w przejściu", leftRow: "Lewy rząd", rightRow: "Prawy rząd", processChoice: "Pokaż proces", showWater: "Pokaż przepływ wody", hideWater: "Ukryj przepływ wody", growthChoice: "Etap wzrostu", layersTitle: "Warstwy widoku", miniMapTitle: "PLAN NAWY", selectionText: "Wybrane: {side}, przejście {passage}, {row}", infoEyebrow: "KRÓTKIE WYJAŚNIENIE", infoClose: "Zamknij", infoMiddleRoad: "Droga środkowa oddziela lewą i prawą stronę szklarni. To główna droga, którą kierujesz się do wybranej nawy.", infoLeftSide: "Lewa strona szklarni. Stojąc plecami do pierwszych naw, wybierasz stronę po lewej stronie drogi środkowej.", infoRightSide: "Prawa strona szklarni. Stojąc plecami do pierwszych naw, wybierasz stronę po prawej stronie drogi środkowej.", infoLiftCart: "Wózek podnośnikowy jeździ po podłodze przejścia jak zwykły wózek. Platforma podnosi pracownika do pracy przy roślinach.", infoHarvestCart: "Wózek do zbioru jedzie po podłodze przejścia. Zebrane pomidory odkłada się do pojemnika na wózku.", infoCapillaries: "Kapilary to cienkie przewody doprowadzające wodę i pożywkę do maty przy każdym rzędzie.", infoGrowMat: "Mata uprawowa, nazywana też pampersem, utrzymuje podłoże i wodę przy korzeniach rośliny.", infoTomatoes: "Roślina rośnie w swoim rzędzie. Owoce przechodzą od kwitnienia do zielonego, a następnie dojrzałego pomidora.", infoPeople: "Pracownicy poruszają się wyznaczonym przejściem i pracują przy przypisanym rzędzie.", infoWater: "Niebieskie punkty pokazują drogę wody: przewód, kapilara, mata i korzenie.", infoLeftRow: "Lewy rząd w wybranym przejściu. Pracujesz przy roślinach po lewej stronie przejścia.", infoRightRow: "Prawy rząd w wybranym przejściu. Pracujesz przy roślinach po prawej stronie przejścia.", infoPassage: "Przejście jest drogą między dwoma rzędami. W każdej nawie jest pięć przejść.", infoGrowth0: "Młoda roślina", infoGrowth1: "Kwitnienie", infoGrowth2: "Zielony owoc", infoGrowth3: "Dojrzały pomidor"
    },
    en: {
      exploreTitle: "Choose what to explore", naveChoice: "Choose the nave side", passageChoice: "Choose passage 1–5", rowChoice: "Choose a row in the passage", leftRow: "Left row", rightRow: "Right row", processChoice: "Show the process", showWater: "Show water flow", hideWater: "Hide water flow", growthChoice: "Growth stage", layersTitle: "View layers", miniMapTitle: "NAVE PLAN", selectionText: "Selected: {side}, passage {passage}, {row}", infoEyebrow: "SHORT EXPLANATION", infoClose: "Close", infoMiddleRoad: "The middle road separates the left and right sides of the greenhouse. Use it to reach the selected nave.", infoLeftSide: "Left side of the greenhouse. With your back to the first naves, this is the side on your left.", infoRightSide: "Right side of the greenhouse. With your back to the first naves, this is the side on your right.", infoLiftCart: "The lift cart drives on the passage floor like a normal cart. Its platform raises the worker to the plants.", infoHarvestCart: "The harvest cart drives on the passage floor. Picked tomatoes go into the container on the cart.", infoCapillaries: "Capillaries are thin tubes that deliver water and nutrients to the growing mat beside each row.", infoGrowMat: "The growing mat holds the growing medium and water close to the plant roots.", infoTomatoes: "The plant grows in its row. The fruit develops from flowering to green and then ripe tomatoes.", infoPeople: "Workers use the assigned passage and work beside the assigned row.", infoWater: "Blue dots show the water path: tube, capillary, mat and roots.", infoLeftRow: "The left row in the selected passage. Work with the plants on the left side of the passage.", infoRightRow: "The right row in the selected passage. Work with the plants on the right side of the passage.", infoPassage: "A passage is the path between two rows. Each nave has five passages.", infoGrowth0: "Young plant", infoGrowth1: "Flowering", infoGrowth2: "Green fruit", infoGrowth3: "Ripe tomato"
    },
    ua: {
      exploreTitle: "Оберіть, що переглянути", naveChoice: "Оберіть сторону нави", passageChoice: "Оберіть прохід 1–5", rowChoice: "Оберіть ряд у проході", leftRow: "Лівий ряд", rightRow: "Правий ряд", processChoice: "Покажіть процес", showWater: "Показати рух води", hideWater: "Сховати рух води", growthChoice: "Етап росту", layersTitle: "Шари огляду", miniMapTitle: "ПЛАН НАВИ", selectionText: "Обрано: {side}, прохід {passage}, {row}", infoEyebrow: "КОРОТКЕ ПОЯСНЕННЯ", infoClose: "Закрити", infoMiddleRoad: "Центральна дорога розділяє ліву і праву сторони теплиці. Нею ви прямуєте до потрібної нави.", infoLeftSide: "Ліва сторона теплиці. Якщо стояти спиною до перших нав, це сторона ліворуч.", infoRightSide: "Права сторона теплиці. Якщо стояти спиною до перших нав, це сторона праворуч.", infoLiftCart: "Візок з підйомною платформою їде підлогою проходу, як звичайний візок. Платформа піднімає працівника до рослин.", infoHarvestCart: "Візок для збору їде підлогою проходу. Зібрані помідори кладуть у контейнер на візку.", infoCapillaries: "Капіляри — це тонкі трубки, які подають воду та поживний розчин до мату біля кожного ряду.", infoGrowMat: "Мат для вирощування утримує субстрат і воду біля коріння рослини.", infoTomatoes: "Рослина росте у своєму ряду. Плоди проходять етапи цвітіння, зеленого та стиглого помідора.", infoPeople: "Працівники рухаються визначеним проходом і працюють біля призначеного ряду.", infoWater: "Сині точки показують шлях води: трубка, капіляр, мат і коріння.", infoLeftRow: "Лівий ряд у вибраному проході. Працюйте з рослинами ліворуч від проходу.", infoRightRow: "Правий ряд у вибраному проході. Працюйте з рослинами праворуч від проходу.", infoPassage: "Прохід — це дорога між двома рядами. У кожній наві є п’ять проходів.", infoGrowth0: "Молода рослина", infoGrowth1: "Цвітіння", infoGrowth2: "Зелений плід", infoGrowth3: "Стиглий помідор"
    },
    ru: {
      exploreTitle: "Выберите, что посмотреть", naveChoice: "Выберите сторону нава", passageChoice: "Выберите проход 1–5", rowChoice: "Выберите ряд в проходе", leftRow: "Левый ряд", rightRow: "Правый ряд", processChoice: "Показать процесс", showWater: "Показать движение воды", hideWater: "Скрыть движение воды", growthChoice: "Этап роста", layersTitle: "Слои вида", miniMapTitle: "ПЛАН НАВЫ", selectionText: "Выбрано: {side}, проход {passage}, {row}", infoEyebrow: "КОРОТКОЕ ОБЪЯСНЕНИЕ", infoClose: "Закрыть", infoMiddleRoad: "Центральная дорога разделяет левую и правую стороны теплицы. По ней вы идёте к нужной наве.", infoLeftSide: "Левая сторона теплицы. Если стоять спиной к первым навам, это сторона слева.", infoRightSide: "Правая сторона теплицы. Если стоять спиной к первым навам, это сторона справа.", infoLiftCart: "Тележка с подъёмной платформой ездит по полу прохода, как обычная тележка. Платформа поднимает работника к растениям.", infoHarvestCart: "Тележка для сбора ездит по полу прохода. Собранные помидоры кладут в контейнер на тележке.", infoCapillaries: "Капилляры — это тонкие трубки, которые подают воду и питательный раствор к мату возле каждого ряда.", infoGrowMat: "Мат для выращивания удерживает субстрат и воду возле корней растения.", infoTomatoes: "Растение растёт в своём ряду. Плоды проходят этапы цветения, зелёного и спелого помидора.", infoPeople: "Работники идут по назначенному проходу и работают возле назначенного ряда.", infoWater: "Синие точки показывают путь воды: трубка, капилляр, мат и корни.", infoLeftRow: "Левый ряд в выбранном проходе. Работайте с растениями слева от прохода.", infoRightRow: "Правый ряд в выбранном проходе. Работайте с растениями справа от прохода.", infoPassage: "Проход — это дорожка между двумя рядами. В каждой наве пять проходов.", infoGrowth0: "Молодое растение", infoGrowth1: "Цветение", infoGrowth2: "Зелёный плод", infoGrowth3: "Спелый помидор"
    },
    az: {
      exploreTitle: "Nəyi görmək istədiyinizi seçin", naveChoice: "Navanın tərəfini seçin", passageChoice: "1–5 keçidlərindən birini seçin", rowChoice: "Keçiddə cərgəni seçin", leftRow: "Sol cərgə", rightRow: "Sağ cərgə", processChoice: "Prosesi göstərin", showWater: "Su axınını göstər", hideWater: "Su axınını gizlət", growthChoice: "Böyümə mərhələsi", layersTitle: "Görüntü qatları", miniMapTitle: "NAVA PLANI", selectionText: "Seçildi: {side}, keçid {passage}, {row}", infoEyebrow: "QISA İZAH", infoClose: "Bağla", infoMiddleRoad: "Mərkəzi yol istixananın sol və sağ tərəflərini ayırır. Seçilmiş navaya bu yolla gedirsiniz.", infoLeftSide: "İstixananın sol tərəfi. Birinci navalara arxanızla dayandıqda bu, sol tərəfdir.", infoRightSide: "İstixananın sağ tərəfi. Birinci navalara arxanızla dayandıqda bu, sağ tərəfdir.", infoLiftCart: "Qaldırıcı platformalı araba keçidin döşəməsində adi araba kimi hərəkət edir. Platforma işçini bitkilərə qaldırır.", infoHarvestCart: "Yığım arabası keçidin döşəməsində hərəkət edir. Yığılan pomidorlar arabadakı qaba qoyulur.", infoCapillaries: "Kapilyarlar hər cərgənin yanındakı mata su və qida məhlulu gətirən nazik borulardır.", infoGrowMat: "Becərmə matı bitkinin köklərinin yanında substratı və suyu saxlayır.", infoTomatoes: "Bitki öz cərgəsində böyüyür. Meyvə çiçəklənmə, yaşıl və yetişmiş pomidor mərhələlərindən keçir.", infoPeople: "İşçilər təyin olunmuş keçiddən istifadə edir və təyin olunmuş cərgənin yanında işləyirlər.", infoWater: "Mavi nöqtələr suyun yolunu göstərir: boru, kapilyar, mat və köklər.", infoLeftRow: "Seçilmiş keçiddə sol cərgə. Keçidin sol tərəfindəki bitkilərlə işləyin.", infoRightRow: "Seçilmiş keçiddə sağ cərgə. Keçidin sağ tərəfindəki bitkilərlə işləyin.", infoPassage: "Keçid iki cərgə arasındakı yoldur. Hər navada beş keçid var.", infoGrowth0: "Gənc bitki", infoGrowth1: "Çiçəklənmə", infoGrowth2: "Yaşıl meyvə", infoGrowth3: "Yetişmiş pomidor"
    },
    es: {
      exploreTitle: "Elige qué quieres ver", naveChoice: "Elige el lado de la nave", passageChoice: "Elige el pasillo 1–5", rowChoice: "Elige una fila del pasillo", leftRow: "Fila izquierda", rightRow: "Fila derecha", processChoice: "Mostrar el proceso", showWater: "Mostrar el flujo de agua", hideWater: "Ocultar el flujo de agua", growthChoice: "Etapa de crecimiento", layersTitle: "Capas de la vista", miniMapTitle: "PLANO DE LA NAVE", selectionText: "Seleccionado: {side}, pasillo {passage}, {row}", infoEyebrow: "EXPLICACIÓN BREVE", infoClose: "Cerrar", infoMiddleRoad: "El camino central separa los lados izquierdo y derecho del invernadero. Por él llegas a la nave elegida.", infoLeftSide: "Lado izquierdo del invernadero. Con la espalda hacia las primeras naves, es el lado de la izquierda.", infoRightSide: "Lado derecho del invernadero. Con la espalda hacia las primeras naves, es el lado de la derecha.", infoLiftCart: "El carro elevador circula por el suelo del pasillo como un carro normal. Su plataforma eleva al trabajador hasta las plantas.", infoHarvestCart: "El carro de cosecha circula por el suelo del pasillo. Los tomates recogidos se colocan en su contenedor.", infoCapillaries: "Los capilares son tubos finos que llevan agua y nutrientes a la manta de cultivo junto a cada fila.", infoGrowMat: "La manta de cultivo mantiene el sustrato y el agua cerca de las raíces.", infoTomatoes: "La planta crece en su fila. El fruto pasa por la floración, el fruto verde y el tomate maduro.", infoPeople: "Los trabajadores usan el pasillo asignado y trabajan junto a la fila asignada.", infoWater: "Los puntos azules muestran el recorrido del agua: tubo, capilar, manta y raíces.", infoLeftRow: "Fila izquierda del pasillo elegido. Trabaja con las plantas del lado izquierdo.", infoRightRow: "Fila derecha del pasillo elegido. Trabaja con las plantas del lado derecho.", infoPassage: "El pasillo es el camino entre dos filas. Cada nave tiene cinco pasillos.", infoGrowth0: "Planta joven", infoGrowth1: "Floración", infoGrowth2: "Fruto verde", infoGrowth3: "Tomate maduro"
    },
    fil: {
      exploreTitle: "Piliin kung ano ang titingnan", naveChoice: "Piliin ang panig ng nave", passageChoice: "Piliin ang daanan 1–5", rowChoice: "Piliin ang hanay sa daanan", leftRow: "Kaliwang hanay", rightRow: "Kanang hanay", processChoice: "Ipakita ang proseso", showWater: "Ipakita ang daloy ng tubig", hideWater: "Itago ang daloy ng tubig", growthChoice: "Yugto ng paglaki", layersTitle: "Mga layer ng tanawin", miniMapTitle: "PLANO NG NAVE", selectionText: "Napili: {side}, daanan {passage}, {row}", infoEyebrow: "MAIKLING PALIWANAG", infoClose: "Isara", infoMiddleRoad: "Hinahati ng gitnang daan ang kaliwa at kanang bahagi ng greenhouse. Dito ka pupunta sa napiling nave.", infoLeftSide: "Kaliwang bahagi ng greenhouse. Kapag nakatalikod sa mga unang nave, ito ang nasa kaliwa.", infoRightSide: "Kanang bahagi ng greenhouse. Kapag nakatalikod sa mga unang nave, ito ang nasa kanan.", infoLiftCart: "Ang lift cart ay umaandar sa sahig ng daanan tulad ng ordinaryong cart. Itinataas ng platform ang manggagawa papunta sa mga halaman.", infoHarvestCart: "Ang harvest cart ay umaandar sa sahig ng daanan. Inilalagay ang mga napitas na kamatis sa lalagyan nito.", infoCapillaries: "Ang capillary ay manipis na tubo na naghahatid ng tubig at sustansiya sa grow mat sa tabi ng bawat hanay.", infoGrowMat: "Ang grow mat ay humahawak sa medium at tubig malapit sa ugat ng halaman.", infoTomatoes: "Lumalaki ang halaman sa sariling hanay. Dumadaan ang bunga sa pamumulaklak, berdeng bunga at hinog na kamatis.", infoPeople: "Gumagamit ang mga manggagawa ng itinakdang daanan at nagtatrabaho sa tabi ng itinakdang hanay.", infoWater: "Ipinapakita ng mga asul na tuldok ang daan ng tubig: tubo, capillary, mat at ugat.", infoLeftRow: "Kaliwang hanay sa napiling daanan. Magtrabaho sa mga halaman sa kaliwang bahagi.", infoRightRow: "Kanang hanay sa napiling daanan. Magtrabaho sa mga halaman sa kanang bahagi.", infoPassage: "Ang daanan ay nasa pagitan ng dalawang hanay. May limang daanan sa bawat nave.", infoGrowth0: "Batang halaman", infoGrowth1: "Namumulaklak", infoGrowth2: "Berdeng bunga", infoGrowth3: "Hinog na kamatis"
    },
    id: {
      exploreTitle: "Pilih yang ingin dilihat", naveChoice: "Pilih sisi nave", passageChoice: "Pilih lorong 1–5", rowChoice: "Pilih baris di lorong", leftRow: "Baris kiri", rightRow: "Baris kanan", processChoice: "Tampilkan proses", showWater: "Tampilkan aliran air", hideWater: "Sembunyikan aliran air", growthChoice: "Tahap pertumbuhan", layersTitle: "Lapisan tampilan", miniMapTitle: "DENAH NAVE", selectionText: "Dipilih: {side}, lorong {passage}, {row}", infoEyebrow: "PENJELASAN SINGKAT", infoClose: "Tutup", infoMiddleRoad: "Jalan tengah memisahkan sisi kiri dan kanan rumah kaca. Dari sini Anda menuju nave yang dipilih.", infoLeftSide: "Sisi kiri rumah kaca. Saat membelakangi nave pertama, ini adalah sisi kiri Anda.", infoRightSide: "Sisi kanan rumah kaca. Saat membelakangi nave pertama, ini adalah sisi kanan Anda.", infoLiftCart: "Troli pengangkat berjalan di lantai lorong seperti troli biasa. Platformnya mengangkat pekerja ke tanaman.", infoHarvestCart: "Troli panen berjalan di lantai lorong. Tomat yang dipetik dimasukkan ke wadah di troli.", infoCapillaries: "Kapiler adalah selang tipis yang mengalirkan air dan nutrisi ke mat tanam di samping setiap baris.", infoGrowMat: "Mat tanam menahan media dan air di dekat akar tanaman.", infoTomatoes: "Tanaman tumbuh di barisnya. Buah berkembang dari berbunga, buah hijau hingga tomat matang.", infoPeople: "Pekerja menggunakan lorong yang ditentukan dan bekerja di samping baris yang ditentukan.", infoWater: "Titik biru menunjukkan jalur air: selang, kapiler, mat dan akar.", infoLeftRow: "Baris kiri pada lorong yang dipilih. Bekerjalah dengan tanaman di sisi kiri lorong.", infoRightRow: "Baris kanan pada lorong yang dipilih. Bekerjalah dengan tanaman di sisi kanan lorong.", infoPassage: "Lorong adalah jalan di antara dua baris. Setiap nave memiliki lima lorong.", infoGrowth0: "Tanaman muda", infoGrowth1: "Berbunga", infoGrowth2: "Buah hijau", infoGrowth3: "Tomat matang"
    },
    ne: {
      exploreTitle: "के हेर्ने हो छान्नुहोस्", naveChoice: "नाभको पक्ष छान्नुहोस्", passageChoice: "बाटो १–५ छान्नुहोस्", rowChoice: "बाटोभित्रको लाइन छान्नुहोस्", leftRow: "बायाँ लाइन", rightRow: "दायाँ लाइन", processChoice: "प्रक्रिया देखाउनुहोस्", showWater: "पानीको बहाव देखाउनुहोस्", hideWater: "पानीको बहाव लुकाउनुहोस्", growthChoice: "बढ्ने चरण", layersTitle: "दृश्यका तहहरू", miniMapTitle: "नाभको योजना", selectionText: "छानिएको: {side}, बाटो {passage}, {row}", infoEyebrow: "छोटो व्याख्या", infoClose: "बन्द गर्नुहोस्", infoMiddleRoad: "बीचको बाटोले ग्रीनहाउसको बायाँ र दायाँ भाग छुट्याउँछ। यही बाटो भएर छानिएको नाभमा जानुहोस्।", infoLeftSide: "ग्रीनहाउसको बायाँ भाग। पहिलो नाभतिर ढाड फर्काउँदा यो तपाईंको बायाँतिर हुन्छ।", infoRightSide: "ग्रीनहाउसको दायाँ भाग। पहिलो नाभतिर ढाड फर्काउँदा यो तपाईंको दायाँतिर हुन्छ।", infoLiftCart: "लिफ्ट ट्रली साधारण ट्रलीजस्तै बाटोको भुइँमा चल्छ। यसको प्लेटफर्मले कामदारलाई बिरुवासम्म उठाउँछ।", infoHarvestCart: "बाली टिप्ने ट्रली बाटोको भुइँमा चल्छ। टिपिएका गोलभेडा ट्रलीको कन्टेनरमा राखिन्छन्।", infoCapillaries: "केपिलरी पातला पाइप हुन् जसले हरेक लाइनको म्याटसम्म पानी र पोषक घोल पुर्‍याउँछन्।", infoGrowMat: "उत्पादन म्याटले बिरुवाको जरानजिक माध्यम र पानी राख्छ।", infoTomatoes: "बिरुवा आफ्नै लाइनमा बढ्छ। फल फूल, हरियो फल र पाकेको गोलभेडाको चरणबाट जान्छ।", infoPeople: "कामदारले तोकिएको बाटो प्रयोग गर्छन् र तोकिएको लाइनछेउमा काम गर्छन्।", infoWater: "निला बिन्दुले पानीको बाटो देखाउँछन्: पाइप, केपिलरी, म्याट र जरा।", infoLeftRow: "छानिएको बाटोको बायाँ लाइन। बाटोको बायाँपट्टिका बिरुवामा काम गर्नुहोस्।", infoRightRow: "छानिएको बाटोको दायाँ लाइन। बाटोको दायाँपट्टिका बिरुवामा काम गर्नुहोस्।", infoPassage: "बाटो दुई लाइनबीचको हिँड्ने ठाउँ हो। प्रत्येक नाभमा पाँच बाटा हुन्छन्।", infoGrowth0: "सानो बिरुवा", infoGrowth1: "फूल फुल्ने चरण", infoGrowth2: "हरियो फल", infoGrowth3: "पाकेको गोलभेडा"
    }
  };
  const processTranslations = {
    pl: { passage: "Przejście", autoProcess: "Proces działa automatycznie", cameraChoices: "Punkty widoku", mainRoadView: "Główna droga", passageView: "W środku przejścia", workerView: "Poziom pracownika", tourStart: "Pokaż automatyczną wycieczkę", tourStop: "Zatrzymaj wycieczkę", touchHint: "Przeciągnij, aby obejrzeć. Uszczypnij, aby przybliżyć. Kliknij obiekt, aby go wyjaśnić." },
    en: { passage: "Passage", autoProcess: "The process runs automatically", cameraChoices: "Viewpoints", mainRoadView: "Main road", passageView: "Inside the passage", workerView: "Worker level", tourStart: "Start automatic tour", tourStop: "Stop the tour", touchHint: "Drag to look around. Pinch to zoom. Tap an object to learn what it is." },
    ua: { passage: "Прохід", autoProcess: "Процес працює автоматично", cameraChoices: "Точки огляду", mainRoadView: "Головна дорога", passageView: "Усередині проходу", workerView: "Рівень працівника", tourStart: "Показати автоматичну екскурсію", tourStop: "Зупинити екскурсію", touchHint: "Проведіть пальцем для огляду. Зведіть пальці для наближення. Натисніть об’єкт, щоб дізнатися, що це." },
    ru: { passage: "Проход", autoProcess: "Процесс работает автоматически", cameraChoices: "Точки обзора", mainRoadView: "Главная дорога", passageView: "Внутри прохода", workerView: "Уровень работника", tourStart: "Запустить автоматическую экскурсию", tourStop: "Остановить экскурсию", touchHint: "Проведите пальцем для обзора. Сведите пальцы для приближения. Нажмите на объект, чтобы узнать, что это." },
    az: { passage: "Keçid", autoProcess: "Proses avtomatik işləyir", cameraChoices: "Baxış nöqtələri", mainRoadView: "Əsas yol", passageView: "Keçidin içi", workerView: "İşçi səviyyəsi", tourStart: "Avtomatik turu başlat", tourStop: "Turu dayandır", touchHint: "Baxmaq üçün sürüşdürün. Yaxınlaşdırmaq üçün iki barmağınızı sıxın. Obyektin izahını görmək üçün ona toxunun." },
    es: { passage: "Pasillo", autoProcess: "El proceso funciona automáticamente", cameraChoices: "Puntos de vista", mainRoadView: "Camino principal", passageView: "Dentro del pasillo", workerView: "Nivel del trabajador", tourStart: "Iniciar visita automática", tourStop: "Detener la visita", touchHint: "Arrastra para mirar. Pellizca para ampliar. Toca un objeto para saber qué es." },
    fil: { passage: "Daanan", autoProcess: "Awtomatikong gumagana ang proseso", cameraChoices: "Mga punto ng tanawin", mainRoadView: "Pangunahing daan", passageView: "Loob ng daanan", workerView: "Antas ng manggagawa", tourStart: "Simulan ang awtomatikong tour", tourStop: "Itigil ang tour", touchHint: "I-drag para tumingin. Kurutin para mag-zoom. Pindutin ang bagay para malaman kung ano ito." },
    id: { passage: "Lorong", autoProcess: "Proses berjalan otomatis", cameraChoices: "Titik pandang", mainRoadView: "Jalan utama", passageView: "Di dalam lorong", workerView: "Tinggi pekerja", tourStart: "Mulai tur otomatis", tourStop: "Hentikan tur", touchHint: "Geser untuk melihat. Cubit untuk memperbesar. Ketuk objek untuk mengetahui fungsinya." },
    ne: { passage: "बाटो", autoProcess: "प्रक्रिया आफैँ चल्छ", cameraChoices: "दृश्यका ठाउँहरू", mainRoadView: "मुख्य बाटो", passageView: "बाटोभित्र", workerView: "कामदारको उचाइ", tourStart: "स्वचालित भ्रमण सुरु गर्नुहोस्", tourStop: "भ्रमण रोक्नुहोस्", touchHint: "हेर्न तान्नुहोस्। ठूलो बनाउन दुई औँला चिमोट्नुहोस्। वस्तु के हो भनेर जान्न त्यसमा थिच्नुहोस्।" }
  };
  const entryHints = {
    pl: "Kliknij przejście lub rząd, aby wejść. Przeciągnij, aby obejrzeć.",
    en: "Tap a passage or row to enter it. Drag to look around.",
    ua: "Натисніть на прохід або ряд, щоб увійти. Проведіть пальцем для огляду.",
    ru: "Нажмите на проход или ряд, чтобы войти. Проведите пальцем для обзора.",
    az: "Keçidə və ya sıraya toxunaraq daxil olun. Baxmaq üçün sürüşdürün.",
    es: "Toca un pasillo o una fila para entrar. Arrastra para mirar.",
    fil: "Pindutin ang daanan o hanay para pumasok. I-drag para tumingin.",
    id: "Ketuk lorong atau baris untuk masuk. Geser untuk melihat.",
    ne: "भित्र जान बाटो वा लाइनमा थिच्नुहोस्। हेर्न तान्नुहोस्।"
  };
  Object.entries(educationalTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(interactionTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(explorationTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(processTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(entryHints).forEach(([language, value]) => { translations[language].entryHint = value; });

  const state = { lang: new URLSearchParams(location.search).get("lang") || localStorage.getItem("citronex-3d-lang") || "pl", moving: true, liftActive: true, waterActive: true, growthAuto: true, growthStage: 3, tourActive: false, tourStart: 0, tourStep: -1, selectedNaveSide: "left", selectedPassage: 1, selectedRowSide: "left", cameraMode: "overview" };
  if (!LANGS.includes(state.lang)) state.lang = "en";
  // Five entry levels run along the connector road. Matching left/right entries share the same Z.
  const passagePositions = [-11, -5.5, 0, 5.5, 11];
  const passageSideCenters = { left: -5.15, right: 5.15 };
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
    updateLiftText();
    updateFullscreenText();
    updateTourText();
    updateWaterText();
    updateSelection();
    $("#infoClose").setAttribute("aria-label", t("infoClose"));
  }

  function updateMotionText() {
    $("#statusText").textContent = state.moving ? t("moving") : t("paused");
    const label = state.moving ? t("pause") : t("play");
    $("#motionButton span:last-child").textContent = label;
  }

  function updateLiftText() {
    const button = $("#liftButton");
    if (button) button.querySelector("span:last-child").textContent = state.liftActive ? t("liftStop") : t("liftStart");
  }

  function updateFullscreenText() {
    const isFullscreen = Boolean(document.fullscreenElement) || $(".scene-section").classList.contains("is-immersive");
    $("#fullscreenButton span:last-child").textContent = isFullscreen ? t("closeFullscreen") : t("fullscreen");
  }

  function updateTourText() {
    const button = $("#tourButton");
    if (button) button.querySelector("span:last-child").textContent = state.tourActive ? t("tourStop") : t("tourStart");
    const heroButton = $("#tourHeroButton");
    if (heroButton) heroButton.querySelector("strong").textContent = state.tourActive ? t("tourStop") : t("tourStart");
  }

  function updateWaterText() {
    const button = $("#waterButton");
    if (button) button.textContent = state.waterActive ? t("hideWater") : t("showWater");
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
  let plantRecords = [];
  let rowRecords = [];
  let passageRecords = [];
  let capillaryMeshes = [];
  let waterDots = [];
  let matMeshes = [];
  let cartRecords = [];
  let peopleRecords = [];
  let demoLiftItem = null;
  let selectionArrows = [];
  const layerState = { plants: true, capillaries: true, carts: true, people: true };

  function box(width, height, depth, color, x, y, z, materialOptions = {}) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), new THREE.MeshStandardMaterial({ color, ...materialOptions }));
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
  }

  function plant(x, z, side) {
    const group = new THREE.Group();
    group.userData.infoKey = "tomatoes";
    group.position.set(x, 0, z);
    const support = new THREE.Mesh(new THREE.CylinderGeometry(.018, .018, 2.45, 5), new THREE.MeshStandardMaterial({ color: 0x8a9b98, roughness: .8 }));
    support.position.y = 1.55;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(.035, .05, 1.35, 6), new THREE.MeshStandardMaterial({ color: 0x2f7845 }));
    stem.position.y = .9;
    group.add(support, stem);
    const tomatoes = [];
    [-.12, .12].forEach((offset, index) => {
      const tomato = new THREE.Mesh(new THREE.SphereGeometry(.12, 8, 8), new THREE.MeshStandardMaterial({ color: index ? 0xd94d39 : 0xe96a3c }));
      tomato.position.set(offset, .95 + index * .14, 0);
      group.add(tomato);
      tomatoes.push(tomato);
    });
    const leaves = new THREE.Mesh(new THREE.BoxGeometry(.48, .05, .08), new THREE.MeshStandardMaterial({ color: 0x4e9b57 }));
    leaves.position.set(side * .1, .65, 0);
    leaves.rotation.z = side * .25;
    group.add(leaves);
    scene.add(group);
    plantRecords.push({ group, tomatoes });
    return group;
  }

  function person(x, z, color, phase, axis = "z") {
    const group = new THREE.Group();
    group.userData.infoKey = "people";
    group.position.set(x, 0, z);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(.13, .16, .55, 7), new THREE.MeshStandardMaterial({ color }));
    body.position.y = .5;
    const head = new THREE.Mesh(new THREE.SphereGeometry(.15, 8, 8), new THREE.MeshStandardMaterial({ color: 0xf0b48f }));
    head.position.y = .9;
    group.add(body, head);
    scene.add(group);
    animated.push({ object: group, type: "person", baseX: x, baseZ: z, phase, axis });
    peopleRecords.push(group);
  }

  function overheadCart(x, z, phase, demoLift = false, axis = "z") {
    const group = new THREE.Group();
    group.userData.infoKey = "liftCart";
    group.position.set(x, 0, z);
    const body = new THREE.Mesh(new THREE.BoxGeometry(.72, .28, 1.1), new THREE.MeshStandardMaterial({ color: 0x4b83c4, metalness: .25, roughness: .4 }));
    body.position.y = .42;
    const load = new THREE.Mesh(new THREE.BoxGeometry(.48, .18, .62), new THREE.MeshStandardMaterial({ color: 0xf0b936 }));
    load.position.y = .7;
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x27333d, metalness: .25, roughness: .5 });
    [-.3, .3].forEach((wheelX) => [-.38, .38].forEach((wheelZ) => {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.1, .1, .07, 10), wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wheelX, .14, wheelZ);
      group.add(wheel);
    }));
    let liftAssembly = null;
    if (demoLift) {
      liftAssembly = new THREE.Group();
      liftAssembly.position.y = .72;
      const platform = new THREE.Mesh(new THREE.BoxGeometry(.82, .1, .94), new THREE.MeshStandardMaterial({ color: 0x2f5f91, metalness: .25, roughness: .45 }));
      const guardLeft = new THREE.Mesh(new THREE.BoxGeometry(.05, .6, .86), new THREE.MeshStandardMaterial({ color: 0x263e5a, metalness: .2 }));
      const guardRight = guardLeft.clone();
      guardLeft.position.set(-.37, .3, 0); guardRight.position.set(.37, .3, 0);
      const worker = new THREE.Group();
      const workerBody = new THREE.Mesh(new THREE.CylinderGeometry(.13, .16, .55, 7), new THREE.MeshStandardMaterial({ color: 0xe36b54 }));
      workerBody.position.y = .62;
      const workerHead = new THREE.Mesh(new THREE.SphereGeometry(.15, 8, 8), new THREE.MeshStandardMaterial({ color: 0xf0b48f }));
      workerHead.position.y = 1.02;
      const helmet = new THREE.Mesh(new THREE.SphereGeometry(.18, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xf0b936 }));
      helmet.position.y = 1.15;
      worker.add(workerBody, workerHead, helmet);
      liftAssembly.add(platform, guardLeft, guardRight, worker);
      const liftMastLeft = new THREE.Mesh(new THREE.BoxGeometry(.06, 2.5, .06), new THREE.MeshStandardMaterial({ color: 0x415d6c, metalness: .3 }));
      const liftMastRight = liftMastLeft.clone();
      liftMastLeft.position.set(-.28, 1.55, 0); liftMastRight.position.set(.28, 1.55, 0);
      group.add(liftMastLeft, liftMastRight, liftAssembly);
    }
    group.add(body, load);
    if (axis === "x") group.rotation.y = Math.PI / 2;
    scene.add(group);
    const item = { object: group, type: "cart", baseX: x, baseZ: z, phase, liftAssembly, axis };
    animated.push(item);
    cartRecords.push(group);
    if (demoLift) demoLiftItem = item;
  }

  function harvestCart(x, z, phase, axis = "z") {
    const group = new THREE.Group();
    group.userData.infoKey = "harvestCart";
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
    if (axis === "x") group.rotation.y = Math.PI / 2;
    scene.add(group);
    animated.push({ object: group, type: "harvest", baseX: x, baseZ: z, phase, axis });
    cartRecords.push(group);
  }

  function addGlasshouse() {
    const glass = { color: 0x8bd0c3, transparent: true, opacity: .16, roughness: .18, metalness: .08, side: THREE.DoubleSide };
    const frame = 0x4f8f7e;
    const floor = 0xd9e7dd;
    const passage = 0xd6bd83;

    box(18, .12, 32, floor, 0, .05, 0);
    const centralRoad = box(3.25, .05, 30.5, passage, 0, .13, 0);
    centralRoad.userData.infoKey = "middleRoad";
    box(18, 5.8, .08, 0x78b9aa, 0, 2.9, -16, glass);
    box(18, 5.8, .08, 0x78b9aa, 0, 2.9, 16, glass);
    box(.08, 5.8, 32, 0x78b9aa, -9.2, 2.9, 0, glass);
    box(.08, 5.8, 32, 0x78b9aa, 9.2, 2.9, 0, glass);

    // Five repeated roof spans make the greenhouse read as a real multi-span structure.
    const bayCenters = [-7.2, -3.6, 0, 3.6, 7.2];
    const roofAngle = Math.atan2(.78, 1.78);
    bayCenters.forEach((center) => {
      const leftRoof = box(3.75, .07, 32, 0x8dcfc2, center - .9, 5.72, 0, glass);
      const rightRoof = box(3.75, .07, 32, 0x8dcfc2, center + .9, 5.72, 0, glass);
      leftRoof.rotation.z = roofAngle;
      rightRoof.rotation.z = -roofAngle;
      box(.09, 1.7, .09, frame, center, 5.72, 0);
    });
    [-9, -7.2, -5.4, -3.6, -1.8, 0, 1.8, 3.6, 5.4, 7.2, 9].forEach((x) => box(.075, 5.8, .075, frame, x, 2.9, 0));
    [-12, -8, -4, 0, 4, 8, 12].forEach((z) => {
      box(18, .075, .075, frame, 0, 5.35, z);
      box(18, .065, .065, frame, 0, 2.95, z);
    });
    box(3.05, .045, 30.5, 0xe7cb92, 0, .2, 0);
    [-1.58, 1.58].forEach((x) => box(.08, .055, 30.5, 0x8e7045, x, .25, 0));
    for (let z = -13; z <= 13; z += 4) box(.18, .06, 1.55, 0xf5d77d, 0, .27, z);

    function addRow(passageZ, passageNumber, naveSide, rowSide) {
      const direction = naveSide === "left" ? -1 : 1;
      const rowZ = passageZ + (rowSide === "left" ? -.52 : .52);
      const rowX = passageSideCenters[naveSide];
      const mat = box(6.55, .10, .66, 0xb98258, rowX, .22, rowZ);
      const bed = box(6.45, .2, .6, 0x64a965, rowX, .36, rowZ);
      const capillary = box(6.45, .045, .035, 0x4d9bd0, rowX, .52, rowZ);
      mat.userData.infoKey = "growMat";
      bed.userData.infoKey = "tomatoes";
      capillary.userData.infoKey = "capillaries";
      [mat, bed, capillary].forEach((mesh) => Object.assign(mesh.userData, { passageNumber, naveSide, rowSide }));
      rowRecords.push({ mat, bed, capillary, passageNumber, naveSide, rowSide });
      capillaryMeshes.push(capillary);
      matMeshes.push(mat);
      for (let x = direction < 0 ? -2.3 : 2.3; direction < 0 ? x >= -8.1 : x <= 8.1; x += direction * 1.8) {
        const plantGroup = plant(x, rowZ, direction);
        Object.assign(plantGroup.userData, { passageNumber, naveSide, rowSide });
        const waterDot = new THREE.Mesh(new THREE.SphereGeometry(.07, 8, 8), new THREE.MeshStandardMaterial({ color: 0x2f9be5, emissive: 0x0a426b, emissiveIntensity: .45 }));
        waterDot.position.set(x, .58, rowZ);
        scene.add(waterDot);
        waterDots.push({ mesh: waterDot, baseX: x, baseZ: rowZ, phase: x * .15, axis: "x", direction });
      }
    }
    passagePositions.forEach((passageZ, index) => {
      const passageNumber = index + 1;
      ["left", "right"].forEach((naveSide) => {
        addRow(passageZ, passageNumber, naveSide, "left");
        addRow(passageZ, passageNumber, naveSide, "right");
        const direction = naveSide === "left" ? -1 : 1;
        const path = box(6.7, .035, .86, 0xf1dfaf, passageSideCenters[naveSide], .5, passageZ);
        path.userData.infoKey = "passage";
        Object.assign(path.userData, { naveSide, passageNumber });
        const entrance = box(.24, .12, .74, 0xf0a832, direction * 1.82, .58, passageZ);
        entrance.userData.infoKey = "passage";
        Object.assign(entrance.userData, { naveSide, passageNumber });
        box(6.4, .035, .06, 0x737b7e, passageSideCenters[naveSide], .17, passageZ - .3);
        box(6.4, .035, .06, 0x737b7e, passageSideCenters[naveSide], .17, passageZ + .3);
        passageRecords.push({ mesh: path, entrance, naveSide, passageNumber });
      });
      // Each short stripe is a visible connector crossing the central road: 1↔1, 2↔2, etc.
      const connector = box(3.05, .06, .12, 0xf0c35a, 0, .28, passageZ);
      connector.userData.infoKey = "middleRoad";
    });

    overheadCart(-5.15, -5.5, 0, false, "x");
    overheadCart(5.15, 0, 1.4, false, "x");
    overheadCart(-5.15, 5.5, 2.8, true, "x");
    person(-5.3, -11, 0xe36b54, 0, "x"); person(5.3, -5.5, 0x4d86c6, 1.4, "x"); person(-5.3, 5.5, 0xe5a631, 2.8, "x"); person(5.3, 11, 0x8d67bf, 4.1, "x");
    harvestCart(-5.15, 0, .8, "x");
    box(.55, .5, 1.1, 0xd74d37, -1.0, .45, 13.2); box(.55, .5, 1.1, 0xe9ad28, 1.0, .45, 13.2);
  }

  function lookAt(position, target) {
    camera.position.lerp(new THREE.Vector3(...position), .085);
    targetCamera.lerp(new THREE.Vector3(...target), .085);
    camera.lookAt(targetCamera);
  }

  const cameraViews = {
    overview: { position: [0, 30, 30], target: [0, 0, 0] },
    nave: { position: [0, 8.5, 18], target: [-5.15, 1.4, 0] },
    lift: { position: [2.5, 4.8, 14], target: [-4.8, 1.35, 4.5] },
    mainRoad: { position: [0, 8.6, 19], target: [0, .9, -1] },
    passage: { position: [-7.8, 2.55, 0], target: [-5.15, 1.25, 0] },
    worker: { position: [-7.1, 1.65, 0], target: [-5.15, 1.45, 0] }
  };
  const cameraTouch = { yaw: 0, pitch: 0, zoom: 1, pointers: new Map(), pinchDistance: 0 };
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const pointerStarts = new Map();
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  function resetCameraControls() { cameraTouch.yaw = 0; cameraTouch.pitch = 0; cameraTouch.zoom = 1; }

  function configureCamera(mode, keepTour = false) {
    if (!keepTour) {
      state.tourActive = false;
      updateTourText();
    }
    state.cameraMode = cameraViews[mode] ? mode : "overview";
    resetCameraControls();
    document.querySelectorAll("[data-camera]").forEach((button) => button.classList.toggle("is-active", button.dataset.camera === mode));
  }

  function getCameraView(mode) {
    const x = selectedPassageX();
    const z = selectedPassageZ();
    const inward = state.selectedNaveSide === "left" ? 1 : -1;
    if (mode === "passage") return { position: [x - inward * 2.4, 2.55, z], target: [x, 1.25, z] };
    if (mode === "worker") return { position: [x - inward * 1.8, 1.65, z], target: [x, 1.45, z] };
    return cameraViews[mode] || cameraViews.overview;
  }

  function selectedPassageX() {
    return passageSideCenters[state.selectedNaveSide];
  }

  function selectedPassageZ() {
    return passagePositions[state.selectedPassage - 1] || passagePositions[0];
  }

  function updateSelection() {
    const sideText = state.selectedNaveSide === "left" ? t("leftSide") : t("rightSide");
    const rowText = state.selectedRowSide === "left" ? t("leftRow") : t("rightRow");
    const selection = t("selectionText").replace("{side}", sideText).replace("{passage}", String(state.selectedPassage)).replace("{row}", rowText);
    const badge = $("#selectionBadge");
    if (badge) badge.textContent = selection;
    rowRecords.forEach((record) => {
      const passageSelected = record.passageNumber === state.selectedPassage;
      const selected = passageSelected && record.naveSide === state.selectedNaveSide && record.rowSide === state.selectedRowSide;
      [record.mat, record.bed, record.capillary].forEach((mesh) => {
        mesh.material.emissive.setHex(selected ? 0x9a6b1b : passageSelected ? 0x4c8f64 : 0x000000);
        mesh.material.emissiveIntensity = selected ? .75 : passageSelected ? .28 : 0;
      });
    });
    passageRecords.forEach((record) => {
      const selected = record.passageNumber === state.selectedPassage;
      [record.mesh, record.entrance].forEach((mesh) => {
        mesh.material.emissive.setHex(selected ? 0x4b86b6 : 0x000000);
        mesh.material.emissiveIntensity = selected ? .75 : 0;
      });
    });
    if (demoLiftItem) {
      demoLiftItem.baseX = selectedPassageX();
      demoLiftItem.baseZ = selectedPassageZ();
    }
    const selectedX = selectedPassageX();
    const oppositeX = -selectedX;
    const selectedZ = selectedPassageZ();
    selectionArrows.forEach((arrow, index) => {
      const sideX = index < 2 ? selectedX : oppositeX;
      const direction = sideX < 0 ? -1 : 1;
      arrow.position.set(direction * 1.82, .82, selectedZ + (index % 2 ? .38 : -.38));
      arrow.setDirection(new THREE.Vector3(direction, 0, 0));
      arrow.visible = true;
    });
    document.querySelectorAll("[data-nave-side]").forEach((button) => button.classList.toggle("is-active", button.dataset.naveSide === state.selectedNaveSide));
    document.querySelectorAll("[data-passage]").forEach((button) => button.classList.toggle("is-active", Number(button.dataset.passage) === state.selectedPassage));
    document.querySelectorAll("[data-row-side]").forEach((button) => button.classList.toggle("is-active", button.dataset.rowSide === state.selectedRowSide));
    applyLayerVisibility();
  }

  function applyLayerVisibility() {
    plantRecords.forEach((record) => { record.group.visible = layerState.plants; });
    capillaryMeshes.forEach((mesh) => { mesh.visible = layerState.capillaries; });
    waterDots.forEach((dot) => { dot.mesh.visible = state.waterActive && layerState.capillaries; });
    cartRecords.forEach((group) => { group.visible = layerState.carts; });
    peopleRecords.forEach((group) => { group.visible = layerState.people; });
    document.querySelectorAll("[data-layer]").forEach((button) => button.classList.toggle("is-on", layerState[button.dataset.layer]));
  }

  function applyGrowthStage(stage) {
    state.growthStage = Number(stage);
    const slider = $("#growthSlider");
    if (slider && slider.value !== String(state.growthStage)) slider.value = String(state.growthStage);
    const colors = [0x77b84e, 0xe4b32d, 0x79b94f, 0xd9483f];
    plantRecords.forEach((record) => {
      record.group.scale.y = .8 + state.growthStage * .07;
      record.tomatoes.forEach((tomato) => tomato.material.color.setHex(colors[state.growthStage]));
    });
  }

  function openInfo(key) {
    const dialog = $("#infoDialog");
    const title = $("#infoTitle");
    const text = $("#infoText");
    if (!dialog || !title || !text) return;
    const infoKey = key.charAt(0).toUpperCase() + key.slice(1);
    title.textContent = t(key);
    text.textContent = t(`info${infoKey}`);
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  const tourSteps = [
    { mode: "overview", side: "left", passage: 1, row: "left" },
    { mode: "mainRoad", side: "left", passage: 1, row: "left" },
    { mode: "nave", side: "left", passage: 3, row: "left" },
    { mode: "passage", side: "left", passage: 3, row: "right" },
    { mode: "worker", side: "left", passage: 3, row: "right" },
    { mode: "lift", side: "left", passage: 3, row: "right" }
  ];

  function updateTourStep(time) {
    if (!state.tourActive) return;
    if (!state.tourStart) state.tourStart = time;
    const stepIndex = Math.floor((time - state.tourStart) / 6000) % tourSteps.length;
    if (stepIndex === state.tourStep) return;
    const step = tourSteps[stepIndex];
    state.tourStep = stepIndex;
    state.selectedNaveSide = step.side;
    state.selectedPassage = step.passage;
    state.selectedRowSide = step.row;
    configureCamera(step.mode, true);
    updateSelection();
  }

  function initScene() {
    if (!THREE) { fallback.hidden = false; sceneCanvas.hidden = true; return; }
    try {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xdff4ea);
      scene.fog = new THREE.Fog(0xdff4ea, 38, 78);
      camera = new THREE.PerspectiveCamera(38, 1, .1, 200);
      targetCamera = new THREE.Vector3(0, 1, 0);
      renderer = new THREE.WebGLRenderer({ canvas: sceneCanvas, antialias: true, alpha: false, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.shadowMap.enabled = false;
      scene.add(new THREE.HemisphereLight(0xffffff, 0x6e9677, 2.1));
      const sun = new THREE.DirectionalLight(0xffffff, 2.2); sun.position.set(12, 22, 10); scene.add(sun);
      addGlasshouse();
      selectionArrows = [0, 1, 2, 3].map(() => new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, .78, 0), 1.8, 0xf0a832, .34, .18));
      selectionArrows.forEach((arrow) => scene.add(arrow));
      applyGrowthStage(state.growthStage);
      updateSelection();
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
    updateTourStep(time);
    const mode = state.cameraMode;
    const view = getCameraView(mode);
    const focusX = selectedPassageX();
    const targetValues = [...view.target];
    const positionValues = [...view.position];
    if (mode === "nave" || mode === "lift") {
      const shiftX = focusX - targetValues[0];
      targetValues[0] = focusX;
      positionValues[0] += shiftX;
    }
    const targetVector = new THREE.Vector3(...targetValues);
    const spherical = new THREE.Spherical().setFromVector3(new THREE.Vector3(...positionValues).sub(targetVector));
    spherical.theta += cameraTouch.yaw;
    spherical.phi = clamp(spherical.phi + cameraTouch.pitch, .35, 1.5);
    spherical.radius = clamp(spherical.radius * cameraTouch.zoom, 10, 58);
    const adjustedPosition = new THREE.Vector3().setFromSpherical(spherical).add(targetVector);
    lookAt(adjustedPosition.toArray(), targetVector.toArray());
    if (state.moving) animated.forEach((item) => {
      if (item.type === "person") {
        const direction = item.baseX < 0 ? -1 : 1;
        if (item.axis === "x") item.object.position.x = item.baseX + Math.sin(time * .00045 + item.phase) * direction * 2.2;
        else item.object.position.z = item.baseZ + Math.sin(time * .00045 + item.phase) * 5.5;
        item.object.rotation.y = Math.sin(time * .00045 + item.phase) > 0 ? 0 : Math.PI;
      }
      if (item.type === "cart") {
        if (item.axis === "x") {
          const direction = item.baseX < 0 ? -1 : 1;
          item.object.position.x = item.baseX + ((time * .0025 + item.phase * 2) % 3.4) * direction;
          item.object.position.z = item.baseZ;
        } else {
          item.object.position.x = item.baseX;
          item.object.position.z = ((item.baseZ + time * .0025 + item.phase * 2) % 28) - 14;
        }
        if (item.liftAssembly) {
          const liftProgress = state.liftActive ? .5 + Math.sin(time * .0011 + item.phase) * .5 : 0;
          item.liftAssembly.position.y = .72 + liftProgress * 1.45;
        }
      }
      if (item.type === "harvest") {
        if (item.axis === "x") {
          const direction = item.baseX < 0 ? -1 : 1;
          item.object.position.x = item.baseX + ((time * .0012 + item.phase * 2) % 3.4) * direction;
          item.object.position.z = item.baseZ;
        } else item.object.position.z = ((item.baseZ + time * .0012 + item.phase * 2) % 22) - 11;
      }
    });
    if (state.growthAuto && state.moving) {
      const automaticStage = Math.floor(time / 4200) % 4;
      if (automaticStage !== state.growthStage) applyGrowthStage(automaticStage);
    }
    if (state.waterActive && state.moving) waterDots.forEach((dot) => {
      if (dot.axis === "x") {
        const start = dot.direction < 0 ? -2.3 : 2.3;
        dot.mesh.position.x = start + ((time * .004 + dot.phase + 6.2) % 6.2) * dot.direction;
        dot.mesh.position.z = dot.baseZ;
      } else dot.mesh.position.z = ((dot.baseZ + time * .004 + dot.phase + 13.2) % 26.4) - 13.2;
    });
    renderer.render(scene, camera);
  }

  document.querySelectorAll("[data-camera]").forEach((button) => button.addEventListener("click", () => configureCamera(button.dataset.camera)));
  $("#motionButton").addEventListener("click", () => { state.moving = !state.moving; state.tourActive = false; updateMotionText(); updateTourText(); });
  $("#resetButton").addEventListener("click", () => { resetCameraControls(); state.tourActive = false; state.tourStart = 0; state.tourStep = -1; state.growthAuto = true; state.waterActive = true; state.liftActive = true; applyGrowthStage(3); updateWaterText(); updateLiftText(); updateTourText(); applyLayerVisibility(); configureCamera(state.cameraMode); });
  function toggleTour() {
    state.tourActive = !state.tourActive;
    state.tourStart = 0;
    state.tourStep = -1;
    if (state.tourActive) { state.moving = true; updateMotionText(); }
    updateTourText();
  }
  const tourButton = $("#tourButton");
  if (tourButton) tourButton.addEventListener("click", toggleTour);
  $("#tourHeroButton").addEventListener("click", toggleTour);
  $("#waterButton").addEventListener("click", () => { state.waterActive = !state.waterActive; updateWaterText(); applyLayerVisibility(); });
  $("#growthSlider").addEventListener("input", (event) => { state.growthAuto = false; applyGrowthStage(event.target.value); });
  document.querySelectorAll("[data-nave-side]").forEach((button) => button.addEventListener("click", () => {
    state.selectedNaveSide = button.dataset.naveSide;
    updateSelection();
  }));
  document.querySelectorAll("[data-passage]").forEach((button) => button.addEventListener("click", () => {
    state.selectedPassage = Number(button.dataset.passage);
    updateSelection();
  }));
  document.querySelectorAll("[data-row-side]").forEach((button) => button.addEventListener("click", () => {
    state.selectedRowSide = button.dataset.rowSide;
    updateSelection();
  }));
  document.querySelectorAll("[data-layer]").forEach((button) => button.addEventListener("click", () => {
    const layer = button.dataset.layer;
    layerState[layer] = !layerState[layer];
    applyLayerVisibility();
  }));
  document.querySelectorAll("[data-info-key]").forEach((element) => {
    element.addEventListener("click", () => openInfo(element.dataset.infoKey));
    if (element.matches(".technical-card")) {
      element.tabIndex = 0;
      element.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openInfo(element.dataset.infoKey); } });
    }
  });
  $("#infoClose").addEventListener("click", () => $("#infoDialog").close());
  $("#infoDialog").addEventListener("click", (event) => { if (event.target === event.currentTarget) event.currentTarget.close(); });

  sceneCanvas.addEventListener("pointerdown", (event) => {
    sceneCanvas.setPointerCapture(event.pointerId);
    cameraTouch.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    pointerStarts.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (cameraTouch.pointers.size === 2) cameraTouch.pinchDistance = 0;
  });
  sceneCanvas.addEventListener("pointermove", (event) => {
    const previous = cameraTouch.pointers.get(event.pointerId);
    if (!previous) return;
    const dx = event.clientX - previous.x;
    const dy = event.clientY - previous.y;
    previous.x = event.clientX; previous.y = event.clientY;
    if (cameraTouch.pointers.size === 1) {
      cameraTouch.yaw -= dx * .008;
      cameraTouch.pitch = clamp(cameraTouch.pitch - dy * .006, -.55, .55);
    } else if (cameraTouch.pointers.size === 2) {
      const points = [...cameraTouch.pointers.values()];
      const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      if (cameraTouch.pinchDistance) cameraTouch.zoom = clamp(cameraTouch.zoom * cameraTouch.pinchDistance / distance, .68, 1.35);
      cameraTouch.pinchDistance = distance;
    }
    event.preventDefault();
  }, { passive: false });
  function inspectCanvasPoint(event) {
    if (!camera || !scene) return;
    const rect = sceneCanvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(scene.children, true).find((entry) => {
      let object = entry.object;
      while (object) { if (object.userData && object.userData.infoKey) return true; object = object.parent; }
      return false;
    });
    if (!hit) return;
    let object = hit.object;
    while (object && !object.userData.infoKey) object = object.parent;
    if (!object || !object.userData.infoKey) return;
    const { naveSide, passageNumber, rowSide } = object.userData;
    if (naveSide && passageNumber) {
      state.selectedNaveSide = naveSide;
      state.selectedPassage = passageNumber;
      if (rowSide) state.selectedRowSide = rowSide;
      updateSelection();
      configureCamera(rowSide ? "worker" : "passage");
      return;
    }
    openInfo(object.userData.infoKey);
  }
  ["pointerup", "pointercancel"].forEach((eventName) => sceneCanvas.addEventListener(eventName, (event) => {
    const start = pointerStarts.get(event.pointerId);
    const moved = start ? Math.hypot(event.clientX - start.x, event.clientY - start.y) : 99;
    const wasSinglePointer = cameraTouch.pointers.size === 1;
    cameraTouch.pointers.delete(event.pointerId);
    pointerStarts.delete(event.pointerId);
    if (cameraTouch.pointers.size < 2) cameraTouch.pinchDistance = 0;
    if (eventName === "pointerup" && wasSinglePointer && moved < 8) inspectCanvasPoint(event);
  }));
  sceneCanvas.addEventListener("wheel", (event) => {
    cameraTouch.zoom = clamp(cameraTouch.zoom * (event.deltaY > 0 ? 1.06 : .94), .68, 1.35);
    event.preventDefault();
  }, { passive: false });

  const sceneSection = $(".scene-section");
  async function toggleFullscreen() {
    const isOpen = Boolean(document.fullscreenElement) || sceneSection.classList.contains("is-immersive");
    if (isOpen) {
      if (document.fullscreenElement && document.exitFullscreen) await document.exitFullscreen();
      sceneSection.classList.remove("is-immersive");
      document.body.classList.remove("is-immersive");
    } else {
      sceneSection.classList.add("is-immersive");
      document.body.classList.add("is-immersive");
      try { if (sceneSection.requestFullscreen) await sceneSection.requestFullscreen(); } catch (error) { /* CSS fallback remains available on mobile Safari. */ }
    }
    updateFullscreenText();
    resizeScene();
  }
  $("#fullscreenButton").addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", () => {
    const active = Boolean(document.fullscreenElement);
    sceneSection.classList.toggle("is-immersive", active);
    document.body.classList.toggle("is-immersive", active);
    updateFullscreenText();
    resizeScene();
  });
  window.addEventListener("resize", resizeScene, { passive: true });
  applyLanguage();
  initScene();
})();
