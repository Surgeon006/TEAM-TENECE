// BILLING CHART //
const billingCtx = document.getElementById("billingChart");

new Chart(billingCtx, {
  type: "doughnut",

  data: {
    labels: [
      "Oncology",
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "General Surgery",
      "Other",
    ],

    datasets: [
      {
        data: [1000000, 800000, 600000, 450000, 400000, 320000],

        backgroundColor: [
          "#72008f",
          "#e83d5b",
          "#2e9cf5",
          "#bd7200",
          "#4c9b30",
          "#e3a7b5",
        ],

        borderWidth: 0,
      },
    ],
  },

  options: {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "62%",

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
      },
    },
  },
});

// CLAIM STATUS CHART //

const claimCtx = document.getElementById("claimChart");

new Chart(claimCtx, {
  type: "doughnut",

  data: {
    labels: ["Resolved", "Pending", "Insurance Processing", "Overdue"],

    datasets: [
      {
        data: [51, 33.5, 13, 2.5],

        backgroundColor: ["#008c12", "#c87900", "#8d008f", "#e34b73"],

        borderWidth: 0,
      },
    ],
  },

  options: {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "62%",

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
      },
    },
  },
});
