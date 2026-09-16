import React, { useEffect, useState } from 'react';
import BlogWithSidebarData from '../../jsonData/BlogWithSidebarData.json';
import SingleBlogSideBar from './SingleBlogSideBar';
import ReactPaginateComponent from 'react-paginate'; // Renamed import

// VITE CJS INTEROP WORKAROUND: Safely extract the default executable component 
const ReactPaginate = ReactPaginateComponent.default || ReactPaginateComponent;

// SAFE FALLBACK IMPORTS (Handles mixed default or named exports)
import * as SearchW from '../widgets/SearchWidget';
import * as RecentW from '../widgets/RecentPostWidget';
import * as CategoryW from '../widgets/CategoryDataListWidget';
import * as GalleryW from '../widgets/GalleryWidget';
import * as ArchivesW from '../widgets/ArchivesWidget';
import * as SocialW from '../widgets/SocialWidget';
import * as TagsW from '../widgets/TagsWidget';

import { useNavigate, useParams } from 'react-router-dom';

const SearchWidget = SearchW.default || SearchW.SearchWidget || (() => null);
const RecentPostWidget = RecentW.default || RecentW.RecentPostWidget || (() => null);
const CategoryDataListWidget = CategoryW.default || CategoryW.CategoryDataListWidget || (() => null);
const GalleryWidget = GalleryW.default || GalleryW.GalleryWidget || (() => null);
const ArchivesWidget = ArchivesW.default || ArchivesW.ArchivesWidget || (() => null);
const SocialWidget = SocialW.default || SocialW.SocialWidget || (() => null);
const TagsWidget = TagsW.default || TagsW.TagsWidget || (() => null);

const BlogWithSideBarContent = () => {

    // Pagination 
    const navigate = useNavigate();
    const { page } = useParams();

    const currentPageNumber = Number(page) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(3);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogWithSidebarData.slice(startIndex, endIndex);

    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
        navigate(`/blog-with-sidebar?page=${selectedPage}`);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(BlogWithSidebarData.length / itemsPerPage);

    return (
        <>
            <div className="blog-area full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-item-box">
                                    {currentBlogData.map(blog =>
                                        <SingleBlogSideBar blog={blog} key={blog.id} />
                                    )}
                                </div>
                                
                                {/* This will now reliably render through Vite's bundler layers */}
                                <ReactPaginate
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
                                    forcePage={currentPage - 1}
                                />
                            </div>

                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostWidget />
                                    <CategoryDataListWidget />
                                    <GalleryWidget />
                                    <ArchivesWidget />
                                    <SocialWidget />
                                    <TagsWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogWithSideBarContent;
