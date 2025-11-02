const App = {
    data: {
        expPerLevel: 3500000,
        targetLevel: 97,
        targetExtra: 500000,
        penalties: [
            { level: 97, penalty: 0.01 },
            { level: 96, penalty: 0.05 },
            { level: 95, penalty: 0.05 },
            { level: 94, penalty: 0.10 },
            { level: 93, penalty: 0.10 },
            { level: 92, penalty: 0.20 },
            { level: 91, penalty: 0.20 },
            { level: 90, penalty: 0.30 },
            { level: 89, penalty: 0.30 },
            { level: 88, penalty: 0.40 },
            { level: 87, penalty: 0.40 },
            { level: 86, penalty: 0.50 },
            { level: 85, penalty: 0.50 }
        ]
    },

    utils: {
        getVal(id) {
            return Number(document.getElementById(id)?.value || 0);
        },

        fmt(num) {
            // Always round up
            return num.toLocaleString('ru-RU');
            // return Math.ceil(num).toLocaleString(getLang() === "ru" ? "ru-RU" : "en-US");
        },

        save() {
            const data = {};
            document.querySelectorAll('#mail-params input[type=number]').forEach(i => data[i.id] = i.value);
            localStorage.setItem('zadrotData', JSON.stringify(data));
        },

        load() {
            const saved = localStorage.getItem('zadrotData');
            if (!saved) return;
            const data = JSON.parse(saved);
            for (let id in data) {
                const el = document.getElementById(id);
                if (el) el.value = data[id];
            }
            App.ui.updateBpCostDisplay();
            App.ui.recalc();
        }
    },

    calc: {
        calcBattlePassExp(currentLevel, savedPoints, partialProgress = 0) {
            const levelTable = [
                { cost: 40, exp: 216211 },
                { cost: 50, exp: 270276 },
                { cost: 60, exp: 324332 },
                { cost: 80, exp: 432442 },
                { cost: 100, exp: 540553 },
                { cost: 120, exp: 648664 },
                { cost: 140, exp: 756774 },
                { cost: 160, exp: 864885 }
            ];
            const defaultCost = 180;
            const defaultExp = 972996;

            let wallet = savedPoints;
            let filled = partialProgress;
            let gainedExp = 0;
            let gainedLevels = 0;
            let level = currentLevel;

            while (wallet > 0) {
                const tier = (level - 1) < levelTable.length ? levelTable[level - 1] : { cost: defaultCost, exp: defaultExp };
                const need = tier.cost - filled;

                if (need <= 0) {
                    gainedExp += tier.exp;
                    gainedLevels++;
                    level++;
                    filled = 0;
                    continue;
                }

                if (wallet >= need) {
                    wallet -= need;
                    gainedExp += tier.exp;
                    gainedLevels++;
                    level++;
                    filled = 0;
                    continue;
                }

                filled += wallet;
                wallet = 0;
                break;
            }

            return { gainedExp, gainedLevels, lastLevel: level, remainingPartial: filled };
        },

        distributeMailExp(totalExp) {
            let remainingExp = totalExp;
            let levelReached = null;
            let expOnLevel = 0;
            const steps = [];

            for (let i = 0; i < App.data.penalties.length; i++) {
                const { level, penalty } = App.data.penalties[i];
                let required = 0;

                if (level === App.data.targetLevel) {
                    required = App.data.targetExtra / penalty;
                    if (remainingExp >= required) {
                        steps.push({ level, penalty, usedExp: required });
                        remainingExp -= required;
                    } else {
                        levelReached = level;
                        expOnLevel = remainingExp * penalty;
                        steps.push({ level, penalty, usedExp: remainingExp });
                        remainingExp = 0;
                        break;
                    }
                } else {
                    required = App.data.expPerLevel / penalty;
                    if (remainingExp >= required) {
                        steps.push({ level, penalty, usedExp: required });
                        remainingExp -= required;
                    } else {
                        levelReached = level;
                        expOnLevel = remainingExp * penalty;
                        steps.push({ level, penalty, usedExp: remainingExp });
                        remainingExp = 0;
                        break;
                    }
                }

                if (i === App.data.penalties.length - 1 && levelReached === null) {
                    levelReached = level;
                    expOnLevel = App.data.expPerLevel;
                }
            }

            return {
                openLevel: levelReached,
                expOnLevel: App.data.expPerLevel - expOnLevel,
                steps: steps
            };
        }
    },

    ui: {
        recalc() {
            const get = App.utils.getVal;

            const meetingsExp = get('letters_meetings') * 865000;
            const watchExp = get('letters_watch') * 1600000;
            const towersExp = get('towers_full') * 1167595 + get('towers_partial');
            const fishExp = get('fish_rare') + get('fish_legendary') + get('fish_mythic') * 543100;
            const predExp = get('predictions_correct') * 120000 + get('predictions_wrong') * 60000;

            const battlePassLevel = get('battle_pass_lvl') || 1;
            const battlePassPoints = get('battle_pass_points');
            const luckPoints = get('luck_points') || 0;
            const battlePassPartial = get('battle_pass_partial') || 0;
            const bp = App.calc.calcBattlePassExp(battlePassLevel, battlePassPoints + luckPoints, battlePassPartial);
            const battlePassExp = bp.gainedExp;

            const totalExp = meetingsExp + watchExp + towersExp + fishExp + predExp + battlePassExp;

            const mailDistribution = App.calc.distributeMailExp(totalExp);
            const fmt = App.utils.fmt;

            document.getElementById('calc-result').innerHTML = `
            <div class="result-section">
                <h3>${t("resultsMail")}</h3>
                <ul>
                    <li>${t("resultsLvl")}: <b>${mailDistribution.openLevel}</b></li>
                    <li>${t("resultsExp")}: <b>${fmt(mailDistribution.expOnLevel)}</b></li>
                </ul>
            </div>
            `;

            const debugOutput = mailDistribution.steps.map(s =>
                `Level ${s.level} (penalty ${s.penalty * 100}%): used ${fmt(s.usedExp)} exp`
            ).join('<br>');

            document.getElementById('full-calc-result').innerHTML = `
            <div class="result-section">
                <h3>${t("resultsmoreBP")}</h3>
                <ul>
                    <li>${t("resultsmoreBPstart")}: ${battlePassLevel}</li>
                    <li>${t("resultsmoreBPprogess")}: <b>${bp.gainedLevels}</b></li>
                    <li>${t("resultsmoreBPGainedExp")}: <b>${fmt(bp.gainedExp)}</b></li>
                    <li>${t("resultsmoreBPAfter")}: <b>${bp.lastLevel}</b></li>
                </ul>
            </div>

            <div class="result-section">
                <h3>${t("resultsmoreExp")}</h3>
                <ul>
                    <li><div>${fmt(totalExp)}</div></li>
                </ul>
            </div>

            <div class="debug">
                <h4>${t("resultsmoreExpLvl")}</h4>
                ${debugOutput}
            </div>
            `;

            App.utils.save();
        },

        applyTranslations() {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.dataset.i18n;
                if (el.placeholder !== undefined && el.tagName === "INPUT")
                    el.placeholder = t(key);
                else
                    el.textContent = t(key);
            });
        },

        updateBpCostDisplay() {
            const bpLevelInput = document.getElementById('battle_pass_lvl');
            const bpPartialInput = document.getElementById('battle_pass_partial');
            const bpCostDisplay = document.getElementById('bp-cost-display');

            let level = parseInt(bpLevelInput.value) || 1;
            if (level < 1) level = 1;

            const bpLevelTable = [40, 50, 60, 80, 100, 120, 140, 160];
            const defaultCost = 180;
            const cost = (level - 1) < bpLevelTable.length ? bpLevelTable[level - 1] : defaultCost;

            bpCostDisplay.textContent = `/ ${cost}`;
            bpPartialInput.max = cost;

            const val = parseInt(bpPartialInput.value) || 0;
            if (val > cost) bpPartialInput.value = cost;
        }
    }
};

