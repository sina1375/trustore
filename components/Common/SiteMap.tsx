import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import { SiteMapItemView } from "../../interfaces/siteMapItemView";
import { FaAngleLeft } from "react-icons/fa";
import React from "react";


interface Props {
    siteMapItemView: SiteMapItemView[],
}

export default function SiteMap(props: Props) {
    return <Container>
        <Row className="d-flex flex-nowrap overflow-auto">
            <Col xs="auto" className="site-map-title pr-1 pr-sm-3 pl-1 pl-sm-3">
                <span>شما اینجا هستید:</span>
            </Col>
            {props.siteMapItemView.map((siteMapItem, index) =>
                index !== props.siteMapItemView.length - 1 ?
                    <React.Fragment>
                        <Col xs="auto" className={"pl-0" + (index === 0 ? " pr-1 pr-sm-3" : " pr-0")}>
                            <Link href={siteMapItem.url} as={siteMapItem.url}>
                                <a>
                                    <span className="site-map-item">{siteMapItem.title}</span>
                                </a>
                            </Link>
                        </Col>
                        <Col xs="auto" className="pr-1 pl-1 d-flex align-items-center">
                            <span className="site-map-item"><FaAngleLeft /></span>
                        </Col>
                    </React.Fragment>
                    :
                    <Col xs="auto" className="pr-0">
                        <span className="site-map-item active">{siteMapItem.title}</span>
                    </Col>
            )}
        </Row>
    </Container>
}

export function CreateSiteMap(
    categoryID?: number,
    categoryTitle?: string,
    parentID?: number,
    parentTitle?: string,
    categoryKindID?: number,
    categoryKindTitle?: string,
    productID?: number,
    productTitle?: string,
) {

    var siteMap: SiteMapItemView[] = [];

    const homeSiteMap: SiteMapItemView = {
        title: "خانه",
        url: "/",
    }
    siteMap = [...siteMap, homeSiteMap];

    if (categoryTitle && categoryID) {
        const categorySiteMap: SiteMapItemView = {
            title: categoryTitle,
            url: "/shop?category=" + categoryID,
        }
        siteMap = [...siteMap, categorySiteMap];
    }

    if (parentID && parentTitle) {
        const categoryKindSiteMap: SiteMapItemView = {
            title: parentTitle,
            url: "/shop?parent=" + parentID,
        }
        siteMap = [...siteMap, categoryKindSiteMap];

        if (categoryKindID && categoryKindTitle) {
            const categoryKindSiteMap: SiteMapItemView = {
                title: categoryKindTitle,
                url: "/shop?parent=" + parentID + "&categoryKind=" + categoryKindID,
            }
            siteMap = [...siteMap, categoryKindSiteMap];
        }
    }

    if (productID && productTitle) {
        const categoryKindSiteMap: SiteMapItemView = {
            title: productTitle,
            url: "/products/" + productID,
        }
        siteMap = [...siteMap, categoryKindSiteMap];
    }

    return siteMap;
}