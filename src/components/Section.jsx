import clsx from "clsx";

export function Section({title, children, ...restProps}) {
  return (
    <section
      {...restProps}
      className={clsx(
        "w-full md:border-l  md:border-zinc-100  md:dark:border-zinc-700/40",
        restProps.className||""
      )}
    >
      <div className="">
        <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <div className="">{children}</div>
      </div>
    </section>
  );
}
