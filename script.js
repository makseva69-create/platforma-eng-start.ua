body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); 
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 20px 10px;
    box-sizing: border-box;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1; 
    width: 100%;
    max-width: 500px;
    padding-bottom: 50px; 
}

h1 {
    font-size: 1.8em;
    margin-bottom: 20px;
    text-align: center;
    color: #f7f7f7;
    padding-top: 20px;
}

h1 .fa-book {
    margin-right: 10px;
    color: #ffcc00;
}

/* --- КОНТЕЙНЕР КАРТКИ (Flashcard Container) --- */
.flashcard-container {
    perspective: 1000px; 
    width: 95%;
    max-width: 450px;
    height: 300px; 
    margin: 30px auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
}

#flashcard {
    position: relative; 
    width: 100%;
    height: 100%;
    transform-style: preserve-3d; 
    transition: transform 0.6s ease;
    border-radius: 15px;
    cursor: pointer;
}

#flashcard.flipped {
    transform: rotateY(180deg);
}

.card-face {
    position: absolute;
    top: 0; 
    left: 0; 
    width: 100%;
    height: 100%;
    backface-visibility: hidden; 
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* ЦЕНТРУВАННЯ! */
    
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;
}

/* Лицьова сторона */
.card-front {
    background-color: #f7f7f7;
    color: #333;
    z-index: 2;
}

#verb-infinitive {
    font-size: 2.5em;
    font-weight: bold;
    color: #1e3c72;
    text-align: center;
}

/* Зворотна сторона */
.card-back {
    background-color: #333;
    color: #fff;
    transform: rotateY(180deg);
    text-align: center;
}

#verb-forms {
    font-size: 1.3em;
    margin-bottom: 10px;
    color: #ffcc00;
    line-height: 1.5; 
}

#verb-translation {
    font-size: 1.5em;
    font-weight: 500;
    color: #ccc;
}

/* --- КНОПКА ОЗВУЧЕННЯ НА КАРТЦІ --- */
#speak-verb-btn {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 50px; 
    height: 50px;
    background-color: #00bcd4;
    color: white;
    font-size: 1.2em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: background-color 0.2s, transform 0.1s ease; 
}

#speak-verb-btn:hover {
    background-color: #0097a7;
}

#speak-verb-btn:active {
    transform: scale(0.9);
    background-color: #007985;
}


/* --- КНОПКИ НАВІГАЦІЇ (ICON BUTTONS) --- */
.controls {
    display: flex;
    justify-content: center;
    width: 100%; 
    max-width: 450px;
    gap: 10px; 
    margin-top: 30px;
    padding: 0 10px; 
}

.nav-btn {
    background-color: #ffcc00; 
    color: #1e3c72;
    border: none;
    width: 70px;
    height: 70px;
    font-size: 1.4em;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.nav-btn:hover {
    background-color: #e6b800;
}

.nav-btn:active {
    transform: scale(0.96);
}

/* --- ЛІЧИЛЬНИК СЛІВ --- */
#card-counter {
    font-size: 1.1em;
    font-weight: 600;
    color: #a0a0a0;
    margin-top: 15px;
    text-align: center;
    margin-bottom: 20px;
}

/* --- ГЛОБАЛЬНІ ФІКСИ (ОБ'ЄДНАНІ) --- */
button, 
#flashcard, 
.nav-btn,
#speak-verb-btn, 
a,
:focus, 
:active {
    outline: none !important; 
    box-shadow: none !important;
    border: none !important;
}
/* --- ГЛОБАЛЬНІ ФІКСИ ДЛЯ МОБІЛЬНИХ (Усунення підсвічування та виділення) --- */
* {
    /* Видаляє синій/сірий прямокутник, який з'являється при натисканні на елементи на WebKit-браузерах (iOS/Android) */
    -webkit-tap-highlight-color: transparent; 
    
    /* Допомагає запобігти появі меню "копіювати/вставити" при тривалому натисканні на iOS */
    -webkit-touch-callout: none;
    
    /* Забороняє користувачу виділяти текст на елементах */
    -webkit-user-select: none;
    -moz-user-select: none; /* Для Firefox */
    -ms-user-select: none; /* Для IE/Edge */
    user-select: none; /* Стандартна властивість */
}
