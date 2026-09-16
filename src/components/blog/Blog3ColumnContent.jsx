import React, { useEffect, useState } from 'react'; // FIXED: Added useState here
import ReactPaginateComponent from 'react-paginate'; // FIXED: Renamed to apply Vite interop fix
import BlogColumnData from '../../jsonData/BlogColumnData.json'
import SingleBlog3Column from './SingleBlog3Column';
import { useNavigate, useParams } from 'react-router-dom';

// VITE CJS INTEROP WORKAROUND: Safely extract the default component function
const Pagination = ReactPaginateComponent.default || ReactPaginateComponent;

const Blog3ColumnContent = () => {

    // Pagination 
    const navigate = useNavigate();
    const { page } = useParams();

    // Set initial page from URL
    const currentPageNumber = Number(page) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(6);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogColumnData.slice(startIndex, endIndex);

    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);

        // Update the URL dynamically
        navigate(`/blog-3-column?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(BlogColumnData.length / itemsPerPage);

    return (
        <>
            <div className="blog-area blog-grid-colum default-padding">
                <div className="container">
                    <div className="row">
                        {currentBlogData.map(blog =>
                            <div className="col-lg-4 col-md-6 mb-50" key={blog.id}>
                                <SingleBlog3Column blog={blog} />
                            </div>
                        )}
                    </div>
                    <Pagination
                        previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                        nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                        breakLabel={'...'}
                        pageCount={totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination text-center'}
                        activeClassName={'active'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        forcePage={currentPage - 1} // Syncs active CSS class state when clicking page buttons
                    />
                </div>
            </div>
        </>
    );
};

export default Blog3ColumnContent;
