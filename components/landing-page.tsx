"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  UserMultiple02Icon,
  UserIcon,
  Calendar03Icon,
  HonourStarIcon,
} from "@hugeicons/core-free-icons"

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <span className="text-xl font-bold">Nasara</span>
          </div>
          
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#nosotros" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Nosotros
            </a>
            <a href="#especialistas" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Especialistas
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              Iniciar sesión
            </Button>
            <Button size="sm">
              Registrarse
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Conéctate con un especialista en{" "}
              <span className="text-primary">salud mental</span> cuando lo necesites
            </h1>
            <p className="text-lg text-muted-foreground">
              Nada más urgente y primordial, psicología a través de videollamada desde cualquier lugar, más fácil que nunca. 
              Priorizamos tus dudas y te acompañamos en tu camino hacia el bienestar.
            </p>
            <div>
              <Button size="lg" className="text-base">
                Empezar ahora
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-full max-w-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <HugeiconsIcon
                  icon={UserMultiple02Icon}
                  strokeWidth={2}
                  className="h-6 w-6 text-primary"
                />
              </div>
              <div className="text-3xl font-bold">00K+</div>
              <div className="text-sm text-muted-foreground">Usuarios</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <HugeiconsIcon
                  icon={UserIcon}
                  strokeWidth={2}
                  className="h-6 w-6 text-primary"
                />
              </div>
              <div className="text-3xl font-bold">00+</div>
              <div className="text-sm text-muted-foreground">Profesionales</div>
            </div>
            
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <HugeiconsIcon
                  icon={Calendar03Icon}
                  strokeWidth={2}
                  className="h-6 w-6 text-primary"
                />
              </div>
              <div className="text-3xl font-bold">0+</div>
              <div className="text-sm text-muted-foreground">Citas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualified Professionals Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Accede a profesionales bien cualificados
            </h2>
            <p className="text-lg text-muted-foreground">
              cuando lo necesites, sin restricciones de horario ni ubicación
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  strokeWidth={2}
                  className="h-6 w-6 flex-shrink-0 text-primary"
                />
                <span>Atención Personalizada para Cada Necesidad</span>
              </div>
              <div className="flex items-start gap-3">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  strokeWidth={2}
                  className="h-6 w-6 flex-shrink-0 text-primary"
                />
                <span>Fácil de Usar y Tiempo Disponible</span>
              </div>
              <div className="flex items-start gap-3">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  strokeWidth={2}
                  className="h-6 w-6 flex-shrink-0 text-primary"
                />
                <span>Ahorro de Tiempo y Comodidad</span>
              </div>
              <div className="flex items-start gap-3">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  strokeWidth={2}
                  className="h-6 w-6 flex-shrink-0 text-primary"
                />
                <span>Soporte Integral y Continuo</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-full max-w-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Orientación y apoyo que necesitas
            </h2>
            <p className="text-lg text-muted-foreground">
              para cada etapa de la vida.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              En nuestra plataforma, encontrarás profesionales altamente calificados
              en diversas áreas de la salud mental y funcional
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10" />
                </div>
                <CardTitle className="text-center">Psiquiatra Adulto</CardTitle>
                <CardDescription className="text-center">
                  Atención especializada para cuidar de tu salud emocional y mental 
                  en la adultez
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="w-full sm:w-auto">Seleccionar</Button>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10" />
                </div>
                <CardTitle className="text-center">Psicología Infantil</CardTitle>
                <CardDescription className="text-center">
                  Intervenciones y tratamientos para acompañar a los niños en su 
                  crecimiento emocional
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="w-full sm:w-auto">Seleccionar</Button>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10" />
                </div>
                <CardTitle className="text-center">Neuropsicología</CardTitle>
                <CardDescription className="text-center">
                  Evaluaciones y tratamientos para potenciar tus capacidades cognitivas 
                  y superar dificultades
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="w-full sm:w-auto">Seleccionar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Qué dicen nuestros usuarios?
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre cómo nuestra plataforma ha transformado vidas.
            </p>
            <p className="text-sm text-muted-foreground">
              Opiniones reales de personas que encontraron el apoyo que necesitaban
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <CardTitle className="text-sm">Carlos R.</CardTitle>
                    <p className="text-xs text-muted-foreground">Su Paciente</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <HugeiconsIcon
                      key={i}
                      icon={HonourStarIcon}
                      strokeWidth={2}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  La atención fue excepcional. La disponibilidad 24/7 hace que siempre 
                  esté allí. Encontré la ayuda que necesitaba. Es una herramienta invaluable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <CardTitle className="text-sm">María D.</CardTitle>
                    <p className="text-xs text-muted-foreground">Su Paciente</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <HugeiconsIcon
                      key={i}
                      icon={HonourStarIcon}
                      strokeWidth={2}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gracias a esta plataforma, recibí respuestas rápidas y efectivas 
                  para mi salud mental y a mi familia. ¡Altamente recomendado!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <CardTitle className="text-sm">Laura S.</CardTitle>
                    <p className="text-xs text-muted-foreground">Su Paciente</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <HugeiconsIcon
                      key={i}
                      icon={HonourStarIcon}
                      strokeWidth={2}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Plataforma intuitiva y profesionales muy capacitados. Me siento
                  mucho mejor gracias al acompañamiento que recibí.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <CardTitle className="text-sm">Andrés M.</CardTitle>
                    <p className="text-xs text-muted-foreground">Su Paciente</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <HugeiconsIcon
                      key={i}
                      icon={HonourStarIcon}
                      strokeWidth={2}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Excelente servicio. La consulta fue muy útil desde casa. 
                  Nunca había sido tan fácil acceder a este tipo de servicios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="border-none bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="flex flex-col items-center justify-center space-y-6 p-8 text-center md:p-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Tu bienestar empieza hoy
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                asigna tu cita y da el primer paso hacia una vida más equilibrada.
              </p>
              <Button size="lg" className="text-base">
                Empezar ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Nasara</span>
              </div>
              <p className="text-sm text-muted-foreground">©2026 Nasara</p>
            </div>
            
            <div>
              <h3 className="mb-4 text-sm font-semibold">Nasara</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#inicio" className="hover:text-foreground">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-foreground">Nosotros</a></li>
                <li><a href="#especialistas" className="hover:text-foreground">Especialistas</a></li>
                <li><a href="#soporte" className="hover:text-foreground">Soporte</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#terminos" className="hover:text-foreground">Términos</a></li>
                <li><a href="#politicas" className="hover:text-foreground">Políticas</a></li>
                <li><a href="#privacidad" className="hover:text-foreground">Privacidad</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-sm font-semibold">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
