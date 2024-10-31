'use client'

import { ProductGrid, Title } from "@/components";
import { Category } from "@/interface";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products
interface Props {
  params: {
    id: Category
  }
}

export default function ({ params }: Props) {

  const { id } = params
  const products = seedProducts.filter(product => product.category === id)

  const labels: Record<Category, string> = {
    'love': 'Para el amor',
    'friendship': 'para la amistad',
    'anniversary': 'para anivarsarios',
    'stuffed': 'Peluches',
    'chocolates': 'Chocolates'
  }



  console.log(Object.keys(labels[id]))

  if (products.length === 0) {
    notFound()
  }

  return (
    <>
      <Title
        title={`${labels[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />
    </>
  );
}
