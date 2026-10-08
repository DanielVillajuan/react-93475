import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { doc, getDoc, updateDoc, addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebase"

export const ProductoDetalle = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const { idProducto } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "items", idProducto)
        getDoc(docRef)
            .then((snapshot) => {
                const prod = snapshot.data()
                setProducto(prod)
            }).catch((e) => console.log(e))
            .finally(() => {
                setLoading(false)
            })
    },[])

    const handleEdit = () => {
        const docRef = doc(db, "items", idProducto)
        const updatedProd = {
            stock: 323
        }
        updateDoc(docRef, updatedProd)
            .then(() => { setProducto((prevProd) => ({...prevProd, ...updatedProd}))})
            .catch((err) => console.log(err))
            
    }

    const handleCreate = () => {
         addDoc(collection(db, "items"), {
            category: "gamer",
            img:"https://http2.mlstatic.com/D_NQ_NP_2X_917834-MLA111876361624_062026-F.webp",
            name:"La mejor PC Gamer AMD RYZEN 9 9750 3dX RTX 5090 64G RAM",
            price: 1500000,
            stock: 10
      });
    }

    if(loading) return <h3>Cargando producto....</h3>

    return (
        <>
            <h1>{producto.name}</h1>
            <img src={producto.img} alt={producto.name + idProducto} height={750} width={750} />
            <h2>$ {producto.price}</h2>
            <span>stock: {producto.stock}</span>
            <button>Añadir Carrito</button>
            <button>Comprar</button>
            <button onClick={handleEdit}>Modificar si fuera admin</button>
            <button onClick={handleCreate}>Agregar un producto</button>
        </>
    )
}