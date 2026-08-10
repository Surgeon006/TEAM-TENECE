  // Update current date dynamically
        const now = new Date();
        const options = {month: 'short', day: 'numeric', year: 'numeric'};
        document.getElementById('currentDateText').innerText = `May 12 - ${now.toLocaleDateString('en-US', options)}`;

        // Outstanding Claims Alert Modal Trigger on info icons
        document.querySelectorAll('.alert-trigger').forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', event => {
                const title = item.getAttribute('data-title');
                const msg = item.getAttribute('data-msg');
                alert(`[VitaTrack Notice]\n\n${title}:\n${msg}`);
            });
        });

        // Initialize Chart.js Donut & Line Chart
        window.addEventListener('DOMContentLoaded', () => {
            const ctxUnresolved = document.getElementById('unresolvedChart');
            if (ctxUnresolved) {
                const gradient = ctxUnresolved.getContext('2d').createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, 'rgba(66, 64, 227, 0.35)');
                gradient.addColorStop(1, 'rgba(66, 64, 227, 0.0)');

                new Chart(ctxUnresolved, {
                    type: 'line',
                    data: {
                        labels: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024'],
                        datasets: [{
                            data: [1.2, 1.4, 1.1, 1.8, 1.5, 1.75],
                            borderColor: '#4240E3',
                            borderWidth: 2,
                            backgroundColor: gradient,
                            fill: true,
                            tension: 0.3,
                            pointBackgroundColor: '#4240E3',
                            pointRadius: 3,
                            pointHoverRadius: 5
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return ` $${context.parsed.y}M`;
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                grid: { display: false },
                                ticks: { font: { size: 10 }, color: '#828078' }
                            },
                            y: {
                                min: 0,
                                max: 2.5,
                                ticks: {
                                    stepSize: 0.5,
                                    font: { size: 10 },
                                    color: '#828078',
                                    callback: function(value) {
                                        return '$' + value.toFixed(1) + 'M';
                                    }
                                },
                                grid: { color: '#e3e4e8' }
                            }
                        }
                    }
                });
            }

            const ctxClaim = document.getElementById('claimChart');
            if (ctxClaim) {
                new Chart(ctxClaim, {
                    type: 'doughnut',
                    data: {
                        labels: ['Resolved', 'Pending', 'Processing', 'Overdue'],
                        datasets: [{data: [51, 33.5, 13, 2.5], backgroundColor: ['#008000', '#b8720a', '#800080', '#e43e52'], borderWidth: 0}]
                    },
                    options: {responsive: true, maintainAspectRatio: false, plugins: {legend: {display: false}}}
                });
            }
        });