import { Banner } from "@/components/banner";
import fetchWrapper from "@/config/fetch-wrapper";

export interface responceTodoT {
  title?: string;
  description: string;
  image: string;
  id: number;
}

export default async function Home() {
  const data = await fetchWrapper<responceTodoT[]>("/banner", {
    next: { tags: ["users"] },
  });
  return (
    <>
      <div className="container">
        {data?.results?.map((item) => (
          <Banner key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
