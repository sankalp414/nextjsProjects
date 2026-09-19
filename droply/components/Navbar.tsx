"use client";

import { useClerk, Show } from "@clerk/nextjs"; // 💡 Upgraded: Imported <Show /> for Clerk Core 3
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { CloudUpload, ChevronDown, LogOut, FileText, User as UserIcon, Menu, X } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { User } from "@heroui/user"; 
import { Button } from "@heroui/button";
import { useState, useEffect, useRef } from "react";

interface SerializedUser {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  imageUrl?: string | null;
  username?: string | null;
  emailAddress?: string | null;
}

interface NavbarProps {
  user?: SerializedUser | null;
}

export default function Navbar({ user }: NavbarProps) {
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isOnDashboard = pathname === "/dashboard" || pathname?.startsWith("/dashboard/");

  // Combined Window Event Listeners for optimal performance
  useEffect(() => {
    const handleWindowEvents = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleWindowEvents);
    window.addEventListener("resize", handleWindowEvents);
    return () => {
      window.removeEventListener("scroll", handleWindowEvents);
      window.removeEventListener("resize", handleWindowEvents);
    };
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle clicks outside the mobile menu drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobileMenuOpen || !mobileMenuRef.current) return;
      
      const target = event.target as HTMLElement;
      if (!mobileMenuRef.current.contains(target) && !target.closest('[data-menu-button="true"]')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile navigation on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    await signOut(() => router.push("/"));
  };

  // Process user parameters cleanly
  const displayName = user
    ? user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : user.firstName || user.username || user.emailAddress || "User"
    : "User";

  const email = user?.emailAddress || "";

  return (
    <header
      className={`bg-default-50 border-b border-default-200 sticky top-0 z-50 transition-all ${
        isScrolled ? "shadow-sm backdrop-blur-md bg-default-50/80" : ""
      }`}
    >
      <div className="container mx-auto py-3 md:py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <CloudUpload className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">Droply</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 items-center">
            {/* 🔐 Clerk Core 3 Logged Out State */}
            <Show when="signed-out">
              <Button as={Link} href="/sign-in" variant="flat" color="primary">
                Sign In
              </Button>
              <Button as={Link} href="/sign-up" variant="solid" color="primary">
                Sign Up
              </Button>
            </Show>

            {/* 🔐 Clerk Core 3 Logged In State */}
            <Show when="signed-in">
              <div className="flex items-center gap-4">
                {!isOnDashboard && (
                  <Button as={Link} href="/dashboard" variant="flat" color="primary" size="sm">
                    Dashboard
                  </Button>
                )}
                
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      className="p-1 hover:bg-default-100 min-w-0 h-auto"
                      endContent={<ChevronDown className="h-4 w-4 text-default-400" />}
                    >
                      <User
                        name={displayName}
                        description={email}
                        avatarProps={{
                          src: user?.imageUrl || undefined,
                          size: "sm",
                          fallback: <UserIcon className="h-4 w-4" />
                        }}
                        classNames={{
                          name: "text-small font-semibold text-default-700 hidden lg:inline-block",
                          description: "text-tiny text-default-400 hidden lg:inline-block max-w-[120px] truncate"
                        }}
                      />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User actions" variant="flat">
                    <DropdownItem
                      key="profile"
                      as={Link}
                      href="/dashboard?tab=profile"
                      startContent={<UserIcon className="h-4 w-4" />}
                    >
                      Profile
                    </DropdownItem>
                    <DropdownItem
                      key="files"
                      as={Link}
                      href="/dashboard"
                      startContent={<FileText className="h-4 w-4" />}
                    >
                      My Files
                    </DropdownItem>
                    <DropdownItem
                      key="logout"
                      className="text-danger"
                      color="danger"
                      startContent={<LogOut className="h-4 w-4" />}
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Show>
          </div>

          {/* Mobile Action Controls Toggle Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              className="z-50 p-2 rounded-medium hover:bg-default-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              data-menu-button="true"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Upgraded Mobile Drawer Menu Overlay Panel */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="fixed top-[61px] right-0 bottom-0 w-3/4 max-w-sm bg-default-50 border-l border-default-200 z-40 p-6 flex flex-col justify-between shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {/* 🔐 Mobile Logged In View Context */}
              <Show when="signed-in">
                <div className="flex items-center gap-3 pb-4 border-b border-default-100">
                  <User
                    name={displayName}
                    description={email}
                    avatarProps={{
                      src: user?.imageUrl || undefined,
                      size: "md",
                      fallback: <UserIcon className="h-5 w-5" />
                    }}
                  />
                </div>
                <nav className="flex flex-col gap-2">
                  <Link href="/dashboard" className="p-2 rounded-medium hover:bg-default-100 font-medium text-default-700 flex items-center gap-2">
                    <FileText className="h-4 w-4" /> My Files
                  </Link>
                  <Link href="/dashboard?tab=profile" className="p-2 rounded-medium hover:bg-default-100 font-medium text-default-700 flex items-center gap-2">
                    <UserIcon className="h-4 w-4" /> Profile Setup
                  </Link>
                </nav>
              </Show>

              {/* 🔐 Mobile Logged Out View Context */}
              <Show when="signed-out">
                <div className="flex flex-col gap-3 pt-4">
                  <Button as={Link} href="/sign-in" variant="flat" color="primary" fullWidth>
                    Sign In
                  </Button>
                  <Button as={Link} href="/sign-up" variant="solid" color="primary" fullWidth>
                    Sign Up
                  </Button>
                </div>
              </Show>
            </div>

            <Show when="signed-in">
              <Button 
                color="danger" 
                variant="light" 
                startContent={<LogOut className="h-4 w-4" />}
                onClick={handleSignOut}
                fullWidth
                className="justify-start text-danger"
              >
                Sign Out
              </Button>
            </Show>
          </div>
        </>
      )}
    </header>
  );
}
