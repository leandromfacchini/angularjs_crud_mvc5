
funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {

    carregarFuncionario();

    function carregarFuncionario() {

        var listarFuncionarios = funcionarioService.getTodosFuncionarios();

        listarFuncionarios.then(function (d) {

            $scope.funcionarios = d.data;

        }, function () {

            alert('Ocorreu um erro ao tentar listar todos os funcionários !');

        });
    }
});