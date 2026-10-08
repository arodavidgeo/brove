import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { ArrowRight, Users, GraduationCap, Briefcase, Trophy, Calendar, User } from "lucide-react";

export const WhoCanOrderPage: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    COLLEGES: <GraduationCap className="w-8 h-8 text-brove-yellow" />,
    COMPANIES: <Briefcase className="w-8 h-8 text-brove-yellow" />,
    TEAMS: <Trophy className="w-8 h-8 text-brove-yellow" />,
    EVENTS: <Calendar className="w-8 h-8 text-brove-yellow" />,
    BUSINESSES: <Users className="w-8 h-8 text-brove-yellow" />,
    INDIVIDUALS: <User className="w-8 h-8 text-brove-yellow" />,
  };

  return (
    <>
      <SEOHead
        title="WHO CAN ORDER : Custom Apparel for Colleges, Companies & Teams"
        description="BROVE prints custom T-shirts and apparel for department events, corporate teams, sports groups, festivals, businesses, and individuals."
        path="/who-can-order"
      />

      <section className="py-16 bg-brove-paper border-b-2 border-brove-charcoal">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-block bg-brove-yellow text-brove-charcoal px-3 py-1 font-mono text-xs font-bold border border-brove-charcoal">
              TARGET AUDIENCE & GROUPS
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-bold text-brove-charcoal tracking-tight">
              WHO CAN ORDER?
            </h1>
            <p className="text-brove-ink text-base sm:text-lg font-sans">
              ONE IDEA. MANY POSSIBILITIES. If you have an idea, a group, or an event, BROVE can print it.
            </p>
          </div>

          {/* Audiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_FACTS.audiences.map((audience) => (
              <div
                key={audience.title}
                className="bg-white border-2 border-brove-charcoal p-8 space-y-4 shadow-[6px_6px_0px_0px_rgba(23,23,23,1)] hover:bg-brove-highlight/20 transition-colors"
              >
                <div className="w-14 h-14 bg-brove-charcoal flex items-center justify-center border border-brove-yellow">
                  {iconMap[audience.title] || <Users className="w-8 h-8 text-brove-yellow" />}
                </div>

                <h2 className="font-display text-4xl font-bold text-brove-charcoal">
                  {audience.title}
                </h2>

                <p className="text-sm font-sans text-brove-ink leading-relaxed">
                  {audience.description}
                </p>

                <div className="pt-2">
                  <Link
                    to="/custom-order"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brove-charcoal hover:underline"
                  >
                    <span>REQUEST QUOTE FOR {audience.title}</span>
                    <ArrowRight className="w-4 h-4 text-brove-yellow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};
