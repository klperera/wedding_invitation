"use client"

import { MapPin, Navigation } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function LocationMaps() {
  const locations = [
    {
      name: "St. Mary's Church",
      address: "Thudella, Sri Lanka",
      time: "3:30 PM",
      type: "Ceremony",
      mapUrl: "https://maps.google.com/?q=St.+Mary's+Church+Thudella",
    },
    {
      name: "Royal Ramesses",
      address: "Adriana Ballroom, Seeduwa, Sri Lanka",
      time: "7:00 PM",
      type: "Reception",
      mapUrl: "https://maps.google.com/?q=Royal+Ramesses+Seeduwa",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-accent mb-12">Wedding Locations</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <div className="text-xl font-serif text-accent">{location.name}</div>
                    <div className="text-sm text-muted-foreground">{location.type}</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Interactive Map</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Address:</p>
                  <p className="font-medium">{location.address}</p>
                  <p className="text-sm text-muted-foreground">Time: {location.time}</p>
                </div>

                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => window.open(location.mapUrl, "_blank")}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
