export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="flex min-h-full items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800">
            DevConnect
          </h1>

          <p className="mt-2 text-slate-500">
            Connect. Collaborate. Grow.
          </p>
        </div>

        {/* Authentication Card */}
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl text-center font-semibold text-slate-800">
            {title}
          </h2>

          <p className="mt-2 text-center text-slate-500">
            {subtitle}
          </p>

          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}