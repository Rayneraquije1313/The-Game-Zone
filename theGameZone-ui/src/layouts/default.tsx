import { FacebookIcon, InstagramIcon, WhatsappIcon, YoutubeIcon } from "@/components/icons";
import { NavbarPage } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Input, Button } from "@nextui-org/react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="mt-[80px]">
          <NavbarPage />
        </div>
        <main className="container max-w-full flex-grow pt-3">
          {children}
        </main>
        <footer className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center 
      bg-primary-500 pt-6 px-14 place-self-end">
          <div className="h-full p-4">
            <h1 className=" font-bold text-white">LEGAL Y PRIVACIDAD</h1>
            <div className="grid grid-cols-1 font-light pt-3 gap-2">
              <Link className="text-default-50" href="/">Centro de Ayuda</Link>
              <Link className="text-default-50" href="/">Preguntas Frecuentes (FAQ)</Link>
              <Link className="text-default-50" href="/">Políticas de Devolución</Link>
              <Link className="text-default-50" href="/">Términos y Condiciones</Link>
              <Link className="text-default-50" href="/">Política de Privacidad</Link>
              <Link className="text-default-50" href="/">Envíos y Entregas</Link>
            </div>
          </div>
          <div className="h-full p-4">
            <h1 className=" font-bold text-white">SOBRE NOSOTROS</h1>
            <div className="grid grid-cols-1 font-light pt-3 gap-2">
              <Link className="text-default-50" href="/">Acerca de Nosotros</Link>
              <Link className="text-default-50" href="/">Misión y Visión</Link>
              <Link className="text-default-50" href="/">Equipo</Link>
              <Link className="text-default-50" href="/">Sedes</Link>
            </div>
          </div>
          <div className="h-full p-4">
            <div className="grid grid-cols-1">
              <h1 className=" font-bold text-white">SUSCRIBETE</h1>
              <span className="text-tiny pt-1 text-white">Recibe las últimas novedades y ofertas especiales</span>
              <div className="pt-2 grid grid-cols-2 w-full">
                <Input type="email" label="" className="w-[240px]" placeholder="Ingrese su email" endContent={
                  <Button color="default" className="mr-[-12px]">
                    Unirse
                  </Button>
                } />

              </div>
            </div>
            <div className="pt-6">
              <h1 className=" font-bold text-white">REDES SOCIALES</h1>
              <div className="grid grid-cols-4 gap-2 w-[180px]">
                <Link className=" bg-white p-2 rounded-full justify-center mt-1">
                  <FacebookIcon />
                </Link>
                <Link className=" bg-white p-2 rounded-full justify-center mt-1">
                  <InstagramIcon />
                </Link>
                <Link className=" bg-white p-2 rounded-full justify-center mt-1">
                  <WhatsappIcon />
                </Link>
                <Link className=" bg-white rounded-full justify-center mt-1">
                  <YoutubeIcon />
                </Link>
              </div>
            </div>
          </div>
        </footer>
        <div className="bg-primary-500 px-[70px] flex sm:justify-center pt-2 pb-6 gap-1">
          <p className="font-bold text-small text-white mt-1">Copyright © 2024 | TheGameZone</p>
        </div>
      </div>
    </>
  );
}
