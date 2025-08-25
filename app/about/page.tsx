import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Smith',
    position: 'Founder & CEO',
    image: '/images/pool table with bar.jpg',
    bio: 'With over 20 years of experience in the billiards industry, John leads our company with passion and expertise.',
  },
  {
    name: 'Sarah Johnson',
    position: 'Head of Design',
    image: '/images/game room decor items.jpg',
    bio: 'Sarah brings creativity and innovation to our game room designs, ensuring each project is unique and functional.',
  },
  {
    name: 'Michael Chen',
    position: 'Technical Director',
    image: '/images/game room lighting fixtures.jpg',
    bio: 'Michael oversees the technical aspects of our products, ensuring the highest quality standards.',
  },
];

export default function AboutPage() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/modern game room with bar.jpg"
            alt="Luxury Game Room"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Crafting excellence in billiards and game room solutions since 1995
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Kabo Billiards, we&apos;re dedicated to providing the highest quality billiards equipment and game room solutions. Our mission is to enhance the gaming experience for both casual players and professionals alike.
              </p>
              <p className="text-gray-600">
                We believe that a well-designed game room is more than just a space for entertainment—it&apos;s a place where memories are made and skills are honed. That&apos;s why we&apos;re committed to delivering excellence in every product we offer.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/game room seating.jpg"
                alt="Game Room Design"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, ensuring that every product meets our high standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to bring you the latest in billiards technology and design.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We&apos;re here to help you create the perfect gaming experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#DC143C] mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#000080] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl mb-8">
            Experience the difference that quality and expertise can make
          </p>
          <a href="/contact" className="btn-primary bg-white text-[#000080] hover:bg-gray-100">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
} 