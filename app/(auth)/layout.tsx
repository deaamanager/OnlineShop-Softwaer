export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-full max-w-7xl mx-auto ">
      {children}
    </div>
  );
}
