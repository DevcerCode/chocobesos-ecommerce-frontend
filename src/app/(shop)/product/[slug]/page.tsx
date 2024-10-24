'use client'

import { ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { ProductMobileSlideshow } from "@/components/product/slideshow/ProductMobileSlideshow";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { sendGAEvent } from "@next/third-parties/google";

interface Props {
  params: {
    slug: string
  }
}

export default function ({ params }: Props) {

  const { slug } = params
  const product = initialData?.products?.find(product => product?.slug === slug)

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* slideshow */}

      <div className="col-span-1 md:col-span-2">

        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          title={product?.title}
          images={product?.images}
          className="block md:hidden"
        />


        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={product?.title}
          images={product?.images}
          className="hidden md:block"
        />
      </div>

      {/* details */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product?.title}</h1>
        <p className="text-lg mb-5">{product?.price}</p>

        {/* selector de tallas */}
        {/* <SizeSelector
          selectedSize={product?.sizes[0]}
          availableSize={product?.sizes}
        /> */}

        {/* selector de cantidad */}
        <QuantitySelector quantity={2} />

        {/* button */}

        <button
          onClick={() => sendGAEvent({ event: "Agregar al carrito", value: "Product" })}
          className="btn-primary my-5">
          Agregar al carrito
        </button>

        {/* descripcion */}

        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product?.description}</p>
      </div>
    </div>
  );
}
