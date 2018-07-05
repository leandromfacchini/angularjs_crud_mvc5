using angularjs_crud_mvc5.Business;
using angularjs_crud_mvc5.Models;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace angularjs_crud_mvc5.Controllers
{
    public class FuncionariosController : Controller
    {
        // GET: Funcionario
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

        // GET: Funcionario/Create
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

        // POST: Funcionario/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Funcionario/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Funcionario/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Funcionario/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Funcionario/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
