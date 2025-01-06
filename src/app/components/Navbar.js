'use client';

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { SignOutButton, SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { user } = useUser();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="text-inherit font-bold">MarkVault</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:flex hidden gap-4" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
        {user && (
          <NavbarItem>
            <Link href="/dashboard" color="foreground">
              Dashboard
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {user ? (
            <SignOutButton className="sm:block md:block lg:block hidden">
              <Button color="primary" variant="flat">
                Sign Out
              </Button>
            </SignOutButton>
          ) : (
            <SignInButton mode="modal">
              <Button color="primary">Get Started</Button>
            </SignInButton>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/" className="w-full" color="foreground">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/about" className="w-full" color="foreground">
            About
          </Link>
        </NavbarMenuItem>
        {user && (
          <NavbarMenuItem>
            <Link href="/dashboard" className="w-full" color="foreground">
              Dashboard
            </Link>
          </NavbarMenuItem>
        )}
        <NavbarMenuItem>
          {user ? (
            <SignOutButton>
              <Button color="primary" variant="flat" className="w-full">
                Sign Out
              </Button>
            </SignOutButton>
          ) : (
            <SignInButton mode="modal">
              <Button color="primary" className="w-full">
                Get Started
              </Button>
            </SignInButton>
          )}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
