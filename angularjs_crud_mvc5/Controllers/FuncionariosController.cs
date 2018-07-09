using angularjs_crud_mvc5.Business;
using angularjs_crud_mvc5.Models;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace angularjs_crud_mvc5.Controllers
{
    public class FuncionariosController : Controller
    {
        // GET: Funcionarios
        public JsonResult Index()
        {
            var consulta = new Funcionarios();

            var json = new JavaScriptSerializer().Deserialize<List<ModelFuncionario>>(consulta.GetFuncionarios());

            return Json(json, JsonRequestBehavior.AllowGet);
        }

        // GET: Funcionario/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // POST: Funcionario/Create
        [HttpPost]
        public JsonResult Create(ModelFuncionario funcionario)
        {
            bool json = false;

            Funcionarios funcionarios = new Funcionarios();

            if (funcionario != null)
            {
                json = funcionarios.Adicionar(funcionario);
            }

            return Json(new { sucess = json });
        }

        // GET: Funcionario/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Funcionario/Edit/5
        [HttpPost]
        public JsonResult Edit(ModelFuncionario funcionario)
        {
            // TODO: Add update logic here
            bool json = false;

            Funcionarios funcionarios = new Funcionarios();

            if (funcionario != null)
            {
                json = funcionarios.Atualizar(funcionario);

            }

            return Json(new { sucess = json });

        }

        // POST: Funcionario/Delete/5
        [HttpPost]
        public JsonResult Delete(int FuncionarioId)
        {
            bool json = false;

            if (FuncionarioId > 0)
            {
                var funcionarios = new Funcionarios();

                json = funcionarios.Deletar(FuncionarioId);

            }

            return Json(new { sucess = json });
        }
    }
}
