import Form from "../components/signup/Form";
import Header from "../components/signup/Header";
import PrivacyDetails from "../components/signup/PrivacyDetails";
import Survey from "../components/signup/Survey";
import Socials from "../components/signup/Socials";
import Categories from "../components/signup/Categories";

function SignupPage() {
    return (
        <div className='bg-slate-100'>
            <div className='container mx-auto font-worksans '>
                <div className='flex items-center justify-end gap-2 pt-10 text-xs'>
                    <p className='text-slate-500'>Already have an Account? </p>
                    <button className='bg-slate-100 px-2 py-1 font-semibold text-slate-500'>
                        Sign In
                    </button>
                </div>
                <div className='relative grid justify-items-center'>
                    <Header />
                    <Form />
                    <PrivacyDetails />
                    <Survey />
                    <Socials />
                    <Categories />
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
