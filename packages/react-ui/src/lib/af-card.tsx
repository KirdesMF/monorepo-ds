type Props = {
  children: React.ReactNode;
};
export function AFCard({ children }: Props) {
  return <div className="p-5 bg-white border border-af-pink-500 rounded-lg w-max">{children}</div>;
}
