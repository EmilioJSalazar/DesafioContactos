var builder = WebApplication.CreateBuilder(args);

// ACTIVACION DE CONTROLADORES
// Busqueda de la carpeta "Controllers"
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CONFIGURACION CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200") // Direccion Frontend
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

var app = builder.Build();

// Configuracion del entorno de desarrollo
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// ACTIVACION DE LA POLITICA CORS
app.UseCors("AllowAngular");

app.UseAuthorization();

// MAPEO DE LOS CONTROLADORES
app.MapControllers(); 

app.Run();