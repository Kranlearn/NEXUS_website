
function toggleModal(show) {
    const modal = document.getElementById('loginModal');
    if (modal) {
        if (show) modal.classList.add('active');
        else modal.classList.remove('active');
    }
}
console.log("[SYS] Pipeline de contrôle Nexus activé.");

const ctx = document.getElementById('biometricChart');

if (ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['0s', '1s', '2s', '3s', '4s', '5s', '6s'],
            datasets: [{
                label: 'Signal Biométrique Restant (FFT Hz)',
                data: [0, 0.5, 1.2, 0.8, 1.5, 1.0, 0.3],
                borderColor: '#0066cc',
                backgroundColor: 'rgba(0, 102, 204, 0.05)',
                borderWidth: 3,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#0066cc'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { font: { size: 12, weight: '600' } }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: '#e5e5ea' },
                    ticks: { color: '#6e6e73' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#6e6e73' }
                }
            }
        }
    });
}

function toggleModal(show) {
    const modal = document.getElementById('loginModal');
    if (modal) {
        if (show) modal.classList.add('active');
        else modal.classList.remove('active');
    }
}
