import { Hero, CardsList } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto sm:px-10 px-5 mb-8">
        <CardsList />
      </div>
    </>
  );
}
