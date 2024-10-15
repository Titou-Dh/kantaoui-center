import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import Translator from "@/components/Translator";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";



export const Navbar = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const newLocale: 'en' | 'de' | 'fr' = (pathParts[1] as 'en' | 'de' | 'fr') || 'en';
  const router = useRouter();

  const handleClick = (href: string) => () => {
    router.push(`/${newLocale}/${href}`);
  }

  return (
    <><NextUINavbar isBordered maxWidth="xl" className="text-primary-50 shadow-lg" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/logo.jpg" width={30} height={70} alt="logo" />
            <p className="font-bold text-black dark:text-white">Kantaoui Center</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">

        <ul className="hidden lg:flex gap-4 justify-start dark:text-slate-50 text-primaryBg ml-2">




          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <div
                className={clsx(
                  "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer "
                )}
                color="foreground"
                onClick={handleClick(item.href)}
              >
                {item.label[newLocale]}
              </div>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent><NavbarContent className="basis-1/5 hidden md:flex sm:basis-full" justify="end">
        <ThemeSwitch />
        <Translator />
      </NavbarContent><NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
        <Translator />
      </NavbarContent><NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <div className="text-lg cursor-pointer" onClick={handleClick(item.href)}>
                {item.label[newLocale]}
              </div>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
    </>
  );
};
