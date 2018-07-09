
funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {

    carregarFuncionario();

    function carregarFuncionario() {

        var listarFuncionarios = funcionarioService.getTodosFuncionarios();

        listarFuncionarios.then(function (d) {

            $scope.funcionarios = d.data;

            console.log(d.data);

        }, function () {

            alert('Ocorreu um erro ao tentar listar todos os funcionários !');

        });
    }

    $scope.adicionarFuncionario = function () {

        var funcionario = {
            FuncionarioId: $scope.FuncionarioId,
            Nome: $scope.Nome,
            Email: $scope.Email,
            Departamento: $scope.Departamento,
            Cargo: $scope.Cargo,
        };

        var adicionarInfos = funcionarioService.createFuncionario(funcionario);

        adicionarInfos.then(function (d) {

            if (d.data.sucess == true) {

                alert('Adicionado com sucesso');

                $scope.limparDados();

                carregarFuncionario();

            } else alert('Erro ao incluir !');
        },
            function () {
                alert('Erro ao tentar incluir dados na base !');
            }
        );
    }

    $scope.limparDados = function () {

        $scope.FuncionarioId = '';
        $scope.Nome = '';
        $scope.Email = '';
        $scope.Departamento = '';
        $scope.Cargo = '';
    }

});