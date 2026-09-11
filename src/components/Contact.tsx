export default function Contact() {
  const contactLinks = [
    { title: "LinkedIn", description: "Connect with me professionally or send me a message.", href: "https://www.linkedin.com/in/mustapha-jlem/", label: "Message on LinkedIn" },
    { title: "GitHub", description: "Explore my code, contributions, and active projects.", href: "https://github.com/MT-jlem", label: "Visit GitHub" },
  ];

  return (
    <section id="contact" className="flex w-full flex-col items-center gap-8 px-6 py-16 md:py-24 lg:px-24">
      <div className="max-w-2xl text-center">
        <p className="section-kicker">Let’s connect</p>
        <h2 className="section-title mt-2">Have a project in mind?</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">I’m always interested in thoughtful engineering challenges, new ideas, and meeting people who enjoy building useful things.</p>
      </div>
      <div className="grid w-full max-w-3xl gap-5 md:grid-cols-2">
        {contactLinks.map((link) => (
          <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="group rounded-xl bg-white p-7 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">
            <h3 className="text-xl font-bold text-slate-900">{link.title}</h3>
            <p className="mt-2 leading-7 text-slate-600">{link.description}</p>
            <span className="mt-5 inline-flex font-semibold text-teal-700 group-hover:text-teal-800">{link.label} <span aria-hidden="true" className="ml-2">↗</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}