// === Events ===
document.querySelectorAll('#mail-params input[type=number]').forEach(i => {
    i.addEventListener('input', () => App.ui.recalc());
    i.addEventListener('focus', e => e.target.placeholder = '');
    i.addEventListener('blur', e => { if (e.target.value.trim() === '') e.target.placeholder = '0'; });
});

document.getElementById('battle_pass_lvl').addEventListener('input', () => {
    App.ui.updateBpCostDisplay();
    App.ui.recalc();
});

document.getElementById('battle_pass_partial').addEventListener('input', () => {
    const max = parseInt(document.getElementById('battle_pass_partial').max) || 0;
    let val = parseInt(document.getElementById('battle_pass_partial').value) || 0;
    if (val > max) val = max;
    if (val < 0) val = 0;
    document.getElementById('battle_pass_partial').value = val;
    App.ui.recalc();
});

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");
  const flags = langMenu.querySelectorAll("img");

  // Toggle menu visibility
  langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("show");
  });

  // Hide menu on outside click
  document.addEventListener("click", (e) => {
    if (!langMenu.contains(e.target) && e.target !== langBtn) {
      langMenu.classList.remove("show");
    }
  });

  // Flag click -> switch language
  flags.forEach(flag => {
    flag.addEventListener("click", () => {
      const lang = flag.dataset.lang;
      setLang(lang); 
      applyTranslations(lang);
      langMenu.classList.remove("show");
    });
  });

  // Apply translations on page load
  applyTranslations(getLang());
});

// === Counting and BuyMeACoffee ===
const siteKey = 'zadrot-di-calculator'; 

// Total
fetch(`https://api.counterapi.dev/v1/${siteKey}/total/up`)
  .then(res => res.json())
  .then(data => document.getElementById('count-total').textContent = data.value);

// Today
const todayKey = new Date().toISOString().slice(0,10); // yyyy-mm-dd
fetch(`https://api.counterapi.dev/v1/${siteKey}/${todayKey}/up`)
  .then(res => res.json())
  .then(data => document.getElementById('count-today').textContent = data.value);

// Year
const yearKey = new Date().getFullYear();
fetch(`https://api.counterapi.dev/v1/${siteKey}/${yearKey}/up`)
  .then(res => res.json())
  .then(data => document.getElementById('count-year').textContent = data.value);


// === Initialization ===
App.utils.load();
App.ui.updateBpCostDisplay();
