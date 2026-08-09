 // ------- Sidebar toggle (mobile) -------
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuToggle = document.getElementById('menuToggle');
  function openSidebar(){ sidebar.classList.add('open'); overlay.classList.add('show'); }
  function closeSidebar(){ sidebar.classList.remove('open'); overlay.classList.remove('show'); }
  menuToggle.addEventListener('click', openSidebar);
  overlay.addEventListener('click', closeSidebar);

  // ------- Table data -------
  const rows = [
    { dept:'Oncology', billed:'$1.00M', resolved:'47%', pending:'530K', rate:47, days:'62 Days' },
    { dept:'Cardiology', billed:'$800K', resolved:'80%', pending:'160K', rate:80, days:'28 Days' },
    { dept:'Neurology', billed:'$600K', resolved:'68%', pending:'192K', rate:68, days:'45 Days' },
    { dept:'Orthopedics', billed:'$450K', resolved:'75%', pending:'112K', rate:75, days:'31 Days' },
    { dept:'General Surgery', billed:'$400K', resolved:'82%', pending:'72K', rate:82, days:'26 Days' },
  ];
  document.getElementById('tableBody').innerHTML = rows.map(r => `
    <tr>
      <td class="dept-name">${r.dept}</td>
      <td>${r.billed}</td>
      <td>${r.resolved}</td>
      <td>${r.pending}</td>
      <td>
        <div class="rate-cell">
          ${r.resolved}
          <div class="rate-bar"><span style="width:${r.rate}%"></span></div>
        </div>
      </td>
      <td>${r.days}</td>
    </tr>
  `).join('');

  // ------- Donut chart -------
   const chartData = [
        { label: 'Oncology', value: 1000000, displayValue: '$1.00M', percent: '28.0%', color: '#800080' },
        { label: 'Cardiology', value: 800000, displayValue: '$800k', percent: '22.4%', color: '#dc3545' },
        { label: 'Neurology', value: 600000, displayValue: '$600k', percent: '16.8%', color: '#2196f3' },
        { label: 'Orthopedics', value: 450000, displayValue: '$450k', percent: '12.6%', color: '#b87333' },
        { label: 'General Surgery', value: 400000, displayValue: '$400k', percent: '11.2%', color: '#008000' },
        { label: 'Other', value: 320000, displayValue: '$320k', percent: '9.0%', color: '#ecb3cd' }
    ];

    // Populate Custom HTML Legend
    const legendContainer = document.getElementById('htmlLegend');
    chartData.forEach(item => {
        const row = document.createElement('div');
        row.className = 'legend-item';
        row.innerHTML = `
            <div class="color-dot" style="background-color: ${item.color}"></div>
            <div class="dept-name">${item.label}</div>
            <div class="dept-value">${item.displayValue}</div>
            <div class="dept-percent">${item.percent}</div>
        `;
        legendContainer.appendChild(row);
    });

    // Initialize Chart.js Donut Chart
    const ctx = document.getElementById('billingChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: chartData.map(item => item.label),
            datasets: [{
                data: chartData.map(item => item.value),
                backgroundColor: chartData.map(item => item.color),
                borderWidth: 0, // Clean flat look without borders
                hoverOffset: 4
            }]
        },
        options: {
            cutout: '73%', // Adjusts thickness of donut ring
            plugins: {
                legend: {
                    display: false // Hide default legend to use our custom clean layout
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${chartData[context.dataIndex].displayValue} (${chartData[context.dataIndex].percent})`;
                        }
                    }
                }
            }
        }
    });

 
