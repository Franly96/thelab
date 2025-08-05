import Card from "@/components/common/Card";

type Props = {
  features?: string[];
};

export default async function Home({ }: Props) {
  const slices = [{
    title: "Software Engineer",
    description: "Content related to software engineering.",
    image: "/images/Gemini_Generated_Image_software_engineer.png",
  },
  {
    title: "AI & Machine Learning",
    description: "Content related to AI and machine learning.",
    image: "/images/Gemini_Generated_Image_ai_agent.png",
  },];

  return (
    <main className="text-center p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Lab</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {slices.map((slice, index) => (
          <Card
            key={index}
            title={slice.title}
            description={slice.description}
            image={slice.image}
          />
        ))}
      </div>
    </main>
  );
};
