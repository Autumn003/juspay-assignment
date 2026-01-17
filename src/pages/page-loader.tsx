export default function PageLoader() {
  return (
    <div className="flex flex-col gap-7 w-full animate-pulse">
      <section className="flex gap-7 md:flex-row flex-col">
        <div className="flex flex-col gap-7 h-full w-full">
          <div className="h-30 w-full rounded-2xl bg-primary-light"></div>
          <div className="h-30 w-full rounded-2xl bg-primary-light"></div>
        </div>
        <div className="flex flex-col gap-7 h-full w-full">
          <div className="h-30 w-full rounded-2xl bg-primary-light"></div>
          <div className="h-30 w-full rounded-2xl bg-primary-light"></div>
        </div>

        <div className="w-full rounded-2xl p-6 bg-primary-light"></div>
      </section>
      <section className="flex gap-7 md:flex-row flex-col">
        <div className="h-64 md:w-3/4 w-full rounded-2xl bg-primary-light"></div>
        <div className="h-64 md:w-1/4 w-full rounded-2xl bg-primary-light min-w-50"></div>
      </section>
    </div>
  );
}
