import { useSelector } from "react-redux";
import Avatar from "../commons/Avatar";
import { BsFillLockFill,BsFillPinAngleFill } from "react-icons/bs";

function ArticlesList() {
    const articles = useSelector((state) => {
        return state.article.articles;
    });
    const colors = useSelector((state) => {
        return state.article.randomColors;
    });

    return (
        <>
            <table className='table-auto  border-separate border-spacing-y-1'>
                <thead className='text-slate-500'>
                    <tr>
                        <th className='text-left'>Topics</th>
                        <th>Category</th>
                        <th>Users</th>
                        <th>Replies</th>
                        <th>Views</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article) => {
                        var tags = [];
                        if (article.tags.length > 0) {
                            article.tags.forEach((tag, index) => {
                                tags.push(
                                    <small
                                        className={`${article.tagsBg[index]} mx-2 rounded p-1 text-gray-200`}
                                    >
                                        {tag}
                                    </small>
                                );
                            });
                        }

                        var avatars = [];
                        article.users.forEach((user, index) => {
                            avatars.push(
                                <Avatar
                                    user={user}
                                    letter={user[0]}
                                    classnames={colors[user[0]]}
                                />
                            );
                        });

                        return (
                            <tr
                                className={`gap-2  p-2 text-slate-700  even:bg-slate-100 ${article.guide ? "bg-red-200":"odd:bg-white"}`}
                                key={article.id}
                            >
                                <td className='flex cursor-pointer flex-col gap-4 px-6 py-4 '>
                                    <div className='flex items-center gap-2'>
                                        {article.private && <BsFillLockFill />}
                                        {article.guide && <BsFillPinAngleFill />}
                                        <p className='text-lg'>
                                            {article.label}
                                        </p>
                                    </div>
                                    {article.description && <small className="text-xs text-slate-500 w-1/2">{article.description}</small>}
                                    <div>{tags}</div>
                                </td>
                                <td className='text-left text-slate-700'>
                                    <div className='flex items-center gap-2 '>
                                        {!article.guide && <div
                                            className={`h-2 w-2 rounded-full ${colors.A}`}
                                        ></div>}
                                        {article.category}
                                    </div>
                                </td>
                                <td className='relative'>
                                    <div className='flex justify-center gap-1'>
                                        {avatars}
                                    </div>
                                </td>
                                <td className='text-center text-slate-700'>
                                    {article.replies}
                                </td>
                                <td className='text-center text-slate-500'>
                                    {article.views}
                                </td>
                                <td className='text-center text-slate-500'>
                                    {article.activity}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ArticlesList;
