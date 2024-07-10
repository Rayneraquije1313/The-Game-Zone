import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  SearchIcon,
  TheGameZoneIcon,
} from "@/components/icons";
import AuthStatus from "./Auth/authStatus";

export const NavbarPage = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "w-full text-sm md:w-[210px] lg:w-[400px]",
      }}
      labelPlacement="outside"
      radius="full"
      placeholder="Busca juegos, consolas y más..."
      startContent={
        <SearchIcon className=" text-xl mr-2 text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <>
    <NextUINavbar isBordered maxWidth="xl" className="px-6 bg-white fixed shadow shadow-gray-300">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand className="gap-3 max-w-fit">
            <Link
              className="flex justify-start items-center gap-1"
              color="foreground"
              href="/"
            >
              <TheGameZoneIcon className=" size-9 text-yellow-300" />
              <p className="hidden sm:block font-bold text-xl font-demo text-primary-500">TheGameZone</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarItem className="hidden md:flex mx-auto">{searchInput}</NavbarItem>

        <NavbarContent justify="end">
            <AuthStatus/>
        </NavbarContent>
    </NextUINavbar>
    <div className="md:hidden px-4">{searchInput}</div>
    </>
  );
};