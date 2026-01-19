namespace APIContactos.Models
{
    public class Contacto
    {
        public int Id { get; set; }

        public string Nombre { get; set; } = string.Empty;

        public string Apellido { get; set; } = string.Empty;

        public string Cedula { get; set; } = string.Empty;

        public string Correo { get; set; } = string.Empty;

        public string Celular { get; set; } = string.Empty;

        public string Direccion { get; set; } = string.Empty;
    }
}