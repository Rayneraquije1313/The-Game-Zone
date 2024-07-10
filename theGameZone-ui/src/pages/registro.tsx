import React, { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { EyeFilledIcon, EyeSlashFilledIcon, TheGameZoneIcon } from '@/components/icons';
import { Link } from '@nextui-org/link';
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure
} from "@nextui-org/modal";
import { Image } from "@nextui-org/image";
import { useNavigate } from 'react-router-dom';

const Registro: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/iniciar_sesion');
  };


  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    numero: '',
    dirrecion: '',
    email: '',
    username: '',
    password: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!formData.email || !formData.password || !formData.apellido 
      || !formData.dirrecion || !formData.nombre || !formData.numero || !formData.username) {
      setError('Todos los campos son obligatorios.');
      return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Ingrese un correo electrónico valido');
      return;
    }

    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError('La contraseña debe tener al menos 8 caracteres y un carácter especial');
      return;
    }

    if (formData.numero.length !== 9 || !/^\d{9}$/.test(formData.numero)) {
      setError('El número debe tener exactamente 9 dígitos.');
      return;
    }


    try {
      const response = await fetch('http://localhost:8085/thegamezone/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en registrarse');
      }

      setSuccessMessage('Registration successful!');
      setFormData({
        nombre: '',
        apellido: '',
        numero: '',
        dirrecion: '',
        email: '',
        username: '',
        password: ''
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Un error desconocido ocurrió');
      }
    }
  }


  return (
    <>
      <div className="w-full h-16 bg-white shadow shadow-gray-200 flex items-center px-12">
        <Link href="/">
        <TheGameZoneIcon className=" size-9 text-yellow-300" />
        <p className="hidden sm:block font-bold text-xl pl-1 font-demo text-primary-500">TheGameZone</p>
        </Link>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center pt-6">
        <div>
          <p className="text-2xl font-extrabold text-default-800">Crear cuenta</p>
          <p className="text-small mb-6 text-default-500">Forma parte de nuestra comunidad de gamers</p>
          <form onSubmit={handleRegister} className='grid grid-cols-1 gap-4'>
            <div className='grid grid-cols-2 gap-2'>
              <Input
                size="md"
                radius="lg"
                type="text"
                label="Nombre"
                className="max-w-full"
                value={formData.nombre}
                onChange={handleChange}
                name="nombre"
              />
              <Input
                size="md"
                radius="lg"
                type="text"
                label="Apellido"
                className="max-w-full"
                value={formData.apellido}
                onChange={handleChange}
                name="apellido"
              />
            </div>
            <Input
              size="md"
              radius="lg"
              type="text"
              label="Numero Telefonico"
              className="max-w-full"
              value={formData.numero}
              onChange={handleChange}
              name="numero"
            />
            <Input
              size="md"
              radius="lg"
              type="text"
              label="Dirrecion"
              className="max-w-full"
              value={formData.dirrecion}
              onChange={handleChange}
              name="dirrecion"
            />
            <Input
              size="md"
              radius="lg"
              type="text"
              label="Username"
              className="max-w-full"
              value={formData.username}
              onChange={handleChange}
              name="username"
            />
            <Input
              size="md"
              radius="lg"
              type="text"
              label="Email"
              className="max-w-full"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <Input
              size="md"
              radius="lg"
              label="Contraseña"
              className="max-w-full"
              type={isVisible ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              name="password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />
          </form>
        </div>
        <div className='py-8 grid-cols-1 justify-items-center text-center'>
          <form onSubmit={handleRegister}>
            <Button type="submit" onPress={onOpen}
              className="" color='primary'>
              Registrarse
            </Button>
            <p>o</p>
            <Button
              className="" onClick={handleButtonClick} color='primary'>
              Iniciar Sesión
            </Button>
            <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                <>
                  <ModalBody>
                    {successMessage && <div className="text-primary-500 font-bold text-2xl p-4">
                      <div className="grid grid-cols-1 place-items-center gap-4">
                        <Image width={200}
                          alt="Sonic feliz :)"
                          src="https://i.pinimg.com/originals/40/0d/f9/400df9533638d457af54ba3180af1a3b.gif" />
                        {successMessage}
                        <p className="text-tiny text-default-500 text-center font-bold">
                          ¡Felicitaciones por registrarte en TheGameZone!
                          Tu cuenta ha sido creada con éxito y ahora puedes
                          iniciar sesión para explorar y disfrutar de todos nuestros
                          juegos y funciones. ¡Te damos la bienvenida a nuestra
                          comunidad de gamers!
                        </p>
                        <Button onClick={handleButtonClick} size="md" color="primary">
                          Iniciar Sesión
                        </Button>
                      </div>
                    </div>}
                    

                    {error && 
                    <div className="text-danger-500 font-bold text-2xl p-4 text-center">
                      <div className=" grid grid-cols-1 place-items-center gap-4">
                        <Image width={200}
                          alt="Sonic molesto :("
                          src="https://i.pinimg.com/originals/33/4e/38/334e388aef13d5816ad9024ef944c17c.gif" />
                        {error}
                      </div>
                    </div>}
                  </ModalBody>

                </>
              </ModalContent>
            </Modal>

            
          </form>
        </div>
      </div>
    </>
  );
}
export default Registro;
