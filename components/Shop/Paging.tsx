import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { UrlObject } from "url";
import { useRouter } from "next/router";

interface Props {
    pagesCount: number,
    pageIndex: number,

    getUrl: (page: number) => UrlObject,
}

export function Paging(props: Props) {
    const router = useRouter();

    const [pageCount, setPageCount] = useState(props.pagesCount);
    const [pageIndex, setPageIndex] = useState(props.pageIndex);

    const [, setStartPage] = useState<number>();
    const [endPage, setEndPage] = useState<number>();

    const [pageCounter, setPageCounter] = useState<number>();
    const [pages, setPages] = useState<number[]>([]);

    function initializePaging() {
        if (pageCounter && endPage) {
            if (!pages.includes(pageCounter)) {
                setPages([...pages, pageCounter]);

                if (pageCounter + 1 <= endPage) {
                    setPageCounter(pageCounter + 1);
                }
            }
        }
    }

    useEffect(() => {
        initializePaging();
    }, [pageCounter, endPage]);

    useEffect(() => {
        const _pageCount = props.pagesCount;
        const _pageIndex = props.pageIndex;
        const _startPage = _pageIndex - 5 <= 0 ? 1 : _pageIndex - 5;
        const _endPage = _pageIndex + 5 >= _pageCount ? _pageCount : _pageIndex + 5

        setPageCount(_pageCount);
        setPageIndex(_pageIndex);
        setStartPage(_startPage);
        setEndPage(_endPage);
        setPageCounter(_startPage);
        setPages([]);
    }, [props.pagesCount, props.pageIndex])

    function nextPage() {
        if (pageIndex !== pageCount) {
            router.push(props.getUrl(pageIndex + 1));
        }
    }

    function previousPage() {
        if (pageIndex !== 1) {
            router.push(props.getUrl(pageIndex - 1));
        }
    }

    return <Container className="shop-paging-container p-3">
        <Row>
            <Col xs="auto">
                <span onClick={() => previousPage()} className={"shop-paging-change-page pt-0 pb-0 pl-1 pr-1" + (pageIndex === 1 ? " disabled" : "")}>
                    <FaChevronRight className="shop-paging-change-page-icn" />
                </span>
            </Col>
            {pages.map(i =>
                <Col xs="auto" className={"shop-paging-page-number" + (i === pageIndex ? " active" : "")}>
                    <Link href={props.getUrl(i)}>
                        <a>
                            {i}
                        </a>
                    </Link>
                </Col>
            )}
            <Col xs="auto">
                <span onClick={() => nextPage()} className={"shop-paging-change-page pt-0 pb-0 pl-1 pr-1" + (pageIndex === pageCount ? " disabled" : "")}>
                    <FaChevronLeft className="shop-paging-change-page-icn" />
                </span>
            </Col>
        </Row>
    </Container>
}