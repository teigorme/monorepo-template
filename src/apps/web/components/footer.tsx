import Link from "next/link";
import { siteConfig } from "@/config/site";
function Footer() {
  return (
    <footer className="p-4  md:p-8 lg:p-10 ">
      <div className="mx-auto max-w-screen-xl text-center">
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          qui porro voluptatum, maxime quia tempora possimus eum distinctio
          delectus nostrum quo iste commodi debitis aliquid!
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 ">
          {siteConfig.navItems.map((config) => (
            <li key={config.href}>
              <Link
                href={config.href}
                className="mr-4 hover:underline md:mr-6 "
              >
                {config.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            teigorme
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
