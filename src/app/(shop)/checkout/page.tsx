import Link from "next/link";
import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title
          title="Carrito"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar Carrito
            </Link>


            {/* Items */}
            {
              productInCart.map(product => (
                <div
                  key={product.slug}
                  className="flex mb-5"
                >
                  <Image
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    alt={product.title}
                    className="mr-5 rounded"
                    style={{
                      width: '100px',
                      height: '100px'
                    }}
                  />
                  <div>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <p className="font-bold">Subtotal  ${product.price * 3}</p>
                  </div>
                </div>
              ))
            }
          </div>

          {/* checkout */}

          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2 font-bold">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Julio Davila</p>
              <p>Av. Siempre Viva 123</p>
              <p>Col. Centro</p>
              <p>Alcaldia Cuauhtemoc</p>
              <p>Ciudad de Mexico</p>
              <p>CP 123123c</p>
              <p>123.123.123</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />


            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>IGV (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                <span className="text-xs">
                  Al hacer clic em "Colocar orden", acpetas nuestros <a href="#" className="underline">terminos y condiciones</a> y  <a href="#" className="underline">politica de privacidad</a>
                </span>
              </p>

              <Link
                className="flex btn-primary justify-center "
                href={`/orders/123`}>
                Colocar orden
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
