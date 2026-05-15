import Link from "next/link";
import { BBLogo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="bg-ink min-h-screen flex flex-col items-center justify-center px-6 text-center bb">
      <div className="bb-grain dark"></div>
      <div className="relative z-10">
        <BBLogo variant="mark-bone" />
        <h1 className="text-[80px] font-display text-acc leading-none mt-8 mb-2">
          404
        </h1>
        <h2 className="text-[22px] font-display text-bone mb-3">
          Esta página no existe
        </h2>
        <p className="text-[14px] font-mono text-mute mb-8 max-w-sm uppercase">
          Puede que la URL esté mal escrita, o que la página que buscabas haya
          sido movida.
        </p>
        <Link
          href="/"
          className="bg-acc text-bone px-6 py-3 rounded-none text-[14px] font-mono uppercase tracking-widest hover:opacity-90 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
