interface CallToAction {
  name: string;
  href: string;
  icon: React.ElementType | string;
}

interface Product extends CallToAction {
  description: string;
}
