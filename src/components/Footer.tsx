import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-neutral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image src="/logo-light.svg" alt="Carter Tree Care Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-primary">Carter Tree Care</span>
            </div>
            <p className="text-white/70 max-w-sm mb-6">
              Professional tree care and tree removal with the highest care and expertise.
            </p>
            
            {/* Social Media Buttons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="group bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="#" 
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="https://wa.me/3531745225935" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-green-500 hover:bg-green-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
           <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
             <ul className="space-y-2">
               <li><Link href="/" className="text-white/70 hover:text-primary transition">Home</Link></li>
               <li><Link href="/services" className="text-white/70 hover:text-primary transition">Services</Link></li>
               <li><Link href="/blog" className="text-white/70 hover:text-primary transition">Blog</Link></li>
               <li><Link href="/faq" className="text-white/70 hover:text-primary transition">FAQ</Link></li>
               <li><Link href="/about-us" className="text-white/70 hover:text-primary transition">About Us</Link></li>
               <li><Link href="/contact" className="text-white/70 hover:text-primary transition">Contact</Link></li>
             </ul>
           </div>

          {/* Blog Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Guides</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/how-to-prune-trees" className="text-white/70 hover:text-primary transition">Tree Pruning Guide</Link></li>
              <li><Link href="/blog/tree-diseases-identification" className="text-white/70 hover:text-primary transition">Tree Diseases</Link></li>
              <li><Link href="/blog/tree-care-guide" className="text-white/70 hover:text-primary transition">Tree Care Tips</Link></li>
              <li><Link href="/blog/winter-pruning" className="text-white/70 hover:text-primary transition">Winter Pruning</Link></li>
              <li><Link href="/blog/storm-safe-trees" className="text-white/70 hover:text-primary transition">Storm Safety</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-primary transition font-medium">All Articles →</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.me/3531745225935" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center hover:text-primary transition-all duration-300"
                >
                  <div className="bg-green-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">+353 174 522 5935</p>
                    <p className="text-white/70 text-sm">WhatsApp</p>
                  </div>
                </a>
              </li>

              <li>
                <a 
                  href="mailto:jcartertreecare@gmail.com" 
                  className="group flex items-center hover:text-primary transition-all duration-300"
                >
                  <div className="bg-blue-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">jcartertreecare@gmail.com</p>
                    <p className="text-white/70 text-sm">E-Mail</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} Carter Tree Care. All rights reserved.</p>
          <a href="https://www.siteandsight.com" className="text-sm text-white/50 hover:text-primary transition">
            Webdesign by 
            <span className="text-primary hover:text-primary"> Site</span> 
            &
            <span className="text-primary hover:text-primary">Sight</span>
          </a>
          <div className="mt-4 md:mt-0 flex space-x-4 text-xs sm:text-sm">
            <Link href="/privacy" className="text-white/50 hover:text-primary transition">Privacy</Link>
            <Link href="/cookie-policy" className="text-white/50 hover:text-primary transition">Cookies</Link>
            <Link href="/imprint" className="text-white/50 hover:text-primary transition">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 