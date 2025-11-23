// =================================================
// 1. ДАНІ ТА ГЛОБАЛЬНІ ЗМІННІ
// =================================================

const verbs = [
    { v1: "abide", v2: "abode", v3: "abode", ua: "терпіти, витримувати" },
    { v1: "arise", v2: "arose", v3: "arisen", ua: "виникати" },
    { v1: "awake", v2: "awoke", v3: "awoken", ua: "прокидатися" },
    { v1: "be", v2: "was/were", v3: "been", ua: "бути" },
    { v1: "bear", v2: "bore", v3: "born", ua: "народжувати, нести" },
    { v1: "beat", v2: "beat", v3: "beaten", ua: "бити" },
    { v1: "become", v2: "became", v3: "become", ua: "ставати" },
    { v1: "begin", v2: "began", v3: "begun", ua: "починати" },
    { v1: "bend", v2: "bent", v3: "bent", ua: "гнути" },
    { v1: "bet", v2: "bet", v3: "bet", ua: "закладатись, тримати парі" },
    { v1: "bid", v2: "bid", v3: "bid", ua: "пропонувати ціну" },
    { v1: "bind", v2: "bound", v3: "bound", ua: "зв'язувати" },
    { v1: "bite", v2: "bit", v3: "bitten", ua: "кусати" },
    { v1: "bleed", v2: "bled", v3: "bled", ua: "кровоточити" },
    { v1: "blow", v2: "blew", v3: "blown", ua: "дути" },
    { v1: "break", v2: "broke", v3: "broken", ua: "ламати" },
    { v1: "breed", v2: "bred", v3: "bred", ua: "розводити (тварин)" },
    { v1: "bring", v2: "brought", v3: "brought", ua: "приносити" },
    { v1: "broadcast", v2: "broadcast", v3: "broadcast", ua: "транслювати, віщати" },
    { v1: "build", v2: "built", v3: "built", ua: "будувати" },
    { v1: "burn", v2: "burnt/burned", v3: "burnt/burned", ua: "горіти, палити" },
    { v1: "burst", v2: "burst", v3: "burst", ua: "вибухати, лопатися" },
    { v1: "buy", v2: "bought", v3: "bought", ua: "купувати" },
    { v1: "cast", v2: "cast", v3: "cast", ua: "кидати, відливати" },
    { v1: "catch", v2: "caught", v3: "caught", ua: "ловити" },
    { v1: "choose", v2: "chose", v3: "chosen", ua: "обирати" },
    { v1: "cling", v2: "clung", v3: "clung", ua: "чіплятися" },
    { v1: "come", v2: "came", v3: "come", ua: "приходити" },
    { v1: "cost", v2: "cost", v3: "cost", ua: "коштувати" },
    { v1: "creep", v2: "crept", v3: "crept", ua: "повзати" },
    { v1: "cut", v2: "cut", v3: "cut", ua: "різати" },
    { v1: "deal", v2: "dealt", v3: "dealt", ua: "мати справу" },
    { v1: "dig", v2: "dug", v3: "dug", ua: "копати" },
    { v1: "do", v2: "did", v3: "done", ua: "робити" },
    { v1: "draw", v2: "drew", v3: "drawn", ua: "малювати, тягнути" },
    { v1: "dream", v2: "dreamt/dreamed", v3: "dreamt/dreamed", ua: "мріяти, бачити сон" },
    { v1: "drink", v2: "drank", v3: "drunk", ua: "пити" },
    { v1: "drive", v2: "drove", v3: "driven", ua: "водити" },
    { v1: "eat", v2: "ate", v3: "eaten", ua: "їсти" },
    { v1: "fall", v2: "fell", v3: "fallen", ua: "падати" },
    { v1: "feed", v2: "fed", v3: "fed", ua: "годувати" },
    { v1: "feel", v2: "felt", v3: "felt", ua: "відчувати" },
    { v1: "fight", v2: "fought", v3: "fought", ua: "боротися" },
    { v1: "find", v2: "found", v3: "found", ua: "знаходити" },
    { v1: "flee", v2: "fled", v3: "fled", ua: "тікати" },
    { v1: "fling", v2: "flung", v3: "flung", ua: "кидати, жбурляти" },
    { v1: "fly", v2: "flew", v3: "flown", ua: "літати" },
    { v1: "forbid", v2: "forbade", v3: "forbidden", ua: "забороняти" },
    { v1: "forget", v2: "forgot", v3: "forgotten", ua: "забувати" },
    { v1: "forgive", v2: "forgave", v3: "forgiven", ua: "пробачати" },
    { v1: "freeze", v2: "froze", v3: "frozen", ua: "заморожувати" },
    { v1: "get", v2: "got", v3: "got/gotten", ua: "отримувати" },
    { v1: "give", v2: "gave", v3: "given", ua: "давати" },
    { v1: "go", v2: "went", v3: "gone", ua: "іти" },
    { v1: "grind", v2: "ground", v3: "ground", ua: "молоти" },
    { v1: "grow", v2: "grew", v3: "grown", ua: "рости" },
    { v1: "hang", v2: "hung", v3: "hung", ua: "вішати, висіти" },
    { v1: "have", v2: "had", v3: "had", ua: "мати" },
    { v1: "hear", v2: "heard", v3: "heard", ua: "чути" },
    { v1: "hide", v2: "hid", v3: "hidden", ua: "ховати" },
    { v1: "hit", v2: "hit", v3: "hit", ua: "ударяти" },
    { v1: "hold", v2: "held", v3: "held", ua: "тримати" },
    { v1: "hurt", v2: "hurt", v3: "hurt", ua: "ранити, боліти" },
    { v1: "keep", v2: "kept", v3: "kept", ua: "тримати, зберігати" },
    { v1: "kneel", v2: "knelt/kneeled", v3: "knelt/kneeled", ua: "ставати на коліна" },
    { v1: "know", v2: "knew", v3: "known", ua: "знати" },
    { v1: "lay", v2: "laid", v3: "laid", ua: "класти (горизонтально)" },
    { v1: "lead", v2: "led", v3: "led", ua: "вести" },
    { v1: "lean", v2: "leant/leaned", v3: "leant/leaned", ua: "нахиляти, спиратися" },
    { v1: "leap", v2: "leapt/leaped", v3: "leapt/leaped", ua: "стрибати" },
    { v1: "learn", v2: "learnt/learned", v3: "learnt/learned", ua: "вчити(ся)" },
    { v1: "leave", v2: "left", v3: "left", ua: "залишати" },
    { v1: "lend", v2: "lent", v3: "lent", ua: "позичати (комусь)" },
    { v1: "let", v2: "let", v3: "let", ua: "дозволяти" },
    { v1: "lie", v2: "lay", v3: "lain", ua: "лежати" },
    { v1: "light", v2: "lit/lighted", v3: "lit/lighted", ua: "запалювати" },
    { v1: "lose", v2: "lost", v3: "lost", ua: "губити" },
    { v1: "make", v2: "made", v3: "made", ua: "робити/виготовляти" },
    { v1: "mean", v2: "meant", v3: "meant", ua: "мати на увазі" },
    { v1: "meet", v2: "met", v3: "met", ua: "зустрічати" },
    { v1: "mistake", v2: "mistook", v3: "mistaken", ua: "помилятися" },
    { v1: "mow", v2: "mowed", v3: "mown/mowed", ua: "косити" },
    { v1: "pay", v2: "paid", v3: "paid", ua: "платити" },
    { v1: "put", v2: "put", v3: "put", ua: "класти, ставити" },
    { v1: "quit", v2: "quit", v3: "quit", ua: "покидати, звільнятися" },
    { v1: "read", v2: "read", v3: "read", ua: "читати" },
    { v1: "ride", v2: "rode", v3: "ridden", ua: "їздити (верхи)" },
    { v1: "ring", v2: "rang", v3: "rung", ua: "дзвонити" },
    { v1: "rise", v2: "rose", v3: "risen", ua: "підніматися" },
    { v1: "run", v2: "ran", v3: "run", ua: "бігти" },
    { v1: "saw", v2: "sawed", v3: "sawn/sawed", ua: "пиляти" },
    { v1: "say", v2: "said", v3: "said", ua: "говорити" },
    { v1: "see", v2: "saw", v3: "seen", ua: "бачити" },
    { v1: "seek", v2: "sought", v3: "sought", ua: "шукати" },
    { v1: "sell", v2: "sold", v3: "sold", ua: "продавати" },
    { v1: "send", v2: "sent", v3: "sent", ua: "надсилати" },
    { v1: "set", v2: "set", v3: "set", ua: "встановлювати" },
    { v1: "sew", v2: "sewed", v3: "sewn/sewed", ua: "шити" },
    { v1: "shake", v2: "shook", v3: "shaken", ua: "трясти" },
    { v1: "shear", v2: "shore", v3: "shorn", ua: "стригти (овець)" },
    { v1: "shine", v2: "shone", v3: "shone", ua: "світити, сяяти" },
    { v1: "shoot", v2: "shot", v3: "shot", ua: "стріляти" },
    { v1: "show", v2: "showed", v3: "shown/showed", ua: "показувати" },
    { v1: "shrink", v2: "shrank", v3: "shrunk", ua: "зменшуватися, сідати (про одяг)" },
    { v1: "shut", v2: "shut", v3: "shut", ua: "зачиняти" },
    { v1: "sing", v2: "sang", v3: "sung", ua: "співати" },
    { v1: "sink", v2: "sank", v3: "sunk", ua: "тонути" },
    { v1: "sit", v2: "sat", v3: "sat", ua: "сидіти" },
    { v1: "sleep", v2: "slept", v3: "slept", ua: "спати" },
    { v1: "slide", v2: "slid", v3: "slid", ua: "ковзати" },
    { v1: "sling", v2: "slung", v3: "slung", ua: "кидати, підвішувати" },
    { v1: "speak", v2: "spoke", v3: "spoken", ua: "говорити" },
    { v1: "spend", v2: "spent", v3: "spent", ua: "витрачати" },
    { v1: "spill", v2: "spilt/spilled", v3: "spilt/spilled", ua: "проливати" },
    { v1: "spin", v2: "spun", v3: "spun", ua: "крутитися, прясти" },
    { v1: "split", v2: "split", v3: "split", ua: "розколювати" },
    { v1: "spread", v2: "spread", v3: "spread", ua: "поширювати" },
    { v1: "spring", v2: "sprang", v3: "sprung", ua: "стрибати, пружинити" },
    { v1: "stand", v2: "stood", v3: "stood", ua: "стояти" },
    { v1: "steal", v2: "stole", v3: "stolen", ua: "красти" },
    { v1: "stick", v2: "stuck", v3: "stuck", ua: "приклеювати, застрягати" },
    { v1: "sting", v2: "stung", v3: "stung", ua: "жалити" },
    { v1: "stink", v2: "stank", v3: "stunk", ua: "смердіти" },
    { v1: "strike", v2: "struck", v3: "struck/stricken", ua: "ударяти, страйкувати" },
    { v1: "swear", v2: "swore", v3: "sworn", ua: "клястися, лаятися" },
    { v1: "sweep", v2: "swept", v3: "swept", ua: "підмітати" },
    { v1: "swim", v2: "swam", v3: "swum", ua: "плавати" },
    { v1: "take", v2: "took", v3: "taken", ua: "брати" },
    { v1: "teach", v2: "taught", v3: "taught", ua: "навчати" },
    { v1: "tear", v2: "tore", v3: "torn", ua: "рвати" },
    { v1: "tell", v2: "told", v3: "told", ua: "розповідати" },
    { v1: "think", v2: "thought", v3: "thought", ua: "думати" },
    { v1: "throw", v2: "threw", v3: "thrown", ua: "кидати" },
    { v1: "undergo", v2: "underwent", v3: "undergone", ua: "зазнавати, піддаватися" },
    { v1: "understand", v2: "understood", v3: "understood", ua: "розуміти" },
    { v1: "upset", v2: "upset", v3: "upset", ua: "засмучувати" },
    { v1: "wake", v2: "woke", v3: "woken", ua: "прокидатися" },
    { v1: "wear", v2: "wore", v3: "worn", ua: "носити (одяг)" },
    { v1: "weave", v2: "wove", v3: "woven", ua: "ткати" },
    { v1: "weep", v2: "wept", v3: "wept", ua: "плакати" },
    { v1: "win", v2: "won", v3: "won", ua: "перемагати" },
    { v1: "wind", v2: "wound", v3: "wound", ua: "заводити, крутити" },
    { v1: "withdraw", v2: "withdrew", v3: "withdrawn", ua: "відкликати, знімати (гроші)" },
    { v1: "wring", v2: "wrung", v3: "wrung", ua: "викручувати" },
    { v1: "write", v2: "wrote", v3: "written", ua: "писати" }
];

