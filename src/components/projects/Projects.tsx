
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
  return (
    <>
          <div className="contenedor">
      <h1 className="h1">Mis Proyectos</h1>

      <div className="contenador-card ">
          
        <div className="card bg-dark text-white">
          <img
            className="card-img-top"
            src="img/inventory-amatec.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Sistema inventario</h5>
            <p className="card-text">
              El frontend está hacha con{" "}
              <b> reactjs, typescript, material ui</b>, y en la parte backend
              hecha con <b> nestjs y base de dato postgress</b>
            </p>
            <div className="card-footer d-flex">
              <a
                href="https://github.com/jeanmo333/front-viteTypeScript-saleSystem"
                className="btn btn-primary boton mr-2"
                target="_blank">
                Codigo
              </a>

              <a
                href="https://amatec-inventory.netlify.app"
                className="btn btn-primary boton"
                target="_blank">
                Demo
              </a>
            </div>
          </div>
        </div>



        <div className="card bg-dark text-white">
          <img
            className="card-img-top"
            src="img/amatec-shop.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Amatec-shop</h5>
            <p className="card-text">
              Proyecto backend , frontend con nextjs y typescript , para
              almacenar los imagenes ocupamos claudinary, y la base de dato
              mongodb
            </p>
            <div className="d-flex card-footer ">
              <a
                href="https://github.com/jeanmo333/teslo-shop-next"
                className="btn btn-primary boton mr-2"
                target="_blank">
                Codigo
              </a>

              <a
                href="https://teslo-shop-next-production.up.railway.app"
                className="btn btn-primary boton"
                target="_blank">
                Demo
              </a>
            </div>
          </div>
        </div>

        

        <div className="card bg-dark text-white">
          <img
            className="card-img-top"
            src="img/tienda-mueble.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Tienda Mueble</h5>
            <p className="card-text">
              Proyecto hecho con html5 y technologia de css3 como grid y flexbox
              donde el usuario puede navegagar entre las paginas internas
            </p>
            <div className="d-flex card-footer ">
              <a
                href="https://github.com/jeanmo333/tienda-mueble/tree/master"
                className="btn btn-primary boton mr-2"
                target="_blank">
                Codigo
              </a>

              <a
                href="https://admiring-goldstine-38801c.netlify.app"
                className="btn btn-primary boton "
                target="_blank">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            className="card-img-top"
            src="img/plinificador-gasto.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Planificador de gastos</h5>
            <p className="card-text">
              Proyecto hecho con la libreria reactjs, y para dar estilos se usa
              css. para la persistencia de los datos se usa local storage
            </p>
            <div className="d-flex card-footer ">
              <a
                href="https://github.com/jeanmo333/control-gasto-react"
                className="btn btn-primary boton mr-2"
                target="_blank">
                Codigo
              </a>

              <a
                href="https://candid-phoenix-bb6610.netlify.app"
                className="btn btn-primary boton "
                target="_blank">
                Demo
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            className="card-img-top"
            src="img/cotizador-seguro.png"
            alt="Card image cap"
          />

          <div className="card-body">
            <h5 className="card-title">Cotizador de seguros</h5>
            <p className="card-text">
              Proyecto hecho con la libreria react usando el hook context api,
              el algorithmo calcula el monto a paga segun la marca, el año y el
              plan
            </p>
            <div className="d-flex card-footer ">
              <a
                href="https://github.com/jeanmo333/cotizador-react"
                className="btn btn-primary boton mr-2"
                target="_blank">
                Codigo
              </a>

              <a
                href="https://flourishing-alpaca-d58f08.netlify.app"
                className="btn btn-primary boton"
                target="_blank">
                Demo
              </a>
            </div>
          </div>
        </div>

        

        <div className="card bg-dark text-white">
          <img
            className="card-img-top"
            src="img/carito-compra.png"
            alt="Card image cap"
          />

          <div className="card-body">
            <h5 className="card-title">Carrito de compra</h5>
            <p className="card-text">
              Proyecto hecho con html5, css3, y con puros codigos javascript, ocupamos 
              local storage los productos del carrito.
            </p>
            <div className="d-flex card-footer ">
              <a
                href="https://github.com/jeanmo333/PROYECTO-Carrito-LS"
                className="btn btn-primary boton mr-2"
                target="_blank">
                Codigo
              </a>

              <a
                href="https://carito-compra-javascript.netlify.app"
                className="btn btn-primary boton"
                target="_blank">
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
