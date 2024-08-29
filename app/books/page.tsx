import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = {
    id: id,
    title: "Vợ nhặt",
    description: "Là tác phẩm của nền văn học VN hiện đại",
    author: "Kim Lân",
    date: "12/02/2004",
  };

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function Page({ params }: Props) {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
}