const STORAGE_KEY = 'flashcardWordIndex'; 

let isFlipped = false;
let isSoundEnabled = true; 


// =================================================
// 2. DOM ЕЛЕМЕНТИ
// =================================================
const flashcard = document.getElementById('flashcard');
const verbInfinitive = document.getElementById('verb-infinitive');
const verbForms = document.getElementById('verb-forms');
const verbTranslation = document.getElementById('verb-translation');
const cardCounter = document.getElementById('card-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');
const soundBtn = document.getElementById('toggle-sound-btn'); 
const speakVerbBtn = document.getElementById('speak-verb-btn'); 


let currentWordIndex = loadProgress(); 


// =================================================
// 3. ФУНКЦІЇ ЗБЕРЕЖЕННЯ ПРОГРЕСУ
// =================================================

function saveProgress(index) {
    try {
        localStorage.setItem(STORAGE_KEY, index);
    } catch (e) {
        console.error('Не вдалося зберегти прогрес:', e);
    }
}

function loadProgress() {
    try {
        const savedIndex = localStorage.getItem(STORAGE_KEY);
        if (savedIndex !== null) {
            const index = parseInt(savedIndex, 10);
            
            if (verbs.length > 0 && index >= 0 && index < verbs.length) { 
                return index;
            }
        }
    } catch (e) {
        console.error('Не вдалося завантажити прогрес:', e);
    }
    return 0;
}


