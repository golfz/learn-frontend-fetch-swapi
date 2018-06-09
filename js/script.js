$('table').hide();
$('#btnSelectFetch i').hide()
$('#btnSelectFetch').prop("disabled", false)

let fnFetchData = function (uriStr) {

  $('table thead').html('')
  $('table tbody').html('')
  $('table').hide()

  $('#btnSelectFetch').prop("disabled", true)
  $('#btnSelectFetch i').show()

  fetch(uriStr)
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      console.log(res)

      fnSetHead(res.results)
      fnSetBody(res.results)

      $('table').show()

      $('#btnSelectFetch i').hide()
      $('#btnSelectFetch').prop("disabled", false)
    })
}

let fnSetHead = function (jsonData) {
  $('table thead').html('')
  let hasHead = false
  jsonData.forEach(function (jsonData) {
    if (!hasHead) {
      $('table > thead').append(`<tr>`)
      for (let k in jsonData) {
        if (jsonData.hasOwnProperty(k)) {
          $('table > thead').append(`<th>${k}</th>`)
        }
      }
      $('table > thead').append(`</tr>`)
      hasHead = true
    }
  })
}

let fnSetBody = function (jsonData) {
  $('table tbody').html('')
  jsonData.forEach(function (jsonData) {
    $('table > tbody').append(`<tr>`)
    for (let k in jsonData) {
      if (jsonData.hasOwnProperty(k)) {
        let v = jsonData[k]
        $('table > tbody').append(`<td>${v}</td>`)
      }
    }
    $('table > tbody').append(`</tr>`)
  })
}

$('#btnFetchPeople').click(function () {
  fnFetchData('https://swapi.co/api/people/')
  $('#exampleModal').modal('hide')
})

$('#btnFetchFilm').click(function () {
  fnFetchData('https://swapi.co/api/films/')
  $('#exampleModal').modal('hide')
})

$('#btnFetchStarship').click(function () {
  fnFetchData('https://swapi.co/api/starships/')
  $('#exampleModal').modal('hide')
})

$('#btnFetchVehicle').click(function () {
  fnFetchData('https://swapi.co/api/vehicles/')
  $('#exampleModal').modal('hide')
})

$('#btnFetchSpecy').click(function () {
  fnFetchData('https://swapi.co/api/species/')
  $('#exampleModal').modal('hide')
})

$('#btnFetchPlanet').click(function () {
  fnFetchData('https://swapi.co/api/planets/')
  $('#exampleModal').modal('hide')
})
