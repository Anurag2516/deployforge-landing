import { motion } from "framer-motion";
import {
  Blocks,
  ChartSpline,
  DatabaseZap,
  DollarSign,
  IdCard,
  Rocket,
} from "lucide-react";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: <Rocket size={32} className="text-orange-500" />,
      title: "Auto Deploy",
      desc: "Every push instantly builds and deploys — no CI setup.",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      icon: <IdCard size={34} className="text-green-500" />,
      title: "Built-in Auth",
      desc: "Secure user management with OAuth, magic links & JWT.",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      icon: <DatabaseZap size={32} className="text-yellow-400" />,
      title: "Managed Database",
      desc: "Production-ready Postgres with backups & migrations.",
      colSpan: "col-span-1",
    },
    {
      icon: <ChartSpline size={32} className="text-rose-400" />,
      title: "Realtime Analytics",
      desc: "Traffic, errors & performance metrics in one dashboard.",
      colSpan: "col-span-1",
    },
    {
      icon: <Blocks size={32} className="text-blue-500" />,
      title: "One-Click Integrations",
      desc: "Stripe, S3, Resend, and 50+ services.",
      colSpan: "col-span-1",
    },
    {
      icon: <DollarSign size={32} className="text-green-500" />,
      title: "Usage-Based Pricing",
      desc: "Only pay for what you use — scale without surprise costs.",
      colSpan: "col-span-1",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-10 py-16 md:py-28 px-6">
        <motion.div
          className="flex flex-col items-center max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-slate-50 text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight"
            variants={itemVariants}
          >
            Everything you need to{" "}
            <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent ">
              launch
            </span>{" "}
            — nothing you don’t.
          </motion.h1>
          <motion.p
            className="text-slate-300 text-base md:text-lg mt-6 max-w-2xl text-center"
            variants={itemVariants}
          >
            DeployForge bundles your backend, infrastructure, and deployment
            into one modern platform — no plugins, no YAML, no DevOps.
          </motion.p>

          <motion.div
            className="mt-8 mb-4 w-16 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.colSpan} relative p-6 md:p-8 border border-slate-700 bg-slate-800/30 backdrop-blur-sm rounded-xl group overflow-hidden hover:border-slate-600 hover:bg-slate-800/50 transition-colors duration-300`}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Fixed gradient class */}
              <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-red-500 via-orange-400 to-yellow-500 transition-opacity duration-300"></div>

              <motion.div className="mb-4">{feature.icon}</motion.div>

              <h3 className="text-xl md:text-2xl text-slate-100 font-bold mb-3 leading-snug">
                {feature.title}
              </h3>

              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Features;
