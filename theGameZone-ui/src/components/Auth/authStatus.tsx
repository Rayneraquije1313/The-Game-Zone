import { useAuth } from './authContext';
import { ShopIcon, UserIcon } from '../icons';
import { Link } from '@nextui-org/link';
import { DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from '@nextui-org/dropdown'

const AuthStatus: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <div className="flex gap-8">
            <div className="flex items-center" >
              <Link>
                <ShopIcon className="size-6 text-primary-400" />
              </Link>
            </div>

            <Dropdown >
              <DropdownTrigger>
                <div>
                <UserIcon className='text-primary' />
                </div>
              </DropdownTrigger>
              <DropdownMenu>
              <DropdownItem>
                  Perfil
                </DropdownItem>
                <DropdownItem>
                  Configuracion
                </DropdownItem>
                <DropdownItem href='/registro'>
                  Crear productos
                </DropdownItem>
                <DropdownItem onClick={logout} className="text-danger" color="danger">
                  Cerrar Sesion
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </div>
        </>
      ) : (
        <>
          <div className="flex gap-4">
            <Link href='/registro' className='text-small'>
              Registrarse
            </Link>
            <Link href='/iniciar_sesion' className='text-center text-small
            text-white bg-primary-500 p-1 sm:p-2 rounded-xl'>
              Iniciar Sesion
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthStatus;