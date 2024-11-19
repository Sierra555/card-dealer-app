import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-start min-h-screen text-center">
        <h2 className="text-4xl font-bold text-red-600">Not Found</h2>
        <p className="mt-4 text-gray-600">
          Could not find the requested resource
        </p>
        <Link href="/" className="mt-6 w-full md:w-[200px]">
          <Button label="Return Home" />
        </Link>
      </div>
    </Container>
  );
}
