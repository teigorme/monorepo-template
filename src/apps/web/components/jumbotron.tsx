import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function Jumbotron() {
  return (
    <section className="relative">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <Link
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 rounded-full dark:bg-blue-900 dark:text-blue-300  dark:hover:bg-blue-800"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
            Novo
          </span>
          <span className="text-sm font-medium">
            Plataforma de Web angolana
          </span>
          <svg
            className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl ">
          Encontre os melhores Web de Angola
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          qui porro voluptatum, maxime quia tempora possimus eum distinctio
          delectus nostrum quo iste commodi debitis aliquid!
        </p>
        <form className="w-full max-w-md mx-auto">
          <Label
            htmlFor="name"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Nome do curso
          </Label>
          <div className="relative">
            <Input
              type="search"
              id="name"
              className="block w-full  text-sm text-gray-900 border border-gray-300 rounded-lg bg-white "
              placeholder="Procurar pelo curso..."
              required
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Jumbotron;
