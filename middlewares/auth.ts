export default defineNuxtRouteMiddleware((to, from) => {
    if (isAuthenticated() === 'no') return navigateTo('/');
});

function isAuthenticated(): 'yes' | 'no' {
    const token = localStorage.getItem('token');
    if (!token || token == undefined || token === '') return 'no';
    return 'yes';
}
