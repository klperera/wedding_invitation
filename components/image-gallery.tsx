"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Upload } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ImageGallery() {
  const [images, setImages] = useState([
    "/couple-engagement.png",
    "/romantic-couple.png",
    "/casual-couple.png",
    "/formal-couple.png",
  ])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            setImages((prev) => [...prev, e.target!.result as string])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-accent mb-12">Our Journey Together</h2>

        <div className="max-w-6xl mx-auto">
          <Card className="mb-8 border-accent/20">
            <CardHeader>
              <CardTitle className="text-center text-accent">Share Your Memories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <span className="cursor-pointer">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Photos
                    </span>
                  </Button>
                </label>
                <p className="text-sm text-muted-foreground mt-2">Share your favorite moments with us!</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-accent/20">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
