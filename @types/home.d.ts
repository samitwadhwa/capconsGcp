interface CallToAction {
  name: string;
  href: string;
  icon: React.ElementType | string;
}

interface Product extends CallToAction {
  description: string;
}

interface FramerCardProps {
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  children: React.ReactNode;
}

type SlideProps = {
  index: number;
  children: React.ReactNode;
  color: string;
};
