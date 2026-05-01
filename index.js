const lessonsData = {
    // --- ПРОГРАММИРОВАНИЕ ---
    coding: {
        title: "💻 Программирование",
        lessons: [
            { num: 1, title: "Программирование с нуля — Что нужно знать новичку", duration: "~12 мин", desc: "Основные понятия: алгоритмы, языки программирования, с чего начать путь в IT.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 2, title: "Python за 10 минут — Первая программа", duration: "~10 мин", desc: "Установка Python, написание первой программы, основные команды для старта.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 3, title: "Переменные и типы данных в Python", duration: "~9 мин", desc: "Числа, строки, списки — основы работы с данными для начинающих.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" }
        ],
        xpReward: 100
    },
    // --- ВЕБ-ДИЗАЙН ---
    design: {
        title: "🎨 Веб-дизайн",
        lessons: [
            { num: 1, title: "Основы UI/UX дизайна для начинающих", duration: "~10 мин", desc: "Что такое пользовательский интерфейс и пользовательский опыт. Разбор на примерах.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 2, title: "Figma для начинающих — Полный разбор", duration: "~15 мин", desc: "Знакомство с интерфейсом Figma, создание первого макета сайта.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 3, title: "Цвета и типографика в дизайне", duration: "~8 мин", desc: "Как правильно выбирать цвета и шрифты для сайта и приложения.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" }
        ],
        xpReward: 90
    },
    // --- АНАЛИТИКА ДАННЫХ ---
    data: {
        title: "📊 Аналитика данных",
        lessons: [
            { num: 1, title: "Что такое Data Science — Введение в анализ данных", duration: "~8 мин", desc: "Аналитика данных: зачем нужна, где применяется и как стать аналитиком.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 2, title: "Excel для начинающих — Основные функции", duration: "~12 мин", desc: "Основные формулы, функции и работа с таблицами в Excel.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 3, title: "Визуализация данных — Графики и диаграммы", duration: "~7 мин", desc: "Как строить графики и диаграммы, чтобы понятно представлять информацию.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" }
        ],
        xpReward: 95
    },
    // --- НЕЙРОСЕТИ И ИИ ---
    ai: {
        title: "🧠 Нейросети и ИИ",
        lessons: [
            { num: 1, title: "Что такое нейросети — Простое объяснение", duration: "~10 мин", desc: "Как работают искусственные нейронные сети и где они применяются.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 2, title: "ChatGPT для начинающих — Как пользоваться нейросетью", duration: "~12 мин", desc: "Основы работы с ChatGPT, написание промптов для любых задач.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 3, title: "Как генерировать изображения нейросетями", duration: "~15 мин", desc: "Обзор Midjourney, DALL-E и Kandinsky: создание картинок по тексту.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" }
        ],
        xpReward: 120
    },
    // --- КИБЕРБЕЗОПАСНОСТЬ ---
    security: {
        title: "🔒 Кибербезопасность",
        lessons: [
            { num: 1, title: "Основы безопасности в интернете", duration: "~8 мин", desc: "Как защитить свои данные, аккаунты и личную информацию от мошенников.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 2, title: "Как создать надёжный пароль", duration: "~7 мин", desc: "Правила создания паролей и двухфакторная аутентификация.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" },
            { num: 3, title: "Фишинг — Как не попасться мошенникам", duration: "~10 мин", desc: "Как распознать поддельные сайты и письма, чтобы не потерять деньги.", videoUrl: "https://rutube.ru/play/embed/8cc87adcae8735201ab04f8fe595d7da/?playlist=856572" }
        ],
        xpReward: 85
    }
};

let userData = {
    totalXP: 0,
    streak: 0,
    lastVisit: null,
    skills: {
        coding: { completed: false, lessonsCompleted: [false, false, false] },
        design: { completed: false, lessonsCompleted: [false, false, false] },
        data: { completed: false, lessonsCompleted: [false, false, false] },
        ai: { completed: false, lessonsCompleted: [false, false, false] },
        security: { completed: false, lessonsCompleted: [false, false, false] }
    }
};

let currentSkill = null;

function loadData() {
    const saved = localStorage.getItem('itree_russian');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            userData = { ...userData, ...parsed };
        } catch(e) {}
    }
    updateUI();
    renderSkills();
}

function saveData() {
    localStorage.setItem('itree_russian', JSON.stringify(userData));
}

