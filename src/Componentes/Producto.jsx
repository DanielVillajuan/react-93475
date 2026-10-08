import { Link } from "react-router"

export const Producto = ({ data }) => {
    const { id, img, name, price, stock } = data
    return (
    <div>
        <img src={img} alt={name + id} width={150} height={150} />
        <h4>{name}</h4>
        <span>$ {price}</span>
        <span>stock: {stock}</span>
        <Link to={`/${id}/detalle`}>Detalle</Link>
        <hr />
    </div>)
}