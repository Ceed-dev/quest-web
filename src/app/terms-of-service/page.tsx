export const metadata = {
  title: "Terms of Service | QUBE",
};

export default function TermsOfService() {
  return (
    <section className="bg-[#252525] text-[#BBA98D] min-h-screen py-16 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Page Title */}
        <h1 className="text-[35px] md:text-[50px] font-semibold text-[#D5B77A] mb-6">
          Terms of Service
        </h1>

        {/* Welcome Section */}
        <h2 className="text-[24px] md:text-[30px] font-semibold text-white mb-4">
          Welcome to QUBE!
        </h2>
        <p className="mb-4 leading-relaxed">
          These terms of service outline the rules and regulations for the use
          of Qube&rsquo;s website, located at{" "}
          <a
            href="https://web.0xqube.xyz"
            className="text-[#D5B77A] underline hover:text-[#F7E1D0]"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://web.0xqube.xyz
          </a>
          .
        </p>
        <p className="mb-4 leading-relaxed">
          By accessing this website we assume you accept these terms of service.
          Do not continue to use QUBE if you do not agree to all of the terms
          stated on this page.
        </p>

        {/* Cookies Section */}
        <h2 className="text-[24px] md:text-[30px] font-semibold text-white mt-8 mb-4">
          Cookies
        </h2>
        <p className="mb-4 leading-relaxed">
          We employ the use of cookies. By accessing QUBE, you agree to use
          cookies in agreement with QUBE&rsquo;s Privacy Policy.
        </p>

        {/* License Section */}
        <h2 className="text-[24px] md:text-[30px] font-semibold text-white mt-8 mb-4">
          License
        </h2>
        <p className="mb-4 leading-relaxed">
          Unless otherwise stated, Qube and/or its licensors own the
          intellectual property rights for all material on QUBE. All
          intellectual property rights are reserved. You may access this from
          QUBE for your own personal use subject to restrictions set in these
          terms of service.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Republish material from QUBE</li>
          <li>Sell, rent, or sub-license material from QUBE</li>
          <li>Reproduce, duplicate, or copy material from QUBE</li>
          <li>Redistribute content from QUBE</li>
        </ul>

        {/* User Content Section */}
        <h2 className="text-[24px] md:text-[30px] font-semibold text-white mt-8 mb-4">
          Comments and User Content
        </h2>
        <p className="mb-4 leading-relaxed">
          Qube is not responsible for user-posted content and reserves the right
          to remove inappropriate content.
        </p>

        {/* Hyperlinking Section */}
        <h2 className="text-[24px] md:text-[30px] font-semibold text-white mt-8 mb-4">
          Hyperlinking to our Content
        </h2>
        <p className="mb-4 leading-relaxed">
          Organizations such as government agencies, search engines, and news
          organizations may link to our website without prior written approval
          under certain conditions.
        </p>

        {/* Content Liability Section */}
        <h2 className="text-[24px] md:text-[30px] font-semibold text-white mt-8 mb-4">
          Content Liability
        </h2>
        <p className="mb-4 leading-relaxed">
          Qube is not responsible for any content that appears on your website
          linked to ours. You agree to protect and defend us against claims
          arising from content on your site.
        </p>

        {/* Disclaimer Section */}
        <h2 className="text-[24px] md:text-[30px] font-semibold text-white mt-8 mb-4">
          Disclaimer
        </h2>
        <p className="mb-4 leading-relaxed">
          The limitations and prohibitions of liability set in this section and
          elsewhere in this disclaimer are subject to applicable law. As long as
          the website and its services are provided free of charge, we shall not
          be liable for any loss or damage of any nature.
        </p>
      </div>
    </section>
  );
}
