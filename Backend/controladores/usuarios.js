import Usuario from "../modelos/Usuario.js";



const GET_ALL = async (req,res)=>{
    const usuarios = await Usuario.find({})
    if (!usuarios) return res.status (404).json({mensaje: "Usuario no encontrados"});
    return res.status (200).send(usuarios);
}

const NEW = async (req,res)=>{
    const {nombre,saldo} = req.body;
    if(!nombre || !saldo ) return res.status (404).json({mensaje: "Faltan parametros"});
    const user = new Usuario({
        nombre: nombre,
        saldo: saldo,
    })
    try {
        await user.save()
        return res.status (200).json({mensaje: "Creado"});
    } catch (error) {
        return res.status (400).json({mensaje: "Error al guardar"});
    }
}

const GET_BY_ID = async (req,res)=>{
    const id = req.params.id;
    const usuario = await Usuario.findById(id);
    if(!usuario) return res.status (404).json({mensaje: "Usuario no encontrado"});
    return res.status (200).send(usuario);
}

const PATCH = async (req,res)=>{
    const id = req.params.id;
    let params = req.body;
    if(!params.nombre && !params.saldo) return res.status (404).json({mensaje: "Faltan parametros"});
    try {
        await Usuario.findByIdAndUpdate(id, params)
        return res.status (200).json({mensaje: "Actualizado"});
    }
    catch(e){
        return res.status (404).json({mensaje: "Usuario no encontrado"});
    }
}


export {
    GET_ALL,
    NEW,
    GET_BY_ID,
    PATCH
}