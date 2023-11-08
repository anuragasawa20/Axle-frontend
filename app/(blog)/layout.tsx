import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import FixedLayout from "../(landing)/sections/FixedLayout";

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="sticky top-4 z-50">
        <NavBar />
      </div>
      {children}
      <Footer />
      <FixedLayout/>
    </main>
  );
};

export default BlogLayout;
