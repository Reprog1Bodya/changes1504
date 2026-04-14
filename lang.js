//лист с переводами -Бодя

const translations = {
    ru: {
        // шапка
        title: "Добро пожаловать в школу иностранных языков",
        contact: "Контакты +8 (800)-555-35-35",
        main: "Главная",
        courses: "Курсы",
        teach: "Преподаватели",
        log_in: "Войти",
        no_acc: "Нет аккаунта?",
        reg: "Зарегистрироваться",
        log_out:"Выйти",
        // главная
        course_but: "Записаться",
        eng:"Курс Английского языка",
        ger:"Курс Немецкого языка",
        spa:"Курс Испанского языка",
        pol:"Курс Польского языка",
        jap:"Курс Японского языка",
        fra:"Курс Французского языка",
        ser:"Курс Сербского языка",
        ita:"Курс Итальянского языка",
        level:"От A1 до C1",
        main_quiz:"Ответьте на 10 вопросов, и мы подберём идеальный язык, исходя из ваших целей и опыта!",
        quiz_sec:"Подбор курса",
        begin:"Начать тест",
        // преподаватели
        our_teach:"Наши преподаватели:",
        teach1:"Мусорева Екатерина Александровна",
        teach2:"Образцова Наталья Сергеевна",
        teach3:"Ковалец Валентина Владимировна",
        teach4:"Новикова Мария Викторовна",
        teach5:"Хаапала Алексей Дмитриевич",
        bio1:"Преподаватель Английского на уровне С1 и Испанского языка до уровня В1",
        bio2:"Преподаватель Немецкого и Французского языков до уровня С1",
        bio3:"Преподаватель любых славянских языков до уровня С1",
        bio4:"Преподаватель языков романских корней до уровня С1",
        bio5:"Профессиональный преподаватель японского языка до уровня С1",
        rate:"Отзывы наших студентов",
        // курсы
        our_course:"Наши курсы:",
        eng_c:"Английский",
        ger_c:"Немецкий",
        spa_c:"Испанский",
        pol_c:"Польский",
        jap_c:"Японский",
        fra_c:"Французский",
        ser_c:"Сербский",
        ita_c:"Итальянский",
    },
    en: {
        // шапка
        title: "Welcome to foreing languages school",
        contact: "Contacts +8 (800)-555-35-35",
        main: "Main",
        courses: "Courses",
        teach: "Teachers",
        log_in: "Log in",
        no_acc: "Don't have account?",
        reg: "Register",
        log_out:"Log out",
        // главная
        course_but: "Sign up",
        eng:"Adv. English course",
        ger:"German course",
        spa:"Spanish course",
        pol:"Polish course",
        jap:"Japanese course",
        fra:"French course",
        ser:"Serbian course",
        ita:"Italian course",
        level:"From A1 till C1",
        main_quiz:"Answer 10 questions, and we'll find the perfect language based on your goals and experience!",
        quiz_sec:"Course selection",
        begin:"Start quiz",
        // преподаватели
        our_teach:"Our teachers:",
        teach1:"Musoreva Yekaterina Alexandrova",
        teach2:"Obrazcova Natalia Sergeevna",
        teach3:"Kovalec Valentina Vladimirovna",
        teach4:"Novikova Maria Viktorovna",
        teach5:"Haapala Alexey Dmitrievich",
        bio1:"Adv. English teacher at С1 and Spanish at В1",
        bio2:"German and French teacher till С1",
        bio3:"Slavic languages teacher till С1",
        bio4:"Roman languages teacher till С1",
        bio5:"Professional Japanese teacher till С1",
        rate:"Feedback from our students:",
        // курсы
        our_course:"Our courses:",
        eng_c:"Advanced English",
        ger_c:"German",
        spa_c:"Spanish",
        pol_c:"Polish",
        jap_c:"Japanese",
        fra_c:"French",
        ser_c:"Serbian",
        ita_c:"Italian",
    },
    lv: {
        // шапка
        title: "Laipni lūdzam svešvalodu skolā",
        contact: "Kontakti +8 (800)-555-35-35",
        main: "Galvena",
        courses: "Kursi",
        teach: "Skolotāji",
        log_in: "Ieiet",
        no_acc: "Nav konta?",
        reg: "Reģistrēties",
        log_out:"Iziet",
        // главная
        course_but: "Pierakstīties",
        eng:"Angļu valoda kurss",
        ger:"Vācu valoda kurss",
        spa:"Spāņu valoda kurss",
        pol:"Poļu valoda kurss",
        jap:"Japāņu valoda kurss",
        fra:"Franču valoda kurss",
        ser:"Serbu valoda kurss",
        ita:"Itāļu valoda kurss",
        level:"От A1 до C1",
        level:"No A1 līdz C1",
        main_quiz:"Atbildiet uz 10 jautājumiem, un mēs atradīsim perfekto valodu, balstoties uz jūsu mērķiem un pieredzi!",
        quiz_sec:"Kursu izvēle",
        begin:"Sākt testu",
        // преподаватели
        our_teach:"Mūsu skolotāji:",
        teach1:"Musoreva Jekaterina Aleksandrova",
        teach2:"Obrazcova Natalja Sergejevna",
        teach3:"Kovalec Valentina Vladimirovna",
        teach4:"Novikova Marija Viktorovna",
        teach5:"Haapala Aleksejs Dmitrievičs",
        bio1:"Angļu C1 un spāņu B1 valodas skolotāja",
        bio2:"Vācu un franču valodas skolotāja līdz С1",
        bio3:"Slāvu valodas skolotāja līdz С1",
        bio4:"Romāņu valodas skolotāja līdz С1",
        bio5:"Profesionālis Japāņu valoda skolotājs līdz С1",
        rate:"Mūsu studenti atsauksmes:",
        // курсы
        our_course:"Mūsu kursi:",
        eng_c:"Angļu",
        ger_c:"Vācu",
        spa_c:"Spāņu",
        pol_c:"Poļu",
        jap_c:"Japāņu",
        fra_c:"Franču",
        ser_c:"Serbu",
        ita_c:"Itāļu",
    }
};

function changeLanguage(lang) {
    // 1. Меняем атрибут lang у тега <html> (полезно для SEO и скринридеров)
    document.documentElement.lang = lang;

    // 2. Находим все элементы с атрибутом data-lang-key
    const elements = document.querySelectorAll('[data-lang-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        // 3. Заменяем текст на перевод из словаря
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Обновляем активный язык в выпадающем списке
    updateLangDropdown(lang);
    
    if (typeof updateHeaderAuth === 'function') {
        updateHeaderAuth(lang);
    }
    // Опционально: сохраняем выбор в браузере
    localStorage.setItem('selectedLanguage', lang);
}

// Обновление активного языка в выпадающем списке
function updateLangDropdown(currentLang) {
    // Обновляем текст кнопки
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLang.toUpperCase();
    }
    
    // Обновляем активный класс в меню
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        if (option.dataset.lang === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Переключение выпадающего списка
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.classList.toggle('active');
}

// Закрытие dropdown при клике вне его
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// При загрузке страницы проверяем сохраненный язык
window.onload = () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    changeLanguage(savedLang);
};
