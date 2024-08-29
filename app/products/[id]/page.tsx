import { Product, WithContext } from "schema-dts";

export default async function Page({ params }: any) {
  const product = await getProduct(params.id);
  console.log(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.username,
    image: "https://nextjs.org/imgs/sticker.png",
    description: product.name,
    category: product.name,
  };

  return (
    <>
      <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ... */}
      </section>

      <div>Product detail</div>
    </>
  );
}

async function getProduct(id: number) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return data.json();
}
