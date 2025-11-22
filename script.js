// 1. Повний список неправильних дієслів з українським перекладом (127 слів)
const irregularVerbs = [
    { infinitive: "abide", v2: "abode", v3: "abode", translation: "терпіти, витримувати" },
    { infinitive: "arise", v2: "arose", v3: "arisen", translation: "виникати" },
    { infinitive: "awake", v2: "awoke", v3: "awoken", translation: "прокидатися" },
    { infinitive: "be", v2: "was/were", v3: "been", translation: "бути" },
    { infinitive: "bear", v2: "bore", v3: "born", translation: "народжувати, нести" },
    { infinitive: "beat", v2: "beat", v3: "beaten", translation: "бити" },
    { infinitive: "become", v2: "became", v3: "become", translation: "ставати" },
    { infinitive: "begin", v2: "began", v3: "begun", translation: "починати" },
    { infinitive: "bend", v2: "bent", v3: "bent", translation: "гнути" },
    { infinitive: "bet", v2: "bet", v3: "bet", translation: "закладатись, тримати парі" },
    { infinitive: "bid", v2: "bid", v3: "bid", translation: "пропонувати ціну" },
    { infinitive: "bind", v2: "bound", v3: "bound", translation: "зв'язувати" },
    { infinitive: "bite", v2: "bit", v3: "bitten", translation: "кусати" },
    { infinitive: "bleed", v2: "bled", v3: "bled", translation: "кровоточити" },
    { infinitive: "blow", v2: "blew", v3: "blown", translation: "дути" },
    { infinitive: "break", v2: "broke", v3: "broken", translation: "ламати" },
    { infinitive: "breed", v2: "bred", v3: "bred", translation: "розводити (тварин)" },
    { infinitive: "bring", v2: "brought", v3: "brought", translation: "приносити" },
    { infinitive: "broadcast", v2: "broadcast", v3: "broadcast", translation: "транслювати, віщати" },
    { infinitive: "build", v2: "built", v3: "built", translation: "будувати" },
    { infinitive: "burn", v2: "burnt/burned", v3: "burnt/burned", translation: "горіти, палити" },
    { infinitive: "burst", v2: "burst", v3: "burst", translation: "вибухати, лопатися" },
    { infinitive: "buy", v2: "bought", v3: "bought", translation: "купувати" },
    { infinitive: "cast", v2: "cast", v3: "cast", translation: "кидати, відливати" },
    { infinitive: "catch", v2: "caught", v3: "caught", translation: "ловити" },
    { infinitive: "choose", v2: "chose", v3: "chosen", translation: "обирати" },
    { infinitive: "cling", v2: "clung", v3: "clung", translation: "чіплятися" },
    { infinitive: "come", v2: "came", v3: "come", translation: "приходити" },
    { infinitive: "cost", v2: "cost", v3: "cost", translation: "коштувати" },
    { infinitive: "creep", v2: "crept", v3: "crept", translation: "повзати" },
    { infinitive: "cut", v2: "cut", v3: "cut", translation: "різати" },
    { infinitive: "deal", v2: "dealt", v3: "dealt", translation: "мати справу" },
    { infinitive: "dig", v2: "dug", v3: "dug", translation: "копати" },
    { infinitive: "do", v2: "did", v3: "done", translation: "робити" },
    { infinitive: "draw", v2: "drew", v3: "drawn", translation: "малювати, тягнути" },
    { infinitive: "dream", v2: "dreamt/dreamed", v3: "dreamt/dreamed", translation: "мріяти, бачити сон" },
    { infinitive: "drink", v2: "drank", v3: "drunk", translation: "пити" },
    { infinitive: "drive", v2: "drove", v3: "driven", translation: "водити" },
    { infinitive: "eat", v2: "ate", v3: "eaten", translation: "їсти" },
    { infinitive: "fall", v2: "fell", v3: "fallen", translation: "падати" },
    { infinitive: "feed", v2: "fed", v3: "fed", translation: "годувати" },
    { infinitive: "feel", v2: "felt", v3: "felt", translation: "відчувати" },
    { infinitive: "fight", v2: "fought", v3: "fought", translation: "боротися" },
    { infinitive: "find", v2: "found", v3: "found", translation: "знаходити" },
    { infinitive: "flee", v2: "fled", v3: "fled", translation: "тікати" },
    { infinitive: "fling", v2: "flung", v3: "flung", translation: "кидати, жбурляти" },
    { infinitive: "fly", v2: "flew", v3: "flown", translation: "літати" },
    { infinitive: "forbid", v2: "forbade", v3: "forbidden", translation: "забороняти" },
    { infinitive: "forget", v2: "forgot", v3: "forgotten", translation: "забувати" },
    { infinitive: "forgive", v2: "forgave", v3: "forgiven", translation: "пробачати" },
    { infinitive: "freeze", v2: "froze", v3: "frozen", translation: "заморожувати" },
    { infinitive: "get", v2: "got", v3: "got/gotten", translation: "отримувати" },
    { infinitive: "give", v2: "gave", v3: "given", translation: "давати" },
    { infinitive: "go", v2: "went", v3: "gone", translation: "іти" },
    { infinitive: "grind", v2: "ground", v3: "ground", translation: "молоти" },
    { infinitive: "grow", v2: "grew", v3: "grown", translation: "рости" },
    { infinitive: "hang", v2: "hung", v3: "hung", translation: "вішати, висіти" },
    { infinitive: "have", v2: "had", v3: "had", translation: "мати" },
    { infinitive: "hear", v2: "heard", v3: "heard", translation: "чути" },
    { infinitive: "hide", v2: "hid", v3: "hidden", translation: "ховати" },
    { infinitive: "hit", v2: "hit", v3: "hit", translation: "ударяти" },
    { infinitive: "hold", v2: "held", v3: "held", translation: "тримати" },
    { infinitive: "hurt", v2: "hurt", v3: "hurt", translation: "ранити, боліти" },
    { infinitive: "keep", v2: "kept", v3: "kept", translation: "тримати, зберігати" },
    { infinitive: "kneel", v2: "knelt/kneeled", v3: "knelt/kneeled", translation: "ставати на коліна" },
    { infinitive: "know", v2: "knew", v3: "known", translation: "знати" },
    { infinitive: "lay", v2: "laid", v3: "laid", translation: "класти (горизонтально)" },
    { infinitive: "lead", v2: "led", v3: "led", translation: "вести" },
    { infinitive: "lean", v2: "leant/leaned", v3: "leant/leaned", translation: "нахиляти, спиратися" },
    { infinitive: "leap", v2: "leapt/leaped", v3: "leapt/leaped", translation: "стрибати" },
    { infinitive: "learn", v2: "learnt/learned", v3: "learnt/learned", translation: "вчити(ся)" },
    { infinitive: "leave", v2: "left", v3: "left", translation: "залишати" },
    { infinitive: "lend", v2: "lent", v3: "lent", translation: "позичати (комусь)" },
    { infinitive: "let", v2: "let", v3: "let", translation: "дозволяти" },
    { infinitive: "lie", v2: "lay", v3: "lain", translation: "лежати" },
    { infinitive: "light", v2: "lit/lighted", v3: "lit/lighted", translation: "запалювати" },
    { infinitive: "lose", v2: "lost", v3: "lost", translation: "губити" },
    { infinitive: "make", v2: "made", v3: "made", translation: "робити/виготовляти" },
    { infinitive: "mean", v2: "meant", v3: "meant", translation: "мати на увазі" },
    { infinitive: "meet", v2: "met", v3: "met", translation: "зустрічати" },
    { infinitive: "mistake", v2: "mistook", v3: "mistaken", translation: "помилятися" },
    { infinitive: "mow", v2: "mowed", v3: "mown/mowed", translation: "косити" },
    { infinitive: "pay", v2: "paid", v3: "paid", translation: "платити" },
    { infinitive: "put", v2: "put", v3: "put", translation: "класти, ставити" },
    { infinitive: "quit", v2: "quit", v3: "quit", translation: "покидати, звільнятися" },
    { infinitive: "read", v2: "read", v3: "read", translation: "читати" },
    { infinitive: "ride", v2: "rode", v3: "ridden", translation: "їздити (верхи)" },
    { infinitive: "ring", v2: "rang", v3: "rung", translation: "дзвонити" },
    { infinitive: "rise", v2: "rose", v3: "risen", translation: "підніматися" },
    { infinitive: "run", v2: "ran", v3: "run", translation: "бігти" },
    { infinitive: "saw", v2: "sawed", v3: "sawn/sawed", translation: "пиляти" },
    { infinitive: "say", v2: "said", v3: "said", translation: "говорити" },
    { infinitive: "see", v2: "saw", v3: "seen", translation: "бачити" },
    { infinitive: "seek", v2: "sought", v3: "sought", translation: "шукати" },
    { infinitive: "sell", v2: "sold", v3: "sold", translation: "продавати" },
    { infinitive: "send", v2: "sent", v3: "sent", translation: "надсилати" },
    { infinitive: "set", v2: "set", v3: "set", translation: "встановлювати" },
    { infinitive: "sew", v2: "sewed", v3: "sewn/sewed", translation: "шити" },
    { infinitive: "shake", v2: "shook", v3: "shaken", translation: "трясти" },
    { infinitive: "shear", v2: "shore", v3: "shorn", translation: "стригти (овець)" },
    { infinitive: "shine", v2: "shone", v3: "shone", translation: "світити, сяяти" },
    { infinitive: "shoot", v2: "shot", v3: "shot", translation: "стріляти" },
    { infinitive: "show", v2: "showed", v3: "shown/showed", translation: "показувати" },
    { infinitive: "shrink", v2: "shrank", v3: "shrunk", translation: "зменшуватися, сідати (про одяг)" },
    { infinitive: "shut", v2: "shut", v3: "shut", translation: "зачиняти" },
    { infinitive: "sing", v2: "sang", v3: "sung", translation: "співати" },
    { infinitive: "sink", v2: "sank", v3: "sunk", translation: "тонути" },
    { infinitive: "sit", v2: "sat", v3: "sat", translation: "сидіти" },
    { infinitive: "sleep", v2: "slept", v3: "slept", translation: "спати" },
    { infinitive: "slide", v2: "slid", v3: "slid", translation: "ковзати" },
    { infinitive: "sling", v2: "slung", v3: "slung", translation: "кидати, підвішувати" },
    { infinitive: "speak", v2: "spoke", v3: "spoken", translation: "говорити" },
    { infinitive: "spend", v2: "spent", v3: "spent", translation: "витрачати" },
    { infinitive: "spill", v2: "spilt/spilled", v3: "spilt/spilled", translation: "проливати" },
    { infinitive: "spin", v2: "spun", v3: "spun", translation: "крутитися, прясти" },
    { infinitive: "split", v2: "split", v3: "split", translation: "розколювати" },
    { infinitive: "spread", v2: "spread", v3: "spread", translation: "поширювати" },
    { infinitive: "spring", v2: "sprang", v3: "sprung", translation: "стрибати, пружинити" },
    { infinitive: "stand", v2: "stood", v3: "stood", translation: "стояти" },
    { infinitive: "steal", v2: "stole", v3: "stolen", translation: "красти" },
    { infinitive: "stick", v2: "stuck", v3: "stuck", translation: "приклеювати, застрягати" },
    { infinitive: "sting", v2: "stung", v3: "stung", translation: "жалити" },
    { infinitive: "stink", v2: "stank", v3: "stunk", translation: "смердіти" },
    { infinitive: "strike", v2: "struck", v3: "struck/stricken", translation: "ударяти, страйкувати" },
    { infinitive: "swear", v2: "swore", v3: "sworn", translation: "клястися, лаятися" },
    { infinitive: "sweep", v2: "swept", v3: "swept", translation: "підмітати" },
    { infinitive: "swim", v2: "swam", v3: "swum", translation: "плавати" },
    { infinitive: "take", v2: "took", v3: "taken", translation: "брати" },
    { infinitive: "teach", v2: "taught", v3: "taught", translation: "навчати" },
    { infinitive: "tear", v2: "tore", v3: "torn", translation: "рвати" },
    { infinitive: "tell", v2: "told", v3: "told", translation: "розповідати" },
    { infinitive: "think", v2: "thought", v3: "thought", translation: "думати" },
    { infinitive: "throw", v2: "threw", v3: "thrown", translation: "кидати" },
    { infinitive: "undergo", v2: "underwent", v3: "undergone", translation: "зазнавати, піддаватися" },
    { infinitive: "understand", v2: "understood", v3: "understood", translation: "розуміти" },
    { infinitive: "upset", v2: "upset", v3: "upset", translation: "засмучувати" },
    { infinitive: "wake", v2: "woke", v3: "woken", translation: "прокидатися" },
    { infinitive: "wear", v2: "wore", v3: "worn", translation: "носити (одяг)" },
    { infinitive: "weave", v2: "wove", v3: "woven", translation: "ткати" },
    { infinitive: "weep", v2: "wept", v3: "wept", translation: "плакати" },
    { infinitive: "win", v2: "won", v3: "won", translation: "перемагати" },
    { infinitive: "wind", v2: "wound", v3: "wound", translation: "заводити, крутити" },
    { infinitive: "withdraw", v2: "withdrew", v3: "withdrawn", translation: "відкликати, знімати (гроші)" },
    { infinitive: "wring", v2: "wrung", v3: "wrung", translation: "викручувати" },
    { infinitive: "write", v2: "wrote", v3: "written", translation: "писати" }
];


