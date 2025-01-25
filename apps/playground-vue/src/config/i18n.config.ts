import ky from 'ky';
import { nextTick, type Ref } from 'vue';
import { createI18n, type I18n } from 'vue-i18n';

export const SUPPORTED_LOCALES = [
  'af-AF',
  'de-DE',
  'en-GB',
  'en-US',
  'en-ZA',
  'es-ES',
  'fr-FR',
  'ja-JP',
  'fr-BE',
  'hu-HU',
  'id-ID',
  'nl-NL',
  'pl-PL',
  'pt-BR',
  'ru-RU',
  'sv-SE',
  'zh-Hans',
  'ar-SA',
] as const;

export const I18N_NAMESPACES = {
  global: [
    'email',
    'general',
    'language',
    'navigation',
    'notifications',
    'candidate_profile',
    'error',
    'po',
    'privacy',
  ],
  profile: [
    'brain_summary',
    'candidate_account',
    'candidate_profile',
    'career_paths',
    'data_demographics',
    'data_jobs',
    'drive_dimensions',
    'drive_report',
    'drive_summary',
    'feedback',
    'remote_score',
    'shape_summary',
    'talent_cloud',
    'talent_tags',
    'recruiter_network',
    'privacy',
  ],
  career: ['predict_success'],
  network: [
    'manage_network',
    'data_jobs',
    'jobs',
    'recruiter_network',
    'candidate_profile',
    'candidate_account',
    'privacy',
  ],
  myCompany: ['competency_framework', 'drive_dimensions', 'shape_dimensions'],
  jobs: ['jobs', 'data_jobs', 'drive_dimensions'],
  settings: ['candidate_account', 'oauth', 'account_phone_update', 'reset_password'],
  poleEmploi: ['pole_emploi'],
  sharedProfile: ['candidate_account'],
} as const;

export type I18nLocale = (typeof SUPPORTED_LOCALES)[number];
export type I18nScope = keyof typeof I18N_NAMESPACES;
export type I18nNamespace = (typeof I18N_NAMESPACES)[I18nScope][number];

export function setupI18n(options = { locale: 'en' }) {
  const i18n = createI18n({ ...options, legacy: false });
  setI18nLanguage(i18n, options.locale);
  return i18n;
}

export function setI18nLanguage(i18n: I18n, locale: string) {
  const i18nGlobal = i18n.global.locale as Ref<string>;
  i18nGlobal.value = locale;
  document.querySelector('html')?.setAttribute('lang', locale);
}

const cache = new Set<string>();

export async function loadLocaleMessages(i18n: I18n, locale: I18nLocale, namespace: I18nNamespace) {
  if (cache.has(`${locale}-${namespace}`)) return;
  const messages = await ky.get<JSON>(`/i18n/${locale}/${namespace}.json`).json();
  i18n.global.setLocaleMessage(locale, messages);
  cache.add(`${locale}-${namespace}`);
  return nextTick();
}

export async function loadNamespaces(i18n: I18n, locale: I18nLocale, scope: I18nScope) {
  await Promise.all(
    I18N_NAMESPACES[scope].map((namespace) => loadLocaleMessages(i18n, locale, namespace)),
  );
}
