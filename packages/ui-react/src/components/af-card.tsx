type Props = {
  children: React.ReactNode;
};
export function AFCard({ children }: Props) {
  return (
    <div className="af-p-5 af-bg-white af-border af-border-fuchsia-600 af-rounded-lg af-w-max">
      {children}
    </div>
  );
}
