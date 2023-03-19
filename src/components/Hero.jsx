import { motion } from "framer-motion";
import CIIELogo from "../utils/CIIELogo";

export default function Hero() {
  return (
    <>
      <motion.div
        className="flex justify-center "
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="md:w-4/5 flex flex-col lg:flex-row justify-center items-center p-10">
          <CIIELogo className="text-blac dark:text-slate-200 p-5 lg:max-w-[40%]" />
          <div className="flex gap-5 flex-col text-center lg:text-left text-[#0047ab] dark:text-slate-200">
            <h1 className="xl:text-6xl lg:text-5xl text-4xl font-extrabold dark:text-slate-200">
              CIIE - Center for Innovation, Incubation and Entrepreneurship
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold">
              SRM University, Delhi-NCR, Sonepat
            </h2>
          </div>
        </div>
      </motion.div>
    </>
  );
}
