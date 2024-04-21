	
      angular.module("listaCadastro",['ngMessages']).run(function ($rootScope, $http) {
        $rootScope.contatos = [];

        $rootScope.listSexo = [
			{codigo: 1, descricao: "Masculino"},
			{codigo: 2, descricao: "Feminino"}
	   ];
    
     })


		.controller("listaCadastroCtrl", function ($scope,$rootScope, $http, uppercaseFilter) {
			$scope.app = "Formulario";
			
			$scope.adicionarContato = function (contato) {
			
				contato.data = new Date();
				$rootScope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
			};
			$scope.apagarContatos = function (contatos) {
				$rootScope.contatos = contatos.filter(function (contato) {
					if (!contato.selecionado) return contato;
				});
			};
			$scope.isContatoSelecionado = function (contatos) {
				return contatos.some(function (contato) {
				return contato.selecionado;
				});
			};

			$scope.ordenarPor = function (campo) {
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			};


		});


