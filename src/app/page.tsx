type Props = {
  features?: string[];
};

export default async function Home({ }: Props) {
  const features = [
    "Next.js 14",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Geist UI",
    "NextAuth.js",
    "Prisma ORM",
    "PostgreSQL",
    "Vercel Deployment",
    "ESLint",
    "Prettier",
  ];

  return (
    <main className="text-center p-8">
      {features && features.length > 0 && (
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}
    </main>
  );
};
