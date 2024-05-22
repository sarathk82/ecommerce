import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function Paginate({ pages, page, keyword = '', isAdmin = false }) {

    if (keyword) {
        keyword = new URLSearchParams(keyword).get('search');
    }

    return (pages > 1 && (

        <Pagination >
            {[...Array(pages).keys()].map(x => (
                <LinkContainer
                    key={x + 1}
                    to={!isAdmin ?
                        `/?keyword=${keyword}&page=${x + 1}`
                        : `/admin/products/?keyword=${keyword}&page=${x + 1}`
                    }

                >
                    <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>)
    );
}

export default Paginate;