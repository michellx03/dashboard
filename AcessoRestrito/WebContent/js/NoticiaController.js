function NoticiaConsultaController($scope, $http, $routeParams, $location) {

	$scope.ListaNoticia = {};

	$http({
		method : "GET",
		url : '/AcessoRestrito/rest/noticia/list',
		cache : false
	}).success(function(data) {
		//alert("Sucess")
		$scope.ListaNoticia = data;
	});
	
	$scope.deleteNoticia = function(id) {
		//

		$http({
			method : "DELETE",
			url : '/AcessoRestrito/rest/noticia/delete?id='+id+'',
			cache : false
		}).success(function(data) {
			$('#showToastSucesso').click();
			var setFunctionInTime = setTimeout(
					FuncaoExecutaDepoisDoTempo, 1000);
			function FuncaoExecutaDepoisDoTempo() {
				location.reload();
			}
		})
	};

}

function NoticiaCadastroController($scope, $http,  $location) {

	$scope.Cadastrar = function() {

		var Noticia = {
			notiNoticia : $scope.notiNoticia,
			notiFoto : $scope.notiFoto,
		}

			$http({
				method : "POST",
				url : '/AcessoRestrito/rest/noticia/Cadastrar',
				data : Noticia,
				cache : false
			}).success(function(data) {
				$location.path("/NoticiaConsulta");
				$('#showToastSucesso').click();
			});

	};

}