import logoLaravel from "@/images/ci-logo.png";
import Image from "next/image";
import Link from "next/link";
export const Logo = (props) => {
  return (
    <Link href="/" className="brand-logo">
      <Image src={logoLaravel} height={80} width={80} alt="Laravel" layout="fixed" unoptimized />
    </Link>
  );
};
