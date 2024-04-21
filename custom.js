	
	


		angular.module("listaCadastro",['ngMessages']).run(function ($rootScope, $http) {
        
    
       
       })


		.controller("listaCadastroCtrl", function ($scope,$rootScope, $http, uppercaseFilter) {
			$scope.app = "Cadastro";

			$rootScope.contatos = [
				/*{nome: "Ana", telefone: "9999-8888", data: new Date()},
				{nome: "Pedro", telefone: "9999-8877", data: new Date()},
				{nome: "Maria", telefone: "9999-8866", data: new Date()}*/
			];


			$scope.adicionarContato = function (contato) {
			
				contato.data = new Date();
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
			};
			$scope.apagarContatos = function (contatos) {
				$scope.contatos = contatos.filter(function (contato) {
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


