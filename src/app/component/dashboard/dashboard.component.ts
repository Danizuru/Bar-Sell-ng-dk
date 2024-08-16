import { Component, OnInit } from '@angular/core';

declare var Chart:any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

ngOnInit(): void {
 this.Grafico1() 
 this.Grafico2()
 this.Grafico3()
 this.Grafico4()
}

Grafico1(){
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#2196F3',
          '#8BC34A',
          '#FF9800',
          '#607d8b',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ], // Colores de fondo de las barras
        borderColor: [
          '#2196F3',
          '#8BC34A',
          '#FF9800',
          '#607d8b',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],  
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
}

Grafico2(){
  const ctx = document.getElementById('myChart2');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#2196F3',
          '#8BC34A',
          '#FF9800',
          '#607d8b',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ], // Colores de fondo de las barras
        borderColor: [
          '#2196F3',
          '#8BC34A',
          '#FF9800',
          '#607d8b',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],  
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
}
Grafico3(){
  const ctx = document.getElementById('myChart3');

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#2196F3',
          '#8BC34A',
          '#FF9800',
          '#607d8b',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ], // Colores de fondo de las barras
        borderColor: [
          '#2196F3',
          '#8BC34A',
          '#FF9800',
          '#607d8b',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],  
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
}
Grafico4(){
  const ctx = document.getElementById('myChart4');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          '#2196F3',
          '#8BC34A',
          '#FF9800',
          '#607d8b',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ], // Colores de fondo de las barras
        borderColor: [
          '#2196F3',
          '#8BC34A',
          '#FF9800',
          '#607d8b',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],  
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
}

}