function updateUI() {
    const level = Math.floor(userData.totalXP / 500) + 1;
    const percent = (userData.totalXP % 500) / 500 * 100;
    document.getElementById('xpFill').style.width = percent + '%';
    document.getElementById('xpText').innerHTML = `${userData.totalXP} XP (ур. ${level})`;
    document.getElementById('streakCount').innerText = userData.streak;
    
    const avatar = document.getElementById('avatarBtn');
    if (level >= 5) avatar.innerHTML = '🚀';
    else if (level >= 3) avatar.innerHTML = '⚡️';
    else avatar.innerHTML = '🌱';
}

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = '';
    
    const skillsList = [
        { id: 'coding', icon: '💻', name: 'Программирование' },
        { id: 'design', icon: '🎨', name: 'Веб-дизайн' },
        { id: 'data', icon: '📊', name: 'Аналитика' },
        { id: 'ai', icon: '🧠', name: 'Нейросети' },
        { id: 'security', icon: '🔒', name: 'Кибербезопасность' }
    ];
    
    skillsList.forEach(skill => {
        const skillData = userData.skills[skill.id];
        const isCompleted = skillData.completed;
        const completedCount = skillData.lessonsCompleted.filter(Boolean).length;
        
        const card = document.createElement('div');
        card.style.cssText = "flex-direction: column; gap: 8px; cursor: pointer;"
        card.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-title">${skill.name}</div>
            <div class="skill-progress">
                <span class="progress-badge">📚 ${completedCount}/3 уроков</span>
            </div>
            ${isCompleted ? '<div style="margin-top:10px; color:#4ade80;">✅ Полностью пройдено!</div>' : ''}`;
        card.onclick = () => openLearning(skill.id);
        grid.appendChild(card);
    });
}

function openLearning(skillId) {
    currentSkill = skillId;
    const data = lessonsData[skillId];
    const skillProgress = userData.skills[skillId];
    
    document.getElementById('panelTitle').innerHTML = data.title;
    document.getElementById('learningPanel').classList.add('active');
    
    const container = document.getElementById('lessonsContainer');
    container.innerHTML = '';
    
    data.lessons.forEach((lesson, idx) => {
        const isCompleted = skillProgress.lessonsCompleted[idx];
        const lessonCard = document.createElement('div');
        lessonCard.style.cssText = "color: #fbbf24; font-weight: bold;"
        lessonCard.innerHTML = `
            <div class="lesson-header">
                <div class="lesson-number">${lesson.num}</div>
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-duration">⏱️ ${lesson.duration}</div>
            </div>
            <div class="lesson-description">${lesson.desc}</div>
            <div class="video-placeholder" data-video="${lesson.videoUrl}">
                <div class="video-icon">🎬</div>
                <div class="video-text">▶️ Нажмите, чтобы посмотреть урок на русском языке</div>
            </div>
            <div class="lesson-actions">
                <button class="btn-lesson btn-complete" data-lesson="${idx}" ${isCompleted ? 'disabled' : ''}>
                    ${isCompleted ? '✅ Пройдено' : '📖 Отметить пройденным'}
                </button>
            </div>
        `;
        
        const videoPlaceholder = lessonCard.querySelector('.video-placeholder');
        videoPlaceholder.onclick = () => openVideo(lesson.videoUrl);
        
        const completeBtn = lessonCard.querySelector('.btn-complete');
        completeBtn.onclick = () => completeLesson(skillId, idx);
        
        container.appendChild(lessonCard);
    });
}

function openVideo(url) {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    frame.src = url;
    modal.classList.add('active');
}

function completeLesson(skillId, lessonIndex) {
    if (userData.skills[skillId].lessonsCompleted[lessonIndex]) {
        showToast('📖 Этот урок уже пройден!');
        return;
    }
    
    userData.skills[skillId].lessonsCompleted[lessonIndex] = true;
    
    const lessonXP = 25;
    userData.totalXP += lessonXP;
    showToast(`✨ +${lessonXP} XP за урок "${lessonsData[skillId].lessons[lessonIndex].title}"! ✨`);
    
    const allCompleted = userData.skills[skillId].lessonsCompleted.every(v => v === true);
    if (allCompleted && !userData.skills[skillId].completed) {
        userData.skills[skillId].completed = true;
        const bonusXP = lessonsData[skillId].xpReward;
        userData.totalXP += bonusXP;
        showToast(`🏆 Навык "${lessonsData[skillId].title}" полностью пройден! +${bonusXP} XP бонуса! 🏆`);
    }
    
    saveData();
    updateUI();
    renderSkills();
    
    if (currentSkill === skillId) {
        openLearning(skillId);
    }
}

function dailyBonus() {
    const today = new Date().toDateString();
    if (userData.lastVisit === today) {
        showToast("🎁 Ты уже получал сегодняшний бонус! Завтра будет новый!");
        return;
    }
    
    if (userData.lastVisit) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (userData.lastVisit === yesterday.toDateString()) {
            userData.streak++;
            showToast(`🔥 Серия продлена! ${userData.streak} дней! +50 XP 🔥`);
            userData.totalXP += 50;
        } else {
            userData.streak = 1;
            showToast(`🌱 Новая серия! +30 XP`);
            userData.totalXP += 30;
        }
    } else {
        userData.streak = 1;
        showToast(`🎉 Первый день! +30 XP`);
        userData.totalXP += 30;
    }
    
    userData.lastVisit = today;
    saveData();
    updateUI();
    renderSkills();
}

function resetProgress() {
    if (confirm('⚠️ ВНИМАНИЕ! Весь прогресс обучения будет удалён. Вы уверены?')) {
        userData = {
            totalXP: 0,
            streak: 0,
            lastVisit: null,
            skills: {
                coding: { completed: false, lessonsCompleted: [false, false, false] },
                design: { completed: false, lessonsCompleted: [false, false, false] },
                data: { completed: false, lessonsCompleted: [false, false, false] },
                ai: { completed: false, lessonsCompleted: [false, false, false] },
                security: { completed: false, lessonsCompleted: [false, false, false] }
            }
        };
        saveData();
        updateUI();
        renderSkills();
        document.getElementById('learningPanel').classList.remove('active');
        showToast("🔄 Прогресс сброшен. Начинай обучение заново!");
    }
}

function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

document.getElementById('dailyBtn').onclick = dailyBonus;
document.getElementById('resetBtn').onclick = resetProgress;
document.getElementById('closePanel').onclick = () => {
    document.getElementById('learningPanel').classList.remove('active');
    currentSkill = null;
};
document.getElementById('closeVideo').onclick = () => {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    frame.src = '';
    modal.classList.remove('active');
};
document.getElementById('avatarBtn').onclick = () => {
    const level = Math.floor(userData.totalXP / 500) + 1;
    const completedSkills = Object.values(userData.skills).filter(s => s.completed).length;
    showToast(`👤 Уровень ${level} | 🔥 Серия ${userData.streak} | 🏆 Пройдено навыков: ${completedSkills}/5`);
};
document.getElementById('videoModal').onclick = (e) => {
    if (e.target === document.getElementById('videoModal')) {
        document.getElementById('closeVideo').click();
    }
};

loadData();