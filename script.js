// نظام تخزين المستخدمين
let usersList = JSON.parse(localStorage.getItem('same_dragon_db')) || [];

function accessSystem() {
    const email = document.getElementById('userEmail').value.trim();
    const errorMsg = document.getElementById('login-error');

    // التحقق من الإيميل
    if (email.includes('@') && email.length > 5) {
        // إضافة المستخدم للقاعدة
        if (!usersList.includes(email)) {
            usersList.push(email);
            localStorage.setItem('same_dragon_db', JSON.stringify(usersList));
        }

        // إخفاء شاشة الدخول بحركة فخمة
        const screen = document.getElementById('login-screen');
        screen.style.opacity = '0';
        setTimeout(() => {
            screen.style.display = 'none';
            document.getElementById('main-interface').style.display = 'block';
            displayUsers();
        }, 600);
    } else {
        errorMsg.style.display = 'block';
    }
}

function navigate(pageId) {
    // التنقل بين الصفحات
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function displayUsers() {
    const container = document.getElementById('user-list');
    if (container) {
        container.innerHTML = usersList.map(u => `
            <div class="u-tag">
                <i class="fas fa-user-circle"></i> ${u}
            </div>
        `).join('');
    }
}

function orderService(type) {
    const myMail = "y.malikou14@gmail.com";
    const subject = encodeURIComponent(`طلب خدمة ${type} - Same Dragon`);
    const body = encodeURIComponent(`أهلاً سيم دراغن، أريد طلب خدمة ${type} من موقعكم.`);
    window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${myMail}&su=${subject}&body=${body}`, '_blank');
}

// تحديث الواجهة عند التحميل
window.onload = displayUsers;