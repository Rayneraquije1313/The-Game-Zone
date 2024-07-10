import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { Card, Button, CardBody, CardFooter, Image } from "@nextui-org/react";
import { PrevButton, NextButton, usePrevNextButtons } from './botones'
import { SearchIcon, ShopIcon } from "@/components/icons";
import ProductoGeneralDetalle from './productoDetalle';
import axios from 'axios';


type PropType = {
    options?: EmblaOptionsType
    header: string
    style: string
    buttom : string
    tipo: string
}

interface Producto {
    id_producto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    tipo: string;
    stock: number;
    image_url: string;
}

const CardGeneral: React.FC<PropType> = ({ options , header, style, buttom, tipo}) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: false, startDelay: 20, stopOnInteraction: true })
    ])
    const [, setIsPlaying] = useState(true)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
            const autoScroll = emblaApi?.plugins()?.autoScroll
            if (!autoScroll) return

            const resetOrStop =
                autoScroll.options.stopOnInteraction === false
                    ? autoScroll.reset
                    : autoScroll.stop

            resetOrStop()
            callback()
        },
        [emblaApi]
    )

    const [juegos, setJuegos] = useState<Producto[]>([]);


    useEffect(() => {
        const fetchJuegos = async () => {
            try {
                const response = await axios.get('http://localhost:8085/thegamezone/producto',{
                    params: { tipo: tipo }
                })
                setJuegos(response.data);
            } catch (error) {
                console.error('Error fetching juegos:', error);
            }
        };

        fetchJuegos();
    }, []);


    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        setIsPlaying(autoScroll.isPlaying())
        emblaApi
            .on('autoScroll:play', () => setIsPlaying(true))
            .on('autoScroll:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
    }, [emblaApi])

    
    const [isOpen, setIsOpen]= useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);


    const onOpen = (products: any) => {
        setIsOpen(products);
        setIsModalOpen(true);
    };

    const onOpenChange= () => {
        setIsModalOpen(true);
        setIsOpen(null);
      };

    return (
        <>
            <div className={style}>
                <div className="grid grid-cols-2 px-7 mb-4 pt-7">
                    <p className="place-self-start text-[30px] font-semibold">{header}</p>
                    <Button size="md" color={buttom} className="place-self-end rounded-full ">Ver más..</Button>
                </div>
            </div>
            <div className='embla_scroll' >
                <div className='embla__viewport' ref={emblaRef}>
                    <div className="embla__container_scroll gap-4 p-4">
                        {juegos.map((products, index) => (
                            <div>
                                <Card className="w-[200px]" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                                    <CardBody className="overflow-visible p-0 w-full static">
                                        <Image
                                            shadow="md"
                                            width="100%"
                                            alt={products.nombre}
                                            className="w-full object-cover h-[200px]"
                                            src={products.image_url}
                                        />
                                    </CardBody>

                                    <CardFooter className="grid grid-cols-1">
                                        <b className="overflow-hidden text-default-700 text-sm font-normal h-10">{products.nombre}</b>
                                        <p className="text-danger-500 text-[12px] mt-1 place-self-center font-extrabold">
                                            <del>{products.precio}</del>
                                        </p>
                                        <div className="grid grid-cols-1">
                                            <p className="text-primary-600 text-[18px] mt-[-4px] mb-1 place-self-center font-bold">
                                                {products.stock}
                                            </p>
                                        </div>
                                        <div className='flex gap-2 justify-center'>
                                            <Button className=" place-content-end h-[25px]" color="primary" variant="solid">
                                                <ShopIcon className="text-white-500 size-4" />
                                            </Button>
                                            <Button onPress={() => onOpen(products)} className=" place-content-end h-[25px]" color="primary" variant="solid">
                                                <SearchIcon className="text-white-500 size-4" />
                                            </Button> 
                                        </div>
                                    </CardFooter>
                                </Card> 
                            </div>
                        ))}
                         <ProductoGeneralDetalle isOpen={isModalOpen} onClose={onOpenChange} products={isOpen} />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-between mx-4 relative bottom-[200px]'>
                    <PrevButton
                        onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </>
    )
}

export default CardGeneral

