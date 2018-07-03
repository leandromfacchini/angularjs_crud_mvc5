using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace angularjs_crud_mvc5.Models
{
    public class ModelFuncionario
    {
        public int FuncionarioId { get; set; }
        public string Nome { get; set; }
        public string Departamento { get; set; }
        public string Cargo { get; set; }
        public string Email { get; set; }
    }
}
