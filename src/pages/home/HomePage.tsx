import { Link } from "react-router";
import { Page } from "@/components/page/Page";
import { PageContainer } from "@/components/page/PageContainer";
import { PageContainerItem } from "@/components/page/PageContainerItem";
import { Button } from "@/components/button/Button";
import { NAVIGATION_KEY } from "@/components/navigation/constants";
import HeroBanner from "@/assets/photos/Home_Banner.jpg";
import { ChevronRight, Quote } from "lucide-react";

const blogPosts = [
  {
    day: 1,
    date: "Oct 12, 2025",
    title: "Steam and Silence: The Hot Springs of Labis",
    highlights: ["Labis Hot Springs", "Takah Pengit Falls"],
    image: "https://images.unsplash.com/photo-1544123234-97229712d482?auto=format&fit=crop&q=80&w=1000",
    content: "I didn't expect to find rejuvenation in a small town in Johor, but as the steam rose from the local hot springs at 7 AM, I felt the city stress melting away. The water is therapeutic, the air is crisp, and the locals are incredibly welcoming...",
    link: NAVIGATION_KEY.ITINERARY_DAY_1
  },
  {
    day: 2,
    date: "Oct 13, 2025",
    title: "Dusty Boots & Dragon Fruit",
    highlights: ["Fruit Orchards", "Rubber Plantations"],
    image: "https://images.unsplash.com/photo-1615485240384-56bc0cc7963b?auto=format&fit=crop&q=80&w=1000",
    content: "Spent the morning walking through rows of dragon fruit plants. There's a specific rhythm to life here that revolves around the harvest. I learned how rubber is tapped—a painstaking process that demands respect for the land and the worker...",
    link: NAVIGATION_KEY.ITINERARY_DAY_2
  },
  {
    day: 3,
    date: "Oct 14, 2025",
    title: "The Soul of the Hockchow Kitchen",
    highlights: ["Pekan Labis", "Red Wine Noodles"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000",
    content: "My last day was all about the palate. You haven't truly experienced Labis until you've sat in a heritage coffee shop, watching the world go by over a bowl of handmade Hockchow red wine noodles. It tastes like home, even if you're just a visitor...",
    link: NAVIGATION_KEY.ITINERARY_DAY_3
  }
];

export const HomePage = () => {
  return (
    <Page hideTopPadding>
      {/* <section className="relative w-full overflow-hidden h-auto min-h-[400px] md:h-screen flex justify-center">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HeroBanner})` }}
        ></div>
      </section>
      <PageContainer>
        <PageContainerItem className="mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </PageContainerItem>
        <PageContainerItem>
          <Button asChild>
            <Link to={NAVIGATION_KEY.ITINERARY_DAY_1}>View Day 1</Link>
          </Button>
          <Button asChild>
            <Link to={NAVIGATION_KEY.ITINERARY_DAY_2}>View Day 2</Link>
          </Button>
          <Button asChild>
            <Link to={NAVIGATION_KEY.ITINERARY_DAY_3}>View Day 3</Link>
          </Button>
        </PageContainerItem>
      </PageContainer> */}
      <header className="pt-40 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">A Three-Day Escape</p>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">Finding the quiet rhythm of rural Johor.</h1>
          <div className="flex items-center justify-center gap-4 text-stone-400">
            <div className="w-12 h-[1px] bg-stone-300"></div>
            <span className="text-sm font-medium uppercase tracking-widest">By Sarah Miller</span>
            <div className="w-12 h-[1px] bg-stone-300"></div>
          </div>
        </div>
      </header>
      {/* Intro Quote */}
      <section className="max-w-2xl mx-auto px-4 pb-24">
        <div className="relative">
          <Quote className="absolute -top-6 -left-8 text-stone-100 w-20 h-20 -z-10" />
          <p className="text-xl text-stone-600 leading-relaxed italic text-center">
            "Labis isn't a place you go to 'do' things. It's a place you go to simply be. After 72 hours among the orchards and hot springs, I realized how much I needed the silence."
          </p>
        </div>
      </section>
      {/* Blog Entries */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="space-y-40">
          {blogPosts.map((post, idx) => (
            <article key={post.day} className="group">
              <div className={`flex flex-col gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Image side */}
                <div className="flex-1">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1 flex flex-col justify-center py-4">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-orange-600">Day 0{post.day}</span>
                    <span className="text-stone-300">—</span>
                    <span className="text-xs font-medium text-stone-400 uppercase tracking-widest">{post.date}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif mb-6 group-hover:text-orange-700 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-stone-600 leading-loose mb-8 line-clamp-4 md:line-clamp-none">
                    {post.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {post.highlights.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter bg-stone-100 text-stone-500 px-3 py-1 rounded-full">
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                  <Link to={post.link} className="inline-flex items-center gap-2 font-serif italic text-lg border-b border-stone-200 pb-1 w-fit hover:border-orange-600 transition-colors">Read the full entry <ChevronRight size={16} /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </Page>
  );
};
