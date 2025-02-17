{/*export const metadata = {
  title:"Shop Layout",
  description: "Shop - Generated by create next app",
*/}

import TitlePage from "@/components/pagesComponents/TitlePage";
import { POST } from "../page";
import Link from "next/link";

export function generateMetadata({params}){

  const post = POST.find((post) => post.slug === params.slug);

  return {
    title: post.title,
    description: post.title + "Blog - Generated by create next app",
  }
}

const Slug = ({ params }) => {
    
  const post = POST.find((post) => post.slug === params.slug);

  return (
    <>
        <TitlePage title={post.title} />
        <p className="text-center mb-5">{post.content}</p>
        <div className="text-center">
          <Link
          href="/blog"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            >
            Volver
          </Link>
        </div>
    </>
  );
};

export default Slug;