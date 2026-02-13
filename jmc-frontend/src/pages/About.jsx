import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import bishop from "@/assets/leadership/bishop-elijah.jpg";
import revRuth from "@/assets/leadership/rev-ruth.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="bg-white text-gray-800">
      <Navigation />

      {/* HERO */}
      <section className="bg-churchPrimary text-white py-20 px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Jesus Manifestation Church
          </h1>
          <p className="text-lg leading-relaxed opacity-90">
            A Christ-centered ministry committed to revealing Jesus Christ
            through the Word, the Spirit, and transformed lives.
          </p>
        </motion.div>
      </section>

      {/* VISION */}
      <section className="py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-churchPrimary">
            Our Vision
          </h2>
          <p className="leading-relaxed text-gray-600">
           To be a spiritual home where relationships and gifts are nurtured to serve God and mankind 
          </p>
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="py-16 px-6 bg-churchMuted">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-churchPrimary">
            Our Mission
          </h2>
          <p className="leading-relaxed text-gray-600 mb-4">
            To teach God's people the biblical truth so that they become effective fishers of men for Jesus Christ.
            </p>
        </motion.div>
      </section>

      {/* BELIEFS */}
      <section className="py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-churchPrimary">
            What We Believe
          </h2>
          <p className="leading-relaxed text-gray-600 mb-4">
            We believe in Jesus Christ as the Son of God and Savior of the world.
            We believe in the authority of the Bible as the inspired Word of God,
            and in the work of the Holy Spirit in the life of every believer.
          </p>
          <p className="italic text-sm text-gray-500">
            “For no other foundation can anyone lay than that which is laid,
            which is Jesus Christ.” — 1 Corinthians 3:11
          </p>
        </motion.div>
      </section>

     {/* LEADERSHIP */}
<section className="py-16 px-6 bg-churchMuted">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    transition={{ duration: 0.6 }}
    className="max-w-6xl mx-auto"
  >
    <h2 className="text-3xl font-bold mb-10 text-center text-churchPrimary">
      Our Leadership
    </h2>

    <div className="grid md:grid-cols-2 gap-10">
      
      {/* Bishop */}
      <Card className="rounded-2xl shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={bishop}
              alt="Bishop Elijah Mutua"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold">
              Bishop Elijah Mutua
            </h3>
            <p className="text-sm text-churchSecondary font-medium mt-1">
              Lead Pastor
            </p>
            <p className="text-gray-600 mt-4">
              Serving with a heart for God’s people, grounded in prayer,
              humility, and biblical truth.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Reverend */}
      <Card className="rounded-2xl shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={revRuth}
              alt="Reverend Ruth Mutua"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold">
              Reverend Ruth Mutua
            </h3>
            <p className="text-sm text-churchSecondary font-medium mt-1">
              Co-Pastor
            </p>
            <p className="text-gray-600 mt-4">
              Passionate about nurturing faith, family, and spiritual growth
              within the church community.
            </p>
          </div>
        </CardContent>
      </Card>

    </div>
  </motion.div>
</section>


      {/* COMMUNITY */}
      <section className="py-16 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-churchPrimary">
            Our Church Family
          </h2>
          <p className="leading-relaxed text-gray-600">
            We are more than a congregation. We are a family united by faith,
            worship, and love, with ministries that allow everyone to grow,
            serve, and belong.
          </p>
        </motion.div>
      </section>
 <Footer />
    </div>
  );
}
