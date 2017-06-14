"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/"
var count = 3

function formatCars(carsJSON) {
  return (
    '<div class="row">' +
    carsJSON.map(c => {
      return `<div class="col-md-4 car"><h2>${c.Make}</h2><p><strong>Model:</strong> ${c.Model}</p><p><strong>Year:</strong> ${c.Year}</p></div>`
    }).join('')
    + '</div>'
  )
}

function addCarsToDOM(carsJSON) {
  let input = formatCars(carsJSON)
  $('#cars').append(input)
}

function fetchJSON() {
  $.ajax({
    url: `${baseUrl}${count}/3`,
    dataType: 'jsonp',
    success: function (data) {
      addCarsToDOM(data)
    }
  })
  count++
}
