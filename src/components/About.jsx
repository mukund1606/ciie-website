import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="border-b-2 border-orange-500 my-4 mx-auto w-16 md:w-32"></div>
      <motion.div
        className="mx-auto w-5/6 px-4 md:w-4/5 lg:w-3/5 mb-20"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-justify leading-7 dark:text-slate-200">
          The Centre for Innovation, Incubation and Entrepreneurship (CIIE) is a
          student organization at SRM University that is dedicated to fostering
          and nurturing innovative ideas among students. Our mission is to
          provide a platform for students to explore their entrepreneurial
          interests, learn from industry experts, and build innovative solutions
          to real-world problems. We aim to inspire and empower the next
          generation of entrepreneurs and leaders by promoting creativity,
          innovation, and collaboration. Join us to unleash your potential and
          make a positive impact on the world!
        </p>
      </motion.div>
    </>
  );
}
