let message;
// const ADMIN_PASSWORD = 'jqueryismyjam';
const ADMIN_PASSWORD = prompt("Ведите свой пароль", "ADMIN_PASSWORD");
if (ADMIN_PASSWORD === null) {
    alert("Отменено пользователем");
} else if (ADMIN_PASSWORD === "jqueryismyjam") {
    alert("Добро пожаловать!")
} else {
    alert("Доступ запрещен, неверный пароль!")
}