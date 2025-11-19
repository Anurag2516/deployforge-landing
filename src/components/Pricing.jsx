const Pricing = () => {
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
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent ">
              LaunchFlow
            </span>{" "}
            handles your backend — you just ship.
          </motion.h1>
          <motion.p
            className="text-slate-300 text-base md:text-lg mt-6 max-w-2xl text-center"
            variants={itemVariants}
          >
            Stop wiring servers, auth, and databases manually. LaunchFlow turns
            your repository into a fully deployed product in minutes.
          </motion.p>

          <motion.div
            className="mt-8 mb-4 w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Pricing;
