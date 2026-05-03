/**
 * Blog yazılarının yapısal içerikleri.
 * Her yazı, sırayla render edilen ContentBlock dizisidir.
 */

import type { Locale } from "@/i18n/routing";

export type ContentBlock =
  | { type: "lead"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: { strong?: string; text: string }[] }
  | { type: "ol"; items: { strong?: string; text: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; eyebrow?: string; title: string; body: string }
  | { type: "divider" }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      aspect?: string; // e.g. "3 / 2", "16 / 9", "1 / 1", "4 / 5"
      bleed?: boolean; // Container'dan taşan tam genişlik
    }
  | {
      type: "imagePair";
      left: { src: string; alt: string; caption?: string };
      right: { src: string; alt: string; caption?: string };
    }
  | {
      type: "imageQuote";
      src: string;
      alt: string;
      quote: string;
      attribution?: string;
    };

export const blogContent: Record<string, ContentBlock[]> = {
  "neo-deco-mermer-gorunumlu-porselen-2026": [
    {
      type: "lead",
      text:
        "Ev dekorasyonunda rüzgarın yönü değişiyor. 2026 yılına yaklaşırken, yaşam alanlarımız sadece birer 'sığınak' olmaktan çıkıp, teknoloji ile doğallığın kusursuzca harmanlandığı, sürdürülebilir ve estetik 'deneyim alanlarına' dönüşüyor.",
    },
    { type: "image", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/main.webp", alt: "Neo Deco mermer görünümlü porselen yüzey", aspect: "4 / 5" },
    { type: "h2", text: "1. 'Neo Deco' ve Sessiz Lüks" },
    {
      type: "p",
      text:
        "Pinterest ve önde gelen tasarımcıların öngörülerine göre 2026 yılının dekorasyon trendi Neo Deco. Bu akım, 1920'lerin gösterişli Art Deco stilinin modern, minimalist ve daha 'sessiz' bir yorumu olarak karşımıza çıkıyor.",
    },
    { type: "h3", text: "2026 Renk Paleti & Materyaller" },
    { type: "image", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/overlay.webp", alt: "Sessiz lüks renk paleti", aspect: "1 / 1" },
    {
      type: "ul",
      items: [
        { strong: "Mocha Mousse", text: "Kahve ve toprak tonları." },
        { strong: "Kırmızı Mermer", text: "Zeminlerde ve banyo tezgahlarında cesur dokunuşlar." },
        { strong: "Eskitilmiş Pirinç", text: "Duyusal katmanlama için lüks metaller." },
      ],
    },
    { type: "h2", text: "2. Mermer Görünümlü Porselen: Neden 'Gerçek' Olandan Daha İyi?" },
    { type: "imageQuote", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/dark-bg.webp", alt: "Mermer görünümlü porselen", quote: "Damarlar artık sadece yüzeyde değil, malzemenin kalbinde." },
    {
      type: "p",
      text:
        "Doğal mermer büyüleyici olsa da, yeni nesil porselen (sinterlenmiş taş) teknolojisi oyunun kurallarını değiştiriyor. V-Intech teknolojisi ile damarlar artık sadece yüzeyde değil, malzemenin kalbinde.",
    },
    {
      type: "ul",
      items: [
        { strong: "Jumbo Boyutlar", text: "160x320 cm levhalar ile kesintisiz, monolitik görünüm." },
        { strong: "MicNo Hijyen", text: "Antibakteriyel yüzey teknolojisi ile maksimum sağlık." },
      ],
    },
    { type: "h2", text: "3. Hangisini Seçmelisiniz?" },
    {
      type: "table",
      headers: ["", "Doğal Mermer", "Porselen", "Kuvars"],
      rows: [
        ["Görünüm", "Eşsiz, Tek Plaka", "Hiper-Gerçekçi", "Homojen Desen"],
        ["Dayanıklılık", "Çizilebilir, Asite Duyarlı", "Çizilmez, Yanmaz", "Isıya Karşı Hassas"],
        ["Bakım", "Düzenli Cila İster", "Bakım Gerektirmez", "Kolay Temizlenir"],
        ["Kullanım", "İç Mekan (Düşük Trafik)", "İç & Dış Mekan", "Sadece İç Mekan"],
      ],
    },
    { type: "h2", text: "4. Atıktan Sanata Dönüşüm (Ekolojik Lüks)" },
    {
      type: "p",
      text:
        "2026 sadece estetik değil, vicdani bir yıl olacak. Mermer tozlarının geri dönüştürülmesiyle üretilen yapay taşlar, doğal kaynakları korurken %97 verimlilik sağlıyor.",
    },
    { type: "image", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/gallery-1.webp", alt: "Neo Deco yaşam alanı uygulaması", aspect: "3 / 2", bleed: true },
    {
      type: "p",
      text:
        "Eğer 'yaşanmışlık hissi' ve patinayı seviyorsanız doğal mermer hala vazgeçilmezdir. Ancak, limon keserken endişelenmediğiniz, dış mekanda rengi solmayan bir yüzey arıyorsanız, büyük ebatlı porselen levhalar çağın en akılcı yatırımıdır.",
    },
  ],

  "atolye-urun-fikirleri-mermer-porselen": [
    {
      type: "lead",
      text:
        "Dekorasyon dünyasında sadece mutfak tezgahları değil; duvar panoları, mobilyalar ve aksesuarlar da doğal taşların hakimiyetinde. Atölyenizde Mermerin lüksünü mü yoksa Porselenin tekniğini mi kullanmalısınız?",
    },
    { type: "image", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/main.webp", alt: "Atölye mermer ve porselen tasarım", aspect: "4 / 5" },
    { type: "h2", text: "1. Lüks Duvar Panoları" },
    { type: "image", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/overlay.webp", alt: "Lüks duvar paneli", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Duvar kaplamaları evin değerini artıran unsurlardır. Burada porselenin teknik üstünlüğü ön plana çıkar.",
    },
    { type: "h3", text: "Porselenin Hakimiyeti" },
    {
      type: "ul",
      items: [
        { strong: "İnce & Dev", text: "3mm - 6mm kalınlık, 320x160 cm ebatlar. Derz aralığı olmadan 'yekpare' görünüm sağlar." },
        { strong: "Hafiflik", text: "Binaya ekstra yük bindirmez. Banyo duvarlarında ve TV arkası panellerde güvenle kullanılır." },
        { strong: "Tasarım", text: "Arkadan aydınlatmalı (backlight) uygulamalarla dramatik etki yaratır." },
      ],
    },
    { type: "h2", text: "2. Mobilya Tasarımları" },
    {
      type: "p",
      text:
        "Yemek masaları ve orta sehpalar atölyelerin gözdesidir. Malzeme seçimi müşteri memnuniyetini belirler.",
    },
    { type: "h3", text: "Mermer Masalar (Ağırlık ve Asalet)" },
    {
      type: "ul",
      items: [
        { strong: "Artıları", text: "Lüks duruş, benzersiz damar yapısı, kişiye özel tasarım." },
        { strong: "Eksileri", text: "Gözenekli yapı (leke tutar), çok ağırdır." },
      ],
    },
    { type: "quote", text: "Müşteriye asitli sıvılardan koruma uyarısı yapılmalıdır." },
    { type: "h3", text: "Porselen Masalar (Modern ve Dayanıklı)" },
    {
      type: "ul",
      items: [
        { strong: "Artıları", text: "Mohs 8 sertlik (çizilmez), hafif, metal ayak esnekliği." },
        { strong: "Dış Mekan", text: "UV ışınlarına dirençlidir, bahçe mobilyası için idealdir." },
      ],
    },
    { type: "h2", text: "3. Butik Ürün Fikirleri" },
    { type: "imageQuote", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/dark-bg.webp", alt: "Butik atölye ürünleri", quote: "Kusurlar altına dönüşür — Kintsugi felsefesi." },
    {
      type: "p",
      text: "Büyük plakalardan artan fireleri değerlendirmek için harika fikirler:",
    },
    {
      type: "ul",
      items: [
        { strong: "Sunum Tabakları", text: "Mermer tepsiler ve şamdanlar lüksü simgeler. Gıdaya uygun cila şarttır." },
        { strong: "Nihale & Kesme Tahtası", text: "Isıya dayanıklı porselen, sıcak tencereler ve hijyenik kesim için en ideal malzemedir." },
      ],
    },
    { type: "h2", text: "4. Kintsugi ile Değer Katın" },
    { type: "quote", text: "Kusurlar altına dönüşür." },
    {
      type: "p",
      text:
        "Atölyenizde kırılan veya çatlayan değerli parçaları atmayın. Japon sanatı Kintsugi ile kırıkları altın tozlu reçineyle birleştirerek, 'sıfır atık' felsefesine uygun, hikayesi olan sanatsal objeler tasarlayabilir ve satabilirsiniz.",
    },
    { type: "h2", text: "5. Üretim ve İşçilikte Kritik Noktalar" },
    {
      type: "p",
      text: "Müşteri şikayeti almamak ve fireyi azaltmak için dikkat edilmesi gerekenler:",
    },
    {
      type: "ul",
      items: [
        { strong: "Kenar Profilleri", text: "Porselen serttir, darbede 'yongalanma' (chipping) riski taşır. Köşeleri 90 derece yerine balıksırtı veya yuvarlatılmış çalışın." },
        { strong: "Kesim Hassasiyeti", text: "Porselen için özel elmas diskler ve sulu kesim şarttır. Yanlış disk seçimi malzemeyi çatlatır." },
        { strong: "Leke ve Çizik", text: "Porselen üzerindeki gri izler metal kalıntısıdır, temizlenir. Mermerdeki asit lekeleri ise profesyonel silim gerektirir." },
      ],
    },
    { type: "image", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/gallery-1.webp", alt: "Atölye ürün galerisi", aspect: "3 / 2", bleed: true },
    {
      type: "callout",
      eyebrow: "Özet Strateji",
      title: "Hangi Malzeme Nereye?",
      body: "Duvar & Dış Mekan için Porselen (hafiflik + UV direnci). Salon & Lüks için Mermer (yaşanmışlık hissi). Mutfak gereçleri için Porselen (hijyen + ısı direnci).",
    },
  ],

  "mermer-porselen-kombinasyonu-tasarim-fikirleri": [
    {
      type: "lead",
      text:
        "Tasarım dünyasında zıtlıkların uyumu her zaman ilgi çekici olmuştur. Bir yanda doğanın lüks simgesi mermer, diğer yanda teknolojinin zirvesi porselen. Peki, bu iki devi aynı mekânda nasıl kombinleyebilirsiniz?",
    },
    { type: "image", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/main.webp", alt: "Mermer ve porselen kombinasyon", aspect: "4 / 5" },
    { type: "h2", text: "1. Mobilya Tasarımları" },
    { type: "image", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/overlay.webp", alt: "Salon mermer sehpa", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Mobilya seçiminde mermer ve porselen kullanımı, mekanın karakterini belirleyen en önemli unsurlardandır. Yemek masalarında porselen kullanımı giderek artan bir trenddir; hafif, leke tutmaz ve çizilmeye dirençlidir.",
    },
    {
      type: "callout",
      eyebrow: "Kombinasyon Fikri",
      title: "Salon Düzeni",
      body: "Salonunuzda geniş bir porselen yemek masası (dayanıklılık için) ile damarlı, heykelsi bir mermer orta sehpayı (estetik odak noktası için) birleştirerek hem fonksiyonel hem de sofistike bir görünüm elde edebilirsiniz.",
    },
    { type: "h2", text: "2. Mutfak Tezgahları: 'Ağır İş' & 'Hassas Dokunuş'" },
    { type: "imageQuote", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/dark-bg.webp", alt: "Mutfak ana tezgah", quote: "Mutfak, iki devin bir araya geldiği stratejik alandır." },
    {
      type: "p",
      text:
        "Mutfak, bu iki malzemenin kombinasyonu için en stratejik alandır. Her iki malzemenin de kendine has avantajları vardır.",
    },
    {
      type: "ol",
      items: [
        { strong: "Porselenin Gücü", text: "2000°C'ye dayanıklı, çizilmez ve leke tutmaz. Ana tezgah hattı için en mantıklı seçim." },
        { strong: "Mermerin Soğukluğu", text: "Hamur işleri ve çikolata temperleme için mükemmel doğal soğukluk. Profesyonel şef dokunuşu." },
      ],
    },
    { type: "h2", text: "3. Duvar ve Zemin Çözümleri" },
    {
      type: "p",
      text:
        "Porselen levhalar, 320x160 cm devasa boyutlarıyla 'duvar kağıdı' gibi kesintisiz bir görünüm sağlar. Özellikle 'Bookmatch' (kitap kapağı) tekniği ile uygulanan paneller, TV ünitesi arkasında dramatik bir etki yaratır.",
    },
    {
      type: "p",
      text:
        "Zeminlerde mermer kullanımı mekana prestij katar ancak bakım gerektirir. Porselen ise yoğun trafikli alanlarda pratik bir çözümdür.",
    },
    {
      type: "callout",
      eyebrow: "Kombinasyon Fikri",
      title: "Banyo Tasarımı",
      body: "Banyo duvarlarında hijyenik porselen levhalar kullanın. Ancak kuru zeminlerde ve lavabo tezgahında honlanmış mermer kullanarak mekana sıcaklık katın.",
    },
    { type: "h2", text: "4. İleri Teknoloji ile Kişiselleştirme" },
    {
      type: "ul",
      items: [
        { strong: "CNC ve Su Jeti", text: "Milimetrik hassasiyetle kesim teknolojisi. Zeminde mermer ve porseleni iç içe geçirerek (inlay tekniği) özel desenler ve logolar oluşturabilirsiniz." },
        { strong: "Sanatsal Onarım (Kintsugi)", text: "Kırılan mermer veya porselen parçaların altın tozu ile birleştirilmesi. Kusurları gizlemek yerine yücelten estetik bir felsefe." },
      ],
    },
    { type: "image", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/gallery-1.webp", alt: "Banyo kombinasyon uygulaması", aspect: "3 / 2", bleed: true },
    {
      type: "callout",
      eyebrow: "Özet Strateji",
      title: "Hangi Alana Hangi Malzeme?",
      body: "Mutfak ana tezgahı ve yemek masası için Porselen. Orta sehpa ve hamur hazırlık alanı için Mermer. Duvar kaplamaları için ince porselen levhalar.",
    },
  ],

  "bookmatch-doganin-senfonisi": [
    {
      type: "lead",
      text:
        "Doğada hiçbir şey tesadüf değildir. Mermer levhaların, tıpkı bir kitabın sayfaları veya bir kelebeğin kanatları gibi birbirini ayna etkisiyle tamamlaması, mekânlarda dramatik bir görsel şölen yaratır.",
    },
    { type: "image", src: "/images/blog/bookmatch-doganin-senfonisi/main.webp", alt: "Bookmatch kelebek etkili mermer", aspect: "4 / 5" },
    { type: "h2", text: "1. Bookmatch Nedir?" },
    { type: "image", src: "/images/blog/bookmatch-doganin-senfonisi/overlay.webp", alt: "Bookmatch simetri detayı", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Bookmatch, iki veya daha fazla doğal taş veya porselen levhanın, desenlerinin birbirini takip edip 'aynalayacak' şekilde yan yana getirilmesi işlemidir.",
    },
    { type: "h3", text: "Nasıl Yapılır?" },
    {
      type: "ul",
      items: [
        { strong: "İşlem", text: "Blok kesilirken, birbirini takip eden A ve B plakalarının birbirine bakan yüzeyleri parlatılır. Böylece damarlar kesintisiz devam eder." },
        { strong: "Görsel Etki", text: "Çiçek dürbünü (kaleidoscope) etkisi yaratır. Görüntü genellikle bir Rorschach testini veya devasa bir kelebeğin kanatlarını andırır." },
      ],
    },
    { type: "h2", text: "2. Tasarımda 'Kelebek Etkisi'" },
    { type: "imageQuote", src: "/images/blog/bookmatch-doganin-senfonisi/dark-bg.webp", alt: "Kaotik damarlar simetrik düzene dönüşür", quote: "Doğanın kaosunu, simetrik bir kelebek kanadına çevir." },
    {
      type: "p",
      text:
        "Edward N. Lorenz'in 'küçük değişiklikler, büyük sonuçlar doğurur' teorisinin tasarımdaki somut halidir.",
    },
    {
      type: "ul",
      items: [
        { strong: "Küçük Dokunuş, Büyük Etki", text: "Tek bir plaka sadece 'güzel'dir. Ancak simetriği ile birleştiğinde, mekânın atmosferini değiştiren devasa bir sanat eseri ortaya çıkar." },
        { strong: "Kaos ve Düzen", text: "Doğal taşın damarları kaotik ve rastgeledir. Bookmatch tekniği, bu kaosu simetrik bir düzene sokarak insan gözüne hitap eden bir 'düzen' algısı yaratır." },
      ],
    },
    { type: "h2", text: "3. Malzeme Seçimi" },
    { type: "h3", text: "Doğal Mermer & Oniks (Eşsizlik ve Lüks)" },
    {
      type: "ul",
      items: [
        { strong: "Biricik", text: "Her uygulama 'tek'tir ve kopyalanamaz." },
        { strong: "Işık Oyunu", text: "Oniks kullanımı, ışıkla birleştiğinde dramatik bir sahne yaratır." },
      ],
    },
    { type: "quote", text: "Sanat eseri değeri taşır." },
    { type: "h3", text: "Porselen & Sinterlenmiş Taş (Kusursuz Simetri)" },
    {
      type: "ul",
      items: [
        { strong: "Openbook", text: "Mermer desenleri A ve B modülleri olarak birebir kopyalanır." },
        { strong: "Ebat Avantajı", text: "160x320 cm devasa boyutlar, minimum derz." },
      ],
    },
    { type: "quote", text: "Hatasız simetri garantisi." },
    { type: "h2", text: "4. 2025 Uygulama Trendleri" },
    {
      type: "p",
      text: "Cesur damarlı yüzeyler 2025 trendlerinin merkezinde:",
    },
    {
      type: "ul",
      items: [
        { strong: "TV Üniteleri", text: "Geniş salon duvarlarında bir sanat galerisi havası verir." },
        { strong: "Mutfak Adaları", text: "'Şelale' (waterfall) etkisiyle zemine inen simetrik damarlar mutfağın odak noktası olur." },
        { strong: "Islak Hacimler", text: "Duş duvarlarında lüks bir spa atmosferi yaratır." },
      ],
    },
    { type: "imagePair", left: { src: "/images/blog/bookmatch-doganin-senfonisi/gallery-1.webp", alt: "Bookmatch TV ünitesi", caption: "TV Ünitesi" }, right: { src: "/images/blog/bookmatch-doganin-senfonisi/gallery-2.webp", alt: "Bookmatch mutfak adası", caption: "Mutfak Adası" } },
    { type: "image", src: "/images/blog/bookmatch-doganin-senfonisi/gallery-3.webp", alt: "Bookmatch ıslak hacim spa atmosferi", aspect: "3 / 2", bleed: true },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Doğanın İmzasını Mekâna Atmak",
      body: "İster mermerin yaşanmışlığı, ister porselenin mükemmelliği olsun; Bookmatch tekniği malzemeyi bir hikâye anlatıcısına dönüştürür. Kaotik çizgileri simetrik bir kelebek kanadına dönüştürerek yaşam alanlarınızı özelleştirin.",
    },
  ],

  "mermer-porselenin-mimaride-kullanimi": [
    {
      type: "lead",
      text:
        "Mimari tasarımda malzeme seçimi, sadece estetik bir tercih değil, aynı zamanda yapının kimliğini, ömrünü ve kullanıcı deneyimini belirleyen stratejik bir karardır.",
    },
    { type: "image", src: "/images/blog/mermer-porselenin-mimaride-kullanimi/main.webp", alt: "Mimaride mermer porselen kullanımı", aspect: "4 / 5" },
    { type: "h2", text: "1. Mermer: Mimari Prestij" },
    { type: "image", src: "/images/blog/mermer-porselenin-mimaride-kullanimi/overlay.webp", alt: "Mermer yüzey işleme", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Yüzyıllardır 'güç, zenginlik ve ölümsüzlüğün' simgesi olan mermer, her bir plakasındaki benzersiz damar yapısıyla mimariye 'tek ve özel olma' hissi katar. Özellikle geniş salonlarda ve otel lobilerinde zemin kaplaması olarak rakipsizdir.",
    },
    { type: "h3", text: "Yüzey İşlemleri (Finisajlar)" },
    {
      type: "ul",
      items: [
        { strong: "Honlama (Mat/Saten)", text: "Işığı yumuşatır, modern bir doku katar." },
        { strong: "Çekiçleme (Bush Hammered)", text: "Pürüzlü, kaymaz yüzey sağlar." },
        { strong: "Bookmatch", text: "Plakaların simetrik dansı; sanatsal derinlik." },
      ],
    },
    { type: "h2", text: "2. Porselen: Mimari Hassasiyet" },
    { type: "imageQuote", src: "/images/blog/mermer-porselenin-mimaride-kullanimi/dark-bg.webp", alt: "Sonsuzluk illüzyonu", quote: "320×160 cm levhalarla minimum derz, maksimum estetik." },
    {
      type: "p",
      text:
        "Kil, kaolin ve kuvarsın 1200°C'de yeniden doğuşu. Porselen levhalar (Sinterlenmiş Taş), yoğun ve gözeneksiz yapısıyla mimarların yeni 'süper malzemesi'dir.",
    },
    {
      type: "ol",
      items: [
        { strong: "Devasa Boyutlar (320x160 cm)", text: "Minimum derz ile mekanlarda 'sonsuzluk' illüzyonu." },
        { strong: "İç-Dış Mekan Akışı (Flow)", text: "UV ışınlarına dirençli; salondan terasa kesintisiz geçiş." },
      ],
    },
    { type: "h2", text: "3. Hangi Malzeme Nereye?" },
    { type: "h3", text: "A. Mutfak Tezgahı ve Adası" },
    {
      type: "p",
      text:
        "Mutfak bir savaş alanıdır. Porselen tezgahlar (Lamar, Dekton) çizilmez ve yanmaz özellikleriyle ana tezgahlar için idealdir. 'Kendinden evyeli' tasarımlar ancak porselenle mümkündür.",
    },
    { type: "quote", text: "Profesyonel İpucu: Pastacılık istasyonu için doğal Carrara mermeri kullanın; soğuk yüzeyi hamur açmak için mükemmeldir." },
    { type: "h3", text: "B. Banyo ve Islak Hacimler" },
    {
      type: "p",
      text:
        "Porselenin su emme oranı neredeyse sıfırdır (%0.05). Bu, onu bakteri barındırmayan en hijyenik seçenek yapar. Ancak 'Spa' etkisi arıyorsanız, Marmara mermeri suyla temas ettiğinde eşsiz bir renk derinliği kazanır.",
    },
    { type: "h3", text: "C. Mobilya & Detaylar" },
    {
      type: "p",
      text:
        "Yemek masalarında porselen hafiftir, şarap lekesi tutmaz. Mermer masalar ise salonun heykelsi odak noktasıdır. Özellikle Oniks gibi ışık geçiren taşlar, arkadan aydınlatma ile büyüleyici bir atmosfer yaratır.",
    },
    { type: "h2", text: "4. İleri Teknoloji ile Şekillendirme" },
    {
      type: "ul",
      items: [
        { strong: "Su Jeti (Waterjet)", text: "Yüksek basınçlı su ve kum ile ısıya maruz kalmadan mikron hassasiyetinde kesim. Zeminlerde 'inlay' desenler ve logolar için." },
        { strong: "CNC İşleme", text: "3 boyutlu formlar, oluklu yüzeyler (fluted tiles) ve rölyefler. Sütun başlıkları ve dekoratif panellerin modern üretimi." },
      ],
    },
    { type: "image", src: "/images/blog/mermer-porselenin-mimaride-kullanimi/gallery-1.webp", alt: "Mimari iç mekan", aspect: "3 / 2", bleed: true },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Hangi Karakter, Hangi Malzeme?",
      body: "'Yaşanmışlık hissi' ve patina için Doğal Mermer. 'Tak ve unut' konforu, hijyen ve modernlik için Porselen.",
    },
  ],

  "porselen-desenleme-sanati-teknikleri": [
    {
      type: "lead",
      text:
        "Porseleni sadece beyaz bir form olmaktan çıkarıp bir sanat eserine dönüştüren şey, üzerindeki desenleme sanatıdır. Tarihsel olarak Çin'de gelişip Avrupa'ya yayılan 'China painting', renklerin ateşle dansıdır.",
    },
    { type: "image", src: "/images/blog/porselen-desenleme-sanati-teknikleri/overlay.webp", alt: "Porselen desenleme sanatı", aspect: "1 / 1" },
    { type: "h2", text: "1. Sırın Altında mı, Üstünde mi?" },
    { type: "image", src: "/images/blog/porselen-desenleme-sanati-teknikleri/gallery-1.webp", alt: "Sır altı desenleme", aspect: "3 / 2" },
    {
      type: "p",
      text:
        "Porselen desenleme teknikleri, boyanın uygulanma zamanına ve pişirim derecesine göre üç ana kategoriye ayrılır.",
    },
    { type: "h3", text: "A. Sır Altı (Underglaze)" },
    {
      type: "p",
      text:
        "Desen, bisküvi pişirimi yapılmış ham ürün üzerine uygulanır ve şeffaf sırla kaplanıp ~1350°C'de pişirilir.",
    },
    {
      type: "ul",
      items: [
        { strong: "Görünüm", text: "Pastel ve mat." },
        { strong: "Dayanıklılık", text: "Çok yüksek (Solmaz)." },
        { strong: "Koruma", text: "Sır tabakası altındadır." },
      ],
    },
    { type: "h3", text: "B. Sır Üstü (Overglaze) — Sanatçı Tercihi" },
    {
      type: "p",
      text:
        "Sırlanmış parlak yüzey üzerine uygulanır. 'El Dekoru' sanatçılarının tercihidir. ~760-880°C'de pişer.",
    },
    {
      type: "ul",
      items: [
        { strong: "Görünüm", text: "Canlı, parlak renkler." },
        { strong: "Malzeme", text: "Yağ bazlı medyumlar." },
        { strong: "Teknik", text: "İnce fırça işçiliği." },
      ],
    },
    { type: "h3", text: "C. Sır İçi (In-glaze)" },
    {
      type: "p",
      text:
        "Endüstriyel hibrit yöntem. ~1200°C'de boya, eriyen sır tabakasının içine gömülür.",
    },
    {
      type: "ul",
      items: [
        { strong: "Görünüm", text: "Cam gibi pürüzsüz." },
        { strong: "Dayanıklılık", text: "Bulaşık makinesine uygun." },
        { strong: "Yapı", text: "Sır içine hapsolmuş desen." },
      ],
    },
    { type: "h2", text: "2. El Dekoru ve Sanatsal Süreç" },
    { type: "imageQuote", src: "/images/blog/porselen-desenleme-sanati-teknikleri/dark-bg.webp", alt: "El dekoru süreci", quote: "Her fırça darbesi, fırında sonsuzluğa mühürlenir." },
    {
      type: "p",
      text:
        "Porselen desenleme, büyük bir sabır gerektiren 'el dekoru' sürecidir. Türk kültüründe Yıldız ve İznik porselenleri bunun en nadide örnekleridir.",
    },
    { type: "h3", text: "Uygulama Adımları" },
    {
      type: "ul",
      items: [
        { strong: "Hazırlık", text: "Sanatçı, toz boyayı özel yağlarla (terebentin, lavanta, karanfil) cam bir yüzeyde ezerek hazırlar. Anatomi ve botanik bilgisi gerektirir." },
        { strong: "Çoklu Fırınlama", text: "Karmaşık desenler, renklerin karışmaması için kademeli olarak boyanıp defalarca fırınlanabilir." },
        { strong: "Altın Dokunuş", text: "Altın veya gümüş yaldızlar, boya pişiriminden sonra uygulanır ve 650°C'de fırınlanarak cam elyafı ile parlatılır." },
      ],
    },
    { type: "h2", text: "3. Endüstriyel Teknikler" },
    {
      type: "ul",
      items: [
        { strong: "Çıkartma (Decal)", text: "Porselen boyaları serigraf baskı ile özel kağıtlara basılır. Bu desenler su yardımıyla 'çıkartma' gibi porselenin üzerine transfer edilir." },
        { strong: "Dijital Baskı", text: "Yüksek çözünürlüklü fotoğraflar ve karmaşık tasarımlar doğrudan porselen yüzeylere püskürtme yöntemiyle aktarılabilir." },
      ],
    },
    { type: "imagePair", left: { src: "/images/blog/porselen-desenleme-sanati-teknikleri/gallery-2.webp", alt: "Decal baskı tekniği", caption: "Decal Baskı" }, right: { src: "/images/blog/porselen-desenleme-sanati-teknikleri/gallery-3.webp", alt: "Dijital baskı tekniği", caption: "Dijital Baskı" } },
    { type: "image", src: "/images/blog/porselen-desenleme-sanati-teknikleri/gallery-4.webp", alt: "Sanatsal porselen koleksiyonu", aspect: "3 / 2", bleed: true },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Ateşle Sabitlenen Sanat",
      body: "Her fırça darbesi, fırında sonsuzluğa mühürlenir. Porselen desenleme; kimya, ısı ve sanatın birleşimidir.",
    },
  ],

  "musteri-talepleri-ozel-tasarim-surecleri": [
    {
      type: "lead",
      text:
        "Günümüz rekabetçi pazarında standart ürünler artık yeterli değil. Başarı, müşterinin hayalini gerçeğe dönüştürebilme yeteneğinizde gizlidir. 'Müşteri odaklı yaklaşım', sadece 'ne istersen onu yaparım' demek değil; doğru analiz ve teknik yeterliliktir.",
    },
    { type: "image", src: "/images/blog/musteri-talepleri-ozel-tasarim-surecleri/main.webp", alt: "Müşteri analizi süreç", aspect: "4 / 5" },
    { type: "h2", text: "1. Müşteriyi ve İhtiyacı Anlamak" },
    { type: "image", src: "/images/blog/musteri-talepleri-ozel-tasarim-surecleri/overlay.webp", alt: "Brief hazırlık seansı", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Tasarım, özünde bir problem çözme eylemidir. Ancak bir problemi çözebilmek için önce onu doğru tanımlamak gerekir.",
    },
    { type: "quote", text: "İyi ifade edilmiş bir problem, yarı yarıya çözülmüş demektir. — Charles Kettering" },
    { type: "h3", text: "İhtiyaç Analizi Nasıl Yapılır?" },
    {
      type: "ol",
      items: [
        { strong: "Derinlemesine Görüşme", text: "Müşterinin 'isteklerini' (want) teknik 'ihtiyaçlara' (need) dönüştürmek." },
        { strong: "Brief Hazırlığı", text: "Beklentilerin ölçülebilir ve net bir dille tanımlanması." },
        { strong: "Müşteri Tipini Tanıma", text: "'Ne istediğini bilen' vs 'Kararsız/Dolaşan' müşteri ayrımı." },
      ],
    },
    { type: "h2", text: "2. Özelleştirme (Customization)" },
    {
      type: "ul",
      items: [
        { strong: "Malzeme Seçimi", text: "Doğal Taş benzersizdir, lüks görünür ancak bakım ister. Porselen dayanıklı, leke tutmaz ve kenar profilleri özelleştirilebilir." },
        { strong: "CNC ve Su Jeti", text: "CNC karmaşık 3D desenleri ve rölyefleri hatasız işler. Su Jeti ısı olmadan kesim yaparak deformasyonu önler." },
        { strong: "Kalıplama (Mermerit)", text: "Standart dışı formlar için silikon kalıplama. Atık mermer tozlarının polyester ile birleşmesiyle 'Mermerit' üretimi." },
        { strong: "Yüzey Karakteri", text: "Honlama (Mat), Cilalama (Parlak), Çekiçleme (Pürüzlü) veya Kumlama teknikleri." },
      ],
    },
    { type: "h2", text: "3. Tasarım Onay Süreci (ISO 9001:2015)" },
    { type: "imageQuote", src: "/images/blog/musteri-talepleri-ozel-tasarim-surecleri/dark-bg.webp", alt: "ISO 9001:2015 onay süreci", quote: "İyi ifade edilmiş bir problem, yarı yarıya çözülmüş demektir.", attribution: "Charles Kettering" },
    {
      type: "ol",
      items: [
        { strong: "Planlama", text: "Hedeflerin ve kaynakların belirlenmesi." },
        { strong: "Girdi Belirleme", text: "Müşteri talepleri ve yasal standartların netleştirilmesi." },
        { strong: "Gözden Geçirme", text: "Ara kontroller ve müşteri revizyonlarının işlenmesi." },
        { strong: "Doğrulama", text: "Son ürün testleri (leke testi, ölçü kontrolü) ve geçerli kılma." },
      ],
    },
    { type: "h2", text: "4. Etkili Müşteri İletişimi: CRM ve Görsel İletişim" },
    {
      type: "p",
      text:
        "Müşteri ile ilişki teslimde bitmez. CRM sistemleri ile müşterinin geçmiş tercihlerini analiz ederek gelecekte ona özel öneriler sunabilirsiniz.",
    },
    {
      type: "p",
      text:
        "Ayrıca e-ticaret süreçlerinde, profesyonel makro çekimler ve yaşam alanı örnekleri kullanmak, müşterinin ürünü zihninde canlandırmasını sağlar ve güveni artırır.",
    },
    { type: "h2", text: "Kintsugi Felsefesi" },
    { type: "quote", text: "Kusursuzluk değil, hikaye arayın." },
    {
      type: "p",
      text:
        "Japon sanatı Kintsugi, kırılan objeleri altın tozu karışımlı reçine ile onararak, kırıkları gizlemek yerine onları yüceltir. Müşterilerinize hasar görmüş eşyaları için bu 'kişiye özel ve yaşanmışlık dolu' onarım tekniğini sunabilirsiniz.",
    },
    { type: "image", src: "/images/blog/musteri-talepleri-ozel-tasarim-surecleri/gallery-1.webp", alt: "Özel tasarım uygulaması", aspect: "3 / 2", bleed: true },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Değer Yaratan Ortaklık",
      body: "Müşteri taleplerine göre özel tasarım, bir 'ortak mühendislik' çabasıdır. Müşterinin hayalini, CNC hassasiyeti ve usta işçiliğiyle birleştirip doğru iletişimle yönettiğinizde, ortaya çıkan sadece bir ürün değil, paha biçilemez bir değer olur.",
    },
  ],

  "waterfall-tasarim-akiskan-yuzeyler": [
    {
      type: "lead",
      text:
        "Mutfak adasından zemine doğru süzülen tek parça bir mermer bloğu düşünün. Waterfall tasarım, yüzeylerde akışkanlık, süreklilik ve sonsuzluk hissi yaratan bir estetik devrimdir.",
    },
    { type: "image", src: "/images/blog/waterfall-tasarim-akiskan-yuzeyler/main.webp", alt: "Waterfall mutfak adası", aspect: "4 / 5" },
    { type: "h2", text: "1. Waterfall Tasarım Nedir?" },
    { type: "image", src: "/images/blog/waterfall-tasarim-akiskan-yuzeyler/overlay.webp", alt: "Waterfall malzeme detayı", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Tezgah malzemesinin kenarda bitmek yerine, 90 derecelik bir açıyla zemine kadar uzandığı uygulamadır. Bu teknik, mobilyayı sadece işlevsel bir öğe olmaktan çıkarıp heykelsi bir forma dönüştürür.",
    },
    { type: "h3", text: "Sonsuzluk İllüzyonu" },
    {
      type: "p",
      text:
        "Geleneksel tasarımlarda tezgahın bittiği yerde dolap yanları görünürken, Waterfall tasarımda malzeme aşağıya doğru akarak bir bütünlük oluşturur. Bu, mekânda dağınıklığı yok eden 'görsel sessizlik' sağlar.",
    },
    { type: "h2", text: "2. Malzeme Seçimi: Akışkanlığı Yakalamak" },
    { type: "imageQuote", src: "/images/blog/waterfall-tasarim-akiskan-yuzeyler/dark-bg.webp", alt: "Sonsuzluk illüzyonu", quote: "Akışkanlık, mobilyayı heykelsi bir forma dönüştürür." },
    {
      type: "p",
      text:
        "Waterfall tasarımın başarısı, damar takibine ve birleşim yerlerinin görünmezliğine bağlıdır.",
    },
    {
      type: "ul",
      items: [
        { strong: "A. Porselen Levhalar (Mimarın Seçimi)", text: "320x160 cm, minimum derz. Leke tutmaz, ısıya dirençli. (Lamar, Neolith, Dekton vb.)" },
        { strong: "B. Doğal Mermer (Lüksün Zirvesi)", text: "Gerçek akışkanlık hissi için eşsiz. Damar takibi için 'Bookmatch' şarttır. Asitlere karşı hassastır." },
        { strong: "C. Kuvars & Granit (Alternatifler)", text: "Kuvars dayanıklı ama desenleri daha homojen. Granit sert ve doğal, renk seçeneği sınırlı." },
      ],
    },
    { type: "h2", text: "3. Bookmatch Tekniği" },
    {
      type: "p",
      text:
        "Waterfall tasarımda 'akışkanlık' hissini yaratan en önemli detay, yatay yüzeyden dikey yüzeye geçerken damarların birbirini takip etmesidir.",
    },
    {
      type: "ul",
      items: [
        { strong: "Simetri Teknolojisi", text: "Plakaların açık bir kitap gibi birbirini aynalayacak şekilde kesilmesi. Tezgahın üstündeki damar, kenardan aşağıya kesintisiz 'akar'." },
        { strong: "Görsel Şölen", text: "Özellikle Calacatta veya Onyx gibi güçlü damarlı taşlarda, bu teknik dramatik bir kelebek etkisi yaratır." },
      ],
    },
    { type: "h2", text: "4. Trendler ve Üretim Teknolojisi" },
    { type: "h3", text: "2026 Trendleri: Biyomorfik Tasarım" },
    {
      type: "p",
      text:
        "Keskin çizgiler yerini '70'ler Modernizmi'nden ilham alan yumuşak, kavisli ve akışkan formlara bırakıyor. Oval mutfak adaları ve kavisli tezgahlar doğayı taklit ediyor.",
    },
    { type: "h3", text: "Üretim Teknolojisi" },
    {
      type: "ul",
      items: [
        { strong: "Su Jeti (Waterjet)", text: "Isısız, deformasyonsuz ve hassas 45 derece köşe kesimi." },
        { strong: "CNC & Parametrik", text: "Bilgisayar destekli tasarım ile taşa bir kumaş gibi kıvrımlı formlar verme yeteneği." },
      ],
    },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Hangi Malzemeyi Seçmelisiniz?",
      body: "'Tak ve unut' konforu ve modernlik için Porselen Levhalar (Lamar, Dekton). 'Yaşanmışlık hissi' ve biricik sanat eseri için Doğal Mermer. Unutmayın, Waterfall tasarım sadece bir tezgah değil, mekânın odak noktasıdır.",
    },
  ],

  "mermer-tasarim-teknikleri-isleme-yontemleri": [
    {
      type: "lead",
      text:
        "Doğal taşın ham bir bloktan sanat eserine veya işlevsel bir yapı elemanına dönüşümü, binlerce yıllık bir zanaatın ve modern teknolojinin harmanlanmasıyla gerçekleşir.",
    },
    { type: "imagePair", left: { src: "/images/blog/mermer-tasarim-teknikleri-isleme-yontemleri/compare-left.webp", alt: "Doğal mermer", caption: "Doğal Mermer" }, right: { src: "/images/blog/mermer-tasarim-teknikleri-isleme-yontemleri/compare-right.webp", alt: "Sinterlenmiş porselen", caption: "Sinterlenmiş Porselen" } },
    { type: "h2", text: "1. Kesim Teknolojileri" },
    { type: "imagePair", left: { src: "/images/blog/mermer-tasarim-teknikleri-isleme-yontemleri/portrait-mermer.webp", alt: "Mermer karakteri", caption: "Mermer Karakteri" }, right: { src: "/images/blog/mermer-tasarim-teknikleri-isleme-yontemleri/portrait-porselen.webp", alt: "Porselen karakteri", caption: "Porselen Karakteri" } },
    { type: "h3", text: "A. Elmas Tel Kesme" },
    {
      type: "p",
      text:
        "Elmas boncuklu çelik teller, mermeri aşındırarak keser. Ocaklarda blok üretiminde ve blokların plakalara ayrılmasında kullanılır.",
    },
    {
      type: "ul",
      items: [
        { strong: "Kullanım", text: "Büyük blok kesimi." },
        { strong: "Avantaj", text: "Düzgün geometri." },
      ],
    },
    { type: "h3", text: "B. Su Jeti (Water Jet) — Hassas Kesim" },
    {
      type: "p",
      text:
        "Yüksek basınçlı su ve aşındırıcı kum karışımı. Isı oluşturmadığı için deformasyon yaratmaz.",
    },
    {
      type: "ul",
      items: [
        { strong: "Kullanım", text: "Detaylı motifler, göbekler." },
        { strong: "Avantaj", text: "Isısız kesim, sıfır deformasyon." },
      ],
    },
    { type: "h3", text: "C. Köprü Kesme" },
    {
      type: "p",
      text:
        "Köprü üzerinde hareket eden elmas diskli testere. Plaka ebatlama hattında standarttır.",
    },
    {
      type: "ul",
      items: [
        { strong: "Kullanım", text: "Tezgah, zemin döşemesi." },
        { strong: "Avantaj", text: "Hızlı ve düz ebatlama." },
      ],
    },
    { type: "h2", text: "2. Yüzey İşleme Teknikleri" },
    {
      type: "p",
      text:
        "Mermerin karakterini belirleyen en önemli unsur yüzey işlemidir. Bu işlemler taşın rengini, dokusunu ve kullanım alanını (kaymazlık vb.) belirler.",
    },
    {
      type: "ul",
      items: [
        { strong: "Cilalama", text: "Pürüzsüz ve parlak yüzey. Kristalizasyon yöntemi ile ekstra sertlik ve parlaklık kazandırılır." },
        { strong: "Honlama", text: "Mat ve pürüzsüz yüzey. Işığı yansıtmaz, zeminlerde kayma riskini azaltır." },
        { strong: "Çekiçleme", text: "Sert metal uçlarla dövülerek pürüzlü, dişli bir doku oluşturulur. Dış mekanlar için idealdir." },
      ],
    },
    { type: "h2", text: "3. İleri Teknoloji: CNC (Dijital Heykeltıraşlık)" },
    {
      type: "p",
      text:
        "Bilgisayar kontrollü makineler ile mermer üzerine üç boyutlu tasarımlar ve rölyefler işlenebilmektedir.",
    },
    {
      type: "ul",
      items: [
        { strong: "Çalışma Prensibi", text: "CAD/CAM programlarında tasarlanan modeller, sayısal kodlara dökülerek işlenir. Mermerin sertliğine göre parametreler optimize edilir." },
        { strong: "Enerji & Verimlilik", text: "Kesme derinliği arttıkça enerji tüketimi artar. Doğru uç ve hız seçimi, verimlilik ve hassasiyet için kritiktir." },
      ],
    },
    { type: "h2", text: "4. Kalıp Yapımı ve Mermerit" },
    {
      type: "p",
      text:
        "Doğal blok mermerin yanı sıra, mermer tozu ve polyester kullanılarak yapılan döküm teknikleri de sektörün parçasıdır.",
    },
    {
      type: "ul",
      items: [
        { strong: "Silikon (RTV2)", text: "Modelin detaylarını kopyalamak için esnek iç kalıp." },
        { strong: "Destek Kabuğu", text: "Silikonun formunu koruması için fiberglass sert dış kalıp." },
        { strong: "Hava Kabarcığı", text: "Döküm sırasında titreşim (vibrasyon) uygulanarak kabarcıklar yok edilmelidir." },
      ],
    },
    { type: "h2", text: "Kintsugi Sanatı" },
    { type: "quote", text: "Kırık parçalar, altının ışıltısıyla yeniden hayat bulur." },
    {
      type: "p",
      text:
        "Mermer veya seramik kırıldığında, onları çöpe atmak yerine Japon sanatı Kintsugi ile onarmak bir tasarım felsefesidir. Kırıklar altın veya gümüş tozu karışımlı reçine ile birleştirilerek, nesnenin tarihine estetik bir değer katılır.",
    },
    { type: "imagePair", left: { src: "/images/blog/mermer-tasarim-teknikleri-isleme-yontemleri/gallery-mermer.webp", alt: "Mermer uygulama", caption: "Mermer Uygulaması" }, right: { src: "/images/blog/mermer-tasarim-teknikleri-isleme-yontemleri/gallery-porselen.webp", alt: "Porselen uygulama", caption: "Porselen Uygulaması" } },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Doğru Yöntem, Mükemmel Sonuç",
      body: "İster endüstriyel bir tezgah ister sanatsal bir heykel olsun; mermerin işlenmesi, jeolojik yapıya uygun tekniğin seçilmesine bağlıdır. Kristalize cila ile parlatılan bir mermer, yüzyıllar boyunca ihtişamını korur.",
    },
  ],

  "mermer-porselen-malzemelerinin-ozellikleri": [
    {
      type: "lead",
      text:
        "Mutfak tezgahlarından zeminlere kadar o büyük soru: Doğal taşın asaletini mi seçmeliyim, yoksa teknolojinin dayanıklılığını mı? Bu rehberde, iki dev malzemeyi 2025 verileriyle kıyaslıyoruz.",
    },
    { type: "image", src: "/images/blog/mermer-porselen-malzemelerinin-ozellikleri/main.webp", alt: "Mermer ve porselen özellikleri", aspect: "4 / 5" },
    { type: "h2", text: "1. Mermer: Benzersiz Güzellik" },
    { type: "image", src: "/images/blog/mermer-porselen-malzemelerinin-ozellikleri/overlay.webp", alt: "Mermer karakteri", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Mermer, metamorfizma geçirmiş doğal bir taştır. Her bir plaka doğanın parmak izini taşır. Kristal boyutlarına göre sınıflandırılır; ince kristalliler (Afyon) daha sert, iri kristalliler (Kemalpaşa) daha kırılgandır.",
    },
    { type: "h3", text: "Artıları ve Eksileri" },
    {
      type: "ul",
      items: [
        { strong: "✓ Estetik", text: "Eşsiz görünüm, evin piyasa değerini artırır. Isıyı tutmaz (hamur işleri için ideal)." },
        { strong: "✓ Yenileme", text: "Çizikler profesyonel silim ile giderilebilir." },
        { strong: "✗ Hassasiyet", text: "Asitlere (limon, sirke) duyarlıdır, 'etching' lekesi oluşur. Düzenli sızdırmazlık (sealer) ister." },
      ],
    },
    { type: "h2", text: "2. Porselen: Teknoloji ve Dayanıklılık" },
    { type: "imageQuote", src: "/images/blog/mermer-porselen-malzemelerinin-ozellikleri/dark-bg.webp", alt: "Porselenin teknolojik üstünlüğü", quote: "1200°C'de sinterlenmiş, gözeneksiz yüzey." },
    {
      type: "p",
      text:
        "1200°C'de sinterlenmiş, gözeneksiz yüzeyler. Dekton, Neolith, Lamar gibi markalarla 3mm'den 20mm'ye kadar üretilir.",
    },
    {
      type: "ul",
      items: [
        { strong: "Olağanüstü Dayanıklılık", text: "Mohs sertlik skalasında 7-8. Çizilmelere mermerden çok daha dirençlidir. Leke tutmaz, bakteri barındırmaz (%0.05 su emilimi)." },
        { strong: "Dikkat Noktası", text: "Kenar kırılganlığı (chipping) riski vardır; sert darbelerde köşelerden parça kopabilir." },
      ],
    },
    { type: "h2", text: "3. Kullanım Alanları Karşılaştırması" },
    {
      type: "table",
      headers: ["Alan", "Mermer", "Porselen", "Neden?"],
      rows: [
        ["Yoğun Mutfak Tezgahı", "⚠ Dikkat", "✓ İdeal", "Porselen asitlere dirençlidir"],
        ["Hamur Hazırlık Alanı", "✓ Mükemmel", "○ İyi", "Mermerin doğal soğukluğu"],
        ["Dış Mekan / Bahçe", "○ Riskli", "✓ Mükemmel", "Porselen UV ışınlarına dayanıklıdır"],
      ],
    },
    { type: "h2", text: "4. Fiyatlandırma Notları (2025)" },
    {
      type: "ul",
      items: [
        { strong: "Mermer", text: "Yerli taşlar uygun olabilirken, ithal ve nadir mermerler servet değerinde olabilir. Bakım maliyeti vardır." },
        { strong: "Porselen", text: "Premium segmenttedir. Metrekare fiyatı 7.000 TL - 12.000 TL+ (marka/kalınlık hariç) aralığındadır. Bakım masrafı yoktur." },
      ],
    },
    { type: "image", src: "/images/blog/mermer-porselen-malzemelerinin-ozellikleri/gallery-1.webp", alt: "Malzeme uygulamaları", aspect: "3 / 2", bleed: true },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Hangisini Seçmelisiniz?",
      body: "'Yaşanmışlık hissi' ve doğal patina için Mermer. 'Tak ve unut' konforu, hijyen ve dayanıklılık için Porselen.",
    },
  ],

  "mermer-vs-porselen": [
    {
      type: "lead",
      text:
        "Yüzyıllardır lüksün sembolü olan doğal mermer mi, yoksa teknolojinin zirvesi porselen mi? Estetik, bütçe ve dayanıklılık açısından en doğru kararı vermeniz için karşılaştırdık.",
    },
    { type: "image", src: "/images/blog/mermer-vs-porselen/main.webp", alt: "Mermer vs porselen", aspect: "4 / 5" },
    { type: "h2", text: "1. Doğal Mermer" },
    { type: "image", src: "/images/blog/mermer-vs-porselen/overlay.webp", alt: "Doğal mermer detay", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Doğal mermer, milyonlarca yıllık jeolojik süreçlerin bir ürünüdür. Calacatta veya Carrara gibi türlerin sunduğu damar yapıları, mekana lüks ve doğal bir hava katar.",
    },
    { type: "h3", text: "Avantajları" },
    {
      type: "ul",
      items: [
        { strong: "Eşsiz Estetik", text: "Tekrarlamayan doğal desenler." },
        { strong: "Isı Yönetimi", text: "Soğuk yapısı sayesinde hamur işleri için idealdir." },
        { strong: "Yenilenebilirlik", text: "Profesyonel silim ile ilk günkü haline dönebilir." },
      ],
    },
    { type: "h3", text: "Dikkat" },
    {
      type: "ul",
      items: [
        { strong: "Hassas Yüzey", text: "Limon, sirke gibi asitler leke yapabilir." },
        { strong: "Bakım Şart", text: "6-12 ayda bir sızdırmazlık cilası (sealer) gerektirir." },
      ],
    },
    { type: "quote", text: "Her plaka eşsiz bir sanat eseri." },
    { type: "h2", text: "2. Porselen Tezgah" },
    { type: "imageQuote", src: "/images/blog/mermer-vs-porselen/dark-bg.webp", alt: "Endişesiz kullanım, modern estetik", quote: "Mohs 7-8 sertlik, %0.05 su emilimi." },
    {
      type: "p",
      text:
        "Teknoloji ve dayanıklılığın zirvesi. 1200°C üzerinde sinterlenen bu yüzeyler, Mohs sertlik skalasında 7-8 dereceye ulaşarak çizilmelere karşı mermerden çok daha dirençlidir.",
    },
    { type: "h3", text: "Avantajları" },
    {
      type: "ul",
      items: [
        { strong: "Olağanüstü Dayanıklılık", text: "Çizilmez, ısıdan ve UV ışınlarından etkilenmez." },
        { strong: "Tam Hijyen", text: "Gözeneksizdir; şarap, kahve lekesi tutmaz, bakteri barındırmaz." },
        { strong: "Tasarım Esnekliği", text: "Mermer desenleri birebir taklit edilebilir." },
      ],
    },
    { type: "h3", text: "Dikkat" },
    {
      type: "ul",
      items: [
        { strong: "Darbe Hassasiyeti", text: "Köşelere gelen çok sert darbeler yontulmaya (chipping) yol açabilir." },
        { strong: "Uygulama Zorluğu", text: "Kesimi zordur, çok deneyimli usta gerektirir." },
      ],
    },
    { type: "quote", text: "Endişesiz kullanım, modern estetik." },
    { type: "h2", text: "Profesyonel İpucu" },
    {
      type: "p",
      text:
        "Mutfakta 'ciddi bir aşçı' iseniz ve tezgah üzerinde sürekli limon, sirke kullanıyor, dökülenleri anında temizleyemiyorsanız; Porselen sizin için en mantıklı seçimdir.",
    },
    {
      type: "p",
      text:
        "Ancak, malzemenin doğal yaşlanmasını, patinasını (yaşanmışlık izlerini) seviyorsanız ve düzenli bakım yapabilirim diyorsanız, Mermer mekanınıza eşsiz bir ruh katacaktır.",
    },
    { type: "h2", text: "Teknik Karşılaştırma Tablosu" },
    {
      type: "table",
      headers: ["Özellik", "Mermer", "Porselen"],
      rows: [
        ["Çizilme Direnci", "Orta (Metal ile çizilebilir)", "Çok Yüksek (Bıçak çizmez)"],
        ["Isı Direnci", "Yüksek", "Mükemmel (Alev almaz)"],
        ["Leke Direnci", "Düşük (Aside hassas)", "Mükemmel (Sıfır gözenek)"],
        ["Bakım", "Yüksek (Düzenli Sealer)", "Yok (Sadece temizlik)"],
        ["Kalınlık", "Genelde 2-3 cm", "6mm, 12mm, 20mm"],
      ],
    },
    { type: "image", src: "/images/blog/mermer-vs-porselen/gallery-1.webp", alt: "Karşılaştırmalı uygulama", aspect: "3 / 2", bleed: true },
    { type: "h2", text: "Bütçe" },
    {
      type: "ul",
      items: [
        { strong: "Porselen", text: "₺4.000 - ₺20.000+ / m². Uzun vadede ekonomiktir." },
        { strong: "Mermer", text: "Değişken. Yerli taşlar uygun, ithal türler pahalı. Düzenli bakım maliyeti eklenir." },
      ],
    },
  ],

  "yuzey-bakim-rehberi": [
    {
      type: "lead",
      text:
        "Mutfak ve banyoların yıldızı olan yüzeyler, ilk günkü ihtişamını korumak için doğru bakıma ihtiyaç duyar. Doğal yapısıyla mermer ve teknolojinin armağanı porselen, temizlik rutinlerinde birbirinden tamamen farklı yaklaşımlar gerektirir.",
    },
    { type: "image", src: "/images/blog/yuzey-bakim-rehberi/main.webp", alt: "Yüzey bakım rehberi", aspect: "4 / 5" },
    { type: "h2", text: "1. Doğal Mermer Bakımı: Hassas ve Özenli Dokunuşlar" },
    { type: "image", src: "/images/blog/yuzey-bakim-rehberi/overlay.webp", alt: "Mermer bakım uygulaması", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Mermer, kalsiyum karbonat bazlı ve gözenekli bir yapıya sahiptir; bu da onu asitlere ve lekelere karşı narin ve nazlı bir taş yapar.",
    },
    { type: "h3", text: "Günlük Temizlik Rutini" },
    {
      type: "ul",
      items: [
        { strong: "Doğru Ürün Seçimi", text: "Mermer temizliğinde asla genel yüzey temizleyicileri kullanmayın. Sadece ılık su ve pH değeri nötr (7) olan, doğal taşlar için özel üretilmiş temizleyiciler veya arap sabunu tercih edilmelidir." },
        { strong: "Kurulama Şart", text: "Temizlik sonrası yüzeyi mutlaka yumuşak bir mikrofiber bezle kurulayın. Su birikintileri zamanla kireç lekelerine ve matlaşmaya yol açabilir." },
      ],
    },
    { type: "h3", text: "Leke Müdahalesi ve Koruma" },
    {
      type: "ul",
      items: [
        { strong: "Asit Tehlikesi", text: "Limon, sirke, şarap veya kahve döküldüğünde saniyeler içinde müdahale edin. Asit, mermer yüzeyde 'etching' denilen kalıcı mat yanıklar oluşturur." },
        { strong: "Mühürleme (Emprenye)", text: "Mermerin gözeneklerini kapatmak için 6 ayda veya yılda bir düzenli olarak 'sealer' uygulaması yapılmalıdır." },
        { strong: "Zorlu Lekeler", text: "Yağ lekeleri için karbonat veya mısır nişastası ile yapılan bir macun (lapa) lekenin üzerine sürülüp streç filmle kapatılarak 24 saat bekletilebilir." },
      ],
    },
    { type: "quote", text: "Mermer, özen istediğinde parlar." },
    { type: "h2", text: "2. Porselen Yüzey Bakımı: Zahmetsiz ve Hijyenik" },
    { type: "imageQuote", src: "/images/blog/yuzey-bakim-rehberi/dark-bg.webp", alt: "Tak ve unut konforu", quote: "Gözeneksiz yapı, sealer gerektirmez." },
    {
      type: "p",
      text:
        "Yüksek sıcaklıkta fırınlanarak üretilen porselen, gözeneksiz yapısı sayesinde mermere göre çok daha kullanıcı dostu ve dayanıklıdır.",
    },
    { type: "h3", text: "Günlük Temizlik Rutini" },
    {
      type: "ul",
      items: [
        { strong: "Basit ve Etkili", text: "Porselen tezgahların günlük temizliği için ılık su ve birkaç damla yumuşak bulaşık deterjanı yeterlidir." },
        { strong: "Leke Tutmazlık", text: "Gözeneksiz olduğu için şarap, yağ veya kahve gibi sıvılar yüzeye işlemez; mühürleme (sealer) işlemine ihtiyaç duymaz." },
      ],
    },
    { type: "h3", text: "Dikkat Edilmesi Gerekenler" },
    {
      type: "ul",
      items: [
        { strong: "Metal İzleri", text: "Üzerine sürtülen çatal-bıçaklar yüzeyde gri metal izleri bırakabilir. Bu izler çizik değil, metal kalıntısıdır; özel temizleyicilerle çıkarılabilir." },
        { strong: "Aşındırıcılardan Kaçının", text: "Bulaşık telinin sert tarafı veya çelik yünü gibi aşındırıcılar zamanla yüzeyin cilasına zarar verebilir." },
      ],
    },
    { type: "quote", text: "Temizlik kolay, sonuç kusursuz." },
    { type: "h2", text: "Sık Yapılan 3 Kritik Hata" },
    {
      type: "ol",
      items: [
        { strong: "Sirke Kullanımı", text: "Porselen için seyreltilmiş sirke kireç lekelerinde kullanılabilirken, mermer için sirke bir felakettir; asidik yapısı taşı anında aşındırır." },
        { strong: "Havada Kurumaya Bırakmak", text: "Her iki yüzeyde de su lekelerini önlemek için temizlik sonrası mutlaka kuru bir bezle son geçişi yapın." },
        { strong: "Ağartıcılar (Çamaşır Suyu)", text: "Mermerin doğal dokusunu yakar ve porselenin parlaklığını zamanla matlaştırabilir." },
      ],
    },
    { type: "h2", text: "Bakım Karşılaştırması" },
    {
      type: "table",
      headers: ["Özellik", "Mermer Bakımı", "Porselen Bakımı"],
      rows: [
        ["Günlük Temizlik", "pH Nötr deterjan + Kurulama", "Su + Bulaşık Deterjanı"],
        ["Leke Direnci", "Düşük (Anında müdahale şart)", "Mükemmel (Leke tutmaz)"],
        ["Koruyucu Bakım", "Düzenli Emprenye Gerekir", "Mühürleme Gerektirmez"],
        ["Kimyasal Hassasiyeti", "Asitlere Çok Hassas", "Kimyasallara Dayanıklı"],
        ["Çizilme Onarımı", "Profesyonel silim ile giderilebilir", "Evde giderilmesi zordur"],
      ],
    },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Uzun Ömürlü Kullanım İçin İpuçları",
      body: "Mermer, yaşayan bir malzemedir; periyodik profesyonel silim ve cilalama ile yüzyıllarca kullanılabilir. Porselen ise modern çağın 'tak ve unut' malzemesidir; ancak kenar darbelerine karşı korunmalı ve üzerinde doğrudan kesim yapılmamalıdır.",
    },
  ],

  "mermer-atolyesi-surdurulebilir-uretim": [
    {
      type: "lead",
      text:
        "Doğal taş sektörü, doğanın armağanını işleyerek değer yaratırken, önemli bir çevresel sorumluluğu da sırtlamaktadır. 2025 vizyonuyla mermer atölyeleri artık sadece 'taş kesen' yerler değil, atığı enerjiye dönüştüren 'yeşil üretim merkezleri' haline geliyor.",
    },
    { type: "image", src: "/images/blog/mermer-atolyesi-surdurulebilir-uretim/main.webp", alt: "Sürdürülebilir atölye", aspect: "4 / 5" },
    { type: "h2", text: "1. Atık Değil, Yeni Hammadde" },
    { type: "image", src: "/images/blog/mermer-atolyesi-surdurulebilir-uretim/overlay.webp", alt: "Mermer atık geri dönüşüm", aspect: "1 / 1" },
    {
      type: "p",
      text:
        "Mermer işleme sürecinde ortaya çıkan büyük miktardaki mermer tozu (AMT), doğru yönetilmezse çevre sorunudur; ancak aslında değerli birer hammaddedir.",
    },
    { type: "h3", text: "Atölye İçi Değerlendirme" },
    {
      type: "ul",
      items: [
        { strong: "Mermerit", text: "Tozları ve parça atıkları polyester reçine ile birleştirerek %97 verimle mutfak tezgahı veya lavabo üretimi." },
        { strong: "Döküm Tekniği", text: "Silikon kalıplar kullanılarak atık tozların sanatsal heykellere veya yapı elemanlarına dönüştürülmesi." },
        { strong: "Endüstriyel Satış", text: "Seramik, boya ve plastik endüstrilerine dolgu malzemesi olarak tedarik." },
      ],
    },
    { type: "h2", text: "2. Su Yönetimi ve Arıtma" },
    { type: "imageQuote", src: "/images/blog/mermer-atolyesi-surdurulebilir-uretim/dark-bg.webp", alt: "Sıfır atık", quote: "Filter pres ile %95'e varan su tasarrufu." },
    {
      type: "p",
      text:
        "Kesim sırasında kullanılan su, mermer tozu ile karışarak çamurlu bir yapı oluşturur. Modern atölyelerde suyun geri kazanımı hayati önem taşır.",
    },
    {
      type: "ol",
      items: [
        { strong: "Filter Pres Kullanımı", text: "Geleneksel havuzlar verimsizdir. Filter Pres sistemleri, atık suyun içindeki çamuru (kek) suyundan ayırır ve berraklaşan suyu sisteme geri kazandırarak büyük su tasarrufu sağlar." },
        { strong: "Atık Kekin Bertarafı", text: "Filter presten çıkan katı atık kekleri, zemin dolgu malzemesi olarak veya tuğla/kiremit üretiminde hammadde olarak değerlendirilir." },
      ],
    },
    { type: "h2", text: "3. Enerji Verimliliği ve Teknoloji" },
    { type: "image", src: "/images/blog/mermer-atolyesi-surdurulebilir-uretim/main-2.webp", alt: "CNC ile fire azaltma", aspect: "4 / 5" },
    {
      type: "ul",
      items: [
        { strong: "CNC Teknolojisi", text: "CAD/CAM desteği ile plakadaki yerleşimi optimize eder, fireyi azaltır ve atık oranını minimize eder." },
        { strong: "Kesim Parametreleri", text: "Kesme derinliği (örn. 2.0 mm) ve ilerleme hızının optimize edilmesi, spesifik kesme enerjisini düşürerek elektrik tasarrufu sağlar." },
        { strong: "Yenilenebilir Enerji", text: "Atölye çatısına kurulacak güneş panelleri, işletmenin karbon emisyonlarını azaltır ve uzun vadede maliyet avantajı yaratır." },
      ],
    },
    { type: "h2", text: "4. Porselenin Yükselişi: Neden Daha Yeşil?" },
    {
      type: "p",
      text:
        "Sürdürülebilirlik sadece üretimle değil, malzeme seçimiyle de ilgilidir. Kil ve kaolin gibi doğal malzemelerden üretilen porselen levhalar toksik madde içermez.",
    },
    {
      type: "ul",
      items: [
        { strong: "Tamamen Geri Dönüştürülebilir", text: "Üretim sürecinde toksik atık oluşumu minimaldir." },
        { strong: "Uzun Ömürlülük", text: "Çizilme ve lekelere direnci sayesinde ürün yaşam döngüsü uzar, atık oluşumu azalır." },
      ],
    },
    { type: "h2", text: "Kintsugi ile Dönüşüm" },
    { type: "quote", text: "Kusurları gizlemeyin, yüceltin." },
    {
      type: "p",
      text:
        "Atölyede kırılan veya çatlayan değerli taşları çöpe atmak yerine, Japon sanatı Kintsugi ile altın tozu karıştırılmış reçine kullanarak onarabilirsiniz. Bu sayede fire olarak ayrılan parçalardan katma değeri yüksek, hikayesi olan butik ürünler tasarlayabilirsiniz.",
    },
    { type: "image", src: "/images/blog/mermer-atolyesi-surdurulebilir-uretim/gallery-1.webp", alt: "Yeşil atölye uygulamaları", aspect: "3 / 2", bleed: true },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Geleceğin Atölyesi Bugün Kuruluyor",
      body: "Sürdürülebilirlik sadece çevreyi korumakla kalmaz; atıktan ek gelir sağlar, su geri kazanımıyla maliyeti düşürür. Geleceğin madenciliği, doğadan aldığını ona zarar vermeden, en verimli şekilde kullananların olacaktır.",
    },
  ],

  "mermer-porselen-pazarlama-stratejileri": [
    {
      type: "lead",
      text:
        "Doğal taş ve seramik sektöründe 'İyi mal kendini satar' dönemi geride kaldı. Artık bir mimarın projesine girmek için sadece kaliteli üretim yetmiyor; dijital dünyada görünür olmak gerekiyor.",
    },
    { type: "imagePair", left: { src: "/images/blog/mermer-porselen-pazarlama-stratejileri/compare-left.webp", alt: "SEO yanlış strateji", caption: "Yanlış Strateji" }, right: { src: "/images/blog/mermer-porselen-pazarlama-stratejileri/compare-right.webp", alt: "Long-tail SEO doğru", caption: "Doğru Strateji" } },
    { type: "h2", text: "1. SEO: Müşterinin Sizi Bulması" },
    { type: "imagePair", left: { src: "/images/blog/mermer-porselen-pazarlama-stratejileri/portrait-mermer.webp", alt: "Mermer makro çekim", caption: "Makro — Mermer" }, right: { src: "/images/blog/mermer-porselen-pazarlama-stratejileri/portrait-porselen.webp", alt: "Porselen makro çekim", caption: "Makro — Porselen" } },
    {
      type: "p",
      text:
        "Mermer ve porselen, görsel olduğu kadar teknik de bir iştir. Müşterileriniz Google'da arama yaparken genellikle 'bilgi edinme' veya 'satın alma' niyetindedir.",
    },
    { type: "h3", text: "Anahtar Kelime Stratejisi" },
    {
      type: "ul",
      items: [
        { strong: "✗ Yanlış", text: "'Mutfak Tezgahı' (Çok genel, rekabet yüksek)" },
        { strong: "✓ Doğru", text: "'Çizilmez porselen mutfak tezgahı fiyatları Ankara'" },
      ],
    },
    {
      type: "callout",
      eyebrow: "Lokal SEO İpucu",
      title: "Google İşletme Profili",
      body: "İşletmenizin Google Haritalar kaydı ve müşteri yorumları, yerel aramalarda (örn: 'yakınımdaki mermerci') çıkmanız için hayatidir.",
    },
    { type: "h2", text: "2. Görselin Gücü: Fotoğraf & Video" },
    {
      type: "p",
      text:
        "Akademik araştırmalar, kaliteli ürün fotoğraflarının satın alma oranlarını istatistiksel olarak artırdığını kanıtlamaktadır. Mermer gibi estetik ürünlerde bu etki katlanarak artar.",
    },
    {
      type: "ol",
      items: [
        { strong: "Makro Çekimler", text: "Mermerin damar yapısını veya porselenin dokusunu gösteren ultra yakın çekimler güven verir." },
        { strong: "Uygulama Örnekleri", text: "Sadece plaka değil; bitmiş bir mutfakta veya banyoda nasıl durduğunu gösteren yaşam alanı fotoğrafları." },
        { strong: "Test Videoları", text: "'Limon testi' veya 'Sıcak tencere testi' gibi dayanıklılık videoları soru işaretlerini giderir." },
      ],
    },
    { type: "h2", text: "3. Sosyal Medya ve Influencer: Mimar İşbirlikleri" },
    {
      type: "p",
      text:
        "Bu sektörde gerçek influencerlar mimarlar ve iç mimarlardır. Bir mimarın projesinde taşınızı kullanması, binlerce reklamdan daha değerlidir.",
    },
    {
      type: "ul",
      items: [
        { strong: "Instagram & Pinterest", text: "Son kullanıcıya ilham vermek için." },
        { strong: "LinkedIn", text: "İnşaat firmaları ile B2B bağlantılar için." },
      ],
    },
    { type: "h2", text: "4. E-Ticaret ve Google Ads" },
    {
      type: "ul",
      items: [
        { strong: "Arama Ağı Reklamları", text: "'Mermer masa fiyatları' gibi satın alma odaklı aramaları hedefleyin. 'İkinci el' veya 'ucuz' gibi kelimeleri negatifleyerek bütçenizi koruyun." },
        { strong: "Yeniden Pazarlama", text: "Sitenizi gezen ama satın almayan kullanıcılara (Retargeting), başka sitelerde ürünlerinizi tekrar göstererek markanızı hatırlatın." },
        { strong: "Numune Gönderimi", text: "Online satışta dokunma hissi eksiktir. Müşterilerin küçük numune (sample) sipariş edebileceği bir sistem kurarak bu engeli aşın." },
        { strong: "Teknik Detaylar", text: "Ürün sayfalarında sadece 'güzel' demek yetmez. Kalınlık, yüzey bitişi (mat/parlak), leke direnci sınıfı gibi teknik verileri şeffafça sunun." },
      ],
    },
    { type: "h2", text: "Sektörel Fuarlar" },
    { type: "quote", text: "Dijitalleşme fuarları öldürmedi, güçlendirdi." },
    {
      type: "p",
      text:
        "MARBLE İzmir veya UNICERA gibi fuarlarda topladığınız kartvizitleri CRM sistemine işleyin. Fuar öncesi dijital davetiyeler gönderin, fuar sırasında standınızdan canlı yayınlar yaparak dijital takipçilerinizi standınıza çekin.",
    },
    { type: "imagePair", left: { src: "/images/blog/mermer-porselen-pazarlama-stratejileri/gallery-mermer.webp", alt: "Mermer pazarlama uygulaması" }, right: { src: "/images/blog/mermer-porselen-pazarlama-stratejileri/gallery-porselen.webp", alt: "Porselen pazarlama uygulaması" } },
    {
      type: "callout",
      eyebrow: "Sonuç",
      title: "Bütüncül Bir Yaklaşım",
      body: "Mermer ve porselen pazarlamasında başarı; teknik bilgiyi, estetik sunumu ve dijital erişilebilirliği birleştirmekten geçer. Ürününüzün hikayesini doğru anlatmak, onu en az işlemek kadar değerlidir.",
    },
  ],
};

const localizedContent: Partial<
  Record<string, Partial<Record<Exclude<Locale, "tr">, ContentBlock[]>>>
> = {
  "neo-deco-mermer-gorunumlu-porselen-2026": {
    en: [
      {
        type: "lead",
        text: "Interior design is moving toward quieter, more tactile luxury. As 2026 approaches, living spaces are becoming experience-led environments where technology, natural references and sustainable material choices work together.",
      },
      { type: "image", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/main.webp", alt: "Neo Deco marble-look porcelain surface", aspect: "4 / 5" },
      { type: "h2", text: "1. Neo Deco and Quiet Luxury" },
      {
        type: "p",
        text: "Neo Deco reinterprets the confidence of 1920s Art Deco with a calmer, more architectural language. Instead of excessive ornament, it relies on controlled veining, warm metal accents and carefully selected stone textures.",
      },
      { type: "h3", text: "2026 Color Palette and Materials" },
      { type: "image", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/overlay.webp", alt: "Quiet luxury color palette", aspect: "1 / 1" },
      {
        type: "ul",
        items: [
          { strong: "Mocha and earth tones", text: "Warm, grounded colors that make stone surfaces feel softer." },
          { strong: "Red marble effects", text: "Bold accents for floors, bathrooms and statement countertops." },
          { strong: "Aged brass", text: "A refined metal layer for sensory depth." },
        ],
      },
      { type: "h2", text: "2. Marble-look Porcelain: Why It Can Outperform the Original" },
      { type: "imageQuote", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/dark-bg.webp", alt: "Marble-look porcelain", quote: "Veining is no longer only on the surface; it becomes part of the material language." },
      {
        type: "p",
        text: "Natural marble remains captivating, but new-generation porcelain and sintered stone change the performance equation. Large slabs can deliver the depth of marble while reducing maintenance concerns in kitchens, bathrooms, lobbies and outdoor areas.",
      },
      {
        type: "table",
        headers: ["", "Natural Marble", "Porcelain", "Quartz"],
        rows: [
          ["Look", "Unique, one-of-a-kind slabs", "Hyper-realistic and consistent", "Homogeneous pattern"],
          ["Durability", "Can scratch and reacts to acid", "Scratch-resistant and fireproof", "Sensitive to high heat"],
          ["Care", "Needs periodic care", "Low-maintenance", "Easy to clean"],
          ["Use", "Interior, lower traffic zones", "Interior and exterior", "Interior only"],
        ],
      },
      { type: "h2", text: "3. Ecological Luxury" },
      {
        type: "p",
        text: "The strongest 2026 projects will combine beauty with responsibility. Recycled stone particles, efficient slab planning and durable surfaces help reduce waste while preserving a premium design language.",
      },
      { type: "image", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/gallery-1.webp", alt: "Neo Deco living space application", aspect: "3 / 2", bleed: true },
      {
        type: "callout",
        eyebrow: "Design Decision",
        title: "Which Surface Should You Choose?",
        body: "Choose natural marble when patina and uniqueness are the priority. Choose large-format porcelain when you need stain resistance, outdoor stability and a more predictable maintenance profile.",
      },
    ],
    de: [
      {
        type: "lead",
        text: "Die Innenarchitektur bewegt sich in Richtung einer ruhigeren, haptischeren Form von Luxus. Mit Blick auf 2026 werden Wohnräume zu Erlebnisbereichen, in denen Technologie, natürliche Referenzen und nachhaltige Materialentscheidungen zusammenwirken.",
      },
      { type: "image", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/main.webp", alt: "Neo-Deco-Oberfläche in Marmoroptik", aspect: "4 / 5" },
      { type: "h2", text: "1. Neo Deco und stiller Luxus" },
      {
        type: "p",
        text: "Neo Deco interpretiert die Selbstsicherheit des Art Déco der 1920er Jahre in einer ruhigeren, architektonischeren Sprache. Statt übermäßiger Ornamentik nutzt der Stil kontrollierte Maserung, warme Metallakzente und sorgfältig ausgewählte Steintexturen.",
      },
      { type: "h3", text: "Farbpalette und Materialien für 2026" },
      { type: "image", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/overlay.webp", alt: "Farbpalette für stillen Luxus", aspect: "1 / 1" },
      {
        type: "ul",
        items: [
          { strong: "Mokka- und Erdtöne", text: "Warme, geerdete Farben, die Steinflächen weicher wirken lassen." },
          { strong: "Rote Marmoroptiken", text: "Mutige Akzente für Böden, Bäder und markante Arbeitsplatten." },
          { strong: "Gealtertes Messing", text: "Eine elegante Metallschicht für sinnliche Tiefe." },
        ],
      },
      { type: "h2", text: "2. Porzellan in Marmoroptik: Wann es das Original übertrifft" },
      { type: "imageQuote", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/dark-bg.webp", alt: "Porzellan in Marmoroptik", quote: "Maserung liegt nicht mehr nur auf der Oberfläche; sie wird Teil der Materialsprache." },
      {
        type: "p",
        text: "Naturmarmor bleibt faszinierend, doch Porzellan und Sinterstein der neuen Generation verändern die Leistungsbilanz. Großformatige Platten können die Tiefe von Marmor vermitteln und gleichzeitig Pflegefragen in Küchen, Bädern, Lobbys und Außenbereichen reduzieren.",
      },
      {
        type: "table",
        headers: ["", "Naturmarmor", "Porzellan", "Quarz"],
        rows: [
          ["Optik", "Einzigartige Platten", "Hyperrealistisch und konsistent", "Homogenes Muster"],
          ["Beständigkeit", "Kann verkratzen, säureempfindlich", "Kratzfest und feuerfest", "Empfindlich gegen hohe Hitze"],
          ["Pflege", "Benötigt regelmäßige Pflege", "Pflegearm", "Leicht zu reinigen"],
          ["Einsatz", "Innenräume mit geringerer Nutzung", "Innen- und Außenbereiche", "Nur Innenbereich"],
        ],
      },
      { type: "h2", text: "3. Ökologischer Luxus" },
      {
        type: "p",
        text: "Die stärksten Projekte für 2026 verbinden Schönheit mit Verantwortung. Recycelte Steinpartikel, effiziente Plattenplanung und langlebige Oberflächen helfen, Abfall zu reduzieren und gleichzeitig eine hochwertige Designsprache zu bewahren.",
      },
      { type: "image", src: "/images/blog/neo-deco-mermer-gorunumlu-porselen-2026/gallery-1.webp", alt: "Neo-Deco-Anwendung im Wohnraum", aspect: "3 / 2", bleed: true },
      {
        type: "callout",
        eyebrow: "Designentscheidung",
        title: "Welche Oberfläche passt besser?",
        body: "Wählen Sie Naturmarmor, wenn Patina und Einzigartigkeit im Vordergrund stehen. Wählen Sie Großformat-Porzellan, wenn Fleckenbeständigkeit, Außenraumtauglichkeit und planbare Pflege wichtiger sind.",
      },
    ],
  },
  "atolye-urun-fikirleri-mermer-porselen": {
    en: [
      {
        type: "lead",
        text: "Decoration is no longer limited to kitchen countertops. Wall panels, furniture and accessories are also becoming strong applications for natural stone and porcelain. The real question for a workshop is where to use the luxury of marble and where to rely on the technical strength of porcelain.",
      },
      { type: "image", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/main.webp", alt: "Workshop marble and porcelain design", aspect: "4 / 5" },
      { type: "h2", text: "1. Luxury Wall Panels" },
      { type: "image", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/overlay.webp", alt: "Luxury wall panel", aspect: "1 / 1" },
      {
        type: "p",
        text: "Wall cladding increases the perceived value of a home. In this application, porcelain often has a technical advantage because it can be produced in thin, lightweight and very large formats.",
      },
      { type: "h3", text: "Where Porcelain Leads" },
      {
        type: "ul",
        items: [
          { strong: "Thin and large", text: "3-6 mm slabs and 320x160 cm formats create a seamless look with fewer joints." },
          { strong: "Lightweight", text: "It does not add unnecessary load to the building and is practical for bathroom walls and TV panels." },
          { strong: "Design flexibility", text: "Backlit applications and large continuous surfaces create a dramatic effect." },
        ],
      },
      { type: "h2", text: "2. Furniture Design" },
      {
        type: "p",
        text: "Dining tables and coffee tables are among the most attractive workshop products. Material selection directly affects customer satisfaction, logistics and long-term use.",
      },
      { type: "h3", text: "Marble Tables: Weight and Nobility" },
      {
        type: "ul",
        items: [
          { strong: "Pros", text: "Premium appearance, unique veining and made-to-measure design value." },
          { strong: "Cons", text: "Porous structure, staining risk and high weight." },
        ],
      },
      { type: "quote", text: "Customers should be warned to protect marble from acidic liquids." },
      { type: "h3", text: "Porcelain Tables: Modern and Durable" },
      {
        type: "ul",
        items: [
          { strong: "Pros", text: "High scratch resistance, lighter construction and more flexibility with metal bases." },
          { strong: "Outdoor use", text: "UV resistance makes porcelain suitable for garden furniture and terraces." },
        ],
      },
      { type: "h2", text: "3. Boutique Product Ideas" },
      { type: "imageQuote", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/dark-bg.webp", alt: "Boutique workshop products", quote: "Offcuts can become value when the product has a story." },
      {
        type: "ul",
        items: [
          { strong: "Serving pieces", text: "Marble trays, candle holders and display pieces communicate luxury when finished with food-safe protection." },
          { strong: "Trivets and cutting boards", text: "Heat-resistant porcelain is ideal for hot pots and hygienic preparation surfaces." },
          { strong: "Small collections", text: "Repeatable sizes help turn leftover slab pieces into consistent, sellable product families." },
        ],
      },
      { type: "h2", text: "4. Production Details That Matter" },
      {
        type: "ul",
        items: [
          { strong: "Edge profiles", text: "Porcelain is hard and can chip under impact; rounded or beveled corners are safer than sharp 90-degree edges." },
          { strong: "Cutting accuracy", text: "Dedicated diamond tools and wet cutting reduce cracking risk." },
          { strong: "Care expectations", text: "Grey marks on porcelain are usually metal residue and can be cleaned; acid marks on marble may require professional refinishing." },
        ],
      },
      { type: "image", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/gallery-1.webp", alt: "Workshop product gallery", aspect: "3 / 2", bleed: true },
      {
        type: "callout",
        eyebrow: "Strategy Summary",
        title: "Which Material Goes Where?",
        body: "Use porcelain for walls and outdoor pieces where lightness and UV resistance matter. Use marble for living-room pieces and premium objects where natural depth and uniqueness are the selling point.",
      },
    ],
    de: [
      {
        type: "lead",
        text: "Dekoration beschränkt sich nicht mehr auf Küchenarbeitsplatten. Wandpaneele, Möbel und Accessoires werden ebenfalls starke Anwendungen für Naturstein und Porzellan. Für eine Werkstatt lautet die eigentliche Frage: Wo nutzt man den Luxus von Marmor und wo die technische Stärke von Porzellan?",
      },
      { type: "image", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/main.webp", alt: "Werkstattdesign mit Marmor und Porzellan", aspect: "4 / 5" },
      { type: "h2", text: "1. Luxuriöse Wandpaneele" },
      { type: "image", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/overlay.webp", alt: "Luxuriöses Wandpaneel", aspect: "1 / 1" },
      {
        type: "p",
        text: "Wandverkleidungen erhöhen den wahrgenommenen Wert eines Hauses. In dieser Anwendung hat Porzellan oft einen technischen Vorteil, weil es dünn, leicht und in sehr großen Formaten verarbeitet werden kann.",
      },
      { type: "h3", text: "Wo Porzellan führt" },
      {
        type: "ul",
        items: [
          { strong: "Dünn und groß", text: "3-6 mm Platten und Formate bis 320x160 cm erzeugen eine nahtarme, monolithische Wirkung." },
          { strong: "Leicht", text: "Es belastet das Gebäude nicht unnötig und eignet sich gut für Badwände und TV-Paneele." },
          { strong: "Gestaltungsfreiheit", text: "Hinterleuchtete Anwendungen und große durchgehende Flächen erzeugen eine dramatische Wirkung." },
        ],
      },
      { type: "h2", text: "2. Möbeldesign" },
      {
        type: "p",
        text: "Esstische und Couchtische gehören zu den attraktivsten Werkstattprodukten. Die Materialwahl beeinflusst Kundenzufriedenheit, Logistik und langfristige Nutzung direkt.",
      },
      { type: "h3", text: "Marmortische: Gewicht und Noblesse" },
      {
        type: "ul",
        items: [
          { strong: "Vorteile", text: "Hochwertige Wirkung, einzigartige Maserung und individueller Designwert." },
          { strong: "Nachteile", text: "Poröse Struktur, Fleckenrisiko und hohes Gewicht." },
        ],
      },
      { type: "quote", text: "Kunden sollten darauf hingewiesen werden, Marmor vor säurehaltigen Flüssigkeiten zu schützen." },
      { type: "h3", text: "Porzellantische: modern und beständig" },
      {
        type: "ul",
        items: [
          { strong: "Vorteile", text: "Hohe Kratzfestigkeit, leichtere Konstruktion und mehr Flexibilität bei Metallgestellen." },
          { strong: "Außenbereich", text: "UV-Beständigkeit macht Porzellan geeignet für Gartenmöbel und Terrassen." },
        ],
      },
      { type: "h2", text: "3. Boutique-Produktideen" },
      { type: "imageQuote", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/dark-bg.webp", alt: "Boutique-Produkte aus der Werkstatt", quote: "Reststücke werden wertvoll, wenn das Produkt eine Geschichte hat." },
      {
        type: "ul",
        items: [
          { strong: "Servierstücke", text: "Marmortabletts, Kerzenhalter und Präsentationsobjekte vermitteln Luxus, wenn sie lebensmittelecht geschützt sind." },
          { strong: "Untersetzer und Schneidebretter", text: "Hitzebeständiges Porzellan eignet sich ideal für heiße Töpfe und hygienische Arbeitsflächen." },
          { strong: "Kleine Kollektionen", text: "Wiederholbare Größen verwandeln Reststücke in konsistente, verkaufbare Produktfamilien." },
        ],
      },
      { type: "h2", text: "4. Produktionsdetails, die zählen" },
      {
        type: "ul",
        items: [
          { strong: "Kantenprofile", text: "Porzellan ist hart und kann bei Stößen ausbrechen; gerundete oder gefaste Ecken sind sicherer als scharfe 90-Grad-Kanten." },
          { strong: "Schnittgenauigkeit", text: "Spezielle Diamantwerkzeuge und Nassschnitt reduzieren das Risiko von Rissen." },
          { strong: "Pflegeerwartung", text: "Graue Spuren auf Porzellan sind meist Metallrückstände und lassen sich reinigen; Säurespuren auf Marmor benötigen oft professionelles Nacharbeiten." },
        ],
      },
      { type: "image", src: "/images/blog/atolye-urun-fikirleri-mermer-porselen/gallery-1.webp", alt: "Galerie von Werkstattprodukten", aspect: "3 / 2", bleed: true },
      {
        type: "callout",
        eyebrow: "Strategieübersicht",
        title: "Welches Material wohin?",
        body: "Nutzen Sie Porzellan für Wände und Außenstücke, wenn Leichtigkeit und UV-Beständigkeit wichtig sind. Nutzen Sie Marmor für Wohnraumobjekte und Premiumstücke, wenn natürliche Tiefe und Einzigartigkeit das Verkaufsargument sind.",
      },
    ],
  },
  "mermer-porselen-kombinasyonu-tasarim-fikirleri": {
    en: [
      { type: "lead", text: "The strongest interiors often come from controlled contrast. Marble brings natural depth and prestige; porcelain brings technical performance, large-format continuity and easier maintenance." },
      { type: "image", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/main.webp", alt: "Marble and porcelain combination", aspect: "4 / 5" },
      { type: "h2", text: "1. Furniture and Living Areas" },
      { type: "p", text: "Use porcelain where daily wear is high and marble where the object should become a visual anchor. A porcelain dining table can be paired with a sculptural marble coffee table for a balanced and refined room." },
      { type: "callout", eyebrow: "Combination Idea", title: "Living Room Strategy", body: "Choose porcelain for large functional surfaces and marble for smaller statement pieces where unique veining can be appreciated up close." },
      { type: "h2", text: "2. Kitchen Countertops" },
      { type: "imageQuote", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/dark-bg.webp", alt: "Kitchen countertop", quote: "The kitchen is where visual ambition and daily performance must meet." },
      { type: "ol", items: [
        { strong: "Porcelain", text: "Best for the main worktop because it resists heat, stains and scratches." },
        { strong: "Marble", text: "Excellent for pastry preparation, feature islands and selected zones where natural coolness and texture matter." },
      ] },
      { type: "h2", text: "3. Walls, Floors and Bathrooms" },
      { type: "p", text: "Large porcelain slabs create a wallpaper-like continuous surface with minimal joints. Marble can then be used in dry zones, vanities or accent walls to bring warmth and authenticity." },
      { type: "image", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/gallery-1.webp", alt: "Bathroom combination application", aspect: "3 / 2", bleed: true },
      { type: "callout", eyebrow: "Summary", title: "Use Each Material for Its Strength", body: "Porcelain for high-use surfaces and large walls; marble for focal points, sculptural pieces and tactile luxury." },
    ],
    de: [
      { type: "lead", text: "Die stärksten Innenräume entstehen oft aus kontrolliertem Kontrast. Marmor bringt natürliche Tiefe und Prestige; Porzellan bringt technische Leistung, großformatige Kontinuität und einfachere Pflege." },
      { type: "image", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/main.webp", alt: "Kombination aus Marmor und Porzellan", aspect: "4 / 5" },
      { type: "h2", text: "1. Möbel und Wohnbereiche" },
      { type: "p", text: "Nutzen Sie Porzellan dort, wo tägliche Belastung hoch ist, und Marmor dort, wo ein Objekt zum Blickfang werden soll. Ein Porzellan-Esstisch lässt sich mit einem skulpturalen Marmorcouchtisch zu einem ausgewogenen Raum verbinden." },
      { type: "callout", eyebrow: "Kombinationsidee", title: "Strategie für den Wohnraum", body: "Wählen Sie Porzellan für große funktionale Flächen und Marmor für kleinere Statement-Stücke, bei denen einzigartige Maserung aus der Nähe wirkt." },
      { type: "h2", text: "2. Küchenarbeitsplatten" },
      { type: "imageQuote", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/dark-bg.webp", alt: "Küchenarbeitsplatte", quote: "In der Küche müssen gestalterischer Anspruch und tägliche Leistung zusammenkommen." },
      { type: "ol", items: [
        { strong: "Porzellan", text: "Ideal für die Hauptarbeitsfläche, da es Hitze, Flecken und Kratzern widersteht." },
        { strong: "Marmor", text: "Stark für Backbereiche, Akzentinseln und ausgewählte Zonen, in denen natürliche Kühle und Textur zählen." },
      ] },
      { type: "h2", text: "3. Wände, Böden und Bäder" },
      { type: "p", text: "Großformatige Porzellanplatten erzeugen mit wenigen Fugen eine fast tapetenartige, durchgehende Oberfläche. Marmor kann in trockenen Zonen, Waschtischen oder Akzentwänden Wärme und Authentizität einbringen." },
      { type: "image", src: "/images/blog/mermer-porselen-kombinasyonu-tasarim-fikirleri/gallery-1.webp", alt: "Bad mit Materialkombination", aspect: "3 / 2", bleed: true },
      { type: "callout", eyebrow: "Zusammenfassung", title: "Jedes Material nach seiner Stärke einsetzen", body: "Porzellan für stark genutzte Flächen und große Wände; Marmor für Blickpunkte, skulpturale Elemente und haptischen Luxus." },
    ],
  },
  "bookmatch-doganin-senfonisi": {
    en: articleBlocks({
      lead: "Bookmatch turns natural veining into architectural symmetry. Consecutive slabs are opened like pages of a book so that the pattern mirrors itself across a central axis.",
      image: "/images/blog/bookmatch-doganin-senfonisi/main.webp",
      imageAlt: "Bookmatched marble with butterfly effect",
      h2: "How Bookmatch Works",
      p1: "The result is not just wall cladding; it is a natural composition that can define a lobby, bathroom, reception wall or executive floor. The technique works best when slab selection, lighting and viewing distance are planned together.",
      h3: "Design and Production Notes",
      bullets: [
        ["Slab selection", "Use consecutive slabs and review the vein direction before cutting."],
        ["Digital layout", "Confirm the joint line, central axis and final crop with the client."],
        ["Installation", "Small alignment errors are visible, so measurement and mounting accuracy are critical."],
      ],
      quote: "Turn nature's chaos into a symmetrical architectural gesture.",
      calloutTitle: "Where to Use It",
      calloutBody: "Bookmatch is strongest on feature walls, elevator halls, bathrooms, fireplaces and executive areas where the surface can be seen as a complete composition.",
    }),
    de: articleBlocks({
      lead: "Bookmatch verwandelt natürliche Maserung in architektonische Symmetrie. Aufeinanderfolgende Platten werden wie Buchseiten geöffnet, sodass sich das Muster entlang einer Mittelachse spiegelt.",
      image: "/images/blog/bookmatch-doganin-senfonisi/main.webp",
      imageAlt: "Bookmatch-Marmor mit Schmetterlingseffekt",
      h2: "Wie Bookmatch funktioniert",
      p1: "Das Ergebnis ist nicht nur Wandverkleidung, sondern eine natürliche Komposition, die Lobby, Bad, Empfangswand oder Vorstandsetage prägen kann. Die Technik wirkt am besten, wenn Plattenauswahl, Licht und Betrachtungsabstand zusammen geplant werden.",
      h3: "Hinweise zu Design und Produktion",
      bullets: [
        ["Plattenauswahl", "Verwenden Sie aufeinanderfolgende Platten und prüfen Sie die Maserungsrichtung vor dem Zuschnitt."],
        ["Digitales Layout", "Bestätigen Sie Fugenlinie, Mittelachse und finalen Ausschnitt mit dem Kunden."],
        ["Montage", "Kleine Ausrichtungsfehler sind sichtbar; Aufmaß und Befestigung müssen präzise sein."],
      ],
      quote: "Verwandeln Sie das Chaos der Natur in eine symmetrische architektonische Geste.",
      calloutTitle: "Wo es eingesetzt wird",
      calloutBody: "Bookmatch wirkt am stärksten an Akzentwänden, Aufzugshallen, Bädern, Kaminen und repräsentativen Bereichen, in denen die Fläche als Ganzes sichtbar ist.",
    }),
  },
  "mermer-porselenin-mimaride-kullanimi": {
    en: articleBlocks({
      lead: "Marble and porcelain answer different architectural priorities. Marble brings uniqueness and prestige; porcelain brings dimensional stability, low maintenance and strong performance in demanding areas.",
      image: "/images/blog/mermer-porselenin-mimaride-kullanimi/main.webp",
      imageAlt: "Marble and porcelain in architecture",
      h2: "Material Strategy for Projects",
      p1: "The right specification starts with use: traffic level, cleaning routine, water exposure, heat and visual expectation. Hotels, residences and commercial buildings often benefit from combining both materials strategically.",
      h3: "Practical Allocation",
      bullets: [
        ["Marble", "Representative zones, lobbies, fireplaces and selected walls."],
        ["Porcelain", "High-traffic floors, wet areas, countertops and exterior applications."],
        ["Balanced use", "Prestige where it is seen, performance where it is needed every day."],
      ],
      quote: "Material choice should begin with use, not only with appearance.",
      calloutTitle: "Architectural Value",
      calloutBody: "A balanced specification gives the project character, technical resilience and a clearer maintenance plan.",
    }),
    de: articleBlocks({
      lead: "Marmor und Porzellan beantworten unterschiedliche architektonische Anforderungen. Marmor bringt Einzigartigkeit und Prestige; Porzellan bietet Maßstabilität, geringe Pflege und starke Leistung in beanspruchten Bereichen.",
      image: "/images/blog/mermer-porselenin-mimaride-kullanimi/main.webp",
      imageAlt: "Marmor und Porzellan in der Architektur",
      h2: "Materialstrategie für Projekte",
      p1: "Die richtige Spezifikation beginnt mit der Nutzung: Verkehrsbelastung, Reinigung, Wasser, Hitze und visuelle Erwartung. Hotels, Wohnanlagen und Gewerbebauten profitieren oft von einer strategischen Kombination beider Materialien.",
      h3: "Praktische Aufteilung",
      bullets: [
        ["Marmor", "Repräsentative Zonen, Lobbys, Kamine und ausgewählte Wände."],
        ["Porzellan", "Stark frequentierte Böden, Nassbereiche, Arbeitsplatten und Außenanwendungen."],
        ["Ausgewogener Einsatz", "Prestige dort, wo es sichtbar ist; Leistung dort, wo sie täglich gebraucht wird."],
      ],
      quote: "Materialwahl sollte mit der Nutzung beginnen, nicht nur mit der Optik.",
      calloutTitle: "Architektonischer Wert",
      calloutBody: "Eine ausgewogene Spezifikation verleiht dem Projekt Charakter, technische Beständigkeit und einen klareren Pflegeplan.",
    }),
  },
  "porselen-desenleme-sanati-teknikleri": {
    en: articleBlocks({
      lead: "Porcelain patterning has evolved from hand-applied motifs into precise digital and industrial surface design. Today it can reproduce stone, concrete, metal or custom graphics while preserving porcelain's technical advantages.",
      image: "/images/blog/porselen-desenleme-sanati-teknikleri/main.webp",
      imageAlt: "Porcelain patterning techniques",
      h2: "Beyond the Printed Pattern",
      p1: "A good porcelain surface depends on texture, gloss level, repeat frequency, edge detail and how slabs meet at corners. These details determine whether the result feels authentic.",
      h3: "What to Check Before Production",
      bullets: [
        ["Mockups", "Approve the pattern at real scale before large orders."],
        ["Finish", "Match gloss and texture to light conditions and use."],
        ["Continuity", "Plan joints and corners so the pattern does not break awkwardly."],
      ],
      quote: "Pattern quality is proven at the edges and joints, not only in the center of the slab.",
      calloutTitle: "Best Use",
      calloutBody: "Patterned porcelain is ideal for feature walls, bathrooms, countertops and commercial surfaces that need both design impact and technical resistance.",
    }),
    de: articleBlocks({
      lead: "Die Porzellanmusterung hat sich von handwerklich aufgetragenen Motiven zu präzisem digitalem und industriellem Oberflächendesign entwickelt. Heute können Stein, Beton, Metall oder individuelle Grafiken wiedergegeben werden, während die technischen Vorteile von Porzellan erhalten bleiben.",
      image: "/images/blog/porselen-desenleme-sanati-teknikleri/main.webp",
      imageAlt: "Techniken der Porzellanmusterung",
      h2: "Mehr als ein gedrucktes Muster",
      p1: "Eine gute Porzellanoberfläche hängt von Struktur, Glanzgrad, Wiederholung, Kantendetail und Plattenstoß ab. Diese Details entscheiden, ob das Ergebnis authentisch wirkt.",
      h3: "Vor der Produktion prüfen",
      bullets: [
        ["Mockups", "Muster im echten Maßstab vor großen Bestellungen freigeben."],
        ["Oberfläche", "Glanz und Textur an Lichtverhältnisse und Nutzung anpassen."],
        ["Kontinuität", "Fugen und Ecken so planen, dass das Muster nicht unruhig bricht."],
      ],
      quote: "Musterqualität zeigt sich an Kanten und Fugen, nicht nur in der Mitte der Platte.",
      calloutTitle: "Bester Einsatz",
      calloutBody: "Gemustertes Porzellan eignet sich für Akzentwände, Bäder, Arbeitsplatten und gewerbliche Flächen, die Designwirkung und technische Beständigkeit brauchen.",
    }),
  },
  "musteri-talepleri-ozel-tasarim-surecleri": {
    en: articleBlocks({
      lead: "Custom design starts with understanding the client's real use case. Dimensions, traffic, cleaning routine, budget and deadline must be clear before material selection begins.",
      image: "/images/blog/musteri-talepleri-ozel-tasarim-surecleri/main.webp",
      imageAlt: "Custom design process",
      h2: "From Brief to Production",
      p1: "A structured workflow moves from needs analysis to sampling, technical drawing, digital approval and production planning. This reduces revisions and protects the delivery schedule.",
      h3: "Critical Steps",
      bullets: [
        ["Brief", "Define use, dimensions, finish expectation and budget range."],
        ["Sampling", "Show material behavior, color and texture before approval."],
        ["Production plan", "Align cutting, edge details, installation and logistics."],
      ],
      quote: "A good custom project is won before cutting begins.",
      calloutTitle: "Client Confidence",
      calloutBody: "Transparent process management helps the client understand how design choices affect production, cost and long-term use.",
    }),
    de: articleBlocks({
      lead: "Maßgeschneidertes Design beginnt mit dem tatsächlichen Einsatzfall des Kunden. Abmessungen, Nutzung, Reinigung, Budget und Termin müssen klar sein, bevor die Materialauswahl beginnt.",
      image: "/images/blog/musteri-talepleri-ozel-tasarim-surecleri/main.webp",
      imageAlt: "Individueller Designprozess",
      h2: "Vom Briefing zur Produktion",
      p1: "Ein strukturierter Ablauf führt von Bedarfsanalyse über Bemusterung, technische Zeichnung, digitale Freigabe und Produktionsplanung. Das reduziert Korrekturen und schützt den Liefertermin.",
      h3: "Kritische Schritte",
      bullets: [
        ["Briefing", "Nutzung, Maße, Oberflächenerwartung und Budgetrahmen definieren."],
        ["Bemusterung", "Materialverhalten, Farbe und Textur vor der Freigabe zeigen."],
        ["Produktionsplan", "Zuschnitt, Kanten, Montage und Logistik abstimmen."],
      ],
      quote: "Ein gutes Sonderprojekt wird gewonnen, bevor der Zuschnitt beginnt.",
      calloutTitle: "Kundensicherheit",
      calloutBody: "Transparente Prozessführung hilft dem Kunden zu verstehen, wie Designentscheidungen Produktion, Kosten und langfristige Nutzung beeinflussen.",
    }),
  },
  "waterfall-tasarim-akiskan-yuzeyler": {
    en: articleBlocks({
      lead: "Waterfall design makes a countertop appear to flow down to the floor as one continuous volume. It is especially effective on kitchen islands, reception counters and display units.",
      image: "/images/blog/waterfall-tasarim-akiskan-yuzeyler/main.webp",
      imageAlt: "Waterfall countertop design",
      h2: "The Detail Behind the Flow",
      p1: "The effect depends on accurate measurement, mitered edges and careful vein matching. The side plane is as important as the top surface, so slab layout should be approved before cutting.",
      h3: "Material Choices",
      bullets: [
        ["Porcelain", "Creates clean, lighter volumes with strong resistance."],
        ["Marble", "Delivers dramatic natural veining when budget and care plan allow it."],
        ["Joints", "Miter quality and alignment define the perceived value of the piece."],
      ],
      quote: "A waterfall edge is successful when the surface reads as one continuous form.",
      calloutTitle: "Where It Works",
      calloutBody: "Use waterfall details on islands, counters and premium furniture where the side elevation is visible and contributes to the design.",
    }),
    de: articleBlocks({
      lead: "Waterfall-Design lässt eine Arbeitsplatte wie ein durchgehendes Volumen bis zum Boden fließen. Besonders wirkungsvoll ist es bei Kücheninseln, Empfangstresen und Präsentationselementen.",
      image: "/images/blog/waterfall-tasarim-akiskan-yuzeyler/main.webp",
      imageAlt: "Waterfall-Arbeitsplatte",
      h2: "Das Detail hinter dem Fluss",
      p1: "Die Wirkung hängt von präzisem Aufmaß, Gehrungskanten und sorgfältiger Maserungsabstimmung ab. Die Seitenfläche ist genauso wichtig wie die Oberseite, daher sollte das Plattenlayout vor dem Zuschnitt freigegeben werden.",
      h3: "Materialwahl",
      bullets: [
        ["Porzellan", "Erzeugt klare, leichtere Volumen mit hoher Beständigkeit."],
        ["Marmor", "Liefert dramatische natürliche Maserung, wenn Budget und Pflegeplan passen."],
        ["Fugen", "Gehrungsqualität und Ausrichtung bestimmen den wahrgenommenen Wert."],
      ],
      quote: "Eine Waterfall-Kante funktioniert, wenn die Oberfläche als eine durchgehende Form gelesen wird.",
      calloutTitle: "Wo es wirkt",
      calloutBody: "Nutzen Sie Waterfall-Details bei Inseln, Tresen und hochwertigen Möbeln, deren Seitenansicht sichtbar ist und zum Design beiträgt.",
    }),
  },
  "mermer-tasarim-teknikleri-isleme-yontemleri": {
    en: articleBlocks({
      lead: "Marble design begins long before polishing. Block selection, slab cutting direction, vein reading and defect control all shape the final product.",
      image: "/images/blog/mermer-tasarim-teknikleri-isleme-yontemleri/main.webp",
      imageAlt: "Marble processing methods",
      h2: "Craft and Technology Together",
      p1: "Modern workshops combine craft knowledge with 5-axis CNC, waterjet and bridge saw systems. These tools make curves, sink openings, reliefs and repeatable profiles more precise.",
      h3: "Workshop Priorities",
      bullets: [
        ["Block reading", "Understand vein direction and natural variation before cutting."],
        ["Machine strategy", "Choose CNC, waterjet or bridge saw according to the detail."],
        ["Finishing", "Polishing, edge work and installation still require experienced hands."],
      ],
      quote: "Technology expands what stone can do; craft decides whether it feels refined.",
      calloutTitle: "Production Value",
      calloutBody: "A disciplined workflow turns natural variation into intentional design rather than production risk.",
    }),
    de: articleBlocks({
      lead: "Marmordesign beginnt lange vor der Politur. Blockauswahl, Schnittrichtung, Lesen der Maserung und Kontrolle natürlicher Fehlstellen prägen das Endprodukt.",
      image: "/images/blog/mermer-tasarim-teknikleri-isleme-yontemleri/main.webp",
      imageAlt: "Marmorbearbeitungsmethoden",
      h2: "Handwerk und Technologie zusammen",
      p1: "Moderne Werkstätten verbinden handwerkliches Wissen mit 5-Achs-CNC, Wasserstrahl und Brückensäge. Diese Werkzeuge machen Kurven, Ausschnitte, Reliefs und wiederholbare Profile präziser.",
      h3: "Prioritäten in der Werkstatt",
      bullets: [
        ["Block lesen", "Maserungsrichtung und natürliche Variation vor dem Zuschnitt verstehen."],
        ["Maschinenstrategie", "CNC, Wasserstrahl oder Brückensäge je nach Detail auswählen."],
        ["Finish", "Politur, Kantenarbeit und Montage brauchen weiterhin erfahrene Hände."],
      ],
      quote: "Technologie erweitert die Möglichkeiten von Stein; Handwerk entscheidet, ob es hochwertig wirkt.",
      calloutTitle: "Produktionswert",
      calloutBody: "Ein disziplinierter Ablauf verwandelt natürliche Variation in bewusstes Design statt in Produktionsrisiko.",
    }),
  },
  "mermer-porselen-malzemelerinin-ozellikleri": {
    en: articleBlocks({
      lead: "Marble and porcelain should be compared through performance, maintenance and atmosphere. The right answer changes according to use, not only according to appearance.",
      image: "/images/blog/mermer-porselen-malzemelerinin-ozellikleri/main.webp",
      imageAlt: "Marble and porcelain material properties",
      h2: "Performance Comparison",
      p1: "Marble is natural, unique and prestigious, but it requires sealing and thoughtful care. Porcelain is engineered for resistance, consistency and low maintenance.",
      h3: "Decision Criteria",
      bullets: [
        ["Stain risk", "Porcelain is safer in heavy-use kitchens and wet areas."],
        ["Visual depth", "Marble offers unmatched natural variation."],
        ["Maintenance", "Porcelain is easier for commercial and rental spaces."],
      ],
      quote: "The best material is the one that matches the daily life of the space.",
      calloutTitle: "Specification Tip",
      calloutBody: "Compare heat, water, cleaning routine, traffic and design expectation before deciding.",
    }),
    de: articleBlocks({
      lead: "Marmor und Porzellan sollten über Leistung, Pflege und Atmosphäre verglichen werden. Die richtige Antwort hängt von der Nutzung ab, nicht nur von der Optik.",
      image: "/images/blog/mermer-porselen-malzemelerinin-ozellikleri/main.webp",
      imageAlt: "Materialeigenschaften von Marmor und Porzellan",
      h2: "Leistungsvergleich",
      p1: "Marmor ist natürlich, einzigartig und prestigeträchtig, benötigt jedoch Imprägnierung und bewusste Pflege. Porzellan ist für Beständigkeit, Konsistenz und geringe Pflege entwickelt.",
      h3: "Entscheidungskriterien",
      bullets: [
        ["Fleckenrisiko", "Porzellan ist sicherer in stark genutzten Küchen und Nassbereichen."],
        ["Visuelle Tiefe", "Marmor bietet unvergleichliche natürliche Variation."],
        ["Pflege", "Porzellan ist einfacher für Gewerbe- und Mietflächen."],
      ],
      quote: "Das beste Material ist das, das zum Alltag des Raums passt.",
      calloutTitle: "Spezifikationstipp",
      calloutBody: "Vergleichen Sie Hitze, Wasser, Reinigung, Nutzung und Designanspruch, bevor Sie entscheiden.",
    }),
  },
  "mermer-vs-porselen": {
    en: articleBlocks({
      lead: "The choice between marble and porcelain is not a simple winner-takes-all decision. Each material serves a different kind of project logic.",
      image: "/images/blog/mermer-vs-porselen/main.webp",
      imageAlt: "Marble versus porcelain comparison",
      h2: "Aesthetics, Durability and Budget",
      p1: "Marble offers natural depth and prestige, while porcelain offers predictable performance, easier maintenance and broad design consistency.",
      h3: "Where Each Wins",
      bullets: [
        ["Marble", "Feature walls, fireplaces, premium bathrooms and low-contact furniture."],
        ["Porcelain", "Daily kitchens, wet areas, outdoor surfaces and high-traffic floors."],
        ["Budget", "Porcelain often reduces maintenance cost, while marble can increase perceived value."],
      ],
      quote: "Do not choose the material in isolation; choose it for the behavior of the space.",
      calloutTitle: "Practical Rule",
      calloutBody: "Use porcelain where performance risk is high. Use marble where natural character is the main reason for the investment.",
    }),
    de: articleBlocks({
      lead: "Die Entscheidung zwischen Marmor und Porzellan hat keinen einfachen Gesamtsieger. Jedes Material folgt einer anderen Projektlogik.",
      image: "/images/blog/mermer-vs-porselen/main.webp",
      imageAlt: "Vergleich von Marmor und Porzellan",
      h2: "Ästhetik, Beständigkeit und Budget",
      p1: "Marmor bietet natürliche Tiefe und Prestige, während Porzellan planbare Leistung, einfachere Pflege und hohe gestalterische Konsistenz bietet.",
      h3: "Wo welches Material gewinnt",
      bullets: [
        ["Marmor", "Akzentwände, Kamine, hochwertige Bäder und Möbel mit geringer Beanspruchung."],
        ["Porzellan", "Täglich genutzte Küchen, Nassbereiche, Außenflächen und stark frequentierte Böden."],
        ["Budget", "Porzellan senkt oft Pflegekosten, während Marmor den wahrgenommenen Wert steigern kann."],
      ],
      quote: "Wählen Sie das Material nicht isoliert, sondern passend zum Verhalten des Raums.",
      calloutTitle: "Praktische Regel",
      calloutBody: "Nutzen Sie Porzellan bei hohem Leistungsrisiko. Nutzen Sie Marmor, wenn natürlicher Charakter der Hauptgrund der Investition ist.",
    }),
  },
  "yuzey-bakim-rehberi": {
    en: articleBlocks({
      lead: "Surface care begins with understanding the material. Marble and porcelain do not react to cleaners, stains and daily use in the same way.",
      image: "/images/blog/yuzey-bakim-rehberi/main.webp",
      imageAlt: "Surface care guide",
      h2: "Daily Cleaning Principles",
      p1: "Marble should be protected from acidic cleaners and abrasive pads. Porcelain can tolerate stronger routines, but residue build-up and dirty grout still reduce the quality of the surface.",
      h3: "Care Checklist",
      bullets: [
        ["Use pH-neutral products", "They are safer for both marble and porcelain."],
        ["React quickly", "Wipe spills before they settle, especially on marble."],
        ["Plan maintenance", "Marble may need sealing and polishing; porcelain mainly needs correct cleaning habits."],
      ],
      quote: "Regular gentle cleaning is better than aggressive correction after damage.",
      calloutTitle: "Long-term Protection",
      calloutBody: "Match the cleaning method to the material and inform the user before handover.",
    }),
    de: articleBlocks({
      lead: "Oberflächenpflege beginnt mit dem Verständnis des Materials. Marmor und Porzellan reagieren nicht gleich auf Reiniger, Flecken und tägliche Nutzung.",
      image: "/images/blog/yuzey-bakim-rehberi/main.webp",
      imageAlt: "Ratgeber zur Oberflächenpflege",
      h2: "Grundsätze der täglichen Reinigung",
      p1: "Marmor sollte vor säurehaltigen Reinigern und scheuernden Pads geschützt werden. Porzellan verträgt stärkere Routinen, doch Rückstände und verschmutzte Fugen mindern ebenfalls die Qualität der Oberfläche.",
      h3: "Pflege-Checkliste",
      bullets: [
        ["pH-neutrale Produkte verwenden", "Sie sind für Marmor und Porzellan sicherer."],
        ["Schnell reagieren", "Verschüttetes abwischen, bevor es einzieht, besonders bei Marmor."],
        ["Pflege planen", "Marmor kann Imprägnierung und Politur benötigen; Porzellan braucht vor allem richtige Reinigungsgewohnheiten."],
      ],
      quote: "Regelmäßige sanfte Reinigung ist besser als aggressive Korrektur nach einem Schaden.",
      calloutTitle: "Langfristiger Schutz",
      calloutBody: "Stimmen Sie die Reinigungsmethode auf das Material ab und informieren Sie den Nutzer vor der Übergabe.",
    }),
  },
  "mermer-atolyesi-surdurulebilir-uretim": {
    en: articleBlocks({
      lead: "Sustainable production in a marble workshop starts with efficient slab planning. Waste reduction is both an environmental and an operational advantage.",
      image: "/images/blog/mermer-atolyesi-surdurulebilir-uretim/main.webp",
      imageAlt: "Sustainable marble workshop production",
      h2: "From Offcuts to Value",
      p1: "Cutting plans, grouped orders and reuse of offcuts can reduce material loss. Smaller products, samples and decorative objects turn leftover pieces into commercial value.",
      h3: "Sustainability Practices",
      bullets: [
        ["Water management", "Control and reuse water wherever possible."],
        ["Dust control", "Protect workers and keep production cleaner."],
        ["Responsible packaging", "Reduce unnecessary material while protecting stone during transport."],
      ],
      quote: "Sustainability becomes real when it is measured in production, not only stated in marketing.",
      calloutTitle: "Circular Workshop Logic",
      calloutBody: "Every slab should be planned so that primary cuts, secondary products and samples are considered together.",
    }),
    de: articleBlocks({
      lead: "Nachhaltige Produktion in einer Marmorwerkstatt beginnt mit effizienter Plattenplanung. Abfallreduzierung ist sowohl ein ökologischer als auch ein betrieblicher Vorteil.",
      image: "/images/blog/mermer-atolyesi-surdurulebilir-uretim/main.webp",
      imageAlt: "Nachhaltige Produktion in der Marmorwerkstatt",
      h2: "Von Reststücken zu Wert",
      p1: "Schnittpläne, gebündelte Aufträge und Wiederverwendung von Reststücken können Materialverluste senken. Kleinprodukte, Muster und dekorative Objekte verwandeln Reststücke in wirtschaftlichen Wert.",
      h3: "Nachhaltige Praktiken",
      bullets: [
        ["Wassermanagement", "Wasser kontrollieren und möglichst wiederverwenden."],
        ["Staubkontrolle", "Mitarbeiter schützen und die Produktion sauberer halten."],
        ["Verantwortliche Verpackung", "Unnötiges Material reduzieren und Stein beim Transport schützen."],
      ],
      quote: "Nachhaltigkeit wird real, wenn sie in der Produktion gemessen wird, nicht nur im Marketing behauptet.",
      calloutTitle: "Kreislauflogik in der Werkstatt",
      calloutBody: "Jede Platte sollte so geplant werden, dass Hauptzuschnitte, Nebenprodukte und Muster gemeinsam betrachtet werden.",
    }),
  },
  "mermer-porselen-pazarlama-stratejileri": {
    en: articleBlocks({
      lead: "The time when a good product sold itself is over. For marble and porcelain brands, quality production must now be supported by digital visibility and clear technical communication.",
      image: "/images/blog/mermer-porselen-pazarlama-stratejileri/main.webp",
      imageAlt: "Marketing strategies for marble and porcelain",
      h2: "SEO and Project Discovery",
      p1: "Architects and project offices search with specific intent. Long-tail keywords, technical pages, project references and sample request flows help the right customer find the right material.",
      h3: "Strong B2B Channels",
      bullets: [
        ["SEO content", "Answer technical and design questions before the sales conversation."],
        ["Photography and video", "Show macro texture, finished applications and performance tests."],
        ["LinkedIn and references", "Build trust with contractors, architects and project teams."],
      ],
      quote: "Digitalization did not replace trade fairs; it made them stronger.",
      calloutTitle: "Integrated Strategy",
      calloutBody: "Successful marketing combines technical knowledge, aesthetic presentation and easy access to samples, data sheets and reference projects.",
    }),
    de: articleBlocks({
      lead: "Die Zeit, in der ein gutes Produkt sich von selbst verkaufte, ist vorbei. Für Marmor- und Porzellanmarken muss Qualitätsproduktion heute durch digitale Sichtbarkeit und klare technische Kommunikation unterstützt werden.",
      image: "/images/blog/mermer-porselen-pazarlama-stratejileri/main.webp",
      imageAlt: "Marketingstrategien für Marmor und Porzellan",
      h2: "SEO und Projektentdeckung",
      p1: "Architekten und Projektbüros suchen mit konkreter Absicht. Long-Tail-Keywords, technische Seiten, Projektreferenzen und Musteranfragen helfen dem passenden Kunden, das passende Material zu finden.",
      h3: "Starke B2B-Kanäle",
      bullets: [
        ["SEO-Inhalte", "Technische und gestalterische Fragen vor dem Vertriebsgespräch beantworten."],
        ["Foto und Video", "Makrostruktur, fertige Anwendungen und Leistungstests zeigen."],
        ["LinkedIn und Referenzen", "Vertrauen bei Bauunternehmen, Architekten und Projektteams aufbauen."],
      ],
      quote: "Digitalisierung hat Messen nicht ersetzt, sondern verstärkt.",
      calloutTitle: "Integrierte Strategie",
      calloutBody: "Erfolgreiches Marketing verbindet technisches Wissen, ästhetische Präsentation und einfachen Zugang zu Mustern, Datenblättern und Referenzprojekten.",
    }),
  },
};

function articleBlocks({
  lead,
  image,
  imageAlt,
  h2,
  p1,
  h3,
  bullets,
  quote,
  calloutTitle,
  calloutBody,
}: {
  lead: string;
  image: string;
  imageAlt: string;
  h2: string;
  p1: string;
  h3: string;
  bullets: [string, string][];
  quote: string;
  calloutTitle: string;
  calloutBody: string;
}): ContentBlock[] {
  return [
    { type: "lead", text: lead },
    { type: "image", src: image, alt: imageAlt, aspect: "4 / 5" },
    { type: "h2", text: h2 },
    { type: "p", text: p1 },
    { type: "h3", text: h3 },
    {
      type: "ul",
      items: bullets.map(([strong, text]) => ({ strong, text })),
    },
    { type: "quote", text: quote },
    {
      type: "callout",
      title: calloutTitle,
      body: calloutBody,
    },
  ];
}

export function localizedBlogContent(slug: string, locale: Locale) {
  if (locale === "tr") return blogContent[slug];
  return localizedContent[slug]?.[locale] ?? blogContent[slug];
}
