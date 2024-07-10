import DefaultLayout from "@/layouts/default";
import { EmblaOptionsType } from 'embla-carousel'
import { imageNovedades, brandImg } from "@/list/img";
import CardCategoria from "@/components/Producto-carousel/cardCategoria";
import EmblaCarousel from "@/components/Imagenes-carousel/EmblaCarousel";
import CardGeneral from "@/components/Producto-carousel/cardProducto";
import Comentario from "@/components/comentarios";



const OPTIONS: EmblaOptionsType = { loop: false }




export default function IndexPage() {
  return (
    <DefaultLayout>

      <EmblaCarousel slides={imageNovedades} />
      
      <CardGeneral options={OPTIONS} header="Ofertas" style="text-primary-500" buttom="primary"
      tipo="videojuego" />

      <div className="bg-primary-500 shadow-md shadow-default-500">
        <CardCategoria slides={brandImg}/>
      </div>
      
      <CardGeneral options={OPTIONS} header="Novedades" style="text-green-500" buttom="default"
      tipo="funko" />

      <Comentario/>
      
    </DefaultLayout>
  );
}