// =================================================
// 4. ФУНКЦІЇ ЛОГІКИ ТА НАВІГАЦІЇ
// =================================================

function showWord() {
    if (verbs.length === 0 || currentWordIndex < 0 || currentWordIndex >= verbs.length) {
        verbInfinitive.textContent = "Немає слів у списку.";
        verbForms.textContent = "";
        verbTranslation.textContent = "";
        cardCounter.textContent = "0 з 0";
        return;
    }

    const currentVerb = verbs[currentWordIndex];

    verbInfinitive.textContent = currentVerb.v1 || "---"; 
    verbForms.textContent = `V2: ${currentVerb.v2 || '---'} | V3: ${currentVerb.v3 || '---'}`;
    verbTranslation.textContent = `(${currentVerb.ua || '---'})`;

    cardCounter.textContent = `Слово ${currentWordIndex + 1} з ${verbs.length}`;

    // Скидання перевороту
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }
}

function showNextWord() {
    currentWordIndex = (currentWordIndex + 1) % verbs.length;
    showWord();
    saveProgress(currentWordIndex); 
}

function showPreviousWord() {
    currentWordIndex = (currentWordIndex - 1 + verbs.length) % verbs.length;
    showWord();
    saveProgress(currentWordIndex); 
}

function flipCard() {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;

    // ВОССТАНОВЛЕНА ЛОГИКА: Озвучить V2 и V3 при перевороте на обратную сторону
    if (isFlipped && isSoundEnabled) {
        const currentVerb = verbs[currentWordIndex];
        
        // Формируем строку для озвучивания: V2, V3. Использование запятой помогает TTS сделать небольшую паузу.
        const v2_clean = currentVerb.v2.replace(/\//g, ' or ');
const v3_clean = currentVerb.v3.replace(/\//g, ' or ');

// Формуємо рядок для озвучування: V2, V3
const formsToSpeak = `${v2_clean}, ${v3_clean}`;
// ...
    }
}

function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    soundBtn.innerHTML = isSoundEnabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
}

function speak(text) {
    if (!text) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; 

        if (window.speechSynthesis.getVoices().length === 0) {
            window.speechSynthesis.onvoiceschanged = () => {
                setVoiceAndSpeak(utterance);
            };
        } else {
            setVoiceAndSpeak(utterance);
        }
    } else {
        console.warn("Speech Synthesis не підтримується цим браузером.");
    }
}