// Назва ключа для збереження прогресу в браузері
const STORAGE_KEY = 'flashcardWordIndex'; 

// Завантажуємо прогрес при старті, інакше починаємо з 0
let currentWordIndex = loadProgress();
let isFlipped = false;
let isSoundEnabled = true;

// =================================================
// 2. DOM ЕЛЕМЕНТИ (як на скріншоті image_a3d7db.png)
// =================================================
const flashcard = document.getElementById('flashcard');
const verbInfinitive = document.getElementById('verb-infinitive');
const verbForms = document.getElementById('verb-forms');
const verbTranslation = document.getElementById('verb-translation');
const cardCounter = document.getElementById('card-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');
const soundBtn = document.getElementById('toggle-sound-btn'); // Припускаємо, що у вас є кнопка звуку


// =================================================
// 3. ФУНКЦІЇ ЗБЕРЕЖЕННЯ ПРОГРЕСУ (localStorage)
// =================================================

function saveProgress(index) {
    try {
        // Зберігаємо індекс
        localStorage.setItem(STORAGE_KEY, index);
        // console.log(`Прогресс сохранен: ${index}`); // Розкоментуйте для дебагу
    } catch (e) {
        console.error('Не вдалося зберегти прогрес:', e);
    }
}

function loadProgress() {
    try {
        const savedIndex = localStorage.getItem(STORAGE_KEY);
        if (savedIndex !== null) {
            // Перевіряємо, чи індекс не виходить за межі масиву
            const index = parseInt(savedIndex, 10);
            if (index >= 0 && index < verbs.length) {
                return index;
            }
        }
    } catch (e) {
        console.error('Не вдалося завантажити прогрес:', e);
    }
    // Якщо прогрес не знайдено або він недійсний, повертаємо 0
    return 0;
}


