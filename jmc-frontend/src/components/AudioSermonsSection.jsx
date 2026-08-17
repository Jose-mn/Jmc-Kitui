import { motion } from "framer-motion";
import { Headphones, ExternalLink, Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/sermonsjmc";

const audioTracks = [
  {
    id: 1,
    title: "Walking in Supernatural Grace & Power",
    series: "JMC Word & Power Series",
    duration: "45 mins",
    speaker: "Bishop Elijah Mutua",
    gradient: "from-purple-800 via-purple-900 to-slate-950",
    accent: "bg-purple-500",
  },
  {
    id: 2,
    title: "How to Hear and Discern the Voice of God",
    series: "Spiritual Growth Series",
    duration: "52 mins",
    speaker: "Bishop Elijah Mutua",
    gradient: "from-purple-700 via-indigo-900 to-slate-950",
    accent: "bg-purple-400",
  },
  {
    id: 3,
    title: "Overcoming Life Battles by the Word",
    series: "Victory in Christ",
    duration: "38 mins",
    speaker: "Bishop Elijah Mutua",
    gradient: "from-indigo-800 via-purple-950 to-slate-950",
    accent: "bg-purple-500",
  },
  {
    id: 4,
    title: "The Mystery and Power of Daily Devotion",
    series: "Prayer & Fellowship",
    duration: "41 mins",
    speaker: "Rev. Ruth Mutua",
    gradient: "from-purple-900 via-violet-950 to-slate-950",
    accent: "bg-purple-400",
  },
];

export default function AudioSermonsSection({
  title = "Latest Audio Sermons",
  subtitle = "Listen to spirit-filled audio teachings, devotions, and messages on Telegram"
}) {
  return (
    <section className="py-16 px-4 md:px-6 bg-purple-50/20 dark:bg-slate-900/60 border-t border-purple-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Top Header with Title and View All CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300">
                <Send className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                Telegram Audio Channel
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-purple-950 dark:text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-purple-700/80 dark:text-purple-300/80 text-sm md:text-base mt-1">
                {subtitle}
              </p>
            )}
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start sm:self-auto px-5 py-2.5 rounded-full bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/50 dark:hover:bg-purple-900 text-purple-900 dark:text-purple-200 text-sm font-bold shadow-sm transition-all duration-200 border border-purple-200 dark:border-purple-800"
          >
            <span>View All</span>
            <ExternalLink className="w-4 h-4 text-purple-700 dark:text-purple-300" />
          </a>
        </div>

        {/* Audio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audioTracks.map((item, index) => (
            <motion.a
              key={item.id}
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* Graphic Card Cover */}
              <div className={`relative aspect-square w-full rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between border border-purple-500/20 group-hover:scale-[1.03]`}>
                {/* Channel / Tag Header */}
                <div className="flex items-center justify-between text-white/90">
                  <span className="font-serif italic font-bold text-lg tracking-wide text-purple-200">
                    JMC Audio
                  </span>
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 backdrop-blur-md flex items-center justify-center group-hover:bg-purple-500/30 transition-colors border border-purple-400/30">
                    <Headphones className="w-4 h-4 text-purple-200" />
                  </div>
                </div>

                {/* Center / Waveform Area */}
                <div className="text-center my-auto">
                  <span className="text-[11px] uppercase tracking-widest text-purple-200/90 font-bold block mb-3">
                    Audio Sermon & Devotion
                  </span>
                  
                  {/* Waveform Graphic */}
                  <div className="flex items-center justify-center gap-1.5 h-10 px-4">
                    {[16, 28, 40, 22, 34, 18, 36, 26, 14].map((h, i) => (
                      <span
                        key={i}
                        className="w-1.5 rounded-full bg-purple-200 transition-all duration-300 group-hover:bg-purple-400"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Speaker Tag */}
                <div className="flex items-center justify-between text-xs text-purple-200/80 border-t border-purple-500/20 pt-3">
                  <span className="truncate">{item.speaker}</span>
                  <span className="text-[11px] text-purple-100 font-semibold">{item.duration}</span>
                </div>
              </div>

              {/* Title and Metadata below card */}
              <div className="mt-3.5 px-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-1 flex items-center gap-1.5">
                  <Send className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  <span>Listen on Telegram</span>
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Telegram Channel Direct Banner Callout */}
        <div className="mt-12 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-700/30">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/40 backdrop-blur-md flex items-center justify-center shrink-0 border border-purple-400/30">
              <Send className="w-7 h-7 text-purple-200" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Join our Telegram Audio Channel
              </h3>
              <p className="text-purple-200 text-sm md:text-base mt-1">
                Download and stream all full sermons, devotionals, and Sunday services directly on Telegram.
              </p>
            </div>
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-3.5 rounded-full bg-white text-purple-950 font-bold text-base shadow-lg hover:bg-purple-50 hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4 text-purple-700" />
            <span>Open @sermonsjmc</span>
          </a>
        </div>
      </div>
    </section>
  );
}
