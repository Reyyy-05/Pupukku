import Image from "next/image";
import { Leaf, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">About Pupukku</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Connecting agriculture's future through technology and trust.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="mx-auto max-w-5xl">
            <Image
              src="/images/Tech Company.png"
              alt="Team working in a field"
              data-ai-hint="team field"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg mb-4">
              Pupukku was born from a simple idea: to bridge the gap between fertilizer distributors and the farmers who feed our world. We saw dedicated farmers struggling with access to quality products and transparent pricing, while distributors sought a more efficient way to reach their customers.
            </p>
            <p className="text-muted-foreground text-lg">
              We decided to build a platform that fosters a direct, trustworthy connection. Pupukku is more than just a marketplace; it's a community dedicated to empowering farmers with the tools and knowledge they need to thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="mt-1 text-muted-foreground">To empower farmers by providing easy access to quality fertilizers and essential agricultural knowledge, fostering sustainable growth and prosperity.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="mt-1 text-muted-foreground">To become the leading digital platform in the agricultural supply chain, known for our commitment to quality, transparency, and farmer success.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              { name: 'Reyhan Albar ', role: 'Founder & CEO', img: '1', hint: 'man portrait' },
              { name: 'Malikhatus Sanea', role: 'Head of Product', img: '2', hint: 'woman portrait' },
              { name: 'Ilham Kurniawan', role: 'Lead Engineer', img: '3', hint: 'man tech' },
              { name: 'Nova Anugrahini', role: 'Farming Expert', img: '4', hint: 'woman nature' },
              { name: 'Miftahul Irfan', role: 'Marketing Lead', img: '5', hint: 'woman smiling' },
              { name: 'Rahmat Ivaldy', role: 'Operations Manager', img: '6', hint: 'man at desk' },
            ].map(person => (
              <div key={person.name} className="flex flex-col items-center">
                <Image
                  src={`https://placehold.co/200x200`}
                  data-ai-hint={person.hint}
                  alt={person.name}
                  width={150}
                  height={150}
                  className="rounded-full shadow-lg"
                />
                <h3 className="mt-4 text-lg font-bold">{person.name}</h3>
                <p className="text-primary">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
