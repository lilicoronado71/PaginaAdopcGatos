const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Inicialización de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors()); //Habilitar CORS para permitir las solicitudes desd el forntEnd
app.use(express.json()); //Middleware para manejar JSON en lugar de body-parser
app.use(express.urlencoded({ extended: true })); //Para manejar solicitudes de formulario

//Conexion a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/AdopcGatico')
    .then(() => console.log('Conectado correctamente a MongoDB'))
    .catch(error => {
        console.error('Error al conectar a MongoDB', error);
        process.exit(1); //Salir si no se puede conectar a la base de datos
    });

//Definir el esquema y modelo de Mongoose para el registro de gaticos
const registroGaticosSchema = new mongoose.Schema({
    nombGato: { type: String, required: true },
    raza: { type: String, required: true },
    edad: { type: Number, min: 0, required: true },
    madurez: { type: String, required: true },
    colorPelaje: { type: Array, required: true },
    sexo: { type: String, required: true },
    esterilizado: { type: Boolean, required: true }
    //faltan ítems
}, { timestamps: true }); //Añadir timestamps para añadir fecha de creación (createdAt) y modificacipon (updatedAt)

const regGaticos = mongoose.model('registroGatico', registroGaticosSchema, 'registroGaticos');

//Rutas
//Ruta GET para obtener todos los ítems de la colección
app.get('/api/obtenerRegistroGatico', async (req, res) => {
    try {
        const gatos = await regGaticos.find(); //buscar todas las raazas de gatos existentes
        res.status(200).json(gatos);  //Responder con el registro de razas
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el registro de gatos' });
    }
});
/*******************************CRUD REGISTRO DE USUARIOS vs BD MONGO***********************/
//Definir el esquema y modelo de Mongoose para el registro de usuarios
const registroUsuariosSchema = new mongoose.Schema({
    nombreCompleto: { type: String, required: true },
    correoElectronico: { type: String, required: true },
    Direccion: { type: String, required: true },
    Telefono: { type: Number, required: true },
    contrasenia: { type: String, required: true },

}, { timestamps: true }); //Añadir timestamps para añadir fecha de creación (createdAt) y modificacipon (updatedAt)


const regUsuarios = mongoose.model('registroUsuario', registroUsuariosSchema, 'registroUsuarios');

//Ruta GET para OBTENER o CONSULTAR todos los ítems de la colección
app.get('/api/registroUsuarios', async (req, res) => {
    try {
        const usuarios = await regUsuarios.find(); //buscar todas las raazas de gatos existentes
        res.status(200).json(usuarios);  //Responder con el registro de razas
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el registro de usuarios' });
    }
});

//Ruta DELETE para ELIMINAR un ítem de la colección
app.delete('/api/registroUsuarios/:id', async (req, res) => {
    try {
        const usuarioEliminado = await regUsuarios.findByIdAndDelete(req.params.id); 
        if(!usuarioEliminado){
            return res.status(400).json({error: 'Usuario no encontrado'});
        }
        res.status(200).json({mensaje: 'Usuario eliminado con exito'});  
    } catch (error) {
        res.status(500).json({error: 'Error al obtener el registro de usuario'});
    }
});

//Ruta POST para INSERTAR un ítem de la colección
app.post('/api/registroUsuarios', async (req, res) => {
    try {
        const nuevoUsuario = new regUsuarios({
            nombreCompleto : req.body.nombreCompleto,
            correoElectronico : req.body.correoElectronico,
            Direccion : req.body.Direccion,
            Telefono : req.body.Telefono,
            contrasenia : req.body.contrasenia
        }); 
        const usuarioGuardado = await nuevoUsuario.save(); //Guarda nuevo registro en MongoDB
        res.status(200).json(usuarioGuardado); //Responde con el producto guardado
    } catch (error) {
        res.status(400).json({error: 'Error al guardar el registro de usuario'});
    }
});

//Ruta GET para BUSCAR UN USUARIO un ítem de la colección
app.get('/api/registroUsuarios/:id', async (req, res) => {
    try {
        const usuarioBuscado = await regUsuarios.findById(req.params.id); 
        if(!usuarioBuscado){
            return res.status(400).json({error: 'Usuario no encontrado'});
        }
        res.status(200).json(usuarioBuscado);  
    } catch (error) {
        res.status(500).json({error: 'Error al obtener el registro de usuario'});
    }
});

//Ruta PUT para ACTUALIZAR UN USUARIO un ítem de la colección
app.put('/api/registroUsuarios/:id', async (req, res) => {
    try {
        const usuarioBuscado = await regUsuarios.findById(req.params.id);
        const {nombreCompleto, correoElectronico, Direccion, Telefono, contrasenia} = req.body;
        if(!usuarioBuscado){
            return res.status(400).json({error: 'Usuario no encontrado'});
        }
        const usuarioActualizado = await regUsuarios.updateOne({_id:req.params.id}, {$set:{nombreCompleto, correoElectronico, Direccion, Telefono, contrasenia}});
        res.status(200).json(usuarioActualizado);  
    } catch (error) {
        res.status(500).json({error: 'Error al actualizar el registro'});
    }
});



//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
