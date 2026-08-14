import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits, features,testimonials } from "@/lib/data";
import { ArrowRight,  Stethoscope, User } from "lucide-react";
import { Star, Users, BadgeCheck, BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-background">
      {/* <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-col-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge 
                 varient="outline" 
                 className='bg-emerald-900/30 px-4 py-2 text-emerald-400 text-sm font-medium' 
              >
                  Healthcare made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Connect with doctors 
                  <br/> 
                  <span className="gradient-title">
                  anytime,anywhere
                  </span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform.
              </p>


              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  aschild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/onboarding" className="flex item-center gap-2">
                    Get Started <ArrowRight className=" h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  aschild
                  variant="outline"
                  size="lg"
                  className="border-emerald-700/30 hover:bg-muted/80"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
          
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-xl overflow-hidden ">
              <Image
              src='/banner2.png'
              alt="Doctor consultation"
              fill
              priority 
              className="object-cover md:pt-14 rounded-xl"/>

            </div>
          </div>
        </div>
      </section> */}

<section className="relative isolate overflow-hidden">
      {/* full-bleed clinic imagery */}
      <div className="absolute inset-0 -z-10">
        <img
          src='/HeroTwo.png'
          alt="Modern Harbor Dental clinic interior with comfortable treatment chair and natural light"
          className="size-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r to-blue-100 from-foreground/80 via-foreground/55 to-foreground/15 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-foreground/20" /> */}
         <div className="absolute inset-0 hero-gradient" />
         <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-900/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-14 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-3.5 py-1.5 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-background opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-background" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-background">
              Now accepting new patients
            </span>
          </div>

          <h1 className="mt-8 font-serif text-[2.75rem] font-bold leading-[1.03] tracking-tight text-balance text-background md:text-7xl lg:text-[5.25rem]">
            Professional dental care
            <br className="hidden sm:block" />{" "}
            <span className="italic text-background/70">you can trust.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-background/75">
            Safe, reliable and genuinely comfortable dentistry — advanced technology, strict sterilization protocols and a team that treats you like family.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground shadow-xl transition-all hover:-translate-y-0.5"
            >
              Schedule a Consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-background/35 px-8 py-4 text-sm font-semibold text-background backdrop-blur transition-colors hover:bg-background/10"
            >
              Explore Services
            </a>
          </div>
        </div>
        {/* glass stat strip */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-background/20 bg-background/15 backdrop-blur-md sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {[
            { icon: Star, value: "4.9/5", label: "1,200+ patient reviews" },
            { icon: Users, value: "4,000+", label: "Patients cared for" },
            { icon: BadgeCheck, value: "Verified", label: "Daily sterilization testing" },
            { icon: BriefcaseBusiness, value: "15+ yrs", label: "Board-certified practice" },
          ].map(({ icon:Icon, value, label }) => (
            <div key={value} className="flex items-center gap-4 bg-foreground/25 px-6 py-6">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-background/15 text-background">
                <Icon  className="size-5" />
              </span>
              <div>
                <p className="text-lg font-semibold text-background">{value}</p>
                <p className="text-xs text-background/70">{label}</p>
              </div>
            </div>
             ))}
        </div>
        </div>
</section>


      {/* feature section */}



      <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hpw it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform makes healthcare accessible with just a few clicks
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature,index)=>(
            <Card
            key={index}
            className="bg-card border-emerald-900/20 hover:border-emerald-800/40 transition-all duation-300">
              <CardHeader className="pb-2">
                <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
            </Card>
          ))}

        </div>
      </div>
      </section>
      <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 tewxt-emerald-400 text-sm font-medium mb-4 text-white">Affordable Healthcare</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Consultation Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform makes healthcare accessible with just a few clicks
          </p>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-emerald-400"/>
                How are credit system works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {creditBenefits.map((benefit,index)=>(
                  <li key={index} className="flex item-start">
                    <div className="mr-3 mt-1 bg-emrald-900/20 p-1 rounded-full flex ">
                      <svg
                          className="h-4 w-4 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                         <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      </section>
        {/* Testimonials with green medical accents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from patients and doctors who use our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-emerald-900/20 hover:border-emerald-800/40 transition-all"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4">
                      <span className="text-emerald-400 font-bold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
             0           {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with green medical styling */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to take control of your healthcare?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experience
                  healthcare the way it should be.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    aschild
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    aschild
                    variant="outline"
                    size="lg"
                    className="border-emerald-700/30 hover:bg-muted/80"
                  >
                    <Link href="#pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Decorative healthcare elements */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
            </CardContent>
          </Card>
        </div>
      </section>

    
    </div>
  
  );
}
