import { Card, CardHeader, CardBody, Textarea, CardFooter, Button, useDisclosure, Modal, ModalBody, ModalFooter, ModalHeader, ModalContent } from "@nextui-org/react";
import { UserIcon } from "./icons";
import axios from 'axios';
import React, {useEffect, useState } from 'react'
import AuthComentario from "./Auth/authComentario";

interface Sugerencia {
    sugerencia: string;
    fechaSugerencia:string;
}


const Comentario: React.FC = () => {

    const [sugerencia, setSugerencia] = useState<Sugerencia[]>([]);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    useEffect(() => {
        const fetchSugerencia = async () => {
            try {
                const response = await axios.get('http://localhost:8085/thegamezone/sugerencias');
                setSugerencia(response.data);
            } catch (error) {
                console.error('Error fetching sugerencias:', error);
            }
        };

        fetchSugerencia();
    }, []);


    


    return (
        <div className="shadow-md shadow-black px-3 pb-4">
            <div>
                <div className="grid grid-cols-2 mx-6 py-6">
                    <p className="place-self-start text-[30px] font-semibold text-primary-500">Comentarios</p>
                    <Button onPress={onOpen} size="md" color="primary" className="place-self-end rounded-full ">Ver más..</Button>
                    <Modal placement="top" size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1 font-semibold text-2xl text-primary-500">Comentarios</ModalHeader>
                                    <ModalBody>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-span-3 gap-4 px-4">
                                        {sugerencia.map((comentario, index) => (
                                            <div>
                                                <Card key={index} className="w-full h-[160px] p-2">
                                                    <CardHeader className="justify-between">
                                                        <div className="flex gap-3">
                                                            <UserIcon className="bg-primary-500 rounded-full text-white size-9" />
                                                            <div className="flex flex-col gap-1 items-start justify-center">
                                                                <h4 className=" text-base font-semibold leading-none text-default-600"></h4>
                                                                <h5 className="text-small tracking-tight text-default-400">@{comentario?.fechaSugerencia}</h5>
                                                            </div>
                                                        </div>
                                                    </CardHeader>
                                                    <CardBody className="px-3 py-1 text-default-800 text-sm font-normal w-full">
                                                        <p>{comentario?.sugerencia}</p>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                            ))}
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onPress={onClose} color="danger" variant="solid">
                                            Cerrar
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-4 mt-[-10px]">
                <div className="w-full p-4">
                    <AuthComentario/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:col-span-2 lg:col-span-3 gap-4 p-4">
                    {sugerencia.slice(-6).map((comentario, index) => (
                        <div>
                            <Card key={index} className="w-full h-[160px] p-2">
                                <CardHeader className="justify-between">
                                    <div className="flex gap-3">
                                        <UserIcon className="bg-primary-500 rounded-full text-white size-9" />
                                        <div className="flex flex-col gap-1 items-start justify-center">
                                            <h4 className=" text-base font-semibold leading-none text-default-600"></h4>
                                            <h5 className="text-small tracking-tight text-default-400">@</h5>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardBody className="px-3 py-1 text-default-800 text-sm font-normal w-full">
                                    <p>{comentario?.sugerencia}</p>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Comentario;
