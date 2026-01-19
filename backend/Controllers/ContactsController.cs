using Microsoft.AspNetCore.Mvc;
using APIContactos.Models;
using System.IO;
using System.Text.Json;

namespace APIContactos.Controllers
{
    [ApiController]
    [Route("contacts")] // Definicion ruta base como /contacts
    public class ContactsController : ControllerBase
    {
        private static readonly string _filePath = "contactos.json";

        // Persistencia en JSON
        private static List<Contacto> _contactos = new List<Contacto>
        {
            // Contacto quemado
            new Contacto { Id = 1, Nombre = "Emilio", Apellido = "Salazar", Celular = "0986127653", Correo = "emilio.salazar@asur.ec", Cedula="1722904198", Direccion="Quito" }
        };

        private static void SaveContactos()
        {
            System.IO.File.WriteAllText(_filePath, JsonSerializer.Serialize(_contactos));
        }

        private static void LoadContactos()
        {
            if (System.IO.File.Exists(_filePath))
            {
                var json = System.IO.File.ReadAllText(_filePath);

                _contactos = JsonSerializer.Deserialize<List<Contacto>>(json) ?? [];
            }
        }

        static ContactsController()
        {
            LoadContactos();
        }

        // GET: /contacts - Obtener todos los contactos
        [HttpGet]
        public ActionResult<IEnumerable<Contacto>> GetContactos()
        {
            return Ok(_contactos);
        }

        // GET: /contacts/id
        [HttpGet("{id}")]
        public IActionResult GetContacto(int id)
        {
            var contacto = _contactos.FirstOrDefault(c => c.Id == id);
            if (contacto == null)
            {
                return NotFound(); // Retorna 404 si no existe
            }

            return Ok(contacto);
        }

        // GET: /contacts/search?name=Emilio - Buscar por nombre
        [HttpGet("search")]
        public ActionResult<IEnumerable<Contacto>> SearchContactos([FromQuery] string name)
        {
            if (string.IsNullOrWhiteSpace(name))
                return Ok(_contactos);

            var resultados = _contactos.Where(c =>
                c.Nombre.Contains(name, StringComparison.OrdinalIgnoreCase) ||
                c.Apellido.Contains(name, StringComparison.OrdinalIgnoreCase)
            ).ToList();

            return Ok(resultados);
        }

        // POST: /contacts - Crear nuevo contacto
        [HttpPost]
        public ActionResult<Contacto> PostContacto(Contacto nuevoContacto)
        {
            // ID autoincremental
            int nuevoId = _contactos.Count > 0 ? _contactos.Max(c => c.Id) + 1 : 1;
            nuevoContacto.Id = nuevoId;

            _contactos.Add(nuevoContacto);

            // Retorna 201 Created y el objeto creado
            SaveContactos();
            return CreatedAtAction(nameof(GetContactos), new { id = nuevoContacto.Id }, nuevoContacto);
        }

        // DELETE: /contacts/{id} - Eliminar contacto
        [HttpDelete("{id}")]
        public IActionResult DeleteContacto(int id)
        {
            var contacto = _contactos.FirstOrDefault(c => c.Id == id);
            if (contacto == null)
            {
                return NotFound(); // Retorna 404 si no existe
            }

            _contactos.Remove(contacto);
            SaveContactos();
            return NoContent(); // Retorna 204 (exito sin contenido)
        }

        // PUT: /contacts/{id} - Actualizar contacto
        [HttpPut("{id}")]
        public IActionResult UpdateContacto(int id, [FromBody] Contacto nuevoContacto)
        {
            var contacto = _contactos.FirstOrDefault(c => c.Id == id);
            if (contacto == null)
            {
                return NotFound(); // Retorna 404 si no existe
            }

            contacto.Nombre = nuevoContacto.Nombre;
            contacto.Apellido = nuevoContacto.Apellido;
            contacto.Correo = nuevoContacto.Correo;
            contacto.Celular = nuevoContacto.Celular;
            contacto.Direccion = nuevoContacto.Direccion;
            SaveContactos();
            return Ok(contacto); // Retorna 200 y el objeto actualizado
        }
    }
}