export interface NavType {
    label: string;
    href: string;
}

export interface NavigationDrawerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navLinks: NavType[];
}