import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/assets/logo_overlay.svg"
        className="object-cover"
        alt="Logo Overlay"
        width={114}
        height={45}
        priority
      />
    </Link>
  );
}
