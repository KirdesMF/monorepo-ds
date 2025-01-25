import { MySelect, MySelectItemGroup } from './components/select-test';
import { AFButton } from './lib/button/af-button';

export default function App() {
  return (
    <main className="min-h-dvh grid place-items-center">
      <MySelect />
      <MySelectItemGroup />
      <AFButton className="bg-af-blue-500">Click me</AFButton>
    </main>
  );
}
