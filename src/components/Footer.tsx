import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-neutral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/logo-light.svg" alt="DerBaumchirurg Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-primary">DerBaumchirurg</span>
            </div>
            <p className="text-white/70 mb-4">
              Professionelle Baumpflege und Fällarbeiten mit höchster Sorgfalt und Expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://wa.me/491745225935" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.11 3.89C17.95 1.73 15.04 0.5 12 0.5C5.93 0.5 1 5.43 1 11.5C1 13.65 1.56 15.73 2.61 17.55L1 23.5L7.09 21.93C8.83 22.9 10.4 23.49 12 23.49H12.01C18.07 23.49 23 18.56 23 12.49C23 9.45 21.77 6.54 19.61 4.38L20.11 3.89ZM12 21.54C10.56 21.54 9.13 21.16 7.85 20.4L7.55 20.24L3.83 21.18L4.77 17.53L4.6 17.22C3.27 15.34 2.97 13.37 3.52 11.4C4.07 9.43 5.53 7.67 7.53 6.47C9.53 5.27 11.97 4.74 14.35 5.02C16.73 5.3 18.85 6.38 20.38 8.05C21.91 9.72 22.74 11.88 22.74 14.11C22.73 18.24 18.13 21.54 12 21.54ZM17.5 14.2C17.2 14.07 15.87 13.42 15.59 13.33C15.31 13.25 15.1 13.2 14.9 13.5C14.7 13.8 14.19 14.4 14.01 14.61C13.83 14.82 13.65 14.84 13.36 14.71C13.07 14.58 12.19 14.3 11.15 13.37C10.34 12.65 9.79 11.76 9.61 11.46C9.43 11.16 9.59 11 9.75 10.85C9.89 10.71 10.06 10.5 10.21 10.32C10.36 10.14 10.41 10.01 10.49 9.8C10.57 9.6 10.52 9.42 10.47 9.28C10.41 9.14 9.86 7.81 9.61 7.22C9.37 6.64 9.12 6.71 8.93 6.71C8.75 6.7 8.54 6.7 8.34 6.7C8.14 6.7 7.82 6.75 7.54 7.05C7.26 7.35 6.56 8 6.56 9.32C6.56 10.64 7.5 11.91 7.65 12.12C7.8 12.33 9.78 15.35 12.77 16.5C13.57 16.84 14.2 17.04 14.69 17.19C15.5 17.45 16.23 17.41 16.81 17.36C17.45 17.3 18.5 16.73 18.75 16.03C19 15.33 19 14.75 18.94 14.63C18.88 14.5 18.68 14.43 18.38 14.3C18.08 14.17 17.8 14.33 17.5 14.2Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/70 hover:text-primary transition">Home</Link></li>
              <li><Link href="#leistungen" className="text-white/70 hover:text-primary transition">Leistungen</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-primary transition">Blog</Link></li>
              <li><Link href="#ueber-uns" className="text-white/70 hover:text-primary transition">Über uns</Link></li>
              <li><Link href="/kontakt" className="text-white/70 hover:text-primary transition">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+491745225935" className="text-white/70 hover:text-primary transition">+49 174 522 5935</a>
              </li>

              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:derbaumchirurg@gmail.com" className="text-white/70 hover:text-primary transition">derbaumchirurg@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">Bleiben Sie auf dem Laufenden über unsere Dienstleistungen und Angebote.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} DerBaumchirurg. Alle Rechte vorbehalten.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-white/50 hover:text-primary text-sm">Datenschutz</a>
            <a href="#" className="text-white/50 hover:text-primary text-sm">Impressum</a>
            <a href="#" className="text-white/50 hover:text-primary text-sm">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 