// =================================================
// 4. ФУНКЦІЇ ЛОГІКИ ТА НАВІГАЦІЇ
// =================================================

function showWord() {
    // 1. Оновлення контенту картки
    const currentVerb = verbs[currentWordIndex];
    verbInfinitive.textContent = currentVerb.v1;
    verbForms.textContent = `V2: ${currentVerb.v2} | V3: ${currentVerb.v3}`;
    verbTranslation.textContent = `(${currentVerb.ua})`;

    // 2. Оновлення лічильника
    cardCounter.textContent = `Слово ${currentWordIndex + 1} з ${verbs.length}`;

    // 3. Перевірка: якщо картка перевернута, повертаємо її на лицьову сторону
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }
    
    // 4. Озвучення слова (якщо увімкнено)
    if (isSoundEnabled) {
        speak(currentVerb.v1);
    }
}

function showNextWord() {
    currentWordIndex = (currentWordIndex + 1) % verbs.length;
    showWord();
    saveProgress(currentWordIndex); // !!! ЗБЕРЕЖЕННЯ ПРОГРЕСУ !!!
}

function showPreviousWord() {
    // Операція для коректного циклічного переходу назад
    currentWordIndex = (currentWordIndex - 1 + verbs.length) % verbs.length;
    showWord();
    saveProgress(currentWordIndex); // !!! ЗБЕРЕЖЕННЯ ПРОГРЕСУ !!!
}

