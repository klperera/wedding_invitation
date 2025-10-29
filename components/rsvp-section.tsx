"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MessageCircle, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RSVPSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsApp = (number: string) => {
    window.open(`https://wa.me/${number}?text=Hello! I would like to RSVP for Dilum & Heshani's wedding.`, "_blank")
  }

  const handleCalendar = () => {
    const event = {
      title: "Dilum & Heshani Wedding",
      start: "20251213T153000Z",
      end: "20251213T220000Z",
      description: "Wedding ceremony at St. Mary's Church, Thudella followed by reception at Royal Ramesses, Seeduwa",
      location: "St. Mary's Church, Thudella",
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`
    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <section ref={sectionRef} className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-serif text-center text-foreground mb-2 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
        >
          RSVP
        </h2>
        <div
          className={`text-center text-muted-foreground mb-12 font-serif tracking-widest text-sm ${isVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"}`}
        >
          Please let us know before April 20th if you will be attending
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className={`border-2 border-foreground bg-background ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-center text-foreground font-serif">Please Confirm Your Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-8 font-serif">
                We would be honored by your presence on our special day. Please let us know if you'll be joining us!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className={`text-center ${isVisible ? "animate-slide-in-left animation-delay-300" : "opacity-0"}`}>
                  <h3 className="font-serif text-lg text-foreground mb-4">Contact Heshani</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background bg-background transition-all duration-300 hover:scale-105"
                      onClick={() => handleWhatsApp("94764919991")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp: 076-4919991
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background bg-background transition-all duration-300 hover:scale-105"
                      onClick={() => window.open("tel:+94764919991")}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call: 076-4919991
                    </Button>
                  </div>
                </div>

                <div
                  className={`text-center ${isVisible ? "animate-slide-in-right animation-delay-400" : "opacity-0"}`}
                >
                  <h3 className="font-serif text-lg text-foreground mb-4">Contact Dilum</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background bg-background transition-all duration-300 hover:scale-105"
                      onClick={() => handleWhatsApp("94775314997")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp: 077-5314997
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background bg-background transition-all duration-300 hover:scale-105"
                      onClick={() => window.open("tel:+94775314997")}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call: 077-5314997
                    </Button>
                  </div>
                </div>
              </div>

              <div className={`text-center ${isVisible ? "animate-fade-in-up animation-delay-500" : "opacity-0"}`}>
                <Button
                  className="bg-foreground hover:bg-foreground/90 text-background font-serif transition-all duration-300 hover:scale-105"
                  onClick={handleCalendar}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Add to Calendar
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6 font-serif">(Regrets Only)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
