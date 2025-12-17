"use client";

import ReactLenis from "lenis/react";
import { Loader2 } from "lucide-react";
import { lazy, Suspense } from "react";

// Lazy load the Canvas3D component
const Canvas3D = lazy(() => import("@/components/ui/3D/Canvas3D"));

export function ComingSoon() {
  return (
    <ReactLenis root>
      <main className="text-center justify-center items-center flex flex-col pt-36 gap-6 w-full">
        <h1 className="lg:text-2xl text-xl px-2">
          Vous n’êtes pas perdus, vous êtes juste en avance ! Cette page arrive
          bientôt.
        </h1>
        <Suspense
          fallback={
            <div className="bg-brand-powder min-h-[80vh] flex items-center justify-center rounded-lg mx-auto">
              <div className="text-center opacity-10 text-shadow-brand-beige">
                <Loader2 className="size-8 rounded-full animate-spin"></Loader2>
                <p className="text-brand-midnight">
                  Chargement de la scène 3D...
                </p>
              </div>
            </div>
          }
        >
          <div className="lg:w-196 lg:h-120 w-70 h-70 cursor-move">
            <Canvas3D />
          </div>
        </Suspense>
      </main>
    </ReactLenis>
  );
}
