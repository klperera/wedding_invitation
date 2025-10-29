"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, Heart, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function WeddingAgenda() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      time: "3:30 PM",
      title: "Wedding Ceremony",
      location: "St. Mary's Church, Thudella",
      description: "Join us for the sacred ceremony as we exchange vows",
      icon: Heart,
    },
    {
      time: "5:00 PM",
      title: "Photography Session",
      location: "Church Grounds",
      description: "Family and couple photography",
      icon: Camera,
    },
    {
      time: "7:00 PM",
      title: "Reception & Dinner",
      location: "Royal Ramesses (Adriana Ballroom), Seeduwa",
      description: "Celebration dinner with family and friends",
      icon: Heart,
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-background">
      {/* Calendar Design */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="w-full mx-auto mb-12"
      >
        <div className="relative max-w-2xl mx-auto">
          {/* Calendar binding rings/lines */}
          <div className="flex items-center justify-center gap-16 md:gap-32 mb-3">
            <div className="w-4 h-4 rounded-full border-2 border-foreground"></div>
            <div className="w-4 h-4 rounded-full border-2 border-foreground"></div>
            <div className="w-4 h-4 rounded-full border-2 border-foreground"></div>
          </div>

          {/* Horizontal lines above calendar */}
          <div className="absolute -top-1 left-0 right-0 flex flex-col gap-1">
            <div className="w-full h-px bg-foreground opacity-30"></div>
            <div className="w-full h-px bg-foreground opacity-30"></div>
            <div className="w-full h-px bg-foreground opacity-30"></div>
          </div>

          {/* Calendar date boxes container */}
          <div
            className="bg-card rounded-xl border-2 border-foreground overflow-hidden"
            style={{
              boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
            }}
          >
            {/* Month header */}
            <div className="text-center text-base md:text-lg uppercase tracking-widest py-4 text-muted-foreground font-serif border-b-2 border-foreground">
              December
            </div>

            {/* Three date boxes in a row */}
            <div className="flex items-stretch">
              {/* Day 12 */}
              <div className="flex-1 text-center py-6 md:py-8 border-r-2 border-foreground">
                <div
                  className="text-4xl md:text-6xl font-bold font-serif"
                  style={{ color: "var(--foreground)" }}
                >
                  12
                </div>
              </div>

              {/* Day 13 - Highlighted */}
              <div className="highlighted-day flex-1 text-center py-6 md:py-8 border-r-2 border-foreground relative">
                <div
                  className="text-5xl md:text-7xl font-bold font-serif"
                  style={{ color: "var(--foreground)" }}
                >
                  13
                </div>
              </div>

              {/* Day 14 */}
              <div className="flex-1 text-center py-6 md:py-8">
                <div
                  className="text-4xl md:text-6xl font-bold font-serif"
                  style={{ color: "var(--foreground)" }}
                >
                  14
                </div>
              </div>
            </div>

            {/* Year footer */}
            <div className="text-center text-lg md:text-xl font-serif text-muted-foreground py-4 border-t-2 border-foreground">
              2025
            </div>
          </div>
        </div>

        {/* CSS for highlighted day with heart pseudo-element */}
        <style jsx>{`
          .highlighted-day {
            position: relative;
            background: linear-gradient(
              to bottom,
              transparent,
              rgba(var(--main-color-rgb, 200, 90, 90), 0.05)
            );
          }

          .highlighted-day::after {
            content: "";
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 32px;
            height: 32px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23c85a5a'%3E%3Cpath d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/%3E%3C/svg%3E");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
            z-index: 10;
          }

          @media (min-width: 768px) {
            .highlighted-day::after {
              width: 48px;
              height: 48px;
              bottom: -24px;
            }
          }
        `}</style>
      </motion.div>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-serif text-center text-foreground mb-2 ${
            isVisible ? "animate-fade-in-down" : "opacity-0"
          }`}
        >
          SCHEDULE
        </h2>
        <div
          className={`text-center text-muted-foreground mb-12 font-serif tracking-widest text-sm ${
            isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
          }`}
        >
          Wedding Day Timeline
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <Card
              key={index}
              className={`border-2 border-foreground bg-card ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 animate-shimmer">
                    <event.icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-xl font-serif text-foreground">
                      {event.title}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-serif">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-serif">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
