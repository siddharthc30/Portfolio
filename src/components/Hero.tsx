export function Hero() {
  return (
    <section className="pt-6 pb-10 sm:pt-10 sm:pb-14">
      <div className="flex flex-col gap-4">

        {/* Name */}
        <h1
          className="text-3xl sm:text-3xl font-semibold tracking-tight text-foreground
                     animate-fade-up [animation-fill-mode:both]"
        >
          Sai Siddharth Cilamkoti
        </h1>

        {/* Role / title */}
        <p
          className="text-base sm:text-lg font-normal text-muted
                     animate-fade-up [animation-fill-mode:both] [animation-delay:130ms]"
        >
         Backend & Applied AI Engineer | Building and Learning how mordern AI systems work
        </p>

        {/* Short bio */}
        <p
          className="text-sm sm:text-base text-muted leading-relaxed
                     animate-fade-up [animation-fill-mode:both] [animation-delay:260ms]"
        >
          Recent MS CS Graduate | AI Systems & LLM Optimization |
          Building scalable production systems and energy-efficient AI solutions
        </p>

      </div>
    </section>
  );
}
