import Antd from 'ant-design-vue';

export default defineNuxtPlugin(nextApp => {
    nextApp.vueApp.use(Antd);
});
