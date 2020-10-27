import { Row, Col } from "reactstrap";
import ProductsDigital from "../../icons/products-digital";
import { CategoryView } from "../../interfaces/categoryView";
import { FaChevronLeft } from "react-icons/fa";
import React from "react";
import Link from "next/link";

interface Props {
    categories: CategoryView[],
}

export default function StaticMenu(props: Props) {
    return <React.Fragment>
        {props.categories.map((category, index) =>
            <Link href={"/shop?category=" + category.id} as={"/shop?category=" + category.id}>
                <a>
                    <Row className={"index-static-menu-row split-bottom" + (index === 0 ? " first" : "") + (index === props.categories.length - 1 ? " last" : "")}>
                        <Col xs={2} className="text-right">
                            <ProductsDigital />
                        </Col>
                        <Col xs={8} className="text-right">
                            {category.faName}
                        </Col>
                        <Col xs={2}>
                            <FaChevronLeft fontSize="10px" color="#a2a2a2" />
                        </Col>
                    </Row>
                </a>
            </Link>
        )}
    </React.Fragment>
}