function setVoiceAndSpeak(utterance) {
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => voice.lang === 'en-US' || voice.lang.startsWith('en-G'));
    
    if (englishVoice) {
        utterance.voice = englishVoice;
    }
    window.speechSynthesis.speak(utterance);
}


// =================================================
// 5. ІНІЦІАЛІЗАЦІЯ ТА ОБРОБНИКИ ПОДІЙ
// =================================================
document.addEventListener('DOMContentLoaded', () => {
    
    showWord();
    
    // Встановлюємо початковий стан кнопки ввімкнення/вимкнення звуку
    soundBtn.innerHTML = isSoundEnabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';

    // Обробники навігації та перевороту
    prevBtn.addEventListener('click', showPreviousWord);
    nextBtn.addEventListener('click', showNextWord);
    flipBtn.addEventListener('click', flipCard);
    
    // Картка перевертається при кліку
    flashcard.addEventListener('click', flipCard); 
    
    // Обробник ввімкнення/вимкнення звуку
    soundBtn.addEventListener('click', toggleSound); 
    
    // НОВИЙ ОБРОБНИК: Пряме озвучення V1 при натисканні на спеціальну кнопку (працює на Android)
    speakVerbBtn.addEventListener('click', (event) => {
        // Зупиняємо розповсюдження події, щоб запобігти перевороту картки
        event.stopPropagation();
        
        if (isSoundEnabled) {
            const currentVerb = verbs[currentWordIndex];
            speak(currentVerb.v1);
        }
    });
});

