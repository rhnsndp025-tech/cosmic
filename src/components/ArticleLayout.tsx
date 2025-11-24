import { ReactNode } from "react";

interface ArticleLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ArticleLayout({ title, description, children }: ArticleLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-8 py-12">
      <header className="mb-12 border-b border-border pb-8">
        <h1 className="text-5xl font-playfair font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-muted-foreground font-inter">{description}</p>
        )}
      </header>
      <div className="prose prose-neutral max-w-none font-inter">
        {children}
      </div>
    </article>
  );
}
