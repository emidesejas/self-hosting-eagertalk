export const Slide = () => {
  return (
    <section>
      <section data-auto-animate>
        <h3>Results</h3>
      </section>
      <section data-auto-animate>
        <h3>Results</h3>

        <div className="flex flex-row justify-center">
          <img src="/images/switch.png" alt="Results graph" className="h-[500px]" />
        </div>
      </section>

      <section data-auto-animate>
        <h3>Results</h3>

        <div className="flex flex-row justify-center">
          <img src="/images/stress_test.jpg" alt="Results graph" className="h-[500px]" />
        </div>
      </section>

      <section data-auto-animate>
        <h3>Results</h3>

        <div className="flex flex-row justify-center">
          <img src="/images/cloudflare_cache.png" alt="Results graph" className="h-[500px]" />
        </div>
      </section>

      <section data-auto-animate>
        <h3>Results</h3>

        <div className="flex flex-row justify-center items-center">
          <img src="/images/last_analytics.png" alt="Results graph" className="h-fit"/>
        </div>
      </section>
    </section>
  );
};
