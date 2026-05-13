import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="bg-ink-900 min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <Logo />
      <h1 className="text-[80px] font-serif text-accent-400 leading-none mt-8 mb-2">
        404
      </h1>
      <h2 className="text-[22px] font-semibold text-white mb-3">
        Esta página no existe
      </h2>
      <p className="text-[14px] text-white/60 mb-8 max-w-sm">
        Puede que la URL esté mal escrita, o que la página que buscabas haya
        sido movida.
      </p>
      <Link
        href="/"
        className="bg-accent-500 text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-accent-600 transition-colors"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
