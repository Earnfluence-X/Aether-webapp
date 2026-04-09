// script.js - Shared Functions

// Check if user is logged in
async function checkAuth() {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user && !window.location.pathname.includes('login') && 
        !window.location.pathname.includes('signup') && 
        !window.location.pathname.includes('index')) {
        window.location.href = 'login.html';
    }
    return user;
}

// Logout function
async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = 'index.html';
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.background = type === 'success' ? '#00FFC8' : '#FF3366';
    notification.style.color = type === 'success' ? '#0A0A0F' : '#FFFFFF';
    notification.style.padding = '12px 24px';
    notification.style.borderRadius = '50px';
    notification.style.zIndex = '2000';
    notification.style.fontWeight = '500';
    notification.style.animation = 'slideIn 0.3s ease';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Get public URL for avatar from storage bucket
function getPublicUrl(bucket, path) {
    if (!path) return null;
    const { data } = supabaseClient.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);