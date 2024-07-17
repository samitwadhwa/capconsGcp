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

interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
}

interface Blog {
  category: string;
  title: string;
  description?: string;
  username: string;
  date: string;
  imageUrl: string;
}