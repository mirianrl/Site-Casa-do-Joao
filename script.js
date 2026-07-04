const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const idiomas = {

    pt: {

        navHome: "Home",
        navSobre: "Sobre",
        navMenu: "Menu",
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

        fraseFinal: "\"Aqui, é a nossa família recebendo a sua família.\"",

        anosTitulo: "+18 Anos",
        anosTexto: "Quase duas décadas levando tradição e o verdadeiro sabor de família para a mesa dos nossos clientes.",

        saborTitulo: "Sabor Caseiro",
        saborTexto: "Pratos preparados com receitas de família, ingredientes frescos e o tempero que só a Casa do João tem.",

        ambienteTitulo: "Ambiente Acolhedor",
        ambienteTexto: "Espaço pensado para receber famílias, casais e grupos com conforto e hospitalidade em cada visita.",

        gastronomia: "Gastronomia",
        menuTitulo: "Nosso Menu",
        menuSub: "Uma amostra da nossa essência culinária",

        textoWhatsapp: "Gostou do que viu? Nosso cardápio completo está disponível direto no nosso WhatsApp.",

        btnCardapio: "Ver Cardápio no WhatsApp",

        footerTitulo: "Casa do João",
        footerSlogan: "Tradição, família e sabor desde 2007",

        localizacao: "Localização",
        contato: "Contato",

        copyright: "© 2026 Casa do João. Todos os direitos reservados."

    },

    en: {

        navHome: "Home",
        navSobre: "About",
        navMenu: "Menu",
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

        fraseFinal: "\"Here, our family welcomes yours.\"",

        anosTitulo: "18+ Years",
        anosTexto: "Nearly two decades bringing tradition and authentic homemade flavor to our guests.",

        saborTitulo: "Homemade Flavor",
        saborTexto: "Family recipes prepared with fresh ingredients and the unique seasoning of Casa do João.",

        ambienteTitulo: "Cozy Atmosphere",
        ambienteTexto: "A welcoming space designed for families, couples and groups to enjoy memorable moments.",

        gastronomia: "Cuisine",
        menuTitulo: "Our Menu",
        menuSub: "A taste of our culinary essence",

        textoWhatsapp: "Liked what you saw? Our full menu is available directly on WhatsApp.",

        btnCardapio: "View Menu on WhatsApp",

        footerTitulo: "Casa do João",
        footerSlogan: "Tradition, family and flavor since 2007",

        localizacao: "Location",
        contato: "Contact",

        copyright: "© 2026 Casa do João. All rights reserved."

    },

    es: {

        navHome: "Inicio",
        navSobre: "Nosotros",
        navMenu: "Menú",
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

        fraseFinal: "\"Aquí, nuestra familia recibe a la suya.\"",

        anosTitulo: "Más de 18 Años",
        anosTexto: "Casi dos décadas llevando tradición y el auténtico sabor casero a nuestros clientes.",

        saborTitulo: "Sabor Casero",
        saborTexto: "Platos preparados con recetas familiares, ingredientes frescos y el sabor único de Casa do João.",

        ambienteTitulo: "Ambiente Acogedor",
        ambienteTexto: "Un espacio pensado para recibir familias, parejas y grupos con comodidad y hospitalidad.",

        gastronomia: "Gastronomía",
        menuTitulo: "Nuestro Menú",
        menuSub: "Una muestra de nuestra esencia culinaria",

        textoWhatsapp: "¿Le gustó lo que vio? Nuestro menú completo está disponible directamente en WhatsApp.",

        btnCardapio: "Ver Menú en WhatsApp",

        footerTitulo: "Casa do João",
        footerSlogan: "Tradición, familia y sabor desde 2007",

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