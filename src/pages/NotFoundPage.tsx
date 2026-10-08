import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { ArrowRight } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 : PAGE NOT FOUND"
        description="The requested page could not be found on BROVE custom apparel studio website."
      />

      <section className="py-24 bg-brove-paper border-b-2 border-brove-charcoal min-h-[70vh] flex items-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="w-24 h-24 bg-brove-yellow text-brove-charcoal mx-auto flex items-center justify-center border-4 border-brove-charcoal shadow-[6px_6px_0px_0px_rgba(23,23,23,1)]">
            <span className="font-display text-5xl font-bold">404</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-display text-6xl sm:text-7xl font-bold text-brove-charcoal">
              CANVAS NOT FOUND
            </h1>
            <p className="text-brove-ink text-base sm:text-lg font-sans max-w-md mx-auto">
              The page or apparel design you are looking for has moved or does not exist.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-brove-yellow text-brove-charcoal px-8 py-4 font-display text-2xl tracking-wider border-2 border-brove-charcoal hover:bg-brove-highlight transition-all shadow-[4px_4px_0px_0px_rgba(23,23,23,1)]"
            >
              <span>RETURN HOME</span>
              <ArrowRight className="w-6 h-6" />
            </Link>

            <Link
              to="/wardrobe"
              className="inline-flex items-center gap-2 bg-brove-charcoal text-brove-paper px-6 py-4 font-display text-xl tracking-wider border-2 border-brove-charcoal hover:bg-brove-graphite transition-all shadow-[4px_4px_0px_0px_rgba(242,212,0,1)]"
            >
              <span>EXPLORE WARDROBE</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};
