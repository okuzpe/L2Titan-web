import { translations, type Language } from '../data/translations';

export function getLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  
  const saved = localStorage.getItem('language') as Language;
  if (saved && (saved === 'es' || saved === 'en')) {
    return saved;
  }
  
  // Detectar idioma del navegador
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'en' ? 'en' : 'es';
}

export function setLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  updateTranslations();
}

export function getTranslation(key: string, lang?: Language): string {
  const currentLang = lang || getLanguage();
  const keys = key.split('.');
  let value: any = translations[currentLang];
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export function updateTranslations(): void {
  if (typeof window === 'undefined') return;
  
  const lang = getLanguage();
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key) {
      const translation = getTranslation(key, lang);
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        (element as HTMLInputElement).placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
  
  // Actualizar atributos específicos
  const titleElements = document.querySelectorAll('[data-i18n-title]');
  titleElements.forEach((element) => {
    const key = element.getAttribute('data-i18n-title');
    if (key) {
      element.setAttribute('title', getTranslation(key, lang));
    }
  });
  
  const altElements = document.querySelectorAll('[data-i18n-alt]');
  altElements.forEach((element) => {
    const key = element.getAttribute('data-i18n-alt');
    if (key) {
      (element as HTMLImageElement).alt = getTranslation(key, lang);
    }
  });
}

// Inicializar al cargar
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const lang = getLanguage();
    document.documentElement.lang = lang;
    updateTranslations();
  });
}


