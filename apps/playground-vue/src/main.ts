import './tailwind.css';
import { createApp } from 'vue';
import router from './router';
import { setupI18n } from './config/i18n.config';
import SuspendedApp from './SuspendedApp.vue';

const app = createApp(SuspendedApp);
export const i18n = setupI18n();

app.use(i18n);
app.use(router);
app.mount('#app');
