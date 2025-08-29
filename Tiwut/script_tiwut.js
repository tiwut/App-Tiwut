document.addEventListener('DOMContentLoaded', () => {
            const translations = {
                "de": {
                    "title": "Tiwut - Download",
                    "slogan": "Die App, die alles verändert. Jetzt herunterladen und durchstarten.",
                    "mainPage": "Hauptseite",
                    "downloadWindows": "Download für Windows",
                    "downloadAndroid": "Download für Android",
                    "apkFile": "(.apk Datei)",
                    "footer": "&copy; 2025 Tiwut. Alle Rechte vorbehalten."
                },
                "en": {
                    "title": "Tiwut - Download",
                    "slogan": "The app that changes everything. Download now and get started.",
                    "mainPage": "Main Page",
                    "downloadWindows": "Download for Windows",
                    "downloadAndroid": "Download for Android",
                    "apkFile": "(.apk file)",
                    "footer": "&copy; 2025 Tiwut. All rights reserved."
                },
                "es": {
                    "title": "Tiwut - Descargar",
                    "slogan": "La aplicación que lo cambia todo. Descárgala ahora y empieza.",
                    "mainPage": "Página Principal",
                    "downloadWindows": "Descargar para Windows",
                    "downloadAndroid": "Descargar para Android",
                    "apkFile": "(.apk archivo)",
                    "footer": "&copy; 2025 Tiwut. Todos los derechos reservados."
                }
            };

            const langButtons = {
                de: document.getElementById('lang-de'),
                en: document.getElementById('lang-en'),
                es: document.getElementById('lang-es')
            };

            const setLanguage = (lang) => {
                document.documentElement.lang = lang;
                document.title = translations[lang].title;

                document.querySelectorAll('[data-key]').forEach(el => {
                    const key = el.dataset.key;
                    if (translations[lang][key]) {
                        el.innerHTML = translations[lang][key];
                    }
                });

                Object.values(langButtons).forEach(btn => btn.classList.remove('active'));
                if (langButtons[lang]) {
                    langButtons[lang].classList.add('active');
                }
                
                localStorage.setItem('tiwut_lang', lang);
            };

            Object.keys(langButtons).forEach(lang => {
                if (langButtons[lang]) {
                    langButtons[lang].addEventListener('click', () => setLanguage(lang));
                }
            });

            const savedLang = localStorage.getItem('tiwut_lang');
            const browserLang = navigator.language.split('-')[0];

            if (savedLang && translations[savedLang]) {
                setLanguage(savedLang);
            } else if (translations[browserLang]) {
                setLanguage(browserLang);
            } else {
                setLanguage('en');
            }

            document.body.addEventListener('mousemove', e => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth) - 0.5;
                const y = (clientY / window.innerHeight) - 0.5;
                document.documentElement.style.setProperty('--mouse-x', x);
                document.documentElement.style.setProperty('--mouse-y', y);
            });
        });
