export default function ContactSection() {
  return (
    <section className="py-20 bg-yellow-500 dark:bg-yellow-600" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-white dark:text-gray-900">
          Get in Touch
        </h3>
        <p className="mt-4 text-lg text-white dark:text-gray-800">
          I am available for internships, freelance projects, or full-time
          opportunities. Feel free to reach out!
        </p>
        <a
          href="mailto:kattashivakmr@gmail.com"
          className="mt-8 inline-block bg-white dark:bg-gray-900 text-yellow-500 dark:text-yellow-300 py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
