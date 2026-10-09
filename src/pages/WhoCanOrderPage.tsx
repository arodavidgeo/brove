import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { Users, GraduationCap, Briefcase, Trophy, Calendar, User } from "lucide-react";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";

export const WhoCanOrderPage: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    COLLEGES: <GraduationCap className="w-6 h-6 text-primary-container" />,
    COMPANIES: <Briefcase className="w-6 h-6 text-primary-container" />,
    TEAMS: <Trophy className="w-6 h-6 text-primary-container" />,
    EVENTS: <Calendar className="w-6 h-6 text-primary-container" />,
    BUSINESSES: <Users className="w-6 h-6 text-primary-container" />,
    INDIVIDUALS: <User className="w-6 h-6 text-primary-container" />,
  };

  return (
    <>
      <SEOHead
        title="WHO CAN ORDER : Custom Apparel for Colleges, Companies & Teams | BROVE"
        description="BROVE prints custom T-shirts and apparel for department events, corporate teams, sports groups, festivals, businesses, and individuals. Minimum 5 pieces."
        path="/who-can-order"
      />

      <div className="w-full bg-surface-paper dark:bg-surface-dark text-text-primary dark:text-text-on-dark pt-20 transition-colors duration-200">
        
        {/* Header Hero */}
        <section className="w-full bg-surface-dark text-text-on-dark py-12 md:py-16 border-b-4 border-primary-container relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin space-y-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary-container font-bold">
                COMMUNITIES, TEAMS &amp; CREWS
              </span>
            </div>

            <div className="max-w-3xl space-y-2">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-text-on-dark leading-none">
                WHO CAN ORDER?
              </h1>
              <p className="font-headline text-2xl sm:text-3xl text-primary-container uppercase tracking-wide">
                ONE IDEA. MANY POSSIBILITIES.
              </p>
              <p className="font-body text-base text-surface-container-highest max-w-2xl leading-relaxed">
                If you have an idea, a group, or an event, BROVE can print it. Minimum order is just 5 pieces.
              </p>
            </div>
          </div>
        </section>

        <WorkshopTicker />

        <div className="max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-12 sm:py-16 space-y-12">
          
          {/* Audiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_FACTS.audiences.map((audience) => (
              <div
                key={audience.title}
                className="bg-surface-white dark:bg-surface-dark-secondary border-2 border-text-primary dark:border-surface-dark-secondary p-8 rounded-lg space-y-4 shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#F2D400] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-surface-dark rounded flex items-center justify-center border border-surface-dark-secondary">
                    {iconMap[audience.title] || <Users className="w-6 h-6 text-primary-container" />}
                  </div>

                  <h2 className="font-headline text-3xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
                    {audience.title}
                  </h2>

                  <p className="text-sm font-body text-text-muted leading-relaxed">
                    {audience.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-neutral dark:border-surface-dark">
                  <Link
                    to={`/custom-order?audience=${encodeURIComponent(audience.title)}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark hover:text-primary transition-colors"
                  >
                    <span>START {audience.title} ORDER →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Conversion Box */}
          <div className="bg-primary-container text-text-primary p-8 rounded-lg border-2 border-text-primary flex flex-col md:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_#171717]">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-headline text-3xl uppercase leading-tight">
                HAVE AN EVENT TIMELINE TO MEET?
              </h3>
              <p className="font-body text-sm text-text-primary/90">
                Share your artwork and date requirements with our workshop team.
              </p>
            </div>
            <Link
              to="/custom-order"
              className="px-8 py-4 bg-surface-dark text-text-on-dark font-headline text-base uppercase tracking-wider rounded hover:bg-surface-dark-secondary active:scale-95 transition-all shadow-[2px_2px_0px_#FFFFFF] shrink-0"
            >
              SEND YOUR REQUIREMENT →
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};
