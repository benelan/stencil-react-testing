import type { GetStaticProps } from "next";
import { prerender } from "../utils/prerender-component";
import HelloWorld from "../components/HelloWorld";

interface IndexProps {
  prerenderHTML: string;
}

const Index = ({ prerenderHTML }: IndexProps) => {
  return (
    <main className="p-5">
      <div dangerouslySetInnerHTML={{ __html: prerenderHTML }} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await prerender(HelloWorld());
  return {
    props: { prerenderHTML: res.prerenderHTML },
    revalidate: 10,
  };
};

export default Index;
