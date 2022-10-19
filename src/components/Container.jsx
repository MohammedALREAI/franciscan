export function Container({className, ...props}) {
  return (
    <div
      className={`lg:px-8" mx-auto max-w-7xl px-4 sm:px-6 ${className}`}
      {...props}
    />
  );
}
