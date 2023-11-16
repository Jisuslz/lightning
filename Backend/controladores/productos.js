import Producto from "../modelos/Producto.js";



const GET_ALL = async (req,res)=>{
    const productos = await Producto.find({})
    if (!productos) return res.status (404).json({mensaje: "Productos no encontrados"});
    return res.status (200).send(productos);
}

const NEW = async (req,res)=>{
    const {nombre,descripcion, img,precio,cantidad} = req.body;
    if(!nombre || !descripcion || !img || !precio || !cantidad) return res.status (404).json({mensaje: "Faltan parametros"});
    const product = new Producto({
        nombre: nombre,
        descripcion: descripcion,
        img: img,
        precio: precio,
        cantidad: cantidad
    })
    try {
        await product.save()
        return res.status (200).json({mensaje: "Creado"});
    } catch (error) {
        return res.status (400).json({mensaje: "Error al guardar"});
    }
}

const GET_BY_ID = async (req,res)=>{
    const id = req.params.id;
    const producto = await Producto.findById(id);
    if(!producto) return res.status (404).json({mensaje: "Producto no encontrado"});
    return res.status (200).send(producto);
}

const PATCH = async (req,res)=>{
    const id = req.params.id;
    let params = req.body;
    if(!params.nombre && !params.descripcion && !params.img && !params.precio && !params.cantidad) return res.status (404).json({mensaje: "Faltan parametros"});
    try {
        await Producto.findByIdAndUpdate(id, params)
        return res.status (200).json({mensaje: "Actualizado"});
    }
    catch(e){
        return res.status (404).json({mensaje: "Producto no encontrado"});
    }
}


export {
    GET_ALL,
    NEW,
    GET_BY_ID,
    PATCH
}