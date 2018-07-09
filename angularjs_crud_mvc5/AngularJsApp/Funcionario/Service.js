
funcionarioApp.service('funcionarioService', function ($http) {

    this.getTodosFuncionarios = function () {

        return $http.get("/Funcionarios/Index");
    }

    this.createFuncionario = function (funcionario) {

        var request = $http({
            method: 'POST',
            url: '/Funcionarios/Create',
            data: funcionario
        });

        return request;
    }

    this.updateFuncionario = function (funcionario) {

        var request = $http({
            method: 'POST',
            url: '/Funcionarios/Edit',
            data: funcionario
        });

        return request;
    }

    this.deleteFuncionario = function (funcionarioId) {

        return $http.post('/Funcionarios/Delete/' + funcionarioId);

    }

});