function flipCard() {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;

    // Озвучуємо слово при перевороті, якщо увімкнено
    if (isFlipped && isSoundEnabled) {
        const currentVerb = verbs[currentWordIndex];
        speak(currentVerb.v1);
    }
}

function toggleSound() {
    isSoundEnabled = !isSoundEnabled;
    soundBtn.textContent = isSoundEnabled ? '🔊 Звук Вкл' : '🔇 Звук Викл';
}

// Функція озвучення (Text-to-Speech) - як на скріншоті image_a3d7db.png
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Зупиняємо попередню озвучку
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; 

        // Спроба знайти відповідний англійський голос
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(voice => voice.lang === 'en-US' || voice.lang.startsWith('en-G'));
        
        if (englishVoice) {
            utterance.voice = englishVoice;
        }

        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Speech Synthesis не підтримується цим браузером.");
    }
}

// =================================================
// 5. ІНІЦІАЛІЗАЦІЯ ТА ОБРОБНИКИ ПОДІЙ
// =================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Відображаємо слово (завантажене з localStorage)
    showWord();
    
    // 2. Встановлюємо початковий стан кнопки звуку
    soundBtn.textContent = isSoundEnabled ? '🔊 Звук Вкл' : '🔇 Звук Викл';

    // 3. Обробники подій
    prevBtn.addEventListener('click', showPreviousWord);
    nextBtn.addEventListener('click', showNextWord);
    flipBtn.addEventListener('click', flipCard);
    
    // Додаємо обробник для кліку на саму картку, якщо це потрібно для перевороту
    flashcard.addEventListener('click', flipCard); 
    
    // Обробник для кнопки увімкнення/вимкнення звуку
    soundBtn.addEventListener('click', toggleSound); 
});
