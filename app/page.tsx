import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, BookOpen, Users, Globe, ArrowRight, Calendar, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Sustainability Institute</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#programs" className="text-sm font-medium hover:text-primary">
              Programs
            </Link>
            <Link href="#resources" className="text-sm font-medium hover:text-primary">
              Resources
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Building a Sustainable Future Through Education
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join our community of learners and changemakers dedicated to creating a more sustainable world
                    through knowledge, innovation, and action.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Explore Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Sustainability education"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="about">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Empowering Sustainable Change</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We combine cutting-edge research, practical education, and community engagement to address the world's
                  most pressing sustainability challenges.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <BookOpen className="h-6 w-6 text-green-800" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-muted-foreground">
                    Comprehensive courses and workshops on sustainability principles, practices, and innovations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Globe className="h-6 w-6 text-green-800" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Research</h3>
                  <p className="text-muted-foreground">
                    Pioneering research on climate solutions, renewable energy, sustainable agriculture, and more.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Users className="h-6 w-6 text-green-800" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-muted-foreground">
                    Building networks of sustainability advocates, professionals, and organizations for collective
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50" id="programs">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Our Programs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Learning Pathways for Sustainability Leaders
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover our diverse range of programs designed to equip you with the knowledge and skills to drive
                  sustainable change.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Sustainability Leadership Certificate</CardTitle>
                  <CardDescription>A comprehensive program for aspiring sustainability professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">12 weeks</span>
                    </div>
                    <p>
                      Develop the strategic vision and practical skills to lead sustainability initiatives in any
                      organization.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Climate Solutions Workshop</CardTitle>
                  <CardDescription>Hands-on training in climate mitigation and adaptation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">4 weeks</span>
                    </div>
                    <p>
                      Explore cutting-edge approaches to addressing climate change through policy, technology, and
                      community action.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sustainable Business Innovation</CardTitle>
                  <CardDescription>Transforming business models for a sustainable economy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">8 weeks</span>
                    </div>
                    <p>
                      Learn how to integrate sustainability into business strategy, operations, and innovation
                      processes.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                View All Programs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="resources">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Resources</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Knowledge Hub for Sustainability</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Access our collection of resources to deepen your understanding of sustainability challenges and
                  solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Research Reports",
                  description: "In-depth analysis of sustainability trends and innovations",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Case Studies",
                  description: "Real-world examples of successful sustainability initiatives",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Toolkits",
                  description: "Practical guides and frameworks for implementing sustainable practices",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Webinars",
                  description: "Expert discussions on emerging sustainability topics",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Policy Briefs",
                  description: "Analysis of sustainability policies and their implications",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Educational Videos",
                  description: "Visual explanations of key sustainability concepts",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((resource, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      width={300}
                      height={200}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                    <Link
                      href="#"
                      className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Explore
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Voices from Our Community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Hear from participants who have transformed their understanding and practice of sustainability through
                  our programs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "The Sustainability Leadership program gave me the knowledge and confidence to implement meaningful changes in my organization.",
                  name: "Sarah Johnson",
                  role: "Sustainability Director, Green Tech Inc.",
                },
                {
                  quote:
                    "I've applied the practical tools from the Climate Solutions Workshop to launch community initiatives that are making a real difference.",
                  name: "Michael Chen",
                  role: "Community Organizer",
                },
                {
                  quote:
                    "The institute's approach to combining theory with practice has been invaluable for my research and teaching on environmental justice.",
                  name: "Dr. Amara Okafor",
                  role: "Professor of Environmental Studies",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="italic">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="contact">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                    Get Involved
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Community</h2>
                  <p className="text-muted-foreground md:text-xl">
                    Connect with us to learn more about our programs, research opportunities, and how you can contribute
                    to building a sustainable future.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5 text-green-800"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="text-sm text-muted-foreground">123 Sustainability Way, Green City, 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5 text-green-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-sm text-muted-foreground">info@sustainabilityinstitute.org</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5 text-green-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter the subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Stay Connected</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Subscribe to our newsletter to receive updates on our programs, events, and sustainability insights.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-green-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">Sustainability Institute</span>
              </div>
              <p className="text-sm text-green-200">
                Building a sustainable future through education, research, and community engagement.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="hover:underline">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#resources" className="hover:underline">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Programs</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Sustainability Leadership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Climate Solutions Workshop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sustainable Business Innovation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Environmental Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Community Resilience
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="flex items-center hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-green-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Sustainability Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
