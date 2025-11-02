// i18n.js — simple localization dictionary

const i18n = {
  en: {
    // Headers
    headerInstructions: "User Guide",
    bodyInstructions: `
    <p>
Hey there! This calculator is for players who want to level up faster — up to 20 levels towards the next Paragon.  
For everyone else, it might not be that useful, but who knows 😄
</p>
<p>
The idea is simple: the calculator helps you track experience and points to get maximum progress in your Battle Pass. To make it work best, follow a few tips:
</p>
<ul>
<li>Collect XP from all mail sources (Assambly of Shadows, Rite Of Exile, Shadow_Wars, Towers). Don’t take Acursed Tower's XP from Thursday — save it for when the Towers reset to get the max XP.</li>
<li>Focus on gathering Mythic Fish — other XP drops are a bit unpredictable 😅</li>
<li>Every week, participate in the "Predictions Challenge" by guessing the winner in governance (and try to get it right if you can).</li>
<li>During the Winds of Fortune, aim to get 1200 XP for the new week. Once you hit that, log out and don’t do anything until the event ends. Then the 1200 XP will arrive in your mail — it boosts progress in the new pass.</li>
<li>Don’t spend Battle Pass points before transitioning. If new events appear (like “Alley of Blood” or “Survivor’s Bane"), make sure you maxed out your pass first. Event rewards will advance you in the pass but won’t count towards the cap.</li>
</ul>
<p>
Shoutout to YouTubers:<br>
Mao — <a href="https://www.youtube.com/watch?v=TL6qn2Jj12A" target="_blank" rel="noopener noreferrer">YouTube</a><br>
Romanych — <a href="https://www.youtube.com/watch?v=pIAANXuz4fE" target="_blank" rel="noopener noreferrer">YouTube</a>
</p>
    `,
    btnLanguage: "Change language",
    
    // Parameters
    headerInputs: "All collected resources for calculations",
    lblMeetings: "Assambly of Shadows",
    lblWatch: "Rite Of Exile/Shadow Wars",
    lblTowers: "Acursed Towers",
    lblTowersFull: "Towers (full experience)",
    lblTowersPartial: "Towers (partial experience)",
    lblFishs: "Fish",
    lblFishRare: "Rare Fish",
    lblFishLegendary: "Legendary Fish",
    lblFishMythic: "Mythic Fish",
    lblBattlePass: "Battle Pass",
    lblBattlePassActualState: "Actual Battle Pass State",
    lblBattlePassLvl: "Level BP",
    lblPartial: "Progress BP",
    lblBattlePassSavedPoints: "Saved Battle Pass Points",
    lblBattlePassWindsOfFortunes: "Saved BP Points from Winds of Fortune",
    lblPredictionst: "Predictions Challenge",
    lblPredCorrect: "Predictions (correct)",
    lblPredWrong: "Predictions (wrong)",

    // Results
    headerResults: "Results",
    resultsMail: "📮 Optimal level",
    resultsLvl: "Minimal level",
    resultsExp: "Minimal experience",
    headerResultsMore: "🔍 More informations",
    resultsmoreBP: "BP Progression",
    resultsmoreBPstart: "Started BP level",
    resultsmoreBPprogess: "Progressed BP levels",
    resultsmoreBPGainedExp: "Gained XP from BP",
    resultsmoreBPAfter: "Final BP level",
    resultsmoreExp: "Total XP gained from all resources",
    resultsmoreExpLvl: "XP distribution by levels",

    // top-bar
    topbartoday: "Today",
    topbaryear: "This Year",
    topbartotal: "Total",
    topbarcoffee: "☕ Buy me a coffee",
  },

  ru: {
    // Headers
    headerInstructions: "Руководство использования калькулятора",
    bodyInstructions: `
<p>
Привет! Этот калькулятор создан для тех, кто хочет прокачиваться быстрее и эффективнее — на целых 20 уровней до следующего парагона.  
Для остальных он может быть не так полезен, но вдруг пригодится 😊
</p>
<p>
Идея проста: калькулятор поможет понять, когда необходимо использовать опыт и очки, чтобы продвигаться в Battle Pass и получать дополнительный опыт. Чтобы всё работало, нужно соблюдать несколько правил:
</p>
<ul>
<li>Копите опыт на почте со всех источников (собрания теней, битвы теней, дозоры клинков, проклятые башни). Не берите опыт с башен с четверга — чтобы получить максимум после обновления.</li>
<li>Старайтесь собирать мифическую рыбу — остальной опыт распределяется непредсказуемо 😅</li>
<li>Каждую неделю делайте "ставку" на победителя в правлении (и по возможности угадывайте).</li>
<li>Во время ветров удачи старайтесь набрать 1200 очков опыта в новую неделю. Как только достигли лимита — выходите из игры и ждите окончания ивента. По окончании начислят заветные 1200 очков, которые дадут прогресс в новом пропуске.</li>
<li>Не собирайте очки с пропуска до перехода на новый. Если в игре появляются ивенты (типа "дорога крови" или "проклятие выжившего"), убедитесь, что вы набрали максимум в пропуске, прежде чем забирать награды с ивентов. Они продвигают вас по пропуску, но не суммируются с лимитом.</li>
</ul>
<p>
Слова благодарности ютуберам:<br>
Мао — <a href="https://www.youtube.com/watch?v=TL6qn2Jj12A" target="_blank" rel="noopener noreferrer">YouTube</a><br>
Романыч — <a href="https://www.youtube.com/watch?v=pIAANXuz4fE" target="_blank" rel="noopener noreferrer">YouTube</a>
</p>
    `,
    btnLanguage: "Сменить язык",
    
    // Parameters
    headerInputs: "Скопленные ресурсы для расчетов",
    lblMeetings: "Собрание теней",
    lblWatch: "Дозор Клинков/Битва Теней",
    lblTowers: "Проклятые башни",
    lblTowersFull: "Башни (полный опыт)",
    lblTowersPartial: "Башни (частичный опыт)",
    lblFishs: "Рыба",
    lblFishRare: "Редкая рыба",
    lblFishLegendary: "Легендарная рыба",
    lblFishMythic: "Мифическая рыба",
    lblBattlePass: "Боевой пропуск",
    lblBattlePassActualState: "Актуальное состояние боевого пропуска",
    lblBattlePassLvl: "Уровень БП",
    lblPartial: "Прогресс БП",
    lblBattlePassSavedPoints: "Сохраненные очки боевого пропуска",
    lblBattlePassWindsOfFortunes: "Сохраненные очки ветров удачи",
    lblPredictionst: "Прогнозы победителей правления",
    lblPredCorrect: "Прогнозы (верные)",
    lblPredWrong: "Прогнозы (ошибочные)",

    // Results
    headerResults: "Результаты",
    resultsMail: "📮 Оптимальный уровень",
    resultsLvl: "Минимальный уровень",
    resultsExp: "Минимальный опыт",
    headerResultsMore: "🔍 Подробности расчёта",
    resultsmoreBP: "Продвижение по БП",
    resultsmoreBPstart: "Начальный уровень БП",
    resultsmoreBPprogess: "Пройдено уровеней БП",
    resultsmoreBPGainedExp: "Получени опыта с БП",
    resultsmoreBPAfter: "Финальный уровень БП",
    resultsmoreExp: "Итого получено опыта со всех ресурсов",
    resultsmoreExpLvl: "Распределение опыта по уровням",

    // top-bar
    topbartoday: "Сегодня",
    topbaryear: "В этом году",
    topbartotal: "Всего",
    topbarcoffee: "☕ Купить мне кофе",
  },
  fr: {
    // Headers
    headerInstructions: "Guide d'utilisation du calculateur",
    bodyInstructions: `
<p>
Salut ! Ce calculateur est destiné à ceux qui veulent monter de niveau plus vite — jusqu’à 20 niveaux supplémentaires pour atteindre le prochain Parangon.  
Pour les autres, il peut ne pas être très utile, mais qui sait 😄
</p>

<p>
Le principe est simple : le calculateur vous aide à suivre votre expérience et vos points pour progresser au maximum dans le Battle Pass. Pour de meilleurs résultats, suivez ces conseils :
</p>

<ul>
<li>Collectez l’expérience depuis toutes les sources de courrier (Assemblée des Ombres, Rite d’Exil / Guerres de l’Ombre, Tours Maudites). Ne prenez pas l’expérience des tours à partir du jeudi — gardez-la pour le reset des tours afin d’obtenir le maximum.</li>
<li>Concentrez-vous sur la collecte du Poisson Mythique — les autres XP sont un peu aléatoires 😅</li>
<li>Chaque semaine, participez au "Défi des Prédictions" en devinant le gagnant du gouvernement (essayez de bien deviner si vous le pouvez).</li>
<li>Pendant les Vents de Fortune, essayez d’obtenir 1200 XP pour la nouvelle semaine. Une fois atteint, quittez le jeu et ne faites rien jusqu’à la fin de l’événement. Ensuite, les 1200 XP arriveront dans votre courrier — ils feront progresser votre nouveau pass.</li>
<li>Ne dépensez pas vos points de Battle Pass avant la transition vers le nouveau pass. Si des événements apparaissent (comme "Ruelle Sanglante" ou "Fléau des Survivants"), assurez-vous d’avoir maximisé votre pass avant de récupérer les récompenses. Les récompenses d’événement feront progresser votre pass mais ne s’additionnent pas au plafond.</li>
</ul>

<p>
Merci aux YouTubers :<br>
Mao — <a href="https://www.youtube.com/watch?v=TL6qn2Jj12A" target="_blank" rel="noopener noreferrer">YouTube</a><br>
Romanych — <a href="https://www.youtube.com/watch?v=pIAANXuz4fE" target="_blank" rel="noopener noreferrer">YouTube</a>
</p>
    `,
    btnLanguage: "Changer de langue",

    // Parameters
    headerInputs: "Toutes les ressources collectées pour les calculs",
    lblMeetings: "Assemblée des Ombres",
    lblWatch: "Rite d’Exil / Guerres de l’Ombre",
    lblTowers: "Tours Maudites",
    lblTowersFull: "Tours (expérience complète)",
    lblTowersPartial: "Tours (expérience partielle)",
    lblFishs: "Poisson",
    lblFishRare: "Poisson Rare",
    lblFishLegendary: "Poisson Légendaire",
    lblFishMythic: "Poisson Mythique",
    lblBattlePass: "Battle Pass",
    lblBattlePassActualState: "État actuel du Battle Pass",
    lblBattlePassLvl: "Niveau BP",
    lblPartial: "Progression BP",
    lblBattlePassSavedPoints: "Points de BP sauvegardés",
    lblBattlePassWindsOfFortunes: "Points BP des Vents de Fortune sauvegardés",
    lblPredictionst: "Défi des Prédictions",
    lblPredCorrect: "Prédictions (correctes)",
    lblPredWrong: "Prédictions (fausses)",

    // Results
    headerResults: "Résultats",
    resultsMail: "📮 Niveau optimal",
    resultsLvl: "Niveau minimal",
    resultsExp: "Expérience minimale",
    headerResultsMore: "🔍 Plus de détails",
    resultsmoreBP: "Progression BP",
    resultsmoreBPstart: "Niveau BP initial",
    resultsmoreBPprogess: "Niveaux BP progressés",
    resultsmoreBPGainedExp: "XP gagnée via BP",
    resultsmoreBPAfter: "Niveau BP final",
    resultsmoreExp: "XP totale obtenue depuis toutes les ressources",
    resultsmoreExpLvl: "Répartition de l’XP par niveau",

    // top-bar
    topbartoday: "Aujourd'hui",
    topbaryear: "Вette Année",
    topbartotal: "Total",
    topbarcoffee: "☕ Offrez-moi un café",
  },
};
/* -------- Language Dropdown Styles -------- */
function getLang() {
  return localStorage.getItem("lang") ||
    ((navigator.language || "en").toLowerCase().startsWith("ru") ? "ru" : "en");
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
}

function t(key) {
  const lang = getLang();
  return i18n[lang][key] || key;
}

// function applyTranslations() {
//   document.querySelectorAll("[data-i18n]").forEach(el => {
//     const key = el.dataset.i18n;
//     if (el.placeholder !== undefined && el.tagName === "INPUT")
//       el.placeholder = t(key);
//     else
//       el.textContent = t(key);
//   });
// }

function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = i18n[lang][key];
    if (!value) return;

    // bodyInstructions содержит HTML, поэтому вставляем innerHTML
    if (key === "bodyInstructions") {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  applyTranslations(lang);
});

/* ---------------- */

/* -------- Guide info -------- */
const helpBtn = document.getElementById('help-btn');
const helpModal = document.getElementById('help-modal');
const closeBtn = document.querySelector('.close-btn');

helpBtn.addEventListener('click', () => {
  helpModal.classList.add('show');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeHelp);
helpModal.addEventListener('click', (e) => {
  if (e.target === helpModal) closeHelp();
});

function closeHelp() {
  helpModal.classList.remove('show');
  document.body.style.overflow = '';
}

/* ---------------- */