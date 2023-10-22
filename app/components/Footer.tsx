import Image from "next/image";
import { footerLinks, moto } from "../constant";
import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

function FooterColumn({ title, links }: ColumnProps) {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link, idx) => (
          <Link href="/" key={idx}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/logo-purple.svg"
            width={115}
            height={43}
            alt="Show off"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-sm">{moto}</p>
        </div>

        <div className="flex flex-wrap flex-1 md:flex-row gap-4 sm:gap-6 md:gap-12">
          {footerLinks.map((element, idx) => (
            <FooterColumn
              title={element.title}
              links={element.links}
              key={idx}
            />
          ))}
        </div>
        <div className="flex flex-row justify-between footer_copyright">
          <p>@2023 Showoff. All rights reserved</p>
          <p className="text-gray">
            <span className="text-black font-semibold"> 11,870 </span>
            projects submitted
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
