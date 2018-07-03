using angularjs_crud_mvc5.Entidades;
using angularjs_crud_mvc5.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace angularjs_crud_mvc5.Business
{
    public class Funcionarios
    {
        public string GetFuncionarios()
        {
            string serializer = string.Empty;

            using (Entities db = new Entities())
            {
                var consulta = db.Funcionario.ToList();

                List<ModelFuncionario> funcionarios = new List<ModelFuncionario>();

                for (int i = 0; i < consulta.Count(); i++)
                {
                    var func = consulta[i];

                    ModelFuncionario funcionario = new ModelFuncionario();
                    funcionario.FuncionarioId = func.FuncionarioId;
                    funcionario.Cargo = func.Cargo;
                    funcionario.Departamento = func.Departamento;
                    funcionario.Email = func.Email;
                    funcionario.Nome = func.Nome;

                    funcionarios.Add(funcionario);

                }

                serializer = new JavaScriptSerializer().Serialize(funcionarios);

            }

            return serializer;
        }
    }
}
