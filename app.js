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
  const sceneStepTitles = {
    pl: "Szklarnia w 3 krokach",
    en: "Greenhouse in 3 steps",
    ua: "Теплиця у 3 кроках",
    ru: "Теплица в 3 шагах",
    az: "İstixana 3 addımda",
    es: "Invernadero en 3 pasos",
    fil: "Bahay-taniman sa 3 hakbang",
    id: "Rumah kaca dalam 3 langkah",
    ne: "३ चरणमा ग्रीनहाउस"
  };
  Object.entries(sceneStepTitles).forEach(([language, sceneTitle]) => {
    translations[language].sceneTitle = sceneTitle;
  });
  Object.entries(educationalTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(interactionTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(explorationTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(processTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(entryHints).forEach(([language, value]) => { translations[language].entryHint = value; });
  const naveInfoTranslations = {
    pl: { infoNave: "Nawa to długi, powtarzalny moduł szklarni. Na tym planie widać ich 39; konkretna liczba może zależeć od szklarni.", miniMapTitle: "PLAN CAŁEJ SZKLARNI", naveCountShort: "39 naw", connectorCountShort: "3 łączniki" },
    en: { infoNave: "A nave is a long repeating greenhouse module. This plan shows 39; the exact number can differ between greenhouses.", miniMapTitle: "WHOLE GREENHOUSE PLAN", naveCountShort: "39 naves", connectorCountShort: "3 connectors" },
    ua: { infoNave: "Нава — це довгий повторюваний модуль теплиці. На цьому плані їх 39; точна кількість може відрізнятися.", miniMapTitle: "ПЛАН УСІЄЇ ТЕПЛИЦІ", naveCountShort: "39 нав", connectorCountShort: "3 з’єднання" },
    ru: { infoNave: "Нава — это длинный повторяющийся модуль теплицы. На этом плане их 39; точное количество может отличаться.", miniMapTitle: "ПЛАН ВСЕЙ ТЕПЛИЦЫ", naveCountShort: "39 нав", connectorCountShort: "3 соединения" },
    az: { infoNave: "Nava istixananın uzun, təkrarlanan moduludur. Bu planda 39 nava göstərilir; dəqiq say istixanaya görə dəyişə bilər.", miniMapTitle: "BÜTÜN İSTİXANANIN PLANI", naveCountShort: "39 nava", connectorCountShort: "3 birləşdirici" },
    es: { infoNave: "Una nave es un módulo largo y repetido del invernadero. Este plano muestra 39; el número exacto puede variar.", miniMapTitle: "PLANO DE TODO EL INVERNADERO", naveCountShort: "39 naves", connectorCountShort: "3 conexiones" },
    fil: { infoNave: "Ang nave ay isang mahaba at paulit-ulit na bahagi ng greenhouse. Ipinapakita ng planong ito ang 39; maaaring mag-iba ang bilang.", miniMapTitle: "PLANO NG BUONG GREENHOUSE", naveCountShort: "39 nave", connectorCountShort: "3 koneksyon" },
    id: { infoNave: "Nave adalah modul rumah kaca yang panjang dan berulang. Denah ini menunjukkan 39; jumlah sebenarnya dapat berbeda.", miniMapTitle: "DENAH SELURUH RUMAH KACA", naveCountShort: "39 nave", connectorCountShort: "3 penghubung" },
    ne: { infoNave: "नावा ग्रीनहाउसको लामो र दोहोरिने भाग हो। यो योजनामा ३९ वटा देखाइएको छ; वास्तविक संख्या फरक हुन सक्छ।", miniMapTitle: "सम्पूर्ण ग्रीनहाउसको योजना", naveCountShort: "३९ नावा", connectorCountShort: "३ जोड्ने बाटा" }
  };
  const naveSelectionTranslations = {
    pl: { naveChoice: "Wybierz nawę i stronę", naveNumber: "Numer nawy", naveNumberHint: "Na planie pokazano 39 naw: 39–1.", naveLabel: "NAWA", naveFiveEntrances: "5 wejść w jednej nawie", naveDetailDesc: "5 wejść / 10 rzędów.", naveEntryLine: "WEJŚCIA 1–5 • 10 RZĘDÓW", selectionText: "Wybrane: nawa {nave}, {side}, przejście {passage}, {row}" },
    en: { naveChoice: "Choose a nave and side", naveNumber: "Nave number", naveNumberHint: "The plan shows 39 naves: 39–1.", naveLabel: "NAVE", naveFiveEntrances: "5 entrances in one nave", naveDetailDesc: "5 entrances / 10 rows.", naveEntryLine: "ENTRANCES 1–5 • 10 ROWS", selectionText: "Selected: nave {nave}, {side}, passage {passage}, {row}" },
    ua: { naveChoice: "Оберіть наву та сторону", naveNumber: "Номер нави", naveNumberHint: "На плані показано 39 нав: 39–1.", naveLabel: "НАВА", naveFiveEntrances: "5 входів в одній наві", naveDetailDesc: "5 входів / 10 рядів.", naveEntryLine: "ВХОДИ 1–5 • 10 РЯДІВ", selectionText: "Обрано: нава {nave}, {side}, прохід {passage}, {row}" },
    ru: { naveChoice: "Выберите наву и сторону", naveNumber: "Номер навы", naveNumberHint: "На плане показано 39 нав: 39–1.", naveLabel: "НАВА", naveFiveEntrances: "5 входов в одной наве", naveDetailDesc: "5 входов / 10 рядов.", naveEntryLine: "ВХОДЫ 1–5 • 10 РЯДОВ", selectionText: "Выбрано: нава {nave}, {side}, проход {passage}, {row}" },
    az: { naveChoice: "Navanı və tərəfi seçin", naveNumber: "Nava nömrəsi", naveNumberHint: "Planda 39 nava göstərilir: 39–1.", naveLabel: "NAVA", naveFiveEntrances: "Bir navada 5 giriş", naveDetailDesc: "5 giriş / 10 sıra.", naveEntryLine: "GİRİŞLƏR 1–5 • 10 SIRA", selectionText: "Seçildi: nava {nave}, {side}, keçid {passage}, {row}" },
    es: { naveChoice: "Elige la nave y el lado", naveNumber: "Número de nave", naveNumberHint: "El plano muestra 39 naves: 39–1.", naveLabel: "NAVE", naveFiveEntrances: "5 entradas en una nave", naveDetailDesc: "5 entradas / 10 filas.", naveEntryLine: "ENTRADAS 1–5 • 10 FILAS", selectionText: "Seleccionado: nave {nave}, {side}, pasillo {passage}, {row}" },
    fil: { naveChoice: "Piliin ang nave at panig", naveNumber: "Numero ng nave", naveNumberHint: "May 39 nave sa plano: 39–1.", naveLabel: "NAVE", naveFiveEntrances: "5 pasukan sa isang nave", naveDetailDesc: "5 pasukan / 10 hanay.", naveEntryLine: "PASUKAN 1–5 • 10 HANAY", selectionText: "Napili: nave {nave}, {side}, daanan {passage}, {row}" },
    id: { naveChoice: "Pilih nave dan sisi", naveNumber: "Nomor nave", naveNumberHint: "Denah menunjukkan 39 nave: 39–1.", naveLabel: "NAVE", naveFiveEntrances: "5 pintu masuk dalam satu nave", naveDetailDesc: "5 pintu masuk / 10 baris.", naveEntryLine: "PINTU MASUK 1–5 • 10 BARIS", selectionText: "Dipilih: nave {nave}, {side}, lorong {passage}, {row}" },
    ne: { naveChoice: "नाभ र भाग छान्नुहोस्", naveNumber: "नाभ नम्बर", naveNumberHint: "योजनामा ३९ नाभ छन्: ३९–१।", naveLabel: "नाभ", naveFiveEntrances: "एउटा नाभमा ५ प्रवेशद्वार", naveDetailDesc: "५ प्रवेशद्वार / १० लाइन।", naveEntryLine: "प्रवेशद्वार १–५ • १० लाइन", selectionText: "छानिएको: नाभ {nave}, {side}, बाटो {passage}, {row}" }
  };
  const guideTranslations = {
    pl: {
      guideEyebrow: "DLA NOWEJ OSOBY",
      guideTitle: "Jak znale\u017A\u0107 swoje miejsce?",
      guideWhole: "Zobacz ca\u0142o\u015B\u0107",
      guideRoad: "Id\u017A drog\u0105 \u015Brodkow\u0105",
      guidePassage: "Wejd\u017A w przej\u015Bcie",
      guideWorker: "Wybierz stron\u0119 rz\u0119du",
      guideStatusOverview: "Zacznij od widoku z g\u00F3ry. Prawa strona jest nad drog\u0105, lewa pod drog\u0105. Nawy s\u0105 naprzeciw siebie.",
      guideStatusRoad: "Id\u017A drog\u0105 \u015Brodkow\u0105 do wybranej nawy. Wej\u015Bcia prawej i lewej strony s\u0105 naprzeciw siebie.",
      guideStatusPassage: "W przej\u015Bciu s\u0105 dwa rz\u0119dy: lewy i prawy. Stoisz pomi\u0119dzy nimi.",
      guideStatusWorker: "Pracuj przy stronie rz\u0119du wskazanej w przydziale: lewy albo prawy rz\u0105d."
    },
    en: {
      guideEyebrow: "FOR A NEW PERSON",
      guideTitle: "How do you find your place?",
      guideWhole: "See the whole plan",
      guideRoad: "Follow the middle road",
      guidePassage: "Enter the passage",
      guideWorker: "Choose the row side",
      guideStatusOverview: "Start with the top view. The right side is above the road and the left side is below it. The naves face each other.",
      guideStatusRoad: "Follow the middle road to your assigned nave. The entrances on the right and left face each other.",
      guideStatusPassage: "A passage has two rows: left and right. You stand between the rows.",
      guideStatusWorker: "Work beside the row side shown in your assignment: left or right."
    },
    ua: {
      guideEyebrow: "\u0414\u041b\u042f \u041d\u041e\u0412\u041e\u0413\u041e \u041f\u0420\u0410\u0426\u0406\u0412\u041d\u0418\u041a\u0410",
      guideTitle: "\u042f\u043a \u0437\u043d\u0430\u0439\u0442\u0438 \u0441\u0432\u043e\u0454 \u043c\u0456\u0441\u0446\u0435?",
      guideWhole: "\u041f\u043e\u0431\u0430\u0447\u0438\u0442\u0438 \u0432\u0441\u044e \u0442\u0435\u043f\u043b\u0438\u0446\u044e",
      guideRoad: "\u0406\u0442\u0438 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u044e \u0434\u043e\u0440\u043e\u0433\u043e\u044e",
      guidePassage: "\u0423\u0432\u0456\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0445\u0456\u0434",
      guideWorker: "\u041e\u0431\u0440\u0430\u0442\u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u0440\u044f\u0434\u0443",
      guideStatusOverview: "\u041f\u043e\u0447\u043d\u0456\u0442\u044c \u0437 \u0432\u0438\u0434\u0443 \u0437\u0433\u043e\u0440\u0438. \u041f\u0440\u0430\u0432\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u043d\u0430\u0434 \u0434\u043e\u0440\u043e\u0433\u043e\u044e, \u043b\u0456\u0432\u0430 \u043f\u0456\u0434 \u0434\u043e\u0440\u043e\u0433\u043e\u044e. \u041d\u0430\u0432\u0438 \u0440\u043e\u0437\u0442\u0430\u0448\u043e\u0432\u0430\u043d\u0456 \u043e\u0434\u043d\u0430 \u043d\u0430\u0432\u043f\u0440\u043e\u0442\u0438 \u043e\u0434\u043d\u043e\u0457.",
      guideStatusRoad: "\u0406\u0434\u0456\u0442\u044c \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u044e \u0434\u043e\u0440\u043e\u0433\u043e\u044e \u0434\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043e\u0457 \u043d\u0430\u0432\u0438. \u0412\u0445\u043e\u0434\u0438 \u043f\u0440\u0430\u0432\u043e\u0457 \u0442\u0430 \u043b\u0456\u0432\u043e\u0457 \u0441\u0442\u043e\u0440\u0456\u043d \u043d\u0430\u043f\u0440\u043e\u0442\u0438 \u043e\u0434\u0438\u043d \u043e\u0434\u043d\u043e\u0433\u043e.",
      guideStatusPassage: "\u0423 \u043f\u0440\u043e\u0445\u043e\u0434\u0456 \u0454 \u0434\u0432\u0430 \u0440\u044f\u0434\u0438: \u043b\u0456\u0432\u0438\u0439 \u0456 \u043f\u0440\u0430\u0432\u0438\u0439. \u0412\u0438 \u0441\u0442\u043e\u0457\u0442\u0435 \u043c\u0456\u0436 \u0440\u044f\u0434\u0430\u043c\u0438.",
      guideStatusWorker: "\u041f\u0440\u0430\u0446\u044e\u0439\u0442\u0435 \u0431\u0456\u043b\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0438 \u0440\u044f\u0434\u0443, \u0432\u043a\u0430\u0437\u0430\u043d\u043e\u0457 \u0432 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0456: \u043b\u0456\u0432\u0438\u0439 \u0430\u0431\u043e \u043f\u0440\u0430\u0432\u0438\u0439 \u0440\u044f\u0434."
    },
    ru: {
      guideEyebrow: "\u0414\u041b\u042f \u041d\u041e\u0412\u041e\u0413\u041e \u0420\u0410\u0411\u041e\u0422\u041d\u0418\u041a\u0410",
      guideTitle: "\u041a\u0430\u043a \u043d\u0430\u0439\u0442\u0438 \u0441\u0432\u043e\u0451 \u043c\u0435\u0441\u0442\u043e?",
      guideWhole: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u044e \u0442\u0435\u043f\u043b\u0438\u0446\u0443",
      guideRoad: "\u0418\u0434\u0442\u0438 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u043e\u0440\u043e\u0433\u0435",
      guidePassage: "\u0412\u043e\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0445\u043e\u0434",
      guideWorker: "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u0440\u044f\u0434\u0430",
      guideStatusOverview: "\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441 \u0432\u0438\u0434\u0430 \u0441\u0432\u0435\u0440\u0445\u0443. \u041f\u0440\u0430\u0432\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430\u0434 \u0434\u043e\u0440\u043e\u0433\u043e\u0439, \u043b\u0435\u0432\u0430\u044f \u2014 \u043f\u043e\u0434 \u0434\u043e\u0440\u043e\u0433\u043e\u0439. \u041d\u0430\u0432\u044b \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u043d\u0430\u043f\u0440\u043e\u0442\u0438\u0432 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430.",
      guideStatusRoad: "\u0418\u0434\u0438\u0442\u0435 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u043e\u0440\u043e\u0433\u0435 \u043a \u043d\u0443\u0436\u043d\u043e\u0439 \u043d\u0430\u0432\u0435. \u0412\u0445\u043e\u0434\u044b \u043f\u0440\u0430\u0432\u043e\u0439 \u0438 \u043b\u0435\u0432\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043d\u0430\u043f\u0440\u043e\u0442\u0438\u0432 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430.",
      guideStatusPassage: "\u0412 \u043f\u0440\u043e\u0445\u043e\u0434\u0435 \u0434\u0432\u0430 \u0440\u044f\u0434\u0430: \u043b\u0435\u0432\u044b\u0439 \u0438 \u043f\u0440\u0430\u0432\u044b\u0439. \u0412\u044b \u0441\u0442\u043e\u0438\u0442\u0435 \u043c\u0435\u0436\u0434\u0443 \u0440\u044f\u0434\u0430\u043c\u0438.",
      guideStatusWorker: "\u0420\u0430\u0431\u043e\u0442\u0430\u0439\u0442\u0435 \u0440\u044f\u0434\u043e\u043c \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u043e\u0439 \u0440\u044f\u0434\u0430, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0438: \u043b\u0435\u0432\u044b\u0439 \u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u044b\u0439 \u0440\u044f\u0434."
    },
    az: {
      guideEyebrow: "YEN\u0130 \u0130\u015e\u00c7\u0130 \u00dc\u00c7\u00dcN",
      guideTitle: "\u00d6z yerinizi nec\u0259 tapmaq olar?",
      guideWhole: "B\u00fct\u00fcn istixanaya bax\u0131n",
      guideRoad: "M\u0259rk\u0259zi yolla gedin",
      guidePassage: "Ke\u00e7id\u0259 daxil olun",
      guideWorker: "S\u0131ra t\u0259r\u0259fini se\u00e7in",
      guideStatusOverview: "\u00dcstd\u0259n g\u00f6r\u00fcn\u00fc\u015fd\u0259n ba\u015flay\u0131n. M\u0259rk\u0259zi yol sol v\u0259 sa\u011f t\u0259r\u0259fi ay\u0131r\u0131r.",
      guideStatusRoad: "T\u0259yin olunmu\u015f navaya m\u0259rk\u0259zi yolla gedin. H\u0259r iki t\u0259r\u0259fd\u0259ki giri\u015fl\u0259r qar\u015f\u0131-qar\u015f\u0131d\u0131r.",
      guideStatusPassage: "Ke\u00e7idd\u0259 iki s\u0131ra var: sol v\u0259 sa\u011f. Siz s\u0131ralar\u0131n aras\u0131nda dayan\u0131rs\u0131n\u0131z.",
      guideStatusWorker: "Tap\u015f\u0131r\u0131qda g\u00f6st\u0259ril\u0259n s\u0131ra t\u0259r\u0259find\u0259 i\u015fl\u0259yin: sol v\u0259 ya sa\u011f s\u0131ra."
    },
    es: {
      guideEyebrow: "PARA UNA PERSONA NUEVA",
      guideTitle: "\u00bfC\u00f3mo encontrar tu lugar?",
      guideWhole: "Ver todo el invernadero",
      guideRoad: "Sigue el camino central",
      guidePassage: "Entra en el pasillo",
      guideWorker: "Elige el lado de la fila",
      guideStatusOverview: "Empieza con la vista desde arriba. El camino central separa los lados izquierdo y derecho.",
      guideStatusRoad: "Sigue el camino central hasta la nave asignada. Las entradas de ambos lados quedan una frente a otra.",
      guideStatusPassage: "En el pasillo hay dos filas: izquierda y derecha. Te colocas entre las filas.",
      guideStatusWorker: "Trabaja junto al lado de la fila indicado en tu asignaci\u00f3n: izquierda o derecha."
    },
    fil: {
      guideEyebrow: "PARA SA BAGONG TAO",
      guideTitle: "Paano hanapin ang iyong lugar?",
      guideWhole: "Tingnan ang buong greenhouse",
      guideRoad: "Sundin ang gitnang daan",
      guidePassage: "Pumasok sa daanan",
      guideWorker: "Piliin ang panig ng hanay",
      guideStatusOverview: "Magsimula sa tanawin mula sa itaas. Hinahati ng gitnang daan ang kaliwa at kanang panig.",
      guideStatusRoad: "Sundin ang gitnang daan papunta sa itinakdang nave. Magkaharap ang mga pasukan sa magkabilang panig.",
      guideStatusPassage: "May dalawang hanay sa daanan: kaliwa at kanan. Nakatayo ka sa pagitan ng mga hanay.",
      guideStatusWorker: "Magtrabaho sa panig ng hanay na nakalagay sa iyong assignment: kaliwa o kanan."
    },
    id: {
      guideEyebrow: "UNTUK PEKERJA BARU",
      guideTitle: "Bagaimana menemukan tempat Anda?",
      guideWhole: "Lihat seluruh rumah kaca",
      guideRoad: "Ikuti jalan tengah",
      guidePassage: "Masuk ke lorong",
      guideWorker: "Pilih sisi baris",
      guideStatusOverview: "Mulai dari tampilan atas. Jalan tengah memisahkan sisi kiri dan kanan.",
      guideStatusRoad: "Ikuti jalan tengah menuju nave yang ditentukan. Pintu masuk di kedua sisi saling berhadapan.",
      guideStatusPassage: "Di dalam lorong ada dua baris: kiri dan kanan. Anda berdiri di antara baris.",
      guideStatusWorker: "Bekerjalah di sisi baris yang tertulis dalam penugasan: kiri atau kanan."
    },
    ne: {
      guideEyebrow: "\u0928\u092f\u093e\u0901 \u0915\u093e\u092e\u0926\u093e\u0930\u0915\u093e \u0932\u093e\u0917\u093f",
      guideTitle: "\u0906\u092b\u094d\u0928\u094b \u0938\u094d\u0925\u093e\u0928 \u0915\u0938\u0930\u0940 \u092d\u0947\u091f\u094d\u0928\u0947?",
      guideWhole: "\u0938\u092c\u0948 \u0917\u094d\u0930\u0940\u0928\u0939\u093e\u0909\u0938 \u0939\u0947\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d",
      guideRoad: "\u092c\u0940\u091a\u0915\u094b \u092c\u093e\u091f\u094b \u092a\u091b\u094d\u092f\u093e\u0909\u0928\u0941\u0939\u094b\u0938\u094d",
      guidePassage: "\u092c\u093e\u091f\u094b\u092d\u093f\u0924\u094d\u0930 \u091c\u093e\u0928\u0941\u0939\u094b\u0938\u094d",
      guideWorker: "\u0932\u093e\u0907\u0928\u0915\u094b \u092d\u093e\u0917 \u091b\u093e\u0928\u094d\u0928\u0941\u0939\u094b\u0938\u094d",
      guideStatusOverview: "\u092e\u093e\u0925\u093f\u092c\u093e\u091f \u0926\u0947\u0916\u093f\u0928\u0947 \u0926\u0943\u0936\u094d\u092f\u092c\u093e\u091f \u0938\u0941\u0930\u0941 \u0917\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d\u0964 \u092c\u0940\u091a\u0915\u094b \u092c\u093e\u091f\u094b\u0932\u0947 \u092c\u093e\u092f\u093e\u0901 \u0930 \u0926\u093e\u092f\u093e\u0901 \u092d\u093e\u0917 \u091b\u0941\u091f\u094d\u092f\u093e\u0909\u0901\u091b\u0964",
      guideStatusRoad: "\u0924\u094b\u0915\u093f\u090f\u0915\u094b \u0928\u093e\u0935\u0947\u0924\u093f\u0930 \u092c\u0940\u091a\u0915\u094b \u092c\u093e\u091f\u094b \u092a\u091b\u094d\u092f\u093e\u0909\u0928\u0941\u0939\u094b\u0938\u094d\u0964 \u0926\u0941\u0935\u0948 \u092d\u093e\u0917\u0915\u093e \u092a\u094d\u0930\u0935\u0947\u0936\u0926\u094d\u0935\u093e\u0930 \u0906\u092e\u0928\u0947-\u0938\u093e\u092e\u0928\u0947 \u091b\u0928\u094d\u0964",
      guideStatusPassage: "\u092c\u093e\u091f\u094b\u092e\u093e \u0926\u0941\u0908 \u0932\u093e\u0907\u0928 \u091b\u0928\u094d: \u092c\u093e\u092f\u093e\u0901 \u0930 \u0926\u093e\u092f\u093e\u0901\u0964 \u0924\u092a\u093e\u0908\u0902 \u0932\u093e\u0907\u0928\u0939\u0930\u0942\u0915\u094b \u092c\u0940\u091a\u092e\u093e \u0939\u0941\u0928\u0941\u0939\u0941\u0928\u094d\u091b\u0964",
      guideStatusWorker: "\u0924\u092a\u093e\u0908\u0902\u0915\u094b \u0915\u093e\u092e\u0915\u094b \u0928\u093f\u0930\u094d\u0926\u0947\u0936\u0928\u092e\u093e \u092d\u090f\u0915\u094b \u0932\u093e\u0907\u0928\u0915\u094b \u092d\u093e\u0917\u092e\u093e \u0915\u093e\u092e \u0917\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d: \u092c\u093e\u092f\u093e\u0901 \u0935\u093e \u0926\u093e\u092f\u093e\u0901\u0964"
    }
  };
  Object.entries(guideTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  const orientationGuideTranslations = {
    az: {
      guideStatusOverview: "\u00dcstd\u0259n bax\u0131\u015fdan ba\u015flay\u0131n. Sa\u011f t\u0259r\u0259f yolun \u00fcst\u00fcnd\u0259, sol t\u0259r\u0259f yolun alt\u0131ndad\u0131r. Navalar bir-birinin qar\u015f\u0131s\u0131ndad\u0131r.",
      guideStatusRoad: "T\u0259yin olunmu\u015f navaya m\u0259rk\u0259zi yolla gedin. Sa\u011f v\u0259 sol t\u0259r\u0259fin giri\u015fl\u0259ri qar\u015f\u0131-qar\u015f\u0131d\u0131r."
    },
    es: {
      guideStatusOverview: "Empieza con la vista desde arriba. El lado derecho est\u00e1 encima del camino y el izquierdo debajo. Las naves quedan enfrentadas.",
      guideStatusRoad: "Sigue el camino central hasta la nave asignada. Las entradas de los lados derecho e izquierdo quedan una frente a otra."
    },
    fil: {
      guideStatusOverview: "Magsimula sa tanawin mula sa itaas. Ang kanang panig ay nasa itaas ng daan at ang kaliwa ay nasa ibaba. Magkaharap ang mga nave.",
      guideStatusRoad: "Sundin ang gitnang daan papunta sa itinakdang nave. Magkaharap ang pasukan sa kanan at kaliwang panig."
    },
    id: {
      guideStatusOverview: "Mulai dari tampilan atas. Sisi kanan berada di atas jalan dan sisi kiri di bawahnya. Kedua nave saling berhadapan.",
      guideStatusRoad: "Ikuti jalan tengah menuju nave yang ditentukan. Pintu masuk di sisi kanan dan kiri saling berhadapan."
    },
    ne: {
      guideStatusOverview: "\u092e\u093e\u0925\u093f\u092c\u093e\u091f \u0926\u0947\u0916\u093f\u0928\u0947 \u0926\u0943\u0936\u094d\u092f\u092c\u093e\u091f \u0938\u0941\u0930\u0941 \u0917\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d\u0964 \u0926\u093e\u092f\u093e\u0901 \u092d\u093e\u0917 \u092c\u093e\u091f\u094b\u0915\u094b \u092e\u093e\u0925\u093f \u091b \u0930 \u092c\u093e\u092f\u093e\u0901 \u092d\u093e\u0917 \u0924\u0932 \u091b\u0964 \u0928\u093e\u0935\u093e\u0939\u0930\u0942 \u0906\u092e\u0928\u0947-\u0938\u093e\u092e\u0928\u0947 \u091b\u0928\u094d\u0964",
      guideStatusRoad: "\u0924\u094b\u0915\u093f\u090f\u0915\u094b \u0928\u093e\u0935\u0947\u0924\u093f\u0930 \u092c\u0940\u091a\u0915\u094b \u092c\u093e\u091f\u094b \u092a\u091b\u094d\u092f\u093e\u0909\u0928\u0941\u0939\u094b\u0938\u094d\u0964 \u0926\u093e\u092f\u093e\u0901 \u0930 \u092c\u093e\u092f\u093e\u0901 \u092d\u093e\u0917\u0915\u093e \u092a\u094d\u0930\u0935\u0947\u0936\u0926\u094d\u0935\u093e\u0930 \u0906\u092e\u0928\u0947-\u0938\u093e\u092e\u0928\u0947 \u091b\u0928\u094d\u0964"
    }
  };
  Object.entries(orientationGuideTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  // The overview is displayed as left block | middle road | right block.
  // Keep the spoken/explanatory text aligned with that visual orientation.
  const facingSideGuideTranslations = {
    pl: { guideStatusOverview: "Zacznij od widoku z g\u00f3ry. Po lewej i prawej stronie drogi s\u0105 przeciwleg\u0142e bloki szklarni. Wej\u015bcia s\u0105 naprzeciw siebie.", guideStatusRoad: "Id\u017a drog\u0105 \u015brodkow\u0105 do wybranej nawy. Wej\u015bcie po lewej jest naprzeciw wej\u015bcia po prawej." },
    en: { guideStatusOverview: "Start with the top view. Opposite greenhouse blocks are on the left and right of the road. The entrances face each other.", guideStatusRoad: "Follow the middle road to the assigned nave. The left entrance faces the right entrance." },
    ua: { guideStatusOverview: "Почніть з вигляду зверху. Ліворуч і праворуч від дороги розташовані протилежні блоки теплиці. Входи навпроти один одного.", guideStatusRoad: "Ідіть центральною дорогою до призначеної нави. Лівий вхід розташований навпроти правого." },
    ru: { guideStatusOverview: "Начните с вида сверху. Слева и справа от дороги находятся противоположные блоки теплицы. Входы расположены друг напротив друга.", guideStatusRoad: "Идите по центральной дороге к назначенной наве. Левый вход находится напротив правого." },
    az: { guideStatusOverview: "Yuxar\u0131dan bax\u0131n. Yolun solunda v\u0259 sa\u011f\u0131nda bir-birinin qar\u015f\u0131s\u0131nda duran istixana bloklar\u0131 var. Giri\u015fl\u0259r qar\u015f\u0131-qar\u015f\u0131yad\u0131r.", guideStatusRoad: "M\u0259rk\u0259zi yol il\u0259 t\u0259yin olunmu\u015f navaya gedin. Soldak\u0131 giri\u015f sa\u011fdak\u0131 giri\u015fin qar\u015f\u0131s\u0131ndad\u0131r." },
    es: { guideStatusOverview: "Empieza con la vista desde arriba. A la izquierda y a la derecha del camino hay bloques enfrentados. Las entradas quedan una frente a otra.", guideStatusRoad: "Sigue el camino central hasta la nave asignada. La entrada izquierda queda frente a la derecha." },
    fil: { guideStatusOverview: "Magsimula sa tanawin mula sa itaas. May magkaharap na bahagi ng greenhouse sa kaliwa at kanan ng daan. Magkaharap ang mga pasukan.", guideStatusRoad: "Sundin ang gitnang daan papunta sa itinakdang nave. Ang pasukan sa kaliwa ay katapat ng nasa kanan." },
    id: { guideStatusOverview: "Mulai dari tampilan atas. Blok rumah kaca yang saling berhadapan berada di kiri dan kanan jalan. Pintu masuk saling berhadapan.", guideStatusRoad: "Ikuti jalan tengah menuju nave yang ditentukan. Pintu masuk kiri berhadapan dengan pintu masuk kanan." },
    ne: { guideStatusOverview: "माथिबाट हेर्नुहोस्। बाटोको बायाँ र दायाँपट्टि एकअर्काको सामुन्ने रहेका ग्रीनहाउसका भागहरू छन्। प्रवेशद्वारहरू आमनेसामने छन्।", guideStatusRoad: "बीचको बाटो हुँदै तोकिएको नाभेसम्म जानुहोस्। बायाँ प्रवेशद्वार दायाँ प्रवेशद्वारको सामुन्ने छ।" }
  };
  Object.entries(facingSideGuideTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  const sourcePlanOrientationTranslations = {
    pl: { guideStatusOverview: "Zacznij od widoku z g\u00f3ry. Prawa strona jest nad drog\u0105, a lewa pod drog\u0105. Nawy s\u0105 naprzeciw siebie.", guideStatusRoad: "Id\u017a drog\u0105 \u015brodkow\u0105 do wybranej nawy. Wej\u015bcia prawej i lewej strony s\u0105 naprzeciw siebie." },
    en: { guideStatusOverview: "Start with the top view. The right side is above the road and the left side is below it. The naves face each other.", guideStatusRoad: "Follow the middle road to the assigned nave. The entrances on both sides face each other." },
    ua: { guideStatusOverview: "Почніть з вигляду зверху. Права сторона над дорогою, а ліва під дорогою. Нави розташовані одна навпроти одної.", guideStatusRoad: "Ідіть центральною дорогою до призначеної нави. Входи правої та лівої сторони розташовані навпроти." },
    ru: { guideStatusOverview: "Начните с вида сверху. Правая сторона находится над дорогой, левая под дорогой. Навы расположены друг напротив друга.", guideStatusRoad: "Идите по центральной дороге к назначенной наве. Входы правой и левой стороны находятся напротив друг друга." },
    az: { guideStatusOverview: "Yuxar\u0131dan bax\u0131n. Sa\u011f t\u0259r\u0259f yolun \u00fcst\u00fcnd\u0259, sol t\u0259r\u0259f is\u0259 alt\u0131ndad\u0131r. Navalar bir-birinin qar\u015f\u0131s\u0131ndad\u0131r.", guideStatusRoad: "M\u0259rk\u0259zi yol il\u0259 t\u0259yin olunmu\u015f navaya gedin. H\u0259r iki t\u0259r\u0259fin giri\u015fl\u0259ri qar\u015f\u0131-qar\u015f\u0131d\u0131r." },
    es: { guideStatusOverview: "Empieza con la vista desde arriba. El lado derecho est\u00e1 encima del camino y el izquierdo debajo. Las naves quedan enfrentadas.", guideStatusRoad: "Sigue el camino central hasta la nave asignada. Las entradas de ambos lados quedan una frente a otra." },
    fil: { guideStatusOverview: "Magsimula sa tanawin mula sa itaas. Ang kanang bahagi ay nasa itaas ng daan at ang kaliwa ay nasa ibaba. Magkaharap ang mga nave.", guideStatusRoad: "Sundin ang gitnang daan papunta sa itinakdang nave. Magkaharap ang mga pasukan sa magkabilang panig." },
    id: { guideStatusOverview: "Mulai dari tampilan atas. Sisi kanan berada di atas jalan dan sisi kiri di bawahnya. Kedua nave saling berhadapan.", guideStatusRoad: "Ikuti jalan tengah menuju nave yang ditentukan. Pintu masuk di kedua sisi saling berhadapan." },
    ne: { guideStatusOverview: "माथिबाट हेर्नुहोस्। दायाँ भाग बाटोको माथि र बायाँ भाग बाटोको तल छ। नाभेहरू आमनेसामने छन्।", guideStatusRoad: "बीचको बाटो हुँदै तोकिएको नाभेसम्म जानुहोस्। दुवै भागका प्रवेशद्वार आमनेसामने छन्।" }
  };
  Object.entries(sourcePlanOrientationTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(naveInfoTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  Object.entries(naveSelectionTranslations).forEach(([language, values]) => Object.assign(translations[language], values));
  translations.ru.nave = "Одна нава";
  const lessonTranslations = {
    pl: {
      lessonOverview: "Droga środkowa dzieli szklarnię na prawą i lewą stronę.",
      lessonNave: "Jedna nawa ma 5 wejść. Każde prowadzi do osobnego przejścia.",
      lessonPassage: "W przejściu pracujesz przy lewym albo prawym rzędzie.",
      lessonNextNave: "Dalej: jedna nawa",
      lessonNextPassage: "Dalej: wejdź w przejście",
      lessonRestart: "Zobacz od początku"
    },
    en: {
      lessonOverview: "The middle road separates the right and left sides of the greenhouse.",
      lessonNave: "One nave has 5 entrances. Each entrance leads to a separate passage.",
      lessonPassage: "Inside a passage, you work at either the left or the right row.",
      lessonNextNave: "Next: one nave",
      lessonNextPassage: "Next: enter a passage",
      lessonRestart: "Start again"
    },
    ua: {
      lessonOverview: "Центральна дорога ділить теплицю на праву й ліву сторони.",
      lessonNave: "В одній наві є 5 входів. Кожен веде до окремого проходу.",
      lessonPassage: "У проході ви працюєте біля лівого або правого ряду.",
      lessonNextNave: "Далі: одна нава",
      lessonNextPassage: "Далі: увійти в прохід",
      lessonRestart: "Почати спочатку"
    },
    ru: {
      lessonOverview: "Центральная дорога делит теплицу на правую и левую стороны.",
      lessonNave: "В одной наве есть 5 входов. Каждый ведёт в отдельный проход.",
      lessonPassage: "В проходе вы работаете у левого или правого ряда.",
      lessonNextNave: "Дальше: одна нава",
      lessonNextPassage: "Дальше: войти в проход",
      lessonRestart: "Посмотреть сначала"
    },
    az: {
      lessonOverview: "Mərkəzi yol istixananı sağ və sol tərəfə ayırır.",
      lessonNave: "Bir navada 5 giriş var. Hər giriş ayrıca keçidə aparır.",
      lessonPassage: "Keçiddə sol və ya sağ cərgədə işləyirsiniz.",
      lessonNextNave: "Sonra: bir nava",
      lessonNextPassage: "Sonra: keçidə daxil olun",
      lessonRestart: "Əvvəldən baxın"
    },
    es: {
      lessonOverview: "El camino central divide el invernadero en lado derecho e izquierdo.",
      lessonNave: "Una nave tiene 5 entradas. Cada entrada lleva a un pasillo distinto.",
      lessonPassage: "En el pasillo se trabaja en la fila izquierda o derecha.",
      lessonNextNave: "Siguiente: una nave",
      lessonNextPassage: "Siguiente: entrar al pasillo",
      lessonRestart: "Ver desde el principio"
    },
    fil: {
      lessonOverview: "Hinahati ng gitnang daan ang kanan at kaliwang bahagi ng bahay-taniman.",
      lessonNave: "May 5 pasukan ang isang nave. Bawat pasukan ay papunta sa hiwalay na daanan.",
      lessonPassage: "Sa daanan, magtatrabaho ka sa kaliwa o kanang hanay.",
      lessonNextNave: "Susunod: isang nave",
      lessonNextPassage: "Susunod: pumasok sa daanan",
      lessonRestart: "Magsimula muli"
    },
    id: {
      lessonOverview: "Jalan tengah membagi rumah kaca menjadi sisi kanan dan kiri.",
      lessonNave: "Satu nave memiliki 5 pintu masuk. Setiap pintu menuju lorong yang berbeda.",
      lessonPassage: "Di dalam lorong, Anda bekerja di baris kiri atau kanan.",
      lessonNextNave: "Berikutnya: satu nave",
      lessonNextPassage: "Berikutnya: masuk ke lorong",
      lessonRestart: "Lihat dari awal"
    },
    ne: {
      lessonOverview: "बीचको बाटोले ग्रीनहाउसलाई दायाँ र बायाँ भागमा छुट्याउँछ।",
      lessonNave: "एउटा नाभमा ५ प्रवेशद्वार हुन्छन्। प्रत्येक प्रवेशद्वार फरक बाटोमा जान्छ।",
      lessonPassage: "बाटोभित्र तपाईं बायाँ वा दायाँ लाइनमा काम गर्नुहुन्छ।",
      lessonNextNave: "अर्को: एउटा नाभ",
      lessonNextPassage: "अर्को: बाटोभित्र जानुहोस्",
      lessonRestart: "सुरुदेखि हेर्नुहोस्"
    }
  };
  Object.entries(lessonTranslations).forEach(([language, values]) => Object.assign(translations[language], values));

  const state = { lang: new URLSearchParams(location.search).get("lang") || localStorage.getItem("citronex-3d-lang") || "pl", moving: true, liftActive: true, waterActive: true, growthAuto: false, growthStage: 3, tourActive: false, tourStart: 0, tourStep: -1, selectedNave: 20, selectedNaveSide: "left", selectedPassage: 1, selectedRowSide: "left", cameraMode: "overview" };
  if (!LANGS.includes(state.lang)) state.lang = "en";
  // The site plan has 39 naves along the axis and 27 spans on each facing side.
  // Excel numbers them from 39 on the left to 1 on the right. One nave is wide
  // enough to show its five working passages; the overview is then a true
  // repeated grid instead of a decorative strip.
  const greenhouseNaveCount = 39;
  const greenhouseNavePitch = 1.2;
  const greenhouseSpanCount = 27;
  const greenhouseSpanPitch = .42;
  const greenhouseRoadDepth = 2.7;
  const greenhouseBlockWidth = greenhouseNaveCount * greenhouseNavePitch;
  const greenhouseBlockDepth = greenhouseSpanCount * greenhouseSpanPitch;
  const greenhouseRoadEdge = greenhouseRoadDepth / 2;
  const greenhouseSideCenters = {
    left: -(greenhouseRoadEdge + greenhouseBlockDepth / 2),
    right: greenhouseRoadEdge + greenhouseBlockDepth / 2
  };
  // The overview uses the Excel scale. The close-up opens one nave as a
  // teachable working module, so the five passages have enough room to read.
  const overviewPassagePositions = [-.4, -.2, 0, .2, .4];
  const detailPassagePositions = [-2.8, -1.4, 0, 1.4, 2.8];
  const detailRowOffset = .44;
  const passageSideCenters = greenhouseSideCenters;
  let selectedNaveMarkers = [];
  let selectedEntryMarkers = [];
  let detailDemoObjects = [];
  let detailDemoAnchorX = 0;
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
    updateGuideText();
    updateLessonText();
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

  function updateGuideText() {
    const status = $("#guideStatus");
    if (!status) return;
    const keyByMode = {
      overview: "guideStatusOverview",
      mainRoad: "guideStatusRoad",
      passage: "guideStatusPassage",
      worker: "guideStatusWorker",
      lift: "guideStatusPassage",
      nave: "guideStatusOverview"
    };
    status.textContent = t(keyByMode[state.cameraMode] || "guideStatusOverview");
  }

  function updateLessonText() {
    const step = $("#lessonStep");
    const text = $("#lessonText");
    const button = $("#lessonNextButton");
    const buttonText = $("#lessonNextText");
    if (!step || !text || !button || !buttonText) return;
    const simpleMode = state.cameraMode === "nave"
      ? "nave"
      : ["passage", "worker", "lift"].includes(state.cameraMode) ? "passage" : "overview";
    const content = {
      overview: { step: "1/3", text: "lessonOverview", button: "lessonNextNave", next: "nave", icon: "→" },
      nave: { step: "2/3", text: "lessonNave", button: "lessonNextPassage", next: "passage", icon: "→" },
      passage: { step: "3/3", text: "lessonPassage", button: "lessonRestart", next: "overview", icon: "↺" }
    }[simpleMode];
    step.textContent = content.step;
    text.textContent = t(content.text);
    buttonText.textContent = t(content.button);
    button.dataset.nextMode = content.next;
    button.querySelector("b").textContent = content.icon;
    button.setAttribute("aria-label", t(content.button));
    button.classList.toggle("is-restart", simpleMode === "passage");
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
  let perspectiveCamera;
  let overviewCamera;
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
  let roofMeshes = [];
  let detailObjects = [];
  let planOnlyObjects = [];
  let detailStructureObjects = [];
  let overviewOnlyObjects = [];
  let teachingGroups = {};
  let teachingCart = null;
  let teachingWorker = null;
  let teachingPassageMarkers = [];
  let teachingPlants = [];
  let teachingCarts = [];
  let teachingPeople = [];
  const layerState = { plants: true, capillaries: true, carts: true, people: true };

  function box(width, height, depth, color, x, y, z, materialOptions = {}) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), new THREE.MeshStandardMaterial({ color, ...materialOptions }));
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
  }

  function greenhouseFrameLines(segments, color = 0x4f8f7e, opacity = .58) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(segments.flat(), 3));
    const lines = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
    scene.add(lines);
    overviewOnlyObjects.push(lines);
    return lines;
  }

  function detailFrameLines(segments, color = 0x5d7b70, opacity = .72) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(segments.flat(), 3));
    const lines = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
    scene.add(lines);
    detailStructureObjects.push(lines);
    return lines;
  }

  function roofPanel(width, depth, color, x, y, z, angle, materialOptions = {}) {
    const panel = box(width, .035, depth, color, x, y, z, {
      transparent: true,
      opacity: .13,
      depthWrite: false,
      side: THREE.DoubleSide,
      ...materialOptions
    });
    panel.rotation.z = angle;
    return panel;
  }

  function plant(x, z, side) {
    const group = new THREE.Group();
    group.userData.infoKey = "tomatoes";
    group.position.set(x, 0, z);
    const support = new THREE.Mesh(new THREE.CylinderGeometry(.008, .008, 3.7, 5), new THREE.MeshStandardMaterial({ color: 0xb7c0bd, metalness: .35, roughness: .5 }));
    support.position.y = 2.15;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(.018, .03, 2.75, 6), new THREE.MeshStandardMaterial({ color: 0x327b48, roughness: .86 }));
    stem.position.y = 1.62;
    group.add(support, stem);
    const tomatoes = [];
    [-.1, .08, -.04].forEach((offset, index) => {
      const tomato = new THREE.Mesh(new THREE.SphereGeometry(.055, 7, 7), new THREE.MeshStandardMaterial({ color: [0xd64b3b, 0xeb7a3e, 0x78a84d][index], roughness: .78 }));
      tomato.position.set(side * offset, 1.02 + index * .24, index % 2 ? .035 : -.03);
      group.add(tomato);
      tomatoes.push(tomato);
    });
    const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x3f8f50, roughness: .92 });
    [
      [side * .11, .86, .02, .14, .026, .07, side * .42],
      [-side * .09, 1.34, -.02, .13, .024, .065, -side * .3],
      [side * .1, 1.82, .01, .12, .022, .06, side * .35],
      [-side * .08, 2.27, -.01, .1, .02, .05, -side * .25]
    ].forEach(([leafX, leafY, leafZ, scaleX, scaleY, scaleZ, rotation]) => {
      const leaf = new THREE.Mesh(new THREE.SphereGeometry(1, 7, 5), leafMaterial);
      leaf.position.set(leafX, leafY, leafZ);
      leaf.scale.set(scaleX, scaleY, scaleZ);
      leaf.rotation.z = rotation;
      group.add(leaf);
    });
    scene.add(group);
    plantRecords.push({ group, tomatoes });
    return group;
  }

  function person(x, z, color, phase, axis = "z") {
    const group = new THREE.Group();
    group.userData.infoKey = "people";
    group.position.set(x, 0, z);
    const workMaterial = new THREE.MeshStandardMaterial({ color, roughness: .78 });
    const darkMaterial = new THREE.MeshStandardMaterial({ color: 0x273b43, roughness: .72 });
    const skinMaterial = new THREE.MeshStandardMaterial({ color: 0xd99472, roughness: .88 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(.28, .48, .2), workMaterial);
    body.position.y = .66;
    const head = new THREE.Mesh(new THREE.SphereGeometry(.15, 10, 8), skinMaterial);
    head.position.y = 1.07;
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(.18, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xf0b936, roughness: .7 }));
    helmet.position.y = 1.18;
    const legLeft = new THREE.Mesh(new THREE.BoxGeometry(.085, .34, .09), darkMaterial);
    const legRight = legLeft.clone();
    legLeft.position.set(-.07, .23, 0); legRight.position.set(.07, .23, 0);
    const armLeft = new THREE.Mesh(new THREE.CylinderGeometry(.035, .04, .34, 7), skinMaterial);
    const armRight = armLeft.clone();
    armLeft.position.set(-.2, .68, 0); armRight.position.set(.2, .68, 0);
    armLeft.rotation.z = -.35; armRight.rotation.z = .35;
    group.add(body, head, helmet, legLeft, legRight, armLeft, armRight);
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
    const handle = new THREE.Mesh(new THREE.BoxGeometry(.06, .5, .06), new THREE.MeshStandardMaterial({ color: 0x263e5a, metalness: .35, roughness: .48 }));
    handle.position.set(0, .7, -.47);
    const safetyBar = new THREE.Mesh(new THREE.BoxGeometry(.58, .05, .05), new THREE.MeshStandardMaterial({ color: 0xf0b936, metalness: .2, roughness: .6 }));
    safetyBar.position.set(0, .9, -.47);
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
    group.add(body, load, handle, safetyBar);
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

  function teachingBox(parent, width, height, depth, color, x, y, z, options = {}, infoKey = "") {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshStandardMaterial({ color, ...options })
    );
    mesh.position.set(x, y, z);
    if (infoKey) mesh.userData.infoKey = infoKey;
    parent.add(mesh);
    return mesh;
  }

  function teachingLines(parent, segments, color = 0x9aa8a4, opacity = .9) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(segments.flat(), 3));
    const lines = new THREE.LineSegments(
      geometry,
      new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity })
    );
    parent.add(lines);
    return lines;
  }

  function teachingPlant(parent, x, z, side) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.userData.infoKey = "tomatoes";
    const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x2f7e47, roughness: .88 });
    const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x4a9858, roughness: .92 });
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(.018, .027, 2.65, 6), stemMaterial);
    stem.position.y = 1.58;
    stem.userData.infoKey = "tomatoes";
    group.add(stem);
    [0, 1, 2].forEach((index) => {
      const leaf = new THREE.Mesh(new THREE.SphereGeometry(1, 7, 5), leafMaterial);
      leaf.scale.set(.13, .026, .065);
      leaf.position.set(side * (index % 2 ? -.11 : .11), 1.02 + index * .55, 0);
      leaf.rotation.z = side * (index % 2 ? -.35 : .35);
      leaf.userData.infoKey = "tomatoes";
      group.add(leaf);
      const fruit = new THREE.Mesh(
        new THREE.SphereGeometry(.052, 7, 7),
        new THREE.MeshStandardMaterial({ color: [0xd84c3d, 0xec763e, 0x7ca54e][index], roughness: .78 })
      );
      fruit.position.set(side * .09, 1.05 + index * .24, .04);
      fruit.userData.infoKey = "tomatoes";
      group.add(fruit);
    });
    parent.add(group);
    teachingPlants.push(group);
    return group;
  }

  function addTeachingFrame(parent, width, depth, height, startZ) {
    const segments = [];
    const add = (x1, y1, z1, x2, y2, z2) => segments.push([x1, y1, z1, x2, y2, z2]);
    const left = -width / 2;
    const right = width / 2;
    const ridge = height + .75;
    for (let z = startZ; z <= startZ + depth + .01; z += 2.4) {
      add(left, .2, z, left, height, z);
      add(right, .2, z, right, height, z);
      add(left, height, z, 0, ridge, z);
      add(0, ridge, z, right, height, z);
    }
    add(left, height, startZ, left, height, startZ + depth);
    add(0, ridge, startZ, 0, ridge, startZ + depth);
    add(right, height, startZ, right, height, startZ + depth);
    return teachingLines(parent, segments, 0x9ba8a5, .92);
  }

  function addTeachingOverview() {
    const group = new THREE.Group();
    group.name = "teaching-overview";
    teachingBox(group, 18, .12, 17, 0xe9eeeb, 0, .02, 0, { roughness: .96 });
    const road = teachingBox(group, 18, .08, 2.6, 0xd9bf84, 0, .12, 0, { roughness: .92 }, "middleRoad");
    road.userData.infoKey = "middleRoad";
    const naveXs = [-6.8, -5.1, -3.4, -1.7, 0, 1.7, 3.4, 5.1, 6.8];
    ["left", "right"].forEach((side) => {
      const direction = side === "right" ? 1 : -1;
      const centerZ = direction * 5.25;
      const floor = teachingBox(group, 16.2, .09, 7.6, 0xf4f6f3, 0, .13, centerZ, { roughness: .96 }, side === "right" ? "rightSide" : "leftSide");
      floor.userData.infoKey = side === "right" ? "rightSide" : "leftSide";
      naveXs.forEach((x) => {
        teachingBox(group, .62, .06, 6.8, 0x8abb70, x, .23, centerZ, { roughness: .9 }, "nave");
        teachingBox(group, .48, .035, .38, 0xf0b23c, x, .29, direction * 1.48, { roughness: .78 }, "passage");
        const roofSegments = [];
        const roadZ = direction * 1.35;
        const endZ = direction * 9.05;
        const xL = x - .72;
        const xR = x + .72;
        [roadZ, endZ].forEach((z) => {
          roofSegments.push([xL, .25, z, xL, 3.2, z], [xR, .25, z, xR, 3.2, z]);
          roofSegments.push([xL, 3.2, z, x, 3.8, z], [x, 3.8, z, xR, 3.2, z]);
        });
        roofSegments.push([xL, 3.2, roadZ, xL, 3.2, endZ], [x, 3.8, roadZ, x, 3.8, endZ], [xR, 3.2, roadZ, xR, 3.2, endZ]);
        teachingLines(group, roofSegments, 0xa4afac, .82);
      });
    });
    scene.add(group);
    return group;
  }

  function addTeachingNave() {
    const group = new THREE.Group();
    group.name = "teaching-nave";
    const passageXs = [-4, -2, 0, 2, 4];
    teachingBox(group, 11.2, .1, 15.4, 0xf0f3f0, 0, .02, .3, { roughness: .97 });
    teachingBox(group, 11.2, .08, 1.6, 0xd9bf84, 0, .12, -7.1, { roughness: .92 }, "middleRoad");
    passageXs.forEach((x, index) => {
      const passageNumber = index + 1;
      const walkway = teachingBox(group, .86, .04, 12.8, 0xd9dbd6, x, .17, .4, { roughness: .96 }, "passage");
      walkway.userData.passageNumber = passageNumber;
      [-.2, .2].forEach((offset) => teachingBox(group, .045, .045, 12.8, 0x71736f, x + offset, .23, .4, { metalness: .68, roughness: .38 }, "passage"));
      [-.58, .58].forEach((offset, rowIndex) => {
        teachingBox(group, .24, .14, 12.5, 0xf5f5f0, x + offset, .29, .48, { roughness: .8 }, "growMat");
        teachingBox(group, .15, .055, 12.35, 0xb78c5b, x + offset, .4, .48, { roughness: .9 }, "growMat");
        teachingBox(group, .07, .16, 12.15, 0x6ea657, x + offset, .52, .55, { roughness: .9 }, "tomatoes");
        teachingBox(group, .022, .03, 12.25, 0x309ad7, x + offset, .58, .48, { roughness: .45 }, "capillaries");
      });
      const threshold = teachingBox(group, .94, .07, .34, 0xf0ad32, x, .24, -6.02, { roughness: .72, emissive: 0x6b3d08, emissiveIntensity: index === 0 ? .25 : 0 }, "passage");
      threshold.userData.passageNumber = passageNumber;
      teachingPassageMarkers.push(threshold);
    });
    addTeachingFrame(group, 10.8, 13.3, 4.7, -6.1);
    scene.add(group);
    return group;
  }

  function addTeachingPassage() {
    const group = new THREE.Group();
    group.name = "teaching-passage";
    teachingBox(group, 3.3, .1, 16.4, 0xf0f3f0, 0, .02, .7, { roughness: .97 });
    const walkway = teachingBox(group, .9, .04, 15.2, 0xd9dbd6, 0, .17, .7, { roughness: .96 }, "passage");
    [-.2, .2].forEach((x) => teachingBox(group, .045, .045, 15.1, 0x6e706c, x, .23, .7, { metalness: .7, roughness: .35 }, "passage"));
    [-.72, .72].forEach((x, sideIndex) => {
      const rowSide = sideIndex === 0 ? "leftRow" : "rightRow";
      teachingBox(group, .3, .16, 15, 0xf6f5ef, x, .3, .7, { roughness: .78 }, "growMat");
      teachingBox(group, .18, .06, 14.8, 0xb78c5b, x, .41, .7, { roughness: .9 }, "growMat");
      teachingBox(group, .026, .03, 14.8, 0x299bdc, x, .57, .7, { roughness: .42 }, "capillaries");
      for (let z = -5; z <= 7.7; z += 1.65) teachingPlant(group, x, z, sideIndex === 0 ? -1 : 1);
      const rowMarker = teachingBox(group, .34, .07, .65, sideIndex === 0 ? 0x4e9ad0 : 0x55a56b, x, .65, -5.65, { emissive: sideIndex === 0 ? 0x17496c : 0x174f2a, emissiveIntensity: .35 }, rowSide);
      rowMarker.userData.infoKey = rowSide;
    });
    addTeachingFrame(group, 3.15, 15.2, 4.6, -6.9);

    const cart = new THREE.Group();
    const cartBody = teachingBox(cart, .68, .28, .95, 0x336da8, 0, .36, 0, { metalness: .18, roughness: .55 }, "harvestCart");
    teachingBox(cart, .48, .23, .62, 0xe5ae32, 0, .63, 0, { roughness: .72 }, "harvestCart");
    [-.27, .27].forEach((x) => [-.32, .32].forEach((z) => {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .065, 10), new THREE.MeshStandardMaterial({ color: 0x2f363b, roughness: .6 }));
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, .13, z);
      wheel.userData.infoKey = "harvestCart";
      cart.add(wheel);
    }));
    cart.position.set(0, 0, 2.5);
    group.add(cart);
    teachingCart = cart;
    teachingCarts.push(cart);

    const worker = new THREE.Group();
    teachingBox(worker, .28, .5, .2, 0xe7aa32, 0, .7, 0, { roughness: .75 }, "people");
    teachingBox(worker, .1, .38, .1, 0x31424b, -.07, .26, 0, { roughness: .75 }, "people");
    teachingBox(worker, .1, .38, .1, 0x31424b, .07, .26, 0, { roughness: .75 }, "people");
    const head = new THREE.Mesh(new THREE.SphereGeometry(.14, 9, 8), new THREE.MeshStandardMaterial({ color: 0xd99a76, roughness: .86 }));
    head.position.y = 1.08;
    head.userData.infoKey = "people";
    worker.add(head);
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(.17, 9, 6, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xf0c13b, roughness: .7 }));
    helmet.position.y = 1.17;
    helmet.userData.infoKey = "people";
    worker.add(helmet);
    worker.position.set(.25, 0, 4.1);
    group.add(worker);
    teachingWorker = worker;
    teachingPeople.push(worker);

    scene.add(group);
    return group;
  }

  function addTeachingScenes() {
    teachingGroups = {
      overview: addTeachingOverview(),
      nave: addTeachingNave(),
      passage: addTeachingPassage()
    };
    updateTeachingVisibility();
  }

  function updateTeachingVisibility() {
    if (!teachingGroups.overview) return;
    teachingGroups.overview.visible = ["overview", "mainRoad"].includes(state.cameraMode);
    teachingGroups.nave.visible = state.cameraMode === "nave";
    teachingGroups.passage.visible = ["passage", "worker", "lift"].includes(state.cameraMode);
    teachingPlants.forEach((object) => { object.visible = layerState.plants; });
    teachingCarts.forEach((object) => { object.visible = layerState.carts; });
    teachingPeople.forEach((object) => { object.visible = layerState.people; });
    teachingPassageMarkers.forEach((marker, index) => {
      const selected = index + 1 === state.selectedPassage;
      marker.material.emissiveIntensity = selected ? .55 : 0;
      marker.scale.y = selected ? 1.5 : 1;
    });
  }

  function addGlasshouse() {
    // In the overview the roof must stay readable as a greenhouse outline, not hide the plan below it.
    const glass = { color: 0xd8eeea, transparent: true, opacity: .025, depthWrite: false, roughness: .2, metalness: .03, side: THREE.DoubleSide };
    const frame = 0x9aa8a4;
    const floor = 0xe7ece8;
    const passage = 0xd6bd83;

    const naveCount = greenhouseNaveCount;
    const spanCount = greenhouseSpanCount;
    const navePitch = greenhouseNavePitch;
    const spanPitch = greenhouseSpanPitch;
    const blockWidth = greenhouseBlockWidth;
    const blockDepth = spanCount * spanPitch;
    const roadDepth = greenhouseRoadDepth;
    const roadEdge = roadDepth / 2;
    const sideCenters = greenhouseSideCenters;
    const naveXs = Array.from({ length: naveCount }, (_, index) => -blockWidth / 2 + navePitch * (index + .5));
    const spanZ = (side, number) => side === "right" ? roadEdge + (number - .5) * spanPitch : -roadEdge - (number - .5) * spanPitch;
    detailDemoObjects = [];
    selectedNaveMarkers = [];
    selectedEntryMarkers = [];
    const demoNaveIndex = naveCount - state.selectedNave;
    const demoNaveCenterX = naveXs[demoNaveIndex] || naveXs[Math.floor(naveCount / 2)];
    detailDemoAnchorX = demoNaveCenterX;
    const registerDetail = (object) => {
      object.userData.detailDemoBaseX = object.position.x;
      detailDemoObjects.push(object);
      return object;
    };

    box(blockWidth, .12, blockDepth * 2 + roadDepth + .5, floor, 0, .05, 0);
    const centralRoad = box(blockWidth, .06, roadDepth, passage, 0, .16, 0);
    centralRoad.userData.infoKey = "middleRoad";

    ["left", "right"].forEach((naveSide) => {
      const centerZ = sideCenters[naveSide];
      const blockFloor = box(blockWidth, .08, blockDepth, floor, 0, .15, centerZ);
      overviewOnlyObjects.push(blockFloor);
      roofMeshes.push(box(blockWidth, .07, blockDepth, 0xd5ece7, 0, 5.72, centerZ, glass));
      const endWall = box(blockWidth, 5.8, .08, 0xd3e9e4, 0, 2.9, centerZ + (naveSide === "right" ? blockDepth / 2 : -blockDepth / 2), glass);
      const leftWall = box(.08, 5.8, blockDepth, 0xd3e9e4, -blockWidth / 2, 2.9, centerZ, glass);
      const rightWall = box(.08, 5.8, blockDepth, 0xd3e9e4, blockWidth / 2, 2.9, centerZ, glass);
      overviewOnlyObjects.push(endWall, leftWall, rightWall);
      for (let nave = 0; nave <= naveCount; nave += 1) {
        const x = -blockWidth / 2 + navePitch * nave;
        const naveLine = box(.035, 5.7, blockDepth, frame, x, 2.9, centerZ);
        naveLine.userData.infoKey = "nave";
        naveLine.userData.naveSide = naveSide;
        naveLine.userData.naveNumber = naveCount - Math.min(nave, naveCount);
        planOnlyObjects.push(naveLine);
      }
      for (let span = 0; span <= spanCount; span += 1) {
        const z = naveSide === "right" ? roadEdge + span * spanPitch : -roadEdge - span * spanPitch;
        const planSpanLine = box(blockWidth, .055, .035, frame, 0, 2.95, z);
        overviewOnlyObjects.push(planSpanLine);
      }
      for (let span = 1; span <= spanCount; span += 1) {
        const z = spanZ(naveSide, span);
        const planMat = box(blockWidth - .08, .045, .22, span % 2 ? 0x78a9d5 : 0x87bd69, 0, .29, z);
        overviewOnlyObjects.push(planMat);
      }
      naveXs.forEach((x) => {
        const planBed = box(navePitch * .68, .16, blockDepth - .16, 0x64a965, x, .38, centerZ);
        overviewOnlyObjects.push(planBed);
      });

      // A real multi-span greenhouse is made from repeated roof modules,
      // gutters and structural bays. Keep the roof translucent in the plan so
      // the roads and plants remain visible to a new worker.
      const eaveY = 5.3;
      const ridgeY = 5.82;
      const halfNave = navePitch / 2;
      const roofAngle = Math.atan2(ridgeY - eaveY, halfNave);
      const roofLength = Math.hypot(halfNave, ridgeY - eaveY);
      naveXs.forEach((x) => {
        const leftRoof = roofPanel(roofLength, blockDepth - .08, 0xd5ece7, x - halfNave / 2, (eaveY + ridgeY) / 2, centerZ, roofAngle, { opacity: .045 });
        const rightRoof = roofPanel(roofLength, blockDepth - .08, 0xd5ece7, x + halfNave / 2, (eaveY + ridgeY) / 2, centerZ, -roofAngle, { opacity: .045 });
        overviewOnlyObjects.push(leftRoof, rightRoof);
      });

      const frameSegments = [];
      const addFrame = (x1, y1, z1, x2, y2, z2) => frameSegments.push([x1, y1, z1, x2, y2, z2]);
      for (let boundary = 0; boundary <= naveCount; boundary += 1) {
        const x = -blockWidth / 2 + boundary * navePitch;
        for (let span = 0; span <= spanCount; span += 1) {
          const z = naveSide === "right" ? roadEdge + span * spanPitch : -roadEdge - span * spanPitch;
          addFrame(x, .24, z, x, eaveY, z);
        }
        const zStart = naveSide === "right" ? roadEdge : -roadEdge;
        const zEnd = naveSide === "right" ? roadEdge + blockDepth : -roadEdge - blockDepth;
        addFrame(x, eaveY, zStart, x, eaveY, zEnd);
      }
      naveXs.forEach((x) => {
        const ridgeZStart = naveSide === "right" ? roadEdge : -roadEdge;
        const ridgeZEnd = naveSide === "right" ? roadEdge + blockDepth : -roadEdge - blockDepth;
        addFrame(x, ridgeY, ridgeZStart, x, ridgeY, ridgeZEnd);
        for (let span = 0; span <= spanCount; span += 1) {
          const z = naveSide === "right" ? roadEdge + span * spanPitch : -roadEdge - span * spanPitch;
          addFrame(x - halfNave, eaveY, z, x, ridgeY, z);
          addFrame(x, ridgeY, z, x + halfNave, eaveY, z);
        }
      });
      greenhouseFrameLines(frameSegments, frame, .43);
    });

    ["left", "right"].forEach((naveSide) => {
      const marker = new THREE.Mesh(
        new THREE.BoxGeometry(navePitch * .82, .035, blockDepth - .18),
        new THREE.MeshBasicMaterial({ color: 0xf0a832, transparent: true, opacity: .3, depthWrite: false })
      );
      marker.position.set(demoNaveCenterX, .58, sideCenters[naveSide]);
      marker.userData.infoKey = "nave";
      marker.userData.naveNumber = state.selectedNave;
      scene.add(marker);
      overviewOnlyObjects.push(marker);
      selectedNaveMarkers.push(marker);
    });
    const entryOffsets = [-.36, -.18, 0, .18, .36];
    entryOffsets.forEach((offset, index) => {
      ["left", "right"].forEach((naveSide) => {
        const direction = naveSide === "right" ? 1 : -1;
        const entryMarker = new THREE.Mesh(
          new THREE.BoxGeometry(.17, .09, .42),
          new THREE.MeshBasicMaterial({ color: 0xffc447, transparent: true, opacity: .95, depthWrite: false })
        );
        entryMarker.position.set(demoNaveCenterX + offset, .67, direction * (roadEdge + .08));
        entryMarker.userData.infoKey = "passage";
        entryMarker.userData.passageNumber = index + 1;
        scene.add(entryMarker);
        overviewOnlyObjects.push(entryMarker);
        selectedEntryMarkers.push(entryMarker);
      });
    });

    // A denser crop sample makes the close-up read like a real working passage.
    detailPassagePositions.forEach((x, passageIndex) => {
      ["left", "right"].forEach((naveSide) => {
        const centerZ = sideCenters[naveSide];
        for (let span = 2; span <= spanCount; span += 4) {
          const z = spanZ(naveSide, span);
          const leftPlant = plant(x - detailRowOffset, z, -1);
          const rightPlant = plant(x + detailRowOffset, z, 1);
          [leftPlant, rightPlant].forEach((plantGroup) => {
            plantGroup.userData.detailOnly = true;
            plantGroup.userData.passageNumber = passageIndex + 1;
            plantGroup.userData.naveSide = naveSide;
            detailObjects.push(plantGroup);
            registerDetail(plantGroup);
          });
        }
        [-detailRowOffset, detailRowOffset].forEach((rowOffset) => {
          const capillary = box(.028, .045, blockDepth - .2, 0x3b9bca, x + rowOffset, .64, centerZ);
          capillary.userData.infoKey = "capillaries";
          capillary.userData.detailOnly = true;
          detailObjects.push(capillary);
          capillaryMeshes.push(capillary);
          registerDetail(capillary);
        });
      });
    });

    // Close views use real narrow beds and working rails instead of the wide plan blocks.
    detailPassagePositions.forEach((x) => {
      ["left", "right"].forEach((naveSide) => {
        const centerZ = sideCenters[naveSide];
        [-detailRowOffset, detailRowOffset].forEach((rowOffset) => {
          const bed = box(.2, .14, blockDepth - .24, 0xf1f3ef, x + rowOffset, .29, centerZ, { metalness: .08, roughness: .72 });
          const substrate = box(.14, .055, blockDepth - .3, 0xb98e5c, x + rowOffset, .39, centerZ, { roughness: .88 });
          detailStructureObjects.push(bed, substrate);
          [bed, substrate].forEach(registerDetail);
          [2.1, 3.1].forEach((height) => {
            const supportWire = box(.014, .014, blockDepth - .3, 0x71867b, x + rowOffset, height, centerZ, { metalness: .15, roughness: .65 });
            detailStructureObjects.push(supportWire);
            registerDetail(supportWire);
          });
        });
      });
    });

    // Working details inside the selected nave: a walking lane between two
    // rows, two floor rails for the cart, and visible drip points along every
    // row. These details explain the place better than another large label.
    const emitterGeometry = new THREE.SphereGeometry(.038, 6, 5);
    const emitterMaterial = new THREE.MeshStandardMaterial({ color: 0x2b9ee5, emissive: 0x0a426b, emissiveIntensity: .38, roughness: .4 });
    detailPassagePositions.forEach((x) => {
      ["left", "right"].forEach((naveSide) => {
        const centerZ = sideCenters[naveSide];
        const direction = naveSide === "right" ? 1 : -1;
        const walkway = box(.76, .035, blockDepth - .22, 0xd5d7d1, x, .19, centerZ, { roughness: .94 });
        walkway.userData.infoKey = "passage";
        const trackNear = box(.04, .04, blockDepth - .16, 0x6f706b, x - .2, .235, centerZ, { metalness: .68, roughness: .38 });
        const trackFar = box(.04, .04, blockDepth - .16, 0x6f706b, x + .2, .235, centerZ, { metalness: .68, roughness: .38 });
        detailStructureObjects.push(walkway, trackNear, trackFar);
        [walkway, trackNear, trackFar].forEach(registerDetail);
        for (let span = 1; span <= spanCount; span += 1) {
          const z = spanZ(naveSide, span);
          [-detailRowOffset, detailRowOffset].forEach((rowOffset) => {
            const emitter = new THREE.Mesh(emitterGeometry, emitterMaterial);
            emitter.position.set(x + rowOffset, .58, z);
            emitter.userData.infoKey = "capillaries";
            emitter.userData.detailOnly = true;
            scene.add(emitter);
            detailObjects.push(emitter);
            capillaryMeshes.push(emitter);
            registerDetail(emitter);
          });
        }
        const entryThreshold = box(.8, .055, .28, 0xf0b23c, x, .24, direction * (roadEdge + .12), { roughness: .7 });
        entryThreshold.userData.infoKey = "passage";
        detailStructureObjects.push(entryThreshold);
        registerDetail(entryThreshold);
      });
    });

    // Slim posts, rafters and translucent roof strips make the close view feel like
    // one selected nave. The old version used the whole greenhouse width here,
    // which made a close-up look like several naves glued together.
    const structureMaterial = { metalness: .72, roughness: .28 };
    const detailNaveWidth = 7.2;
    ["left", "right"].forEach((naveSide) => {
      const centerZ = sideCenters[naveSide];
      const detailEaveY = 5.24;
      const detailRidgeY = 5.92;
      const detailHalf = detailNaveWidth / 2;
      const detailRoofAngle = Math.atan2(detailRidgeY - detailEaveY, detailHalf);
      const detailRoofLength = Math.hypot(detailHalf, detailRidgeY - detailEaveY);
      const roofLeft = roofPanel(detailRoofLength, blockDepth - .12, 0xcfe9e4, -detailHalf / 2, (detailEaveY + detailRidgeY) / 2, centerZ, detailRoofAngle, { opacity: .065 });
      const roofRight = roofPanel(detailRoofLength, blockDepth - .12, 0xcfe9e4, detailHalf / 2, (detailEaveY + detailRidgeY) / 2, centerZ, -detailRoofAngle, { opacity: .065 });
      const gutterLeft = box(.045, .045, blockDepth - .12, 0xb6c3bf, -detailHalf, detailEaveY, centerZ, structureMaterial);
      const gutterRight = box(.045, .045, blockDepth - .12, 0xb6c3bf, detailHalf, detailEaveY, centerZ, structureMaterial);
      const ridge = box(.055, .055, blockDepth - .12, 0xb6c3bf, 0, detailRidgeY, centerZ, structureMaterial);
      detailStructureObjects.push(roofLeft, roofRight, gutterLeft, gutterRight, ridge);
      [roofLeft, roofRight, gutterLeft, gutterRight, ridge].forEach(registerDetail);

      // Structural rhythm: posts and rafters repeat at every section, not at
      // every plant row. This keeps the close-up physically believable.
      const frameSegments = [];
      const addFrame = (x1, y1, z1, x2, y2, z2) => frameSegments.push([x1, y1, z1, x2, y2, z2]);
      for (let span = 0; span <= spanCount; span += 1) {
        const z = spanZ(naveSide, span);
        addFrame(-detailHalf, .24, z, -detailHalf, detailEaveY, z);
        addFrame(0, .24, z, 0, detailRidgeY, z);
        addFrame(detailHalf, .24, z, detailHalf, detailEaveY, z);
        addFrame(-detailHalf, detailEaveY, z, 0, detailRidgeY, z);
        addFrame(0, detailRidgeY, z, detailHalf, detailEaveY, z);
      }
      const zStart = naveSide === "right" ? roadEdge : -roadEdge;
      const zEnd = naveSide === "right" ? roadEdge + blockDepth : -roadEdge - blockDepth;
      addFrame(-detailHalf, detailEaveY, zStart, -detailHalf, detailEaveY, zEnd);
      addFrame(0, detailRidgeY, zStart, 0, detailRidgeY, zEnd);
      addFrame(detailHalf, detailEaveY, zStart, detailHalf, detailEaveY, zEnd);
      const detailFrames = detailFrameLines(frameSegments, 0xaab8b4, .82);
      registerDetail(detailFrames);
    });
    [-1, 1].forEach((direction) => {
      const roadEdgeLine = box(blockWidth - .1, .045, .08, 0xb08c51, 0, .23, direction * roadEdge, { roughness: .85 });
      detailStructureObjects.push(roadEdgeLine);
    });

    // The source plan shows three wide connectors crossing the central road.
    [-5.28, 0, 5.28].forEach((x) => {
      const connector = box(.82, .1, roadDepth, 0xf0c35a, x, .25, 0);
      connector.userData.infoKey = "middleRoad";
    });
    for (let x = -blockWidth / 2 + .22; x <= blockWidth / 2; x += navePitch * 5) {
      const planRoadMark = box(.06, .07, roadDepth, 0x8e7045, x, .28, 0);
      overviewOnlyObjects.push(planRoadMark);
    }
    [-.43, .43].forEach((z) => {
      const wheelTrack = box(blockWidth - .12, .025, .1, 0xb29a69, 0, .22, z, { roughness: .9 });
      detailStructureObjects.push(wheelTrack);
    });

    // Keep a lightweight crop layer: plants are sampled across the 39-nave grid for phone performance.
    const sampleNaves = [0, 4, 9, 14, 19, 24, 29, 34, 38];
    ["left", "right"].forEach((naveSide) => {
      sampleNaves.forEach((naveIndex) => {
        const x = naveXs[naveIndex];
        for (let span = 2; span <= spanCount; span += 4) {
          const z = spanZ(naveSide, span);
          const leftPlant = plant(x - .07, z, x < 0 ? -1 : 1);
          const rightPlant = plant(x + .07, z, x < 0 ? -1 : 1);
          [leftPlant, rightPlant].forEach((plantGroup) => Object.assign(plantGroup.userData, { passageNumber: ((span - 1) % 5) + 1, naveSide, rowSide: plantGroup === leftPlant ? "left" : "right" }));
          const waterDot = new THREE.Mesh(new THREE.SphereGeometry(.055, 7, 7), new THREE.MeshStandardMaterial({ color: 0x2f9be5, emissive: 0x0a426b, emissiveIntensity: .45 }));
          waterDot.position.set(x, .58, z);
          scene.add(waterDot);
          waterDots.push({ mesh: waterDot, baseX: x, baseZ: z, phase: z * .15 });
        }
      });
    });

    // The detail controls show five entrances in one selected nave. Each pair is aligned across the road.
    detailPassagePositions.forEach((x, index) => {
      const passageNumber = index + 1;
      ["left", "right"].forEach((naveSide) => {
        const direction = naveSide === "right" ? 1 : -1;
        const entranceZ = direction * (roadEdge + .14);
        const path = box(.24, .035, .92, 0xf1dfaf, x, .5, entranceZ + direction * .46);
        path.userData.infoKey = "passage";
        Object.assign(path.userData, { naveSide, passageNumber });
        const entrance = box(.46, .14, .5, 0xf0a832, x, .58, entranceZ);
        entrance.userData.infoKey = "passage";
        Object.assign(entrance.userData, { naveSide, passageNumber });
        const portalLeft = box(.055, .95, .055, 0xf0a832, x - .22, .64, entranceZ, { metalness: .12, roughness: .62 });
        const portalRight = box(.055, .95, .055, 0xf0a832, x + .22, .64, entranceZ, { metalness: .12, roughness: .62 });
        const portalTop = box(.5, .055, .055, 0xf0a832, x, 1.1, entranceZ, { metalness: .12, roughness: .62 });
        const entryMarker = new THREE.Mesh(
          new THREE.CylinderGeometry(.16, .16, .035, 16),
          new THREE.MeshStandardMaterial({ color: 0xffc447, emissive: 0x6b3e08, emissiveIntensity: .4, roughness: .6 })
        );
        entryMarker.rotation.x = Math.PI / 2;
        entryMarker.position.set(x, .82, entranceZ - direction * .12);
        [portalLeft, portalRight, portalTop].forEach((portalPart) => {
          portalPart.userData.infoKey = "passage";
          Object.assign(portalPart.userData, { naveSide, passageNumber });
          detailStructureObjects.push(portalPart);
          registerDetail(portalPart);
        });
        entryMarker.userData.infoKey = "passage";
        Object.assign(entryMarker.userData, { naveSide, passageNumber });
        detailStructureObjects.push(entryMarker);
        registerDetail(entryMarker);
        registerDetail(path);
        registerDetail(entrance);
        rowRecords.push({ mat: path, bed: path, capillary: path, passageNumber, naveSide, rowSide: "left" });
        passageRecords.push({ mesh: path, entrance, naveSide, passageNumber });
      });
    });

    overheadCart(-3.3, sideCenters.right, 0, false);
    overheadCart(3.3, sideCenters.left, 1.4, false);
    overheadCart(0, sideCenters.right, 2.8, true);
    person(-5.28, sideCenters.right, 0xe36b54, 0); person(0, sideCenters.left, 0x4d86c6, 1.4); person(5.28, sideCenters.right, 0xe5a631, 2.8); person(3.3, sideCenters.left, 0x8d67bf, 4.1);
    harvestCart(-5.28, sideCenters.left, .8);
  }

  function lookAt(position, target) {
    camera.position.lerp(new THREE.Vector3(...position), .085);
    targetCamera.lerp(new THREE.Vector3(...target), .085);
    camera.lookAt(targetCamera);
  }

  const cameraViews = {
    overview: { position: [0, 78, 66], target: [0, .8, 0] },
    nave: { position: [0, 14, 18], target: [0, 1.4, 0] },
    lift: { position: [2.5, 4.8, 14], target: [-4.8, 1.35, 4.5] },
    mainRoad: { position: [19, 5.8, 0], target: [-1, 1.0, 0] },
    passage: { position: [0, 2.55, 3.8], target: [0, 1.25, 6.75] },
    worker: { position: [0, 1.65, 4.8], target: [0, 1.45, 6.75] }
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
    if (overviewCamera && perspectiveCamera) {
      camera = perspectiveCamera;
      camera.up.set(0, 1, 0);
    }
    roofMeshes.forEach((mesh) => { mesh.visible = false; });
    detailObjects.forEach((object) => { object.visible = state.cameraMode !== "overview"; });
    detailStructureObjects.forEach((object) => { object.visible = state.cameraMode !== "overview"; });
    planOnlyObjects.forEach((object) => { object.visible = state.cameraMode === "overview"; });
    overviewOnlyObjects.forEach((object) => { object.visible = state.cameraMode === "overview"; });
    const frame = $(".scene-frame");
    if (frame) frame.dataset.view = state.cameraMode;
    resetCameraControls();
    document.querySelectorAll("[data-camera]").forEach((button) => button.classList.toggle("is-active", button.dataset.camera === mode));
    applyLayerVisibility();
    updateGuideText();
    updateLessonText();
  }

  function getCameraView(mode) {
    if (mode === "overview") return { position: [14.8, 15.8, -19.5], target: [0, .5, 0] };
    if (mode === "mainRoad") return { position: [11.5, 4.8, 0], target: [0, .7, 0] };
    if (mode === "nave") return { position: [0, 10.8, -17.5], target: [0, .65, 1.4] };
    if (mode === "passage") return { position: [0, 1.72, -7.4], target: [0, 1.25, 4.8] };
    if (mode === "worker") {
      const rowX = state.selectedRowSide === "left" ? -.72 : .72;
      return { position: [0, 1.62, -5.8], target: [rowX, 1.45, 2.8] };
    }
    if (mode === "lift") return { position: [2.6, 3.6, -5.8], target: [0, 1.55, 2.8] };
    return cameraViews[mode] || cameraViews.overview;
  }

  function selectedPassageX() {
    return selectedNaveCenterX() + (detailPassagePositions[state.selectedPassage - 1] || detailPassagePositions[0]);
  }

  function selectedNaveCenterX() {
    const index = greenhouseNaveCount - clamp(Number(state.selectedNave) || 20, 1, greenhouseNaveCount);
    return -greenhouseBlockWidth / 2 + greenhouseNavePitch * (index + .5);
  }

  function syncNaveVisuals() {
    const deltaX = selectedNaveCenterX() - detailDemoAnchorX;
    detailDemoObjects.forEach((object) => {
      object.position.x = object.userData.detailDemoBaseX + deltaX;
    });
    selectedNaveMarkers.forEach((marker) => {
      marker.position.x = selectedNaveCenterX();
      marker.userData.naveNumber = state.selectedNave;
    });
    const entryOffsets = overviewPassagePositions;
    selectedEntryMarkers.forEach((marker, index) => {
      marker.position.x = selectedNaveCenterX() + entryOffsets[Math.floor(index / 2)];
    });
  }

  function selectedPassageZ() {
    return passageSideCenters[state.selectedNaveSide];
  }

  function updateSelection() {
    state.selectedNave = clamp(Number(state.selectedNave) || 20, 1, greenhouseNaveCount);
    const naveInput = $("#naveNumberInput");
    if (naveInput) naveInput.value = String(state.selectedNave);
    const selectedNaveNumber = $("#selectedNaveNumber");
    if (selectedNaveNumber) selectedNaveNumber.textContent = String(state.selectedNave);
    syncNaveVisuals();
    const sideText = state.selectedNaveSide === "left" ? t("leftSide") : t("rightSide");
    const rowText = state.selectedRowSide === "left" ? t("leftRow") : t("rightRow");
    const selection = t("selectionText").replace("{nave}", String(state.selectedNave)).replace("{side}", sideText).replace("{passage}", String(state.selectedPassage)).replace("{row}", rowText);
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
    const selectedX = selectedNaveCenterX() + (overviewPassagePositions[state.selectedPassage - 1] || overviewPassagePositions[0]);
    selectionArrows.forEach((arrow, index) => {
      const side = index < 2 ? state.selectedNaveSide : (state.selectedNaveSide === "left" ? "right" : "left");
      const direction = side === "right" ? 1 : -1;
      arrow.position.set(selectedX + (index % 2 ? .18 : -.18), .82, direction * 1.49);
      arrow.setDirection(new THREE.Vector3(0, 0, direction));
      arrow.visible = true;
    });
    document.querySelectorAll("[data-nave-side]").forEach((button) => button.classList.toggle("is-active", button.dataset.naveSide === state.selectedNaveSide));
    document.querySelectorAll("[data-passage]").forEach((button) => button.classList.toggle("is-active", Number(button.dataset.passage) === state.selectedPassage));
    document.querySelectorAll("[data-row-side]").forEach((button) => button.classList.toggle("is-active", button.dataset.rowSide === state.selectedRowSide));
    applyLayerVisibility();
  }

  function applyLayerVisibility() {
    plantRecords.forEach((record) => {
      const isDetailPlant = Boolean(record.group.userData.detailOnly);
      const inSelectedPassage = isDetailPlant
        && record.group.userData.passageNumber === state.selectedPassage
        && record.group.userData.naveSide === state.selectedNaveSide;
      const closePassage = ["passage", "worker", "lift"].includes(state.cameraMode);
      record.group.visible = layerState.plants
        && ((!isDetailPlant && state.cameraMode === "overview") || (inSelectedPassage && closePassage));
    });
    capillaryMeshes.forEach((mesh) => {
      mesh.visible = layerState.capillaries && state.cameraMode !== "overview" && state.cameraMode !== "nave";
    });
    waterDots.forEach((dot) => { dot.mesh.visible = state.waterActive && layerState.capillaries && state.cameraMode === "overview"; });
    cartRecords.forEach((group) => { group.visible = layerState.carts && state.cameraMode !== "nave"; });
    peopleRecords.forEach((group) => { group.visible = layerState.people && state.cameraMode !== "nave"; });
    updateTeachingVisibility();
    document.querySelectorAll("[data-layer]").forEach((button) => button.classList.toggle("is-on", layerState[button.dataset.layer]));
  }

  function applyGrowthStage(stage) {
    state.growthStage = Number(stage);
    const slider = $("#growthSlider");
    if (slider && slider.value !== String(state.growthStage)) slider.value = String(state.growthStage);
    const colors = [0x77b84e, 0xa9b94e, 0x79b94f];
    const ripePalette = [0xd9483f, 0xec763e, 0x7da74d];
    plantRecords.forEach((record, plantIndex) => {
      record.group.scale.y = .8 + state.growthStage * .07;
      record.tomatoes.forEach((tomato, tomatoIndex) => {
        const color = state.growthStage === 3
          ? ripePalette[(plantIndex + tomatoIndex) % ripePalette.length]
          : colors[Math.min(state.growthStage, colors.length - 1)];
        tomato.material.color.setHex(color);
      });
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
    { mode: "overview", nave: 20, side: "left", passage: 1, row: "left" },
    { mode: "mainRoad", nave: 20, side: "left", passage: 1, row: "left" },
    { mode: "nave", nave: 20, side: "left", passage: 3, row: "left" },
    { mode: "passage", nave: 20, side: "left", passage: 3, row: "right" },
    { mode: "worker", nave: 20, side: "left", passage: 3, row: "right" },
    { mode: "lift", nave: 20, side: "left", passage: 3, row: "right" }
  ];

  function updateTourStep(time) {
    if (!state.tourActive) return;
    if (!state.tourStart) state.tourStart = time;
    const stepIndex = Math.floor((time - state.tourStart) / 6000) % tourSteps.length;
    if (stepIndex === state.tourStep) return;
    const step = tourSteps[stepIndex];
    state.tourStep = stepIndex;
    state.selectedNave = step.nave;
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
      scene.background = new THREE.Color(0xe7f2ee);
      scene.fog = new THREE.Fog(0xe7f2ee, 46, 92);
      perspectiveCamera = new THREE.PerspectiveCamera(46, 1, .1, 220);
      overviewCamera = new THREE.OrthographicCamera(-14, 14, 14, -14, .1, 200);
      // Match the source spreadsheet: right side above the horizontal road,
      // left side below it.
      overviewCamera.up.set(0, 0, -1);
      camera = overviewCamera;
      targetCamera = new THREE.Vector3(0, 1, 0);
      renderer = new THREE.WebGLRenderer({ canvas: sceneCanvas, antialias: true, alpha: false, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.shadowMap.enabled = false;
      scene.add(new THREE.HemisphereLight(0xffffff, 0x6e9677, 1.8));
      const sun = new THREE.DirectionalLight(0xfff8e8, 2.0); sun.position.set(12, 22, 10); scene.add(sun);
      addTeachingScenes();
      selectionArrows = [];
      applyGrowthStage(state.growthStage);
      updateSelection();
      configureCamera(state.cameraMode, true);
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
    const aspect = width / height;
    if (perspectiveCamera) {
      perspectiveCamera.aspect = aspect;
      perspectiveCamera.updateProjectionMatrix();
    }
    if (overviewCamera) {
      const planWidth = greenhouseBlockWidth + 2.2;
      const planDepth = greenhouseBlockDepth * 2 + greenhouseRoadDepth + 2.2;
      const halfHeight = Math.max(planDepth / 2, planWidth / (2 * aspect)) * 1.08;
      overviewCamera.left = -halfHeight * aspect;
      overviewCamera.right = halfHeight * aspect;
      overviewCamera.top = halfHeight;
      overviewCamera.bottom = -halfHeight;
      overviewCamera.updateProjectionMatrix();
    }
  }

  function animate(time) {
    requestAnimationFrame(animate);
    updateTourStep(time);
    const mode = state.cameraMode;
    const view = getCameraView(mode);
    if (teachingCart && state.moving) {
      teachingCart.position.z = -2.8 + ((time * .00125) % 8.8);
    }
    if (teachingWorker && state.moving) {
      teachingWorker.position.z = 4.1 + Math.sin(time * .00075) * 1.1;
      teachingWorker.rotation.y = Math.sin(time * .00075) > 0 ? 0 : Math.PI;
    }
    if (camera === overviewCamera) {
      camera.position.lerp(new THREE.Vector3(0, 37, .01), .12);
      targetCamera.lerp(new THREE.Vector3(0, 0, 0), .12);
      camera.zoom = clamp(1 / cameraTouch.zoom, .72, 1.45);
      camera.updateProjectionMatrix();
      camera.up.set(0, 0, -1);
      camera.lookAt(targetCamera);
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
      return;
    }
    const focusX = mode === "nave" ? selectedNaveCenterX() : selectedPassageX();
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
  $("#lessonNextButton").addEventListener("click", (event) => {
    configureCamera(event.currentTarget.dataset.nextMode || "nave");
  });
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
  const naveNumberInput = $("#naveNumberInput");
  if (naveNumberInput) naveNumberInput.addEventListener("change", (event) => {
    state.selectedNave = clamp(Number(event.target.value) || 20, 1, greenhouseNaveCount);
    updateSelection();
  });
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
  const main = document.querySelector("main");
  const hero = $(".hero");
  const viewTiles = $(".view-tiles");
  const lessonLine = $(".lesson-line");
  if (main && hero && sceneSection) main.insertBefore(sceneSection, hero);
  if (viewTiles && sceneSection) sceneSection.insertBefore(viewTiles, $(".scene-frame"));
  if (lessonLine && sceneSection) sceneSection.insertBefore(lessonLine, $(".scene-frame"));
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
