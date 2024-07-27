document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('pie-chart').getContext('2d');
    const data = {
        labels: Array.from({length: 2}, (_, i) => `kristen ${i + 1}`),
       
        datasets: [{
            data: Array.from({length: 2}, () => Math.floor(Math.random() * 100) + 1),
            data: Array.from({length: 2}, () => Math.floor(Math.random() * 100) + 1),
            backgroundColor: [
                '#FF6633', '#FFB399',
                
            ]
        }]
    };

    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.raw !== null) {
                                label += context.raw;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
});
