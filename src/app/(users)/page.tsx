
import AboutUsItems from "./aboutUs/AboutUsItems";

export const metadata = {
 title: "کافه و رستوران میم | Cafe Restaurant mim",
 description: "کافه و رستوران میم با محیطی زیبا در خیابان لاکانی رشت آماده پذیرایی شما عزیزان می باشد ، امیدواریم لحظات خوبی را کنار هم داشته باشیم"
}

export async function getBlogs() {
  const { data } = await Http.get("/articles");
  const filteredBlog = data.filter((blog : any) => blog.publish === true);
  return filteredBlog;
}

const HomePage = async () => {
  const blogs = await getBlogs();
  return (
    <>
      <main className="min-h-screen">
        <Slider />
        <section className="container">
          <QuickAccess />
          <Menus />
          <AboutUsItems > </AboutUsItems>
          <BlogsList blogs={blogs} />
        </section>
        <AboutUS />
        <ImageGallery />
      </main>
    </>
  );
};

export default HomePage;
