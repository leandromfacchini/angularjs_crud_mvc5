
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

    $scope.atualizarFuncionarioId = function (funcionario) {

        $scope.AtualizadoFuncionarioId = funcionario.FuncionarioId;
        $scope.AtualizadoNome = funcionario.Nome;
        $scope.AtualizadoEmail = funcionario.Email;
        $scope.AtualizadoDepartamento = funcionario.Departamento;
        $scope.AtualizadoCargo = funcionario.Cargo;

    }

    $scope.atualizarFuncionario = function (funcionario) {

        var funcionario = {

            FuncionarioId: $scope.AtualizadoFuncionarioId,
            Nome: $scope.AtualizadoNome,
            Email: $scope.AtualizadoEmail,
            Departamento: $scope.AtualizadoDepartamento,
            Cargo: $scope.AtualizadoCargo,

        }

        var atualizar = funcionarioService.updateFuncionario(funcionario);

        atualizar.then(function (d) {

            if (d.data.sucess == true) {

                carregarFuncionario();

                alert('Funcionário atualizado com sucesso');

                $scope.limparDadosAtualizado();

            } else {

                alert('Funcionário não atualizado !!');

            }
        }, function () {

            alert('Erro ao tentar atualizar dados !!');

        });
    }

    $scope.excluirFuncionarioId = function (funcionario) {

        $scope.ExcluidoFuncionarioId = funcionario.FuncionarioId;
        $scope.ExcluidoNome = funcionario.Nome;
        $scope.ExcluidoEmail = funcionario.Email;
        $scope.ExcluidoDepartamento = funcionario.Departamento;
        $scope.ExcluidoCargo = funcionario.Cargo;

    }

    $scope.deletarFuncionario = function (ExcluidoFuncionarioId) {

        var excluir = funcionarioService.deleteFuncionario($scope.ExcluidoFuncionarioId);

        excluir.then(function (d) {

            if (d.data.sucess == true) {

                carregarFuncionario();

                alert('Funcionário excluído com sucesso !!');

                $scope.limparDadosAtualizado();

            } else {

                alert('Funcionário não excluído !!');

            }

        }, function () {

            alert('Erro ao excluir funcionário !!');

        });
    };

    $scope.limparDadosAtualizado = function () {

        $scope.AtualizadoFuncionarioId = '';
        $scope.AtualizadoNome = '';
        $scope.AtualizadoEmail = '';
        $scope.AtualizadoDepartamento = '';
        $scope.AtualizadoCargo = '';

    }

    $scope.limparDadosExcluido = function () {

        $scope.ExcluidoFuncionarioId = '';
        $scope.ExcluidoNome = '';
        $scope.ExcluidoEmail = '';
        $scope.ExcluidoDepartamento = '';
        $scope.ExcluidoCargo = '';

    }

    $scope.limparDados = function () {

        $scope.FuncionarioId = '';
        $scope.Nome = '';
        $scope.Email = '';
        $scope.Departamento = '';
        $scope.Cargo = '';

    }

});