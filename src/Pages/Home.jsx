import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Producto } from "../Componentes/Producto"
import { db } from "../config/firebase"

export const Home = () => {
  const [productos, setProductos] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const collRef = collection(db, "items")
    getDocs(collRef)
      .then((snapshots) => {
        const { docs } = snapshots
        const items = docs.map( doc => {
                          return {
                            ...doc.data(),
                            id: doc.id
                          }
                        })
        console.log(items)
        setProductos(items)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  if(loading) return <h2>Cargando productos....</h2>

  return (
    <div>
      <h1>Productos</h1>
      {productos && productos.map(producto => <Producto key={producto.id} data={producto}/>)}
    </div>
  )
}