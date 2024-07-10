// src/components/ProductDetailModal.tsx

import React from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button,Image } from '@nextui-org/react';

interface ProductDetailModal {
    isOpen: boolean;
    onClose: () => void;
    products: any;
}

const ProductoGeneralDetalle: React.FC<ProductDetailModal> = ({ isOpen, onClose, products }) => {
    if (!isOpen || !products) return null;
    return (
        <Modal isOpen={isOpen} onOpenChange={onClose} placement="center" size='3xl'>
            <ModalContent >
                    <ModalBody>
                        <div className='grid grid-cols-1 sm:grid-cols-2 py-4 gap-10'>
                            <div>
                                <Image
                                        shadow="md"
                                        width="100%"
                                        alt={products?.nombre}
                                        className="w-full object-cover rounded-md"
                                        src={products?.image_url}
                                />
                            </div>
                            <div >
                                <h1 className='font-semibold text-4xl pb-1 text-default-500'>{products?.nombre}</h1>
                                <div className='grid grid-cols-1 gap-3'>
                                <p className='font-semibold grid grid-cols-1'>
                                <p className='text-[38px] text-primary-500'>S/{products?.precio}</p>
                                <p className='text-medium content-end pt-2'>Stock disponible: {products?.stock}</p>
                                </p>
                                <p className='text-small'>{products?.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="danger" variant="solid" onPress={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                
            </ModalContent>

        </Modal>
    );
};

export default ProductoGeneralDetalle;
