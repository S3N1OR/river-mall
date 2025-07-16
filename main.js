// Функция для обновления времени (для страницы видео)
function updateTime() {
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ru-RU');
        timeElement.textContent = timeString;
    }
}

// Функция для удаления водителя
function deleteDriver(gosnomer) {
    if (confirm(`Вы уверены, что хотите удалить водителя ${gosnomer}?`)) {
        window.location.href = `/drivers/delete/${gosnomer}`;
    }
}

// Функция для показа уведомлений
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Функция для инициализации всех функций при загрузке страницы
function initializeApp() {
    // Обновление времени каждую секунду (для страницы видео)
    updateTime();
    setInterval(updateTime, 1000);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeApp);

// Экспортируем функции для использования в других скриптах
window.RiverMall = {
    updateTime,
    deleteDriver,
    showNotification,
    initializeApp
}; 