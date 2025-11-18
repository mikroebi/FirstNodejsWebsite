import Image from 'next/image'
import Link from 'next/link'

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Our 15-Year Journey</h1>
        
        <div className="mb-16">
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            From a small family kitchen to a beloved Bern institution, our story is one of passion, tradition, and the love of perfect cookies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-300"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {/* 2008 - Beginning */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-5/12 text-right pr-8 hidden md:block">
                <h3 className="text-2xl font-semibold text-gray-800">The Beginning</h3>
                <p className="text-gray-600 mt-2">
                  In our small family kitchen, Grandmother Helga's secret cookie recipe was revived by her granddaughter, Maria. The first batch of "Helga's Honey Cookies" was baked for a local school fair.
                </p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                2008
              </div>
              <div className="w-full md:w-5/12 pl-8">
                <h3 className="text-2xl font-semibold text-gray-800 md:hidden">The Beginning</h3>
                <p className="text-gray-600 mt-2 md:hidden">
                  In our small family kitchen, Grandmother Helga's secret cookie recipe was revived by her granddaughter, Maria. The first batch of "Helga's Honey Cookies" was baked for a local school fair.
                </p>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg mt-4 md:hidden">
                  <Image
                    src="/images/history1.jpg"
                    alt="Early days of our bakery"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 2011 - First Shop */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-5/12 pr-8 text-right">
                <h3 className="text-2xl font-semibold text-gray-800">First Shop Opens</h3>
                <p className="text-gray-600 mt-2">
                  With growing demand, we opened our first small shop on Kramgasse in Bern's Old Town. Just 200 square feet, but filled with the aroma of freshly baked cookies and the warmth of Swiss hospitality.
                </p>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-lg mt-4">
                  <Image
                    src="/images/history2.jpg"
                    alt="Our first shop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative z-10 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                2011
              </div>
              <div className="w-full md:w-5/12 pl-8 hidden md:block">
                <h3 className="text-2xl font-semibold text-gray-800">First Shop Opens</h3>
                <p className="text-gray-600 mt-2">
                  With growing demand, we opened our first small shop on Kramgasse in Bern's Old Town. Just 200 square feet, but filled with the aroma of freshly baked cookies and the warmth of Swiss hospitality.
                </p>
              </div>
            </div>

            {/* 2015 - Expansion */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-5/12 text-right pr-8 hidden md:block">
                <h3 className="text-2xl font-semibold text-gray-800">Expansion & Recognition</h3>
                <p className="text-gray-600 mt-2">
                  We expanded to a larger location and introduced our signature "Bern Chocolate Delights." Our cookies won the "Best Swiss Confectionery" award, putting us on the national map.
                </p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                2015
              </div>
              <div className="w-full md:w-5/12 pl-8">
                <h3 className="text-2xl font-semibold text-gray-800 md:hidden">Expansion & Recognition</h3>
                <p className="text-gray-600 mt-2 md:hidden">
                  We expanded to a larger location and introduced our signature "Bern Chocolate Delights." Our cookies won the "Best Swiss Confectionery" award, putting us on the national map.
                </p>
              </div>
            </div>

            {/* 2018 - Online Store */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-5/12 pr-8 text-right">
                <h3 className="text-2xl font-semibold text-gray-800">Going Digital</h3>
                <p className="text-gray-600 mt-2">
                  Launched our online store, allowing cookie lovers across Switzerland and Germany to enjoy our treats. Introduced special packaging to ensure freshness during delivery.
                </p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                2018
              </div>
              <div className="w-full md:w-5/12 pl-8 hidden md:block">
                <h3 className="text-2xl font-semibold text-gray-800">Going Digital</h3>
                <p className="text-gray-600 mt-2">
                  Launched our online store, allowing cookie lovers across Switzerland and Germany to enjoy our treats. Introduced special packaging to ensure freshness during delivery.
                </p>
              </div>
            </div>

            {/* 2022 - International Recognition */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-5/12 text-right pr-8 hidden md:block">
                <h3 className="text-2xl font-semibold text-gray-800">International Recognition</h3>
                <p className="text-gray-600 mt-2">
                  Featured in "European Baking Magazine" as one of the top 10 bakeries in Europe. Began exporting to neighboring countries and opened a second location in Zurich.
                </p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                2022
              </div>
              <div className="w-full md:w-5/12 pl-8">
                <h3 className="text-2xl font-semibold text-gray-800 md:hidden">International Recognition</h3>
                <p className="text-gray-600 mt-2 md:hidden">
                  Featured in "European Baking Magazine" as one of the top 10 bakeries in Europe. Began exporting to neighboring countries and opened a second location in Zurich.
                </p>
              </div>
            </div>

            {/* 2023 - Present */}
            <div className="flex items-center justify-center">
              <div className="w-full md:w-5/12 pr-8 text-right">
                <h3 className="text-2xl font-semibold text-gray-800">15 Years of Cookie Excellence</h3>
                <p className="text-gray-600 mt-2">
                  Today, we're proud to continue Grandmother Helga's legacy while innovating with new flavors and sustainable practices. Our commitment to quality remains as strong as it was in our family kitchen 15 years ago.
                </p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                2023
              </div>
              <div className="w-full md:w-5/12 pl-8 hidden md:block">
                <h3 className="text-2xl font-semibold text-gray-800">15 Years of Cookie Excellence</h3>
                <p className="text-gray-600 mt-2">
                  Today, we're proud to continue Grandmother Helga's legacy while innovating with new flavors and sustainable practices. Our commitment to quality remains as strong as it was in our family kitchen 15 years ago.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Join Our Continuing Story</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            As we look to the future, we remain committed to the values that brought us here: quality ingredients, traditional techniques, and the joy of sharing perfect cookies with our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:cookiegerman@gmail.com" className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition duration-300">
              Share Your Cookie Memories With Us
            </a>
            <Link href="/products" className="inline-block px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition duration-300">
              Try Our Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}