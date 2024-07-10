import { Card, Image } from "@nextui-org/react";
import React from 'react'


type PropType = {
  slides: string[];
}


const CardCategoria: React.FC<PropType> = ({ slides }) => {



  return (
    <>
      <div className="py-6 px-8">
        <p className="text-white place-self-start text-[30px] font-semibold pb-6">Mejores marcas</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-2">
          {slides.map((item, index) => (
            <div className="pb-3" key={index}>
              <Card className="items-center rounded-2xl">
                <Image
                  isZoomed
                  removeWrapper
                  alt="Card background"
                  className="z-0 h-[100px] w-[180px] object-fill"
                  src={item}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
export default CardCategoria
