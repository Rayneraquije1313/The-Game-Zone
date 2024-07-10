import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Auth/authContext';
import { EyeFilledIcon, EyeSlashFilledIcon, TheGameZoneIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure
} from "@nextui-org/modal";
import { Image } from "@nextui-org/image";
import React, { useState } from 'react';


const Iniciar_sesion: React.FC = () => {

  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  const navigate2 = useNavigate();

  const handleButtonClick = () => {
    navigate2('/registro');
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:8085/thegamezone/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      login(data.token);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-full h-16 bg-white shadow shadow-gray-200 flex items-center px-12">
        <Link href="/">
        <TheGameZoneIcon className=" size-9 text-yellow-300" />
        <p className="hidden sm:block font-bold text-xl pl-1 font-demo text-primary-500">TheGameZone</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 place-items-center pt-6">
        <div className="sm:w-[450px]">
          <p className="text-2xl font-extrabold text-default-800">Bienvenido a TheGameZone</p>
          <p className="text-small mb-6 text-default-500">Ingresa tu cuenta de TheGameZone</p>
          <form onSubmit={handleLogin} className="grid grid-cols-1 gap-4">
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
            <div className="grid justify-items-center mt-2">
              <Button onPress={onOpen} type="submit" color="primary" size="md">
                Iniciar Sesion
              </Button>
              <p>o</p>
              <Button onClick={handleButtonClick} color="primary" variant="ghost">
                Registrarse
              </Button>
            </div>
          </form>
          <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              <>
                <ModalBody>
                  {error && <div className="text-danger-500 font-bold text-2xl p-4 text-center">
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
        </div>
      </div>
    </>
  );
};

export default Iniciar_sesion;
