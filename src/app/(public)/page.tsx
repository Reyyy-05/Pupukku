import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { products, articles } from "@/lib/placeholder-data";
import { ArrowRight, Star, Leaf, BookOpen } from "lucide-react";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const featuredArticle = articles[0];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary/10 flex items-center justify-center">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Lush green field"
          data-ai-hint="lush field"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-20"
        />
        <div className="z-10 text-center text-primary-foreground p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Nurturing Growth, Harvesting Success
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your trusted partner for high-quality fertilizers and expert farming advice.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/articles">Farmers' Corner</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="mt-2 text-lg text-muted-foreground">Top picks for a bountiful harvest.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                   <Image src={product.imageUrl} alt={product.name} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={product.dataAiHint} />
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-xl font-headline">{product.name}</CardTitle>
                  <CardDescription className="mt-2 text-base">{product.description}</CardDescription>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" asChild>
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/products">Shop All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Why Pupukku?</h2>
            <p className="mt-2 text-lg text-muted-foreground">The farmer's choice for quality and support.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Quality Products</h3>
              <p className="mt-2 text-muted-foreground">Verified sellers offering premium, effective fertilizers for all your crop needs.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Expert Knowledge</h3>
              <p className="mt-2 text-muted-foreground">Access our Farmers' Corner for articles and guides to help you grow smarter.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold">Trusted by Farmers</h3>
              <p className="mt-2 text-muted-foreground">Join a community of farmers who trust us for their agricultural success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Farmers' Corner CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">From the Farmers' Corner</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-muted-foreground">{featuredArticle.title}</p>
                <Button className="mt-8" size="lg" asChild>
                  <Link href={`/articles/${featuredArticle.slug}`}>Read Article</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image
                className="w-full h-full object-cover"
                src={featuredArticle.imageUrl}
                data-ai-hint={featuredArticle.dataAiHint}
                alt={featuredArticle.title}
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
