'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Review = {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
};

const ReviewCard: React.FC<{ review: Review; index: number }> = ({ review }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-primary transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {renderStars(review.rating)}
        </div>
        <span className="ml-2 text-sm text-neutral/60">{review.date}</span>
      </div>
      
      <blockquote className="text-neutral/80 mb-4 italic text-base leading-relaxed">
        &ldquo;{review.comment}&rdquo;
      </blockquote>
      
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-neutral">{review.name}</h4>
            <p className="text-sm text-neutral/60">{review.location}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-primary-dark font-medium">{review.service}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sebastian Hüthwohl",
      location: "Berlin-Mitte", 
      rating: 5,
      comment: "James hat bei mir 5 Bäume im Februar gekürzt. Bin sehr zufrieden mit dem Ergebnis. Die Absprache und Terminierungen war problemlos und zuverlässig. Der gesamte Abschnitt wurde entsorgt und die Bäume von getrockneten Efeu befreit. James und sein Team kann ich nur schwer empfehlen.",
      service: "Baumpflege",
      date: "Mai 2025"
    },
    {
      id: 2,
      name: "Regina Bock",
      location: "Brandenburg",
      rating: 5,
      comment: "Der Baumchiurg James ist sehr zu empfehlen, arbeiten sauber und korrekt,entsorgen auf Wunsch auch den Abfall vom Baumschnitt Ich war sehr zufrieden mit den Leuten.👍🤗macht weiter so",
      service: "Baumfällung", 
      date: "Mai 2025"
    },
    {
      id: 3,
      name: "Thomas Bauer",
      location: "Berlin-Charlottenburg",
      rating: 5,
      comment: "James und sein Team haben hervorragende Arbeit geleistet. Die Bäume wurden professionell und sicher beschnitten. Alles wurde sauber aufgeräumt und entsorgt. Sehr zuverlässig und kompetent, kann ich nur weiterempfehlen! 👍",
      service: "Baumpflege",
      date: "Mai 2025"
    },
    // {
    //   id: 4,
    //   name: "Anna Schmidt",
    //   location: "Brandenburg an der Havel",
    //   rating: 5,
    //   comment: "Exzellente Gartenarbeit und Heckenschnitt. Unser Garten sieht jetzt wie neu aus. Vielen Dank für die tolle Arbeit!",
    //   service: "Gartenarbeit",
    //   date: "Oktober 2024"
    // },
    // {
    //   id: 5,
    //   name: "Klaus Hoffmann",
    //   location: "Berlin-Spandau",
    //   rating: 5,
    //   comment: "Sehr gründliche Baumprüfung mit detailliertem Bericht. Kompetente Beratung und faire Preise. Würde ich jederzeit wieder beauftragen.",
    //   service: "Baumprüfung",
    //   date: "August 2024"
    // },
    // {
    //   id: 6,
    //   name: "Lisa Wagner",
    //   location: "Cottbus",
    //   rating: 5,
    //   comment: "Perfekte Kronensicherung für unseren alten Eichenbaum. Fachkundige Arbeit mit viel Erfahrung. Sehr zufrieden!",
    //   service: "Kronensicherung",
    //   date: "September 2024"
    // }
  ];

  const stats = [
    { number: "240+", label: "Zufriedene Kunden" },
    { number: "5+", label: "Jahre Erfahrung" },
    { number: "5", label: "⭐ Bewertung" },
    { number: "100%", label: "Professionell" }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="bewertungen">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/30 rounded-full transform -translate-x-24 translate-y-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-6">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-neutral/70 max-w-3xl mx-auto">
            Überzeugen Sie sich von der Qualität unserer Arbeit durch die Bewertungen unserer zufriedenen Kunden aus Berlin, Brandenburg und Umgebung.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
                {stat.number}
              </div>
              <div className="text-neutral/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral mb-4">
              Werden Sie unser nächster zufriedener Kunde!
            </h3>
            <p className="text-lg text-neutral/70 mb-8">
              Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-primary text-white font-medium text-lg shadow-lg hover:bg-primary-dark transform hover:-translate-y-1 transition duration-300"
              >
                Kostenlose Beratung
              </a>
              <a
                href="https://wa.me/491745225935"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-primary-dark border-2 border-primary font-medium text-lg shadow-lg hover:bg-primary hover:text-white transform hover:-translate-y-1 transition duration-300"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp schreiben
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews; 