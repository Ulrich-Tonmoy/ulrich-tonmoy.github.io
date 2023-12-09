import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta">
      <p className="text-slate-700 font-extrabold flex-1 text-3xl max-md:text-center">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link href="/portfolio/3d/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
