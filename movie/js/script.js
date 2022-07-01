function SearchMovie(){
		$('#movie-list').html('');
	$.ajax({
		url: 'http://www.omdbapi.com',
		type: 'get', //bentuk method
		dataType: 'JSON', //data yang dibalikan bentuk JSON
		data:{
			'apikey' : '27d16705',
			's': $('#search-input').val()
		},
		success: function(result){
			if (result.Response == "True") {
				let movies = result.Search;
				$.each(movies, function(i, data){
					$('#movie-list').append(`
						<div class="col-md-4">
						<div class="card mb-3">
						  <img class="card-img-top" src="`+ data.Poster +`">
						  <div class="card-body">
						    <h5 class="card-title">`+ data.Title +`</h5>
						    <h6 class="card-subtitle mb-2 text-muted">`+ data.Year + `</h6>
						    <a href="#" data-toggle="modal" data-target="#exampleModalCenter" class="card-link see-detail" data-id="`+data.imdbID+`">See Detail</a>
						  </div>
						</div>
						</div>
						`);
				})

				$('#search-input').val('');

			}else{
				// $('#movie-list').html('<h1>Movie Not Found!</h1?>')
				$('#movie-list').html(`
					<div class="col">
					<h1>`+result.Error+`</h1?>
					</div>
					`)

			}
		}
	});
}
//tampilan data saat di button di click
$('#search-button').on('click', function(){
	// $.getJSON('http://www.omdbapi.com/?apikey=27d16705');
	SearchMovie();
});

//tampilan data saat di enter 
$('#search-input').on('keyup', function(e){
	//13 itu code enter
	//bisa pakai keycode bisa pakai which
	if (e.keyCode === 13 ) {
		SearchMovie();
	}
});

//event bainding
$('#movie-list').on('click', '.see-detail', function(){
	// console.log($(this).data('id'));
	$.ajax({
		url: 'http://www.omdbapi.com',
		type: 'get', //bentuk method
		dataType: 'JSON', //data yang dibalikan bentuk JSON
		data:{
			'apikey' : '27d16705',
			'i': $(this).data('id')
		},
		success: function(movie){
			if (movie.Response == "True") {
			$('.modal-body').html(`
				<div class="container-fluid">
					 <div class="row">
					      <div class="col-md-4">
					      <img src="` + movie.Poster +`" class="img-fluid">
					      </div>
					      <div class="col-md-8">
					 	<ul class="list-group">
						  <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
						  <li class="list-group-item">Tahun:`+ movie.Year +`</li>
						  <li class="list-group-item">Rated:`+ movie.Rated +`</li>
						  <li class="list-group-item">Rilis:`+ movie.Released +`</li>
						  <li class="list-group-item">Waktu:`+ movie.Runtime +`</li>
						  <li class="list-group-item">Direktur:`+ movie.Director +`</li>
						  <li class="list-group-item">Penulis:`+ movie.Writer +`</li>
						  <li class="list-group-item">Aktor:`+ movie.Actors +`</li>
						  <li class="list-group-item">Plot:`+ movie.Plot +`</li>
						  <li class="list-group-item">Bahasa:`+ movie.Language +`</li>
						  <li class="list-group-item">Negara:`+ movie.Country +`</li>
						  <li class="list-group-item">Penghargaan:`+ movie.Awards +`</li>
						</ul>

					      </div>
					    </div>
				</div>
				`);

			}
		}
	});
});