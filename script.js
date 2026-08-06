const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll(".avaliacao-card").forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

const idiomas = {

    pt: {

        navHome: "Home",
        navSobre: "Sobre",
        navEventos: "Eventos",
        navMenu: "Menu",
        navAvaliacoes: "Avaliações",
        navContato: "Contato",

        titulo: "Casa do João",
        subtitulo: "Onde cada prato conta uma história de família e afeto",
        reservar: "Reservar Mesa",

        statusAberto: "Aberto agora",
        statusFechado: "Fechado agora",

        horarioCompleto: "🕒 Ver horário completo",

        tituloHorario: "Horário de Funcionamento",

        segunda: "<strong>Segunda-feira</strong> — Fechado",
        terca: "<strong>Terça-feira</strong> — 11:00–15:00 | 18:00–23:00",
        quarta: "<strong>Quarta-feira</strong> — 11:00–15:00 | 18:00–23:00",
        quinta: "<strong>Quinta-feira</strong> — 11:00–15:00 | 18:00–23:00",
        sexta: "<strong>Sexta-feira</strong> — 11:00–15:00 | 18:00–23:00",
        sabado: "<strong>Sábado</strong> — 11:00–15:00 | 18:00–23:00",
        domingo: "<strong>Domingo</strong> — 11:00–15:00 | 18:00–23:00",

        nossaHistoria: "Nossa História",
        sobreTitulo: "Sobre Nós",
        sobreSub: "Tradição, família e sabor desde 2007",

        historia1: "<strong>2007 — O começo de tudo:</strong> A Casa do João nasceu do sonho de transformar nosso próprio lar em um espaço para receber pessoas com carinho e boa comida.",

        historia2: "<strong>Transformação:</strong> O que era apenas uma casa simples foi se tornando um ambiente cheio de vida: a cozinha surgiu onde havia um jardim, as mesas nasceram da antiga horta e cada canto ganhou um propósito.",

        historia3: "<strong>Hoje:</strong> Esse sonho se tornou realidade. Contamos com uma equipe dedicada que recebe você e sua família com qualidade, cuidado e atenção.",

        fraseFinal: "\"Comida para amar, um lugar para lembrar.\"",

        anosTitulo: "+18 Anos",
        anosTexto: "Quase duas décadas levando tradição e o verdadeiro sabor de família para a mesa dos nossos clientes.",

        saborTitulo: "Sabor Caseiro",
        saborTexto: "Pratos preparados com receitas de família, ingredientes frescos e o tempero que só a Casa do João tem.",

        ambienteTitulo: "Ambiente Acolhedor",
        ambienteTexto: "Espaço pensado para receber famílias, casais e grupos com conforto e hospitalidade em cada visita.",

        gastronomia: "Gastronomia",
        menuTitulo: "Nosso Menu",
        menuSub: "Uma amostra da nossa essência culinária",

        textoWhatsapp: "Gostou do que viu? Explore nosso cardápio completo e descubra todos os sabores da Casa do João.",

        btnCardapio: "Ver Cardápio",

        avaliacoesLabel: "EXPERIÊNCIAS",
        avaliacoesTitulo: "O que nossos clientes dizem",
        avaliacoesSubtitulo: "Avaliações de quem viveu a experiência Casa do João.",

        avaliacao1Texto: "Excelente experiência na Casa do João! O ceviche de jacaré e o Pintado Ancestral estavam incríveis. Atendimento impecável e ambiente especial.",
        avaliacao1Nome: "Camila Wlinger",

        avaliacao2Texto: "Comida deliciosa, atendimento atencioso e uma recepção que fez toda a diferença. Voltaremos com certeza!",
        avaliacao2Nome: "Pamela Souza",

        avaliacao3Texto: "Lugar incrível! Ambiente acolhedor, pratos impecáveis e uma experiência que superou todas as expectativas.",
        avaliacao3Nome: "Janayna Felizali",

        avaliacao4Texto: "A Casa do João ganhou meu coração. Sabores marcantes, clima aconchegante e um atendimento que faz você se sentir em casa.",
        avaliacao4Nome: "Raquel Helena",

        avaliacoesConvite: "Gostou da experiência Casa do João?",
        avaliacoesBotao: "Nos avalie ⭐",

        footerTitulo: "Casa do João",
        footerSlogan: "Tradição, família e sabor desde 2007",

        instagram: "Instagram",
        tiktok: "TikTok",
        localizacao: "Localização",
        contato: "Contato",

        copyright: "© 2026 Casa do João. Todos os direitos reservados."

    },

    en: {

        navHome: "Home",
        navSobre: "About",
        navEventos: "Events",
        navMenu: "Menu",
        navAvaliacoes: "Reviews",
        navContato: "Contact",

        titulo: "Casa do João",
        subtitulo: "Where every dish tells a story of family and affection",
        reservar: "Book a Table",

        statusAberto: "Open now",
        statusFechado: "Closed now",

        horarioCompleto: "🕒 View opening hours",

        tituloHorario: "Opening Hours",

        segunda: "<strong>Monday</strong> — Closed",
        terca: "<strong>Tuesday</strong> — 11:00 AM–3:00 PM | 6:00 PM–11:00 PM",
        quarta: "<strong>Wednesday</strong> — 11:00 AM–3:00 PM | 6:00 PM–11:00 PM",
        quinta: "<strong>Thursday</strong> — 11:00 AM–3:00 PM | 6:00 PM–11:00 PM",
        sexta: "<strong>Friday</strong> — 11:00 AM–3:00 PM | 6:00 PM–11:00 PM",
        sabado: "<strong>Saturday</strong> — 11:00 AM–3:00 PM | 6:00 PM–11:00 PM",
        domingo: "<strong>Sunday</strong> — 11:00 AM–3:00 PM | 6:00 PM–11:00 PM",

        nossaHistoria: "Our Story",
        sobreTitulo: "About Us",
        sobreSub: "Tradition, family and flavor since 2007",

        historia1: "<strong>2007 — The beginning:</strong> Casa do João was born from the dream of turning our own home into a welcoming place where people could enjoy delicious homemade food.",

        historia2: "<strong>Transformation:</strong> What was once a simple house gradually became a lively restaurant. The kitchen replaced the garden, the dining area grew where the vegetable garden once stood, and every corner gained a special purpose.",

        historia3: "<strong>Today:</strong> That dream has become reality. Our dedicated team welcomes you and your family with quality, care and genuine hospitality.",

        fraseFinal: "\"Food to love, a place to remember.\"",

        anosTitulo: "18+ Years",
        anosTexto: "Nearly two decades bringing tradition and authentic homemade flavor to our guests.",

        saborTitulo: "Homemade Flavor",
        saborTexto: "Family recipes prepared with fresh ingredients and the unique seasoning of Casa do João.",

        ambienteTitulo: "Cozy Atmosphere",
        ambienteTexto: "A welcoming space designed for families, couples and groups to enjoy memorable moments.",

        gastronomia: "Cuisine",
        menuTitulo: "Our Menu",
        menuSub: "A taste of our culinary essence",

        textoWhatsapp: "Enjoyed what you saw? Explore our full menu and discover all the flavors of Casa do João.",

        btnCardapio: "View Menu",

        avaliacoesLabel: "EXPERIENCES",
        avaliacoesTitulo: "What our customers say",
        avaliacoesSubtitulo: "Reviews from those who experienced Casa do João.",

        avaliacao1Texto: "An excellent experience at Casa do João! The caiman ceviche and Pintado Ancestral were outstanding. Impeccable service and a wonderful atmosphere.",
        avaliacao1Nome: "Camila Wlinger",

        avaliacao2Texto: "Delicious food, attentive service, and a warm welcome that made all the difference. We'll definitely be back!",
        avaliacao2Nome: "Pamela Souza",

        avaliacao3Texto: "Amazing place! Cozy atmosphere, outstanding dishes, and an experience that exceeded all expectations.",
        avaliacao3Nome: "Janayna Felizali",

        avaliacao4Texto: "Casa do João won my heart. Memorable flavors, a welcoming atmosphere, and service that makes you feel right at home.",
        avaliacao4Nome: "Raquel Helena",

        avaliacoesConvite: "Did you enjoy your experience at Casa do João?",
        avaliacoesBotao: "Review us ⭐",

        footerTitulo: "Casa do João",
        footerSlogan: "Tradition, family and flavor since 2007",

        instagram: "Instagram",
        tiktok: "TikTok",
        localizacao: "Location",
        contato: "Contact",

        copyright: "© 2026 Casa do João. All rights reserved."

    },

    es: {

        navHome: "Inicio",
        navSobre: "Sobre nosotros",
        navEventos: "Eventos",
        navMenu: "Menú",
        navAvaliacoes: "Reseñas",
        navContato: "Contacto",

        titulo: "Casa do João",
        subtitulo: "Donde cada plato cuenta una historia de familia y cariño",
        reservar: "Reservar Mesa",

        statusAberto: "Abierto ahora",
        statusFechado: "Cerrado ahora",

        horarioCompleto: "🕒 Ver horario completo",

        tituloHorario: "Horario de Atención",

        segunda: "<strong>Lunes</strong> — Cerrado",
        terca: "<strong>Martes</strong> — 11:00–15:00 | 18:00–23:00",
        quarta: "<strong>Miércoles</strong> — 11:00–15:00 | 18:00–23:00",
        quinta: "<strong>Jueves</strong> — 11:00–15:00 | 18:00–23:00",
        sexta: "<strong>Viernes</strong> — 11:00–15:00 | 18:00–23:00",
        sabado: "<strong>Sábado</strong> — 11:00–15:00 | 18:00–23:00",
        domingo: "<strong>Domingo</strong> — 11:00–15:00 | 18:00–23:00",

        nossaHistoria: "Nuestra Historia",
        sobreTitulo: "Sobre Nosotros",
        sobreSub: "Tradición, familia y sabor desde 2007",

        historia1: "<strong>2007 — El comienzo:</strong> Casa do João nació del sueño de transformar nuestro hogar en un lugar acogedor para recibir a las personas con buena comida y cariño.",

        historia2: "<strong>Transformación:</strong> Lo que era una casa sencilla se convirtió en un restaurante lleno de vida. La cocina ocupó el lugar del jardín y cada rincón adquirió un propósito especial.",

        historia3: "<strong>Hoy:</strong> Ese sueño es una realidad. Nuestro equipo recibe a usted y a su familia con calidad, atención y hospitalidad.",

        fraseFinal: "\"Comida para amar, un lugar para recordar.\"",

        anosTitulo: "Más de 18 Años",
        anosTexto: "Casi dos décadas llevando tradición y el auténtico sabor casero a nuestros clientes.",

        saborTitulo: "Sabor Casero",
        saborTexto: "Platos preparados con recetas familiares, ingredientes frescos y el sabor único de Casa do João.",

        ambienteTitulo: "Ambiente Acogedor",
        ambienteTexto: "Un espacio pensado para recibir familias, parejas y grupos con comodidad y hospitalidad.",

        gastronomia: "Gastronomía",
        menuTitulo: "Nuestro Menú",
        menuSub: "Una muestra de nuestra esencia culinaria",

        textoWhatsapp: "¿Le gustó lo que vio? Explore nuestro menú completo y descubra todos los sabores de Casa do João.",

        btnCardapio: "Ver Menú",

        avaliacoesLabel: "EXPERIENCIAS",
        avaliacoesTitulo: "Lo que dicen nuestros clientes",
        avaliacoesSubtitulo: "Opiniones de quienes vivieron la experiencia Casa do João.",

        avaliacao1Texto: "¡Una experiencia excelente en Casa do João! El ceviche de yacaré y el Pintado Ancestral estuvieron increíbles. Servicio impecable y un ambiente encantador.",
        avaliacao1Nome: "Camila Wlinger",

        avaliacao2Texto: "Comida deliciosa, atención muy amable y una cálida bienvenida que marcó la diferencia. ¡Sin duda volveremos!",
        avaliacao2Nome: "Pamela Souza",

        avaliacao3Texto: "¡Un lugar increíble! Ambiente acogedor, platos excelentes y una experiencia que superó todas las expectativas.",
        avaliacao3Nome: "Janayna Felizali",

        avaliacao4Texto: "Casa do João conquistó mi corazón. Sabores inolvidables, un ambiente acogedor y una atención que te hace sentir como en casa.",
        avaliacao4Nome: "Raquel Helena",

        avaliacoesConvite: "¿Te gustó la experiencia Casa do João?",
        avaliacoesBotao: "Evalúanos ⭐",

        footerTitulo: "Casa do João",
        footerSlogan: "Tradición, familia y sabor desde 2007",

        instagram: "Instagram",
        tiktok: "TikTok",
        localizacao: "Ubicación",
        contato: "Contacto",

        copyright: "© 2026 Casa do João. Todos los derechos reservados."

    }

};

