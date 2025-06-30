import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/lib/placeholder-data";
import { Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SingleArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:px-8">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">{article.title}</h1>
            <div className="flex items-center gap-6 text-md text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>By {article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
            </div>
          </header>

          <Image
            src={article.imageUrl}
            alt={article.title}
            data-ai-hint={article.dataAiHint}
            width={1200}
            height={600}
            className="w-full rounded-lg shadow-lg mb-8"
          />

          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  );
}
