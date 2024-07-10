import { useAuth } from './authContext';
import { Button, Card, CardBody, CardFooter, CardHeader, Textarea } from '@nextui-org/react';
import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { UserIcon } from '../icons';

interface Sugerencia {
    sugerencia: string;
    fechaSugerencia:string;
}

const AuthComentario: React.FC = () => {
  const { isAuthenticated} = useAuth();
  const [sugerencia, setSugerencia] = useState<Sugerencia[]>([]);

  useEffect(() => {
    const fetchSugerencia = async () => {
        try {
            const response = await axios.post('http://localhost:8085/thegamezone/sugerencias');
            setSugerencia(response.data);
        } catch (error) {
            console.error('Error fetching sugerencias:', error);
        }
    };

    fetchSugerencia();
}, []);


  return (
    <div>
      {isAuthenticated ? (
        <>
          
                    <Card className="max-w-full h-full">
                        <CardHeader className="justify-between">
                            <div className="flex gap-3">
                                <UserIcon className="bg-primary-500 rounded-full text-white size-9" />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className=" text-base font-semibold leading-none text-default-600">Mario Martinez</h4>
                                    <h5 className="text-small tracking-tight text-default-400 font-semibold">@martinez121</h5>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-3 py-1 text-default-800 text-sm font-normal w-full">
                            <Textarea
                                isRequired
                                minRows={8}
                                maxRows={16}
                                label="Añade un comentario"
                                placeholder=""
                                className="max-w-full h-full"
                            />
                        </CardBody>
                        <CardFooter>
                            <div>
                                <Button color="primary" className=" rounded-full">
                                    Comentar
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
        </>
      ) : (
        <>
        <div className=' hidden'></div>
        </>
      )}
    </div>
  );
};

export default AuthComentario;