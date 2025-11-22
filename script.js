// =================================================
// 1. ДАНІ ТА ГЛОБАЛЬНІ ЗМІННІ
// =================================================

// !!! УВАГА: ЗАМІНІТЬ ЦЕЙ МАСИВ НА ВАШ ФАКТИЧНИЙ СПИСОК !!!
const verbs = [
    { v1: "abide", v2: "abode", v3: "abode", ua: "терпіти, дотримуватися" },
    { v1: "arise", v2: "arose", v3: "arisen", ua: "виникати" },
    { v1: "awake", v2: "awoke", v3: "awoken", ua: "прокидатися" },
    // ... ДОДАЙТЕ ТУТ ВАШІ 145/93 СЛІВ ...
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