let idiomaAtual = "pt";

function trocarIdioma(idioma) {

    idiomaAtual = idioma;

    const elementos = document.querySelectorAll("[data-lang]");

    elementos.forEach(elemento => {

        const chave = elemento.dataset.lang;

        elemento.innerHTML = idiomas[idioma][chave];

    });

    atualizarStatus();

}

function atualizarStatus() {

    if (aberto) {
        bolinha.classList.add("aberto");
        bolinha.classList.remove("fechado");
        textoStatus.textContent = idiomas[idiomaAtual].statusAberto;

    } else {

        bolinha.classList.add("fechado");
        bolinha.classList.remove("aberto");
        textoStatus.textContent = idiomas[idiomaAtual].statusFechado;

    }

}

const modal = document.getElementById("modalHorario");
const abrir = document.getElementById("abrirHorario");
const fechar = document.getElementById("fecharHorario");

abrir.addEventListener("click", () => {

modal.style.display = "flex";

});

fechar.addEventListener("click", () => {

    modal.style.display ="none";

});

const bolinha = document.querySelector(".bolinha");
const textoStatus = document.getElementById("status-texto");

const agora = new Date();

const dia = agora.getDay();
const hora = agora.getHours();
const minuto = agora.getMinutes();

const horarioAtual = hora * 60 + minuto;

let aberto = false;

if (dia !== 1) {

    if (
        (horarioAtual >= 11 * 60 && horarioAtual < 15 * 60) ||
        (horarioAtual >= 18 * 60 && horarioAtual < 23 * 60)
    ) {
        aberto = true;
    }

}

trocarIdioma(idiomaAtual);