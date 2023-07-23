import ArticlesList from "../components/Forum/ArticlesList";
import Footer from "../components/Forum/Footer";
import Header from "../components/Forum/Header";
import NavBar from "../components/Forum/NavBar";

function ForumPage() {
    return (
        <div className='bg-slate-100'>
            <div className='bg-white shadow'>
                <Header />
            </div>
            <div className='mt-2 w-full '>
                <div className='container flex flex-col justify-center ps-28'>
                    <NavBar />
                    <ArticlesList />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default ForumPage;
