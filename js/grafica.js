const ctx = document.getElementById('myChart');
let breed = "Doberman"

const labels = ["Rottweiler", "Pastor",]
const data = [2,1]

const graphic = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Appearances',
      data: data,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function detectar() {
  if (labels.includes(breed)) {
    data[labels.indexOf(breed)]++
  } else {
    labels.push(breed)
    data.push(1)
  }

}
detectar()
