import "../styles/global.css";
import Nav from "../components/Nav";
import Provider from "../components/Provider";
export const metadata = {
  title: "Promptopia",
  description: "Dsicover & Share AI promopts",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">

      <body className="app">